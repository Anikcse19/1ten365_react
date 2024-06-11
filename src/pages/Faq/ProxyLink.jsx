import axios from "axios";
import { useEffect, useState } from "react";
import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";
import base_url from "../../utils/baseUrl";

const ProxyLink = () => {
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
  return (
    <AdminLayout>
      <div className="bg-white bg-green-20 mx-auto lg:w-[90%] min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 lg:px-0 my-2 mx-auto">
          <div className="col-span-2 md:border border-gray-400 md:p-5">
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

            <div
              className="my-10"
              dangerouslySetInnerHTML={{ __html: configDatas[10]?.value }}
            />
          </div>

          {/* right grid */}
          <div className="col-span-1 bg-gray-100"></div>
        </div>

        <div className="w-[90%] mx-auto md:w-full mb-2">
          <FooterSection />
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProxyLink;
