import { useEffect, useState } from "react";
import { FaThList } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../../config";
import base_url from "../../utils/baseUrl";

const RandomMasterAgent = () => {
  const [admins, setAdmins] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${base_url}/admins?type=এজেন্ট`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAdmins(data?.admins))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, []);

  return (
    <div className="border mt-1">
      <div className="flex justify-between items-center gap-3 py-4 px-5">
        <h1 className="text-lg font-semibold uppercase">RANDOM AGENT</h1>
        <div className="flex items-center">
          <button className="border px-4 p-1 flex items-center text-sm gap-x-1 uppercase bg-red-700 text-white">
            <IoGridSharp className="text-xs" /> Grid
          </button>
          <button className="border px-4 p-1 flex items-center text-sm gap-x-1 uppercase">
            <FaThList className="text-xs" /> List
          </button>
        </div>
      </div>

      <div className="bg-slate-200 h-[55px] flex items-center px-5">
        <button
          onClick={() => navigate("/admins/agent")}
          className="flex items-center uppercase font-semibold gap-x-1.5 border px-2.5 bg-red-700 hover:bg-red-500 py-1 text-white"
        >
          Agent <FaArrowRightLong />
        </button>
      </div>

      <div className="grid lg:grid-cols-4 items-center gap-4 p-5">
        {admins?.map((item, i) => (
          <div key={i} className="border pb-5">
            <div className="relative ">
              <img
                src={images.custServicePoster}
                alt="Image"
                width={1920}
                height={1080}
                className="object-cover w-full h-full"
              />

              <Link
                to=""
                className="absolute -bottom-2.5 left-5 bg-white border border-slate-500 px-2 py-[2px] text-xs hover:bg-red-700 hover:text-white uppercase"
              >
                Agent
              </Link>
            </div>

            <div className="px-2">
              <h2 className="font-semibold mt-7 hover:text-red-700">
                এজেন্ট এর তথ্য {item?.profile?.user_id}
              </h2>
              <div className="text-xs font-semibold text-slate-400 mt-2">
                ADMINISTRATOR
                <span className="font-normal ml-1">
                  {item?.profile?.created_at.slice(0, 10)}
                </span>
              </div>
              <div className="mt-5 text-center">
                এজেন্ট আইডিঃ {item?.profile?.user_id} <br /> হোয়াটসঅ্যাপ
                নাম্বারঃ <br />
                <span className="text-red-700 font-semibold">
                  {item?.profile?.phone}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomMasterAgent;
