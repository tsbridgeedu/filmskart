const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../server/public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'public/uploads')));

app.get('/', (req, res) => {
    res.send('home page');
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.EMAIL_PASS,
    },
    debug: true,
    logger: true
});

app.post('/send-email', upload.single('eventImage'), async (req, res) => {
    const { firstName, email, contactNumber, location, event_title, event_type, event_category, event_description, eventDate, eventTime } = req.body;
    const eventImage = req.file;

    const mailOptions = {
        from: email,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Event form Submission',
        text: `First Name: ${firstName}\nEmail: ${email}\nContact Number: ${contactNumber}\nLocation: ${location}\nEvent Title: ${event_title}\nEvent Type: ${event_type}\nEvent Category: ${event_category}\nEvent Description: ${event_description}\nEvent Date: ${eventDate}\nEvent Time: ${eventTime}`,
        attachments: eventImage ? [
            {
                filename: eventImage.originalname,
                path: eventImage.path
            }
        ] : [],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }else{
            res.status(200).send('Email sent: ' + info.response);
        }
    });

    transporter.close();
    
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

