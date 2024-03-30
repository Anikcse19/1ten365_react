import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";


const ConditionPage = () => {
  return (
    <AdminLayout>
      <div className="bg-white w-full min-h-screen">
        <div className="p-2 md:p-12">
          <div className=" md:border border-gray-400  md:p-10">
          <p className="text-2xl md:text-4xl font-bold mb-6">
              একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
            </p>

            <div className="w-[100%] mx-auto md:p-5 my-3">
              <img
                width={400}
                height={200}
                className="w-[100%]"
                src={images.conditionPoster}
                alt="poster"
              />
            </div>
           
           
            <div className="border-l-4 border-gray-600 mt-12 px-3">
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
                    বেটফেয়ার এর নিয়ম এবং স্বিদ্ধান্ত অনুযায়ী সব কিছু হয়। এই
                    বেট সাইটে বেট করতে হলে আপনাকে বেটফেয়ার এবং 1Ten র
                    ম্যানেজমেন্ট যে কোন স্বিদ্ধান্ত আপনাকে বিনা শর্তে মেনে নিতে
                    হবে।
                  </p>
                </span>
                <span className="text-lg">
                  <p className="font-bold">ইউজার এর জন্য নির্দেশনা এবং শর্তঃ</p>

                  <p>
                    ** প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর
                    কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময়
                    এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। ** সকাল ৯ঃ৪৫
                    এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা
                    পাঠায় – অই টাকার দায়ভার 1Ten নিবে না।
                  </p>
                  <p>
                    ** বিকাশ/নগদ এ টাকা পাঠানোর ২ ঘন্টার মধ্যে এজেন্ট এর সাথে
                    যোগাযোগ করে পয়েন্ট নিতে হবে। ২ ঘন্টা পরে – টাকা কাউন্ট করা
                    হবে না।
                  </p>
                </span>
                <br />
              </div>
            </div>

            <div className="text-lg my-5">
              <span>
                <p>
                  ** প্রতিদিন বাংলাদেশ সময় ৯ঃ৩০ মিনিট এ – একাউন্ট এ কত পয়েন্ট
                  আছে – তার একটা স্ক্রীনশট রাখতে হবে। যদি আপনি পয়েন্ট এর হিসাব
                  না বুঝেন – তাহলে এই তথ্য আপনাকে সাহায্য করবে।
                </p>
                <p>
                  ** এজেন্ট ইউজার এর অনুমতি ব্যাতীত কোন পয়েন্ট ডিপোজিট বা
                  উইথড্র করলে – সঙ্গে সঙ্গে এজেন্ট কে অভিযোগ করতে হবে – যদি
                  এজেন্ট উত্তর না দেয় – তাহলে তার সুপার এজেন্ট কে অভিযোগ করতে
                  হবে। যদি সুপার এজেন্ট উত্তর না দেয় – তাহলে এডমিন কে অভিযোগ
                  করতে হবে।
                </p>
                <p>
                  ** এজেন্ট যদি ভুল করে কোন পয়েন্ট ডিপোজিট করে ফেলে – তাহলে
                  ইউজার অই পয়েন্ট দিয়ে কোন ভাবেই বেট ধরতে পারবেন না। যদি
                  পয়েন্ট দিয়ে বেট ধরে ফেলেন – এজেন্ট বা 1Ten ম্যানেজমেন্ট এর
                  যে কোন স্বিদ্ধান্ত ইউজার কে মেনে তে নিতে হবে।
                </p>
                <p>
                  ** এজেন্ট এর সাথে আপনার হোয়াটসাপ বা মেসেঞ্জার এর তথ্যাদি এবং
                  সব লেনদেন এর তথ্যাদি অন্তত ১৫ দিন সংরক্ষন করতে হবে।
                </p>
                <p>
                  ** 1Ten তে হোয়াটসাপ ছাড়া আর কোন এপ দিয়ে লেনদেন করা যাবে
                  না।।
                </p>
                <p>
                  ** 1Ten এর একটি আইডি র জন্য একজন ইউজার একের অধিক হোয়াটসাপ
                  ব্যবহার করতে পারবে না।
                </p>
                <p>
                  ** 1Ten তে একটি হোয়াটসাপ দিয়ে একের অধিক আইডি খোলা যাবে না।
                </p>
                <p>
                  ** খেলা শেষ হয়ে গেলে – বেট স্যাটেল হতে অথবা পয়েন্ট ফেরত দিতে
                  ১৫ মিনিট থেকে ১ ঘন্টা সময় লাগে। তাই ১ ঘন্টার আগে কেন পয়েন্ট
                  ফেরত আসলো না এই বিষয়ে অভিযোগ করা যাবে না।
                </p>
                <p>
                  ** ইউজার কে ক্যাসিনো খেলার আগে ক্যাসিনো খেলার সব নিয়ম জানার
                  জন্য নির্দেশ দেয়া হচ্ছে।
                </p>
                <p>
                  ** সাইটে অন্য গেইম গুলো খেলার আগে – নিয়ম গুলো জেনে নিন। কোন
                  কিছু না বুঝলে ফেইসবুক গ্রুপে পোষ্ট করতে হবে।
                </p>
                <p>
                  ** মাঝে মাঝে বেটফেয়ার স্কোর ভুল দেখায় – এই জন্য ইউজারদের কে,
                  1Ten এর পাশাপাশি অন্য সাইট থেকেও স্কোর দেখার জন্য নির্দেশ
                  দেয়া হচ্ছে।
                </p>
                <p>
                  ** বেট করার পরে ইউজার দের বেট ম্যাচ হয়েছে কিনা তা দেখার জন্য
                  অনুরোধ করা হলো। বেট ম্যাচ না হলে পরে সেই বেট ক্যান্সেল হয়ে
                  যায়।
                </p>
                <p>
                  ** খেলা শেষ হয়ে গেলে – বেট স্যাটেল হতে অথবা পয়েন্ট ফেরত দিতে
                  ১৫ মিনিট থেকে ১ ঘন্টা সময় লাগে। কিছু কিছু ক্ষেত্রে এই সময় ২৪
                  ঘন্টা পর্যন্ত যেতে পারে।
                </p>
                <p>
                  ** পয়েন্ট এর হিসাব এর কোন অভিযোগ যদি বেটফেয়ার কে করা হয়,
                  তাদের দেয়া সমাধান ইউজার কে মেনে নিতে হবে। কারন এজেন্ট এর এই
                  খানে কিছুই করার নেই।
                </p>
              </span>
              <span>
                <p className="font-bold text-lg">বেট ভয়েড বা বাতিলঃ</p>
                <p>
                  ** বেটফেয়ার বা 1Ten যে কোন বেট যে কোন সময়ে বাতিল করতে
                  পারে।
                </p>
                <p>
                  ** বেট বাতিল এর হাজার হাজার নিয়ম আছে। এই নিয়ম এর জন্য বেট
                  ভয়েড রুলস এর লিঙ্ক দেখতে হবে।
                </p>
                <p>** বেট বাতিল হলে – অই বেট এর লাভ লস কিছুই হবে না।</p>
                <p>
                  ** বেট কেন বাতিল হল – তার কারন আমরা জানার চেষ্টা করতে পারি –
                  1Ten বা বেটফেয়ার থেকে। কারন হিসাবে তারা যাই বলবে তাই ইউজার
                  কে মেনে নিতে হবে।
                </p>
              </span>
            </div>
            
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto ">
        <FooterSection/>
      </div>
    </AdminLayout>
  );
};

export default ConditionPage;
