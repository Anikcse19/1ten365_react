import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";


const HowToAgentPage = () => {
  return (
    <AdminLayout>
      <div className="bg-white w-full min-h-screen">
        <div className="p-3 md:p-12">
          <div className=" md:border border-gray-400 md:p-10">
          <p className="text-2xl md:text-4xl font-bold">
              কিভাবে আমি 1Ten তে অনলাইন এজেন্ট হতে পারি?
            </p>
            <div className="w-[100%] mx-auto p-5 my-3">
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
                  অনলাইন এজেন্ট হবার আগে আপনি লোকাল এজেন্ট হবার নিয়ম গুলো পড়ে
                  নিনঃ
                </h1>
                <span className="my-2 font-medium">
                  ** অনলাইন এজেন্ট এর পয়েন্ট প্রাইস ফিক্সড ৯৩ টাকা করে। <br />
                  ** ২ লক্ষ টাকা জমা দিতে হবে, যা অফেরত যোগ্য।
                  <br />
                  ** যদি কোম্পানীর বিকাশ – নগদ এজেন্ট ব্যবহার করেন – তাহলে
                  পয়েন্ট এর দাম হবে ৯৫ টাকা। <br />
                  ** অনলাইন এজেন্ট কোন ভাবেই নিজে বেট ধরতে পারবেন না। যদি কোন
                  ভাবে নিজে খেলেন, তাহলে অনতি বিলম্বে তাকে বাদ দেয়া হবে।
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto ">
        <FooterSection />
      </div>
    </AdminLayout>
  );
};

export default HowToAgentPage;
