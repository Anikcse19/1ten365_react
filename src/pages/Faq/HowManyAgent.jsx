import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";


const HowManyAgent = () => {
  return (
    <AdminLayout>
      <div className="bg-white w-full min-h-screen">
        <div className="p-3 md:p-12">
          <div className=" md:border border-gray-400 md:p-10">
          <p className="text-2xl md:text-4xl font-bold">
          এজেন্ট কয় প্রকারঃ
            </p>
            <div className="w-[100%] mx-auto p-5 my-3">
              <img
                width={400}
                height={200}
                className="w-[100%]"
                src={images.howManyAgent}
                alt="poster"
              />
            </div>
            

            {/* proxy links */}
            <div className="border-l-4 border-gray-600 mt-12 px-3">
              <div className="text-lg md:text-2xl">
               <span className="font-bold inline">অনলাইন সুপার এজেন্টঃ </span>
               <p className="inline">
               সুপার এজেন্ট রা, ইউজার একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে দিতে পারেন। কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে - অভিযোগ বাটন এ ক্লিক করে সরাসরি সাব এডমিন কে জানাতে হবে। 
               </p>
              </div>
              <div className="text-lg md:text-2xl">
               <span className="font-bold inline">অনলাইন মাষ্টার এজেন্টঃ </span>
               <p className="inline">
               অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে - অভিযোগ বাটন এ ক্লিক করে সরাসরি সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে। বিস্তারিত জানতে এই লিঙ্ক এ ক্লিক করুন। 
               </p>
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

export default HowManyAgent;
