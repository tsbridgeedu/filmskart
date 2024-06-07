import React from 'react';

const CancellationPolicy = () => {
  return (
    <div className="flex items-center w-full h-[full] xl:h-[70vh] scrollbar">
    <div className="h-fit max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl  text-red-500 font-medium mb-16">Cancellation Policy:</h1>
      <div className="space-y-4 ml-8 text-gray-700">
       
        <h2 className="text-lg  text-red-500 font-semibold">Eligibility for Cancellations:</h2>
        <p>
        You can cancel your order <b>within 24 hours</b> of placing it. After this timeframe, your order may have already been processed and cannot be cancelled.
                </p>
        <h2 className="text-lg text-red-500 font-semibold">How to Cancel?</h2>
        <p>
        To cancel your order, please contact our customer support team as soon as possible. Provide your order number and relevant details. We will assist you in cancelling your order.
        </p>
        
      
      </div>
    </div>
    </div>
  );
};

export default CancellationPolicy;
