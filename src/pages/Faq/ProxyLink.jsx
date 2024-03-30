import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";


const ProxyLink = () => {
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
      <div className="bg-white bg-green-20 mx-auto lg:w-[76%] min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 lg:px-0 my-2 mx-auto">
          <div className="col-span-2 md:border border-gray-400 md:p-5">
          <p className="text-4xl md:text-4xl   mb-8">
              1ten প্রক্সি লিঙ্ক
            </p>
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

        <div className="w-[90%] mx-auto md:w-[76%] my-2">
          <FooterSection />
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProxyLink;
