import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../../config";
import AdminLayout from "../../components/shared/Layout/AdminLayout";

const AllFaq = () => {
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      title: "1ten365 সাইটের মেইন লিঙ্কঃ",
      // link:'www.velki.live'
    },
    {
      id: 2,
      title: "1ten365 সাইটের মেইন লিঙ্কঃ",
      // link:'www.nayaludis.com'
    },
    {
      id: 3,
      title: "1ten365 সাইটের প্রক্সী লিঙ্ক ১ঃ",
      // link:'www.velki365.live'
    },
    {
      id: 4,
      title: "1ten365 সাইটের প্রক্সী লিঙ্ক ২ঃ",
      // link:'www.velkiex123.live'
    },
  ];
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
              <div className="border-l-4 border-gray-600 mt-12">
                {links?.map((link) => (
                  <div
                    key={link?.id}
                    className="mx-3 py-1 flex justify-between items-center border-b border-gray-500"
                  >
                    <span className="font-bold">{link?.title}</span>
                    <span className="cursor-pointer font-bold hover:text-red-600 hover:underline">
                      {link?.link}
                    </span>
                  </div>
                ))}
                <div className="text-center mt-10">
                  <span className="text-base md:text-xl font-bold ">
                    ANROID APP LINKS: এন্ড্রয়েড এপ ডাউনলোড করতে এই লিঙ্ক এ ক্লিক
                    করুন
                  </span>
                  <br />
                  <span className="text-base md:text-xl font-bold text-red-600 cursor-pointer">
                    ডাউনলোড 1ten365 সাইটের এন্ড্রয়েড এপ
                  </span>
                </div>
              </div>
            </div>

            {/* right grid */}
            <div className="col-span-1 bg-gray-100"></div>
          </div>
        </div>
      </div>
      {/* proxylink end */}

      {/* grid all remain start*/}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center w-[80%] mx-auto">
        {/* compalin agent start */}
        <div>
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

                {/* proxy links */}
                <div className="border-l-4 border-gray-600 mt-12 px-3">
                  <div>
                    <h1 className="my-2 font-bold text-base md:text-xl">
                      এজেন্ট এর সাথে আপনার যে কোন ধরনের সমস্যা থাকতে পারে। তার
                      কিছু উদাহরন নিম্নে দেয়া হলোঃ
                    </h1>
                    <span className="my-2 font-medium">
                      ** এজেন্ট ঠিক মত ডিপোজিট বা উইথড্র দিচ্ছে না। <br />
                      ** এজেন্ট এর সকাল ১০ টা থেকে রাত ১০ টা পর্যন্ত কাজ করার
                      কথা। কিন্তু ঠিক মত করছে না। <br />
                      ** এজেন্ট ডিপোজিট এর টাকা নিয়েছে কিন্তু ঠিক মত ডিপোজিট
                      দিচ্ছে না। <br />
                      ** আপনার আইডি লক হয়ে গেছে আনলক করছে না।
                    </span>
                    <br />
                    <span className="mt-2 block font-bold text-base md:text-xl">
                      এই রকম নানা অভিযোগ আপনার থাকতে পারে এজেন্ট এর বিরুদ্ধে।
                    </span>
                  </div>
                </div>
                <div className="w-full mx-3">
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
        <div>
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
                <div className="border-l-4 border-gray-600 mt-12 px-3">
                  <div>
                    <h1 className="my-2 font-bold text-base md:text-xl">
                      একাউন্ট আপনি নিজে নিজে খুলতে পারবেন না। তাই একাউন্ট খোলার
                      আগে মনোযোগ দিয়ে পড়ুনঃ
                    </h1>
                    <span className="my-2 font-medium">
                      1ten365 তে একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে
                      একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং
                      উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন
                      তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা
                      দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তার বুঝতে হলে আপনার
                      নিম্বের তথ্য গুলো পড়া জরুরী।
                    </span>
                    <br />
                    <span className="mt-2 block font-bold text-base md:text-xl">
                      আমাদের এজেন্ট লিষ্ট দেখতে নিচের লিঙ্ক এ ক্লিক করুনঃ{" "}
                      <p className="text-red-600 font-bold text-base md:text-lg">
                        {/* https://allagentlist.com/ma.php */}
                      </p>
                    </span>
                  </div>
                </div>
                <div className="w-full mx-3">
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
        <div>
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
                <div className="border-l-4 border-gray-600 mt-12 px-3">
                  <div>
                    <h1 className="my-2 font-bold text-base md:text-xl">
                      অনলাইন এজেন্ট হবার আগে আপনি লোকাল এজেন্ট হবার নিয়ম গুলো
                      পড়ে নিনঃ
                    </h1>
                    <span className="my-2 font-medium">
                      ** অনলাইন এজেন্ট এর পয়েন্ট প্রাইস ফিক্সড ৯৩ টাকা করে।{" "}
                      <br />
                      ** ২ লক্ষ টাকা জমা দিতে হবে, যা অফেরত যোগ্য।
                      <br />
                      ** যদি কোম্পানীর বিকাশ – নগদ এজেন্ট ব্যবহার করেন – তাহলে
                      পয়েন্ট এর দাম হবে ৯৫ টাকা। <br />
                      ** অনলাইন এজেন্ট কোন ভাবেই নিজে বেট ধরতে পারবেন না। যদি
                      কোন ভাবে নিজে খেলেন, তাহলে অনতি বিলম্বে তাকে বাদ দেয়া হবে।
                    </span>
                    <br />
                  </div>
                </div>
                <div className="w-full mx-3">
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
      <div>
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

              <div className="border-l-4 border-gray-600 mt-12 p-1">
                <div>
                  <h1 className="my-2 font-bold text-base md:text-xl">
                    1Ten এর শর্ত এবং নিয়ম
                  </h1>
                  <p className="my-2 font-bold">
                    এই শর্ত গুলো না পড়ে আপনারা কখনোই একাউন্ট খুলবেন না!!
                  </p>
                  <span className="my-2 font-medium text-lg">
                    সকল সুপার এবং মাস্টার এজেন্ট এবং সকল ইউজার এই নিয়মের
                    অন্তর্গত।
                    <p>
                      ** ওয়েবসাইট টি যেহেতু বেটফেয়ার এর মাধ্যমে চলে – সেহেতু
                      বেটফেয়ার এর নিয়ম এবং স্বিদ্ধান্ত অনুযায়ী সব কিছু হয়।
                      এই বেট সাইটে বেট করতে হলে আপনাকে বেটফেয়ার এবং 1Ten র
                      ম্যানেজমেন্ট যে কোন স্বিদ্ধান্ত আপনাকে বিনা শর্তে মেনে
                      নিতে হবে।
                    </p>
                  </span>
                  
                  <br />
                </div>
              </div>
              <div className="w-full mx-3">
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
      <div>
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
              <div className="border-l-4 border-gray-600 mt-12 px-3">
                <div>
                  <h1 className="my-2 font-bold text-base md:text-xl">
                    বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিং এ কিভাবে
                    লেনদেন করবেন?
                  </h1>
                  <p className="my-2 font-bold">
                    ইউজার যখন এজেন্ট কে টাকা পাঠাবে এবং এজেন্ট যখন ইউজার কে টাকা
                    পাঠাবেঃ-
                  </p>
                  <span className="my-2 font-medium">
                    <ol>
                      <li>
                        * ইউজার যদি এজেন্টর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০
                        পয়েন্ট এর জন্য ক্যাশ ইন বা সেন্ড ম্যানি করবে ১০২০ টাকা।
                      </li>
                      <li>
                        * ইউজার যদি এজেন্টের বিকাশ এজেন্ট এ টাকা পাঠায় ১০
                        পয়েন্টের জন্য ক্যাশ আউট করবে ১০০০ টাকা।
                      </li>
                      <li>
                        * এজেন্ট যদি ইউজার এর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০
                        পয়েন্টের জন্য এজেন্ট ক্যাশ ইন করবে ১০০০ টাকা।
                      </li>
                      <li>
                        * এজেন্ট যদি ইউজার এর বিকাশ এজেন্ট এ টাকা পাঠায় ১০
                        পয়েন্ট এর জন্য ক্যাশ আউট করবে ৯৮০ টাকা।
                      </li>
                    </ol>
                  </span>
                  <br />
                </div>
              </div>
              {/* online pay */}
              
              <div className="w-full mx-3">
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
            <div className="border-l-4 border-gray-600 mt-12 px-3">
              <div>
                <h1 className="my-2 font-bold text-base md:text-xl">
                  ফেসবুক লিঙ্ক:
                </h1>
                <span className="my-2 font-medium">
                  <p>
                    1Ten এর ১ টাই অফিসিয়াল ফেসবুক পেইজ আছে যেটা তে আপনি লাইক
                    দিয়ে রাখতে পারেনঃ
                  </p>
                  <p>পেইজ লিঙ্ক হলঃ</p>
                  <p>
                    1Ten এর ১ টাই অফিসিয়াল ফেসবুক গ্রুপ আছে যে টা তে আপনি জয়েন
                    করতে পারেনঃ
                  </p>
                  <p>ফেইসবুক গ্রুপ হলঃ</p>
                </span>
                <br />
                
              </div>
            </div>
            <div className="w-full mx-3">
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
      {/*fbgroup end */}
      </div>
      {/* grid all remain start*/}

    

      
    </AdminLayout>
  );
};

export default AllFaq;
