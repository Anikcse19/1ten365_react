
import { IoMenuOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { images } from "../../config";
import FAQSection from "./shared/FAQSection";
import FooterSection from "./shared/Footer/FooterSection";
import RandomMasterAgent from "./shared/RandomMasterAgent";
import ServiceCard from "./shared/ServiceCard";


const CustomerServiceHome = () => {
  const router=useLocation()
  const navigate=useNavigate()
  const AgentDatas = [
    {
      title: "এজেন্ট লিষ্টঃ",
      link:'/admins/agent',
      des: "এজেন্ট দের সাথে লেনদেন এর আগে 1TEN নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে",
      img: images.agentPoster,
    },
    {
      title: "সুপার এজেন্ট লিষ্টঃ",
      link:'/admins/superAgent',
      des: "এজেন্ট দের সাথে লেনদেন এর আগে 1TEN নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে",
      img: images.superAgentPoster,
    },
    {
      title: "সাব এডমিন লিষ্টঃ",
      link:'/admins/subAdmin',
      des: "এজেন্ট দের সাথে লেনদেন এর আগে 1TEN নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে",
      img: images.subAdminPoster,
    },
  ];

  const faqs = [
    { title: "1TEN তে কিভাবে লেনদেন করবেন?", url: "/faq/howToTransaction", img: images.transacPoster },
    { title: "কিভাবে একাউন্ট খুলবেন?", url: "/faq/openAccount", img: images.openAccPoster },
    {
      title: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?",
      url: "/faq/condition",
      img: images.conditionPoster,
    },
  ];

  return (
    <div className="lg:w-[76%] mx-auto px-5 lg:px-0 py-5">
      <div className="flex flex-col lg:flex-row">
        <div className=" lg:w-[70%]">
          <div className="border border-slate-300">
            {/* Main Poster  */}
            <div className="border-b border-slate-300">
              <div className="relative">
                <img
                onClick={()=>{navigate('/admins/customerService')}}
                  src={images.custServicePoster}
                  alt="Next Image"
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full cursor-pointer"
                />
                <div className="bg-black bg-opacity-[30%] w-full h-[30px] lg:h-[45px] absolute left-0 top-0 flex items-center px-5">
                  <p className="uppercase text-white text-sm lg:text-base">
                    In the spotlight 
                  </p>
                </div>

                <Link
                  to="/admins/agent"
                  className="absolute -bottom-1.5 left-5 bg-white border border-slate-500 px-2 text-xs hover:bg-red-700 hover:text-white uppercase"
                >
                  Agent
                </Link>
              </div>

              <div className="p-5">
                <h1 className=" lg:text-[30px] font-semibold hover:text-red-700">
                  কাস্টমার সার্ভিস লিষ্ট
                </h1>

                <h2 className=" mt-4 lg:mt-10 lg:text-[25px] text-center font-semibold">
                  1TEN CUSTOMER SERVICE LIST
                </h2>

                <div>
                  <button onClick={()=>{navigate('/admins/customerService')}} className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400">
                    Read More...কাস্টমার সার্ভিস লিষ্ট
                  </button>
                </div>
              </div>
            </div>

            {/* Service List */}
            <div className="p-5">
              <div className="grid lg:grid-cols-3 items-center gap-4">
                {AgentDatas.map((item, i) => (
                  <ServiceCard item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:w-[30%] lg:border-r">
          <div className="bg-black bg-opacity-[10%] w-full h-[45px] px-5 flex justify-center items-center gap-x-2">
            <IoMenuOutline />
            <p className="uppercase ">More News</p>
            <IoMenuOutline />
          </div>
          <div className="flex flex-col">
            {faqs.map((item, i) => (
              <div key={i} className="flex items-center gap-x-5 border-t p-5">
                <img
                onClick={()=>{router(`${item?.url}`)}}
                  src={item.img}
                  alt="Image"
                  width={80}
                  height={50}
                />

                <div>
                  <div className="flex items-center gap-x-2">
                    <Link
                      to="/admins/agent"
                      className=" bg-white border border-slate-500 px-1 text-xs hover:bg-red-700 hover:text-white uppercase"
                    >
                      Agent
                    </Link>
                    <p className="text-xs">24.03.24</p>
                  </div>

                  <Link to={`${item?.url}`} className="mt-1.5 font-semibold hover:text-red-600 text-xs cursor-pointer">
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="border p-5 mt-1">
            <img
            onClick={()=>{router('/faq/openAccount')}}
              src={images.openAccPoster}
              alt="Image"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>

      {/* Random Master Agent */}
      <RandomMasterAgent />

      {/* FAQ Section */}
      <div className="flex flex-col lg:flex-row border">
        <div className="lg:w-[70%]">
          <FAQSection />
        </div>
        <div className="lg:w-[30%] bg-gray-100"></div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default CustomerServiceHome;
