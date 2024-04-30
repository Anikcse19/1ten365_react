import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../../config";
import AdminLayout from "../../components/shared/Layout/AdminLayout";
import base_url from "../../utils/url";

const AllFaq = () => {
  const navigate = useNavigate();
  const [configDatas,setConfigDatas]=useState([])

  const token=localStorage.getItem('token')

  useEffect(()=>{
    axios.get(`${base_url}/config`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(res=>setConfigDatas(res?.data?.data))
  },[]);
  return (
    <AdminLayout>
      {/* proxylink start */}
      <div>
        <div className="bg-white bg-green-20 mx-auto lg:w-[90%] min-h-screen">
          <div className="my-4 mx-5 md:mx-0">
            <h1 className="text-xl md:text-4xl font-bold">
              সাধারন প্রশ্ন উত্তর
            </h1>
          </div>
          <div className="gap-5 p-5 lg:px-0 my-2 mx-auto">
            <div className="  md:p-5">
              <p className="text-4xl md:text-4xl   mb-8">1ten প্রক্সি লিঙ্ক</p>
              <div>
                <img
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                  src={images.proxyLinkPoster}
                  alt="poster"
                />
              </div>

              {/* proxy links */}
              <div className="my-10" dangerouslySetInnerHTML={{ __html: configDatas[10]?.value }}/>
            </div>

            {/* right grid */}
            <div className="col-span-1 bg-gray-100"></div>
          </div>
        </div>
      </div>
      {/* proxylink end */}

      {/* grid all remain start*/}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center w-[80%] mx-auto mb-20">
        {/* compalin agent start */}
        <div className="border border-gray-900 px-4 py-2 relative">
          <div className="bg-white w-full min-h-screen">
            <div className="">
              <div className="">
                <p className="text-2xl md:text-xl font-bold ">
                  এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন?
                </p>
                <div className="my-3">
                  <img
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                    src={images.complainCenter}
                    alt="poster"
                  />
                </div>

                <div className="my-10" dangerouslySetInnerHTML={{ __html: configDatas[9]?.value }}/>
                <div className="w-[90%] mx-auto absolute bottom-2  ">
                  <button
                    onClick={() => navigate("/faq/complainAgent")}
                    className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400"
                  >
                    Read More...এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* complain agent end */}

        {/* oppen account start*/}
        <div className="border border-gray-900 px-4 py-2 relative">
          <div className="bg-white mx-auto min-h-screen">
            <div className=" lg:px-0">
              <div className=" ">
                <p className="mb-3 text-4xl md:text-xl font-bold ">
                  কিভাবে একাউন্ট খুলবেন?
                </p>
                <div className="mx-auto">
                  <img
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    src={images.openAccPoster}
                    alt="poster"
                  />
                </div>

                {/* proxy links */}
                <div className="my-10" dangerouslySetInnerHTML={{ __html: configDatas[5]?.value }}/>
                <div className="w-[90%] mx-auto absolute bottom-2  ">
                  <button
                    onClick={() => navigate("/faq/openAccount")}
                    className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400"
                  >
                    Read More...কিভাবে একাউন্ট খুলবেন?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* oppen account end*/}

        {/* howtoagent start*/}
        <div className="border border-gray-900 px-4 py-2 relative">
          <div className="bg-white w-full min-h-screen">
            <div className="">
              <div className=" ">
                <p className="text-2xl md:text-xl font-bold">
                  কিভাবে আমি 1Ten তে অনলাইন এজেন্ট হতে পারি?
                </p>
                <div className="my-3">
                  <img
                    width={400}
                    height={200}
                    className="w-[100%]"
                    src={images.beAgent}
                    alt="poster"
                  />
                </div>

                {/* proxy links */}
                <div className="my-10" dangerouslySetInnerHTML={{ __html: configDatas[8]?.value }}/>
                <div className="w-[90%] mx-auto absolute bottom-2  ">
                  <button
                    onClick={() => navigate("/faq/howToAgent")}
                    className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400"
                  >
                    Read More... কিভাবে আমি 1Ten তে অনলাইন এজেন্ট হতে পারি?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* howtoagent end*/}


         {/*condition start  */}
      <div className="border border-gray-900 px-4 py-2 relative">
        <div className="bg-white w-full min-h-screen">
          <div className="">
            <div className="">
              <p className="text-2xl md:text-xl font-bold">
                একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
              </p>

              <div className=" my-3">
                <img
                  width={400}
                  height={200}
                  className="w-[100%]"
                  src={images.conditionPoster}
                  alt="poster"
                />
              </div>

              <div className="my-10" dangerouslySetInnerHTML={{ __html: configDatas[6]?.value }}/>
              <div className="w-[90%] mx-auto absolute bottom-2  ">
                  <button
                    onClick={() => navigate("/faq/condition")}
                    className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400"
                  >
                    Read More...  একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
                  </button>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* condition end */}


      {/* howtotransac start */}
      <div className="border border-gray-900 px-4 py-2 relative">
        <div className="bg-white w-full min-h-screen">
          <div className="">
            <div className="">
              <p className="text-2xl md:text-xl font-bold ">
                1Ten তে কিভাবে লেনদেন করবেন?
              </p>
              <div className="my-3">
                <img
                  width={400}
                  height={200}
                  className="w-[100%]"
                  src={images.transacPoster}
                  alt="poster"
                />
              </div>

              {/* proxy links */}
              <div className="my-10" dangerouslySetInnerHTML={{ __html: configDatas[4]?.value }}/>
              {/* online pay */}
              
              <div className="w-[90%] mx-auto absolute bottom-2  ">
                  <button
                    onClick={() => navigate("/faq/howToTransaction")}
                    className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400"
                  >
                    Read More...   1Ten তে কিভাবে লেনদেন করবেন?
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* howtotransac end */}


      {/* fbgroup start */}

    <div className="border border-gray-900 px-4 py-2 relative">
    <div className="bg-white w-full min-h-screen">
        <div className="">
          <div className="">
          <p className="text-2xl md:text-xl font-bold ">
              1Ten এর ফেইসবুক গ্রুপ লিঙ্ক কোন টা?
            </p>
            <div className="my-3">
              <img
                width={400}
                height={200}
                className="w-[100%]"
                src={images.fbGroupPoster}
                alt="poster"
              />
            </div>
          

            {/* proxy links */}
            <div className="my-10" dangerouslySetInnerHTML={{ __html: configDatas[7]?.value }}/>
            <div className="w-[90%] mx-auto absolute bottom-2  ">
                  <button
                    onClick={() => navigate("/faq/fbGroup")}
                    className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400"
                  >
                    Read More...ফেসবুক লিঙ্ক:
                  </button>
                </div>
            
          </div>
        </div>
      </div>
    </div>
      {/*fbgroup end */}
      </div>
      {/* grid all remain start*/}

    

      
    </AdminLayout>
  );
};

export default AllFaq;
