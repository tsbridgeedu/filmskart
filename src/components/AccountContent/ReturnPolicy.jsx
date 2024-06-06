import React from "react";
import "../../index.css";

const ReturnPolicy = () => {
  return (
    <div className="flex flex-col py-8 w-full max-w-[600px] mx-auto border h-[600px] max-[1023px]:w-[450px] max-[768px]:w-[340px] max-[768px]:ml-3 mng_pfl_crd">
      <div className="flex flex-col px-10 py-6 h-full">
        <h2 className="text-xl font-semibold text-red-500">Return Policy:</h2>

        <div className="flex flex-col overflow-y-scroll mt-7 rounded-md h-[400px] px-4 border">
          <span className="font-inter text-red-500 font-medium mt-7">
            Eligibility for returns:
          </span>
          <p className="font-inter mt-1">
            To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Items such as perishable goods, personalized items, and gift cards are not eligible for return.
          </p>
          <span className="font-inter text-red-500 font-medium mt-8">
            Initiation of Returns:
          </span>
          <p className="font-inter mt-1">
            To initiate a return, please contact our customer support team within 7 days of receiving your order. Provide your order number and details about the product you would like to return. We will guide you through the return process.
          </p>
          <span className="font-inter text-red-500 font-medium mt-8">
            Return Shipping:
          </span>
          <p className="font-inter mt-1">
            Customers are responsible for the cost of return shipping, except in cases where the item received was defective or damaged. We recommend using a trackable shipping service and purchasing shipping insurance for high-value items. <strong className="font-inter">Filmskart</strong> is not liable for items lost or damaged during return shipping.
          </p>
          <span className="font-inter text-red-500 font-medium mt-8">
            Refunds:
          </span>
          <p className="font-inter mt-1">
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If your return is approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 3-5 business days.
          </p>
          <span className="font-inter text-red-500 font-medium mt-8">
            Exchanges:
          </span>
          <p className="font-inter mt-1">
            If you need to exchange an item for the same product or a different one, please contact our customer support team. We will assist you in processing the exchange.
          </p>
          <span className="font-inter text-red-500 font-medium mt-8">
            Non-Returnable Items:
          </span>
          <p className="font-inter mt-1 mb-5">
            Certain types of items cannot be returned, such as perishable goods, personalized items, and gift cards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;

