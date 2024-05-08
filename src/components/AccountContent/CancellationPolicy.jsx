import React from "react";

const CancellationPolicy = () => {
  return (
    <>
      <div className="flex h-[450px] flex-col py-8 max-[1023px]:border rounded-md max-[1023px]:w-[450px] max-[768px]:w-[340px] max-[1023px]:h-[600px] max-[768px]:ml-3 mng_pfl_crd">
        <div className="flex flex-col px-10 py-6">
          <h2 className="text-xl font-semibold text-red-500">
            Cancellation Policy:
          </h2>

          <div className="flex flex-col  mt-7 rounded-md h-[400px] px-4 ">
            <span className="font-inter text-red-500 font-medium mt-7 ">
              Eligibility for Cancellations:
            </span>
            <p className="font-inter mt-1">
              {" "}
              You can cancel your order <strong className="font-inter">within 24 hours</strong> of
            placing it. After this timeframe, your order may have already been
            processed and cannot be cancelled.
            </p>
            <span className="font-inter text-red-500 font-medium mt-8">
            How to Cancel?
            </span>
            <p className="font-inter mt-1">
              {" "}
              To cancel your order, please contact our customer support team as soon
            as possible. Provide your order number and relevant details. We will
            assist you in cancelling your order.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancellationPolicy;
