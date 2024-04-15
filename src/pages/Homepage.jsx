import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { HiInformationCircle } from "react-icons/hi";

import { useNavigate } from "react-router-dom";
import { images } from "../../config";
import Logo from "../components/shared/Logo";
import MobileNav from "../components/shared/Navbar/MobileNav";
import Navbar from "../components/shared/Navbar/Navbar";
import base_url from "../utils/url";


export default function Home() {
  const [quickAgent, setQuickAgent] = useState({});
 
  const navigate=useNavigate()


  useEffect(() => {
    fetch(`${base_url}/quick-agent`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuickAgent(data?.quickagent);
      });
  }, []);

  return (
    <div className="bg-[#FBD900] pb-5 lg:py-10">
      <>
        <div className="hidden lg:block">
          <Logo />
          <Navbar />
        </div>
        <div className="flex lg:hidden justify-between items-center shadow-md px-4 py-2">
          <img onClick={()=>navigate('/adminHomePage')} className="cursor-pointer" width={120} height={90} src={images.logo} alt="" />
          <MobileNav />
        </div>
      </>

      {/* quick master agent number */}
      <div className="w-full my-2 ">
        <div className="w-[95%] md:w-[70%] bg-[#393939]  mx-auto rounded-md">
          {/* title */}
          <div className="w-full rounded-md bg-[#292929] p-1 md:p-4 flex items-center gap-3">
            <HiInformationCircle className="text-blue-500 text-2xl" />
            <p className="text-white font-semibold md:font-bold  text-lg md:text-2xl">
              Quick Master Agent Number
            </p>
          </div>
          {/* body */}
          <div className="flex justify-center  items-center w-full h-full bg-gray-600 py-3 md:py-16">
            <div className="p-1 md:p-3 bg-white">
              <div className="bg-gray-300 py-1 md:py-3 w-[250px] md:w-[300px] px-2">
                <div className="flex flex-col justify-center gap-2 ">
                  {/* agent id */}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">
                      Agent ID:
                    </span>
                    <span className="text-[#FF5F00] text-2xl font-bold">
                    {quickAgent?.input_id ? quickAgent?.input_id : "---" }
                    </span>
                  </div>
                  {/* what's app number */}
                  <div className="flex justify-between ">
                    <span className="cursor-pointer bg-green-400 p-1 ml-8">
                      <FaWhatsapp
                        onClick={() => {
                          window.open(
                            `https://wa.me/${
                              quickAgent?.profile?.wa_link
                                ? quickAgent?.profile?.wa_link
                                : quickAgent?.profile?.phone
                            },'_blank'`
                          );
                        }}
                        className="text-xl md:text-4xl text-white "
                      />
                    </span>
                    <span className="text-[#FF5F00] text-2xl font-bold">
                      {quickAgent?.profile?.wa_link
                        ? quickAgent?.profile?.wa_link
                        : quickAgent?.profile?.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* how to open account */}
      <div className="w-full my-2">
        <div className="w-[95%] md:w-[70%] bg-gray-600 mx-auto  rounded-md">
          {/* title */}
          <div className="w-full rounded-md bg-stone-800 p-1 md:p-4 flex items-center gap-3">
            <HiInformationCircle className="text-blue-500 text-2xl" />
            <p className="text-white font-semibold md:font-bold text-2xl">
              কিভাবে একাউন্ট খুলবেনঃ
            </p>
          </div>
          {/* body */}
          <div className=" bg-gray-600 px-2 md:px-5 py-2 md:py-12">
            <div className="w-full bg-white px-1 md:px-12 py-1 border border-orange-500">
              <p className="text-base md:text-xl text-center md:text-left">
                1ten এ একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে
                হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি
                যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন
                করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে
                লেনদেন করবেন তার বুঝতে হলে আপনার নিম্বের তথ্য গুলো পড়া জরুরী।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Agent List */}
      <div className="w-full my-2">
        <div className="w-[95%] md:w-[70%] bg-gray-600 mx-auto  rounded-md">
          {/* title */}
          <div className="w-full rounded-md bg-stone-800 p-1 md:p-4 flex items-center gap-3">
            <HiInformationCircle className="text-blue-500 text-2xl" />
            <p className="text-white font-semibold md:font-bold text-base md:text-xl">
              এজেন্ট লিস্টঃ
            </p>
          </div>
          {/* body */}
          <div className=" bg-gray-600 px-2 md:px-5 py-2  md:py-12">
            <div className="w-full bg-white px-1 md:px-12 py-1 border border-orange-500">
              <span className="text-base md:text-xl text-center md:text-left">
                একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট
                লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর
                মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ
                করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ
                করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন অথবা ফোন
                নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে পারবেন।
                হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল
                প্লে থেকে ইন্সটল করে নিন।<p onClick={()=>navigate('/admins/agent')} className="text-blue-600 underline text-center cursor-pointer"> অনলাইন মাষ্টার এজেন্ট লিস্টঃ</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* clasiification of agents */}
      <div className="w-full">
        <div className="w-[95%] md:w-[70%] bg-gray-600 mx-auto  rounded-md">
          {/* title */}
          <div className="w-full rounded-md bg-stone-800 p-1 md:p-4 flex items-center gap-3">
            <HiInformationCircle className="text-blue-500 text-2xl" />
            <p className="text-white font-semibold md:font-bold text-base md:text-xl">
              এজেন্ট কয় প্রকারঃ
            </p>
          </div>
          {/* body */}
          <div className=" bg-gray-600 px-1 md:px-5 py-1 md:py-12">
            <div className="w-full bg-white px-1 md:px-12 py-1 border border-orange-500 md:text-left">
              <span className="text-base md:text-xl">
                <p onClick={()=>navigate('/admins/superAgent')} className="text-blue-600 underline cursor-pointer">
                  অনলাইন সুপার এজেন্ট লিস্টঃ
                </p>
                সুপার এজেন্ট রা, ইউজার একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে
                দিতে পারেন। কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি এডমিন
                কে জানাতে হবে। উপরে মেনু তে এডমিন লিষ্ট দেয়া আছে।
                <p onClick={()=>navigate('/admins/agent')} className="text-blue-600 underline cursor-pointer">
                  অনলাইন মাষ্টার এজেন্ট লিস্টঃ
                </p>
                অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে
                পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি সুপার
                এজেন্ট এর কাছে অভিযোগ করতে হবে।
                <p onClick={()=>navigate('/faq/complainAgent')} className="text-blue-600 underline cursor-pointer">
                  বিস্তারিত জানতে এই লিঙ্ক এ ক্লিক করুন।
                </p>
              
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
