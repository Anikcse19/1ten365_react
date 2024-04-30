import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const DownlineListModal = ({ currentSelected, setCurrentSelected }) => {
  const [childs, setChilds] = useState(currentSelected.obj.children);

 
  return (
    <div
    style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className=" bg-[#fff] text-black px-5 pt-5 pb-10 w-[80vw] lg:w-[45vw]"
    >
        <div className="text-black font-bold text-xl mb-5 pb-4 border-b-2 border-gray-900 flex justify-between items-center">
        <p> Downline Agent List</p>
        <ImCross
          onClick={() =>
            setCurrentSelected({
              obj: {},
              status: false,
              from: "",
            })
          }
          className="cursor-pointer hover:bg-gray-300 hover:text-black hover:p-1"
        />
      </div>
      <div className="flex flex-col gap-2  justify-center text-black">
        {childs.map((child, i) => (
          <div key={i} className="flex gap-2 items-center pb-3 border-b border-gray-700">
            <span>
              <p className="inline">Name:</p>{" "}
              <p className="inline text-black font-bold text-lg">{`${child?.name} (Id: ${child?.id})`}</p>
            </span>
            <span>
              <p className="inline">WhatsApp:</p>{" "}
              <p
                onClick={() => {
                  window.open(
                    `https://wa.me/${child?.profile?.wa_link},'_blank`
                  );
                }}
                className="inline text-black font-bold hover:text-red-500 hover:underline cursor-pointer"
              >
                {child?.profile?.wa_link}
              </p>
            </span>
            <span>
              <p className="inline">Type:</p>{" "}
              <p className="inline text-black font-bold text-lg">{child?.profile?.type}</p>
            </span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default DownlineListModal;
