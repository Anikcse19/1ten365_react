/* eslint-disable react-hooks/rules-of-hooks */

import axios from "axios";

import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";
import base_url from "../../utils/url";

const VerifyAdmin = () => {
  const [adminType, setAdminType] = useState("");
  const [adminId, setAdminId] = useState("");
  const [searchedResult, setSearchedResult] = useState({});
  const [types, setTypes] = useState([]);
  const [userNotFound, setUserNotFound] = useState(false);
  
  const navigate=useNavigate()

  useEffect(() => {
    fetch(`${base_url}/admins/types`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTypes(data.types);
        setAdminType(types[2]);
      });
  }, []);
  const handleAdminSearch = () => {
    setUserNotFound(false);
    setSearchedResult({});
    axios
      .get(`${base_url}/admins/${adminId}?type=${adminType}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res?.data?.msg == "success") {
          setSearchedResult(res?.data?.admin);
        } else {
          setUserNotFound(true);
        }
      });
  };
  return (
    <AdminLayout>
      <div>
        {/* agent/admin search start */}
        <div className="w-[80%] mx-auto bg-white flex flex-col items-center justify-center gap-3 lg:gap-6 py-5">
          <div>
            <p className="text-base lg:text-xl font-semibold lg:font-bold">
              এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
            <label htmlFor="" className="text-base lg:text-lg">
              এজেন্ট টাইপ
            </label>
            <select
              value={adminType}
              onChange={(e) => setAdminType(e.target.value)}
              className="outline-none border-2 border-black px-2 py-1 w-[220px]"
            >
              {types?.slice(1, 5)?.map((type,i) => (
                <option key={i} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
            <label htmlFor="" className="text-base lg:text-lg">
              এজেন্ট আইডি
            </label>
            <input
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="outline-none border-2 border-black px-2 py-1 w-[220px]"
              type="number"
            />
          </div>
          <div>
            <button
              onClick={handleAdminSearch}
              className="bg-blue-500 px-6 py-1 rounded text-white font-bold"
            >
              Submit
            </button>
          </div>
        </div>
        {/* agent/admin search end */}

        {/* show search result start */}
        {/* if user not found */}
        {userNotFound && (
          <div className="w-[80%] mx-auto bg-white  p-5 my-10">
            <div className="text-center">
              <p className="text-base md:text-2xl font-bold my-3 ">
                আপনি যে এজেন্ট খুজচ্ছেন তার নাম আমাদের লিষ্টে নেই
              </p>
              <p className="text-base md:text-lg font-bold my-3 ">
                দয়া করে কাষ্টমার সার্ভিসে যোগাযোগ করুন।
              </p>
              <p
                onClick={() => navigate("/admins/customerService")}
                className="text-base md:text-xl font-bold my-3 text-red-600 hover:underline cursor-pointer"
              >
                কাষ্টমার সার্ভিস এর নাম্বার গুলো পেতে এই লিঙ্ক এ ক্লিক করুন
              </p>
            </div>
          </div>
        )}
        {searchedResult?.id && (
          <div className="w-[80%] mx-auto bg-white  p-5 my-10">
            {/* show search admin details start*/}
            <p className="text-center text-base lg:text-lg font-bold mb-3">
              উনি 1ten365 এর একজন অনলাইন {searchedResult?.profile?.type} নাম্বার{" "}
              {searchedResult?.input_id}
            </p>
            <div className=" w-full border border-black flex flex-col p-2">
              {/* 1st row start */}
              <div className="w-full flex border border-black py-3 bg-blue-300">
                <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                  <p className="text-black">উনার এডমিন আইডিঃ </p>
                </div>
                <div className=" w-[50%] h-full flex justify-center items-center text-white">
                  <p className="text-black">{searchedResult?.input_id}</p>
                </div>
              </div>
              {/* 1st row end */}

              {/* 2nd row start */}
              <div className=" w-full flex border border-black py-3 bg-blue-100">
                <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                  <p className="text-black">উনার হোয়াটসঅ্যাপ নাম্বারঃ</p>
                </div>
                <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                  <IoLogoWhatsapp
                    onClick={() => {
                      window.open(
                        `https://wa.me/${searchedResult?.profile?.wa_link},'_blank'`
                      );
                    }}
                    className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                  />
                  <p className="text-black">{searchedResult?.profile?.phone}</p>
                </div>
              </div>
              {/* 2nd row end */}
            </div>

            {/* show search admin details end*/}

            {/* show parent admin details start*/}
            {searchedResult?.super?.id && (
              <div>
                <p className="text-center text-base lg:text-lg font-bold m-3">
                  এই 1ten365 এর অনলাইন সাব এডমিন এর আপলাইনের তথ্যঃ
                </p>
                <p className="text-center text-base lg:text-lg  mb-3">
                  উপরের সুপার এজেন্ট এর এর বিরুদ্ধে অভিযোগ করতে হলে নিচের যে কোন
                  নাম্বার এ হোয়াটসঅ্যাপ এ মেসেজ দিলেই হবে
                </p>
                <div className=" w-full border border-black flex flex-col p-2">
                  {/* 1st row start */}
                  <div className="w-full flex border border-black py-3 bg-blue-300">
                    <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                      <p className="text-black">উনার এডমিন এর এডমিন আইডিঃ </p>
                    </div>
                    <div className=" w-[50%] h-full flex justify-center items-center text-white">
                      <p className="text-black">2</p>
                    </div>
                  </div>
                  {/* 1st row end */}

                  {/* 2nd row start */}
                  <div className=" w-full flex border border-black py-3 bg-blue-100">
                    <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                      <p className="text-black">
                        উনার এডমিন এর হোয়াটসঅ্যাপ নাম্বারঃ
                      </p>
                    </div>
                    <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                      <IoLogoWhatsapp
                        onClick={() => {
                          window.open(
                            `https://wa.me/${searchedResult?.profile?.wa_link},'_blank'`
                          );
                        }}
                        className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                      />
                      <p className="text-black">+90912345</p>
                    </div>
                  </div>
                  {/* 2nd row end */}
                </div>
              </div>
            )}
            {/* show parent admin details end*/}
          </div>
        )}
        {/* show search result end */}
      </div>
      <div className="lg:w-[76%] mx-auto mt-12 mb-2">
        <FooterSection />
      </div>
    </AdminLayout>
  );
};

export default VerifyAdmin;
