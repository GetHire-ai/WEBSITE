import React from "react";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg sm:w-1/2 w-[90%] p-6">
        <div className="relative w-full justify-end">
          <button
            onClick={onClose}
            className="absolute top-[-20px] right-0 text-gray-600 text-[40px] hover:text-gray-900"
          >
            &times;
          </button>
          <div className="sm:max-w-[70%] py-[30px] max-w-[90%] w-full mx-auto">
              <h2 className="text-[40px] text-center font-[700] pb-0">
                Ready to hire 10X faster?
              </h2>
            <h2 className="text-[18px] font-[500] mb-[30px] text-[#899197] pt-[10px] leading-[26px] pb-3 text-center border-b border-gray-200">
              We’d love to connect
            </h2>
            <div className="flex flex-col gap-[24px]">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-[16px]">
                <input
                  type="text"
                  className="border outline-none rounded-[8px] py-[16px] px-[24px]"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="border outline-none rounded-[8px] py-[16px] px-[24px]"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex items-center gap-[30px] border outline-none w-full rounded-[8px] py-[16px] px-[24px]">
                IN +91
                <input
                  type="text"
                  className="border-none outline-none"
                  placeholder="Enter your contact number"
                />
              </div>
              <input
                type="text"
                className="border w-full outline-none rounded-[8px] py-[16px] px-[24px]"
                placeholder="Email"
              />
              <input
                type="text"
                className="border w-full outline-none rounded-[8px] py-[16px] px-[24px]"
                placeholder="Company Name"
              />
            </div>
          <div className="flex mt-[30px] justify-end border-t pt-3 border-gray-200">
            <button
              onClick={onClose}
              className="bg-gray-200 font-[600] text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 font-[600] rounded hover:bg-blue-600">
              Book Demo
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
