import { useState } from "react";
import { ImCross } from "react-icons/im";

const UplineListModal = ({ currentSelected, setCurrentSelected }) => {
  const [supers, setSupers] = useState(currentSelected.obj.super);

 
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className=" bg-[#fff] text-black px-5 pt-5 pb-10 w-[80vw] lg:w-[45vw]"
    >
      <div className="text-black font-bold text-xl mb-5 pb-4 border-b-2 border-gray-900 flex justify-between items-center">
        <p> Upline Agent List</p>
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
      <div className="flex flex-col justify-between gap-y-10">
        <div className="flex gap-2 items-center justify-center pb-3 border-b border-gray-600">
          <span>
            <p className="inline ">Name:</p>{" "}
            <p className="inline text-black font-bold text-lg">{`${supers?.name} (Id: ${supers?.id})`}</p>
          </span>
          <span>
            <p className="inline">WhatsApp:</p>{" "}
            <p
              onClick={() => {
                window.open(
                  `https://wa.me/${supers?.profile?.wa_link},'_blank`
                );
              }}
              className="inline text-black font-bold hover:text-red-500 hover:underline cursor-pointer"
            >
              {supers?.profile?.wa_link}
            </p>
          </span>
          <span>
              <p className="inline">Type:</p>{" "}
              <p className="inline text-black font-bold text-lg">{supers?.profile?.type}</p>
            </span>
        </div>
        {/* <div className="text-center">
        <button
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
          className="bg-[#5300F6] hover:bg-white hover:text-black px-12 py-2 rounded-md text-white font-bold"
          onClick={() =>
            setCurrentSelected({
              obj: {},
              status: false,
              from: "",
            })
          }
        >
          Close
        </button>
      </div> */}
      </div>
    </div>
  );
};

export default UplineListModal;
