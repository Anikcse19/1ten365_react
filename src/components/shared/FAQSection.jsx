import axios from "axios";
import { useEffect, useState } from "react";
import { FaThList } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../../config";
import base_url from "../../utils/baseUrl";

const FAQSection = () => {
  const navigate = useNavigate();

  const [configDatas, setConfigDatas] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${base_url}/config`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setConfigDatas(res?.data?.data));
  }, []);

  const faqs = [
    {
      title: "1TEN তে কিভাবে লেনদেন করবেন?",
      url: "/faq/howToTransaction",
      img: images.transacPoster,
    },
    {
      title: "কিভাবে একাউন্ট খুলবেন?",
      url: "/faq/openAccount",
      img: images.openAccPoster,
    },
    {
      title: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?",
      url: "/faq/condition",
      img: images.conditionPoster,
    },
    {
      title: "1TEN ফেইসবুক গ্রুপ লিঙ্ক কোন টা?",
      url: "/faq/fbGroup",
      img: images.fbGroupPoster,
    },
    {
      title: "কিভাবে আমি 1TEN এ এজেন্ট হতে পারি?",
      url: "/faq/howToAgent",
      img: images.beAgent,
    },
    {
      title: "এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন?",
      url: "/faq/complainAgent",
      img: images.complainCenter,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center py-4 px-5">
        <h1 className="text-xl font-bold uppercase">FAQ</h1>
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
        <button className="flex items-center uppercase font-semibold gap-x-1.5 border px-2.5 bg-red-700 py-1 text-white">
          1Ten FAQ <FaArrowRightLong />
        </button>
      </div>

      <div className="p-5">
        <div className="relative ">
          <img
            src={images.custServicePoster}
            alt="Image"
            onClick={() => navigate("/admins/customerService")}
            width={1920}
            height={1080}
            className="object-cover w-full h-full cursor-pointer"
          />

          <Link
            to=""
            className="absolute -bottom-2.5 left-5 bg-white border border-slate-500 px-2 py-[2px] text-xs hover:bg-red-700 hover:text-white uppercase"
          >
            Master Agent
          </Link>
        </div>

        <h2 className="mt-7 text-lg font-semibold">1TEN প্রক্সি লিঙ্ক</h2>

        <div
          className="my-10"
          dangerouslySetInnerHTML={{ __html: configDatas[10]?.value }}
        />
      </div>

      <div className="flex flex-col">
        {faqs.map((item, i) => (
          <div key={i} className="flex items-center gap-x-5 border-t p-5">
            <img src={item.img} alt="Image" width={140} height={100} />

            <div>
              <Link
                to=""
                className=" bg-white border border-slate-500 px-1.5 text-xs hover:bg-red-700 hover:text-white uppercase"
              >
                1TEN FAQ
              </Link>

              <Link
                to={`${item?.url}`}
                className="mt-2 lg:font-semibold hover:text-red-600 text-sm cursor-pointer block"
              >
                {item.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
