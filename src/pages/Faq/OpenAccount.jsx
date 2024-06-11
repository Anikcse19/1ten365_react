import axios from "axios";
import { useEffect, useState } from "react";
import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";
import base_url from "../../utils/baseUrl";

const OpenAccount = () => {
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
      <div className="bg-white lg:w-[90%] mx-auto min-h-screen">
        <div className="p-5 my-2 lg:px-0">
          <div className=" md:border border-gray-400 md:p-5">
            <p className="mb-5 text-4xl md:text-4xl  ">
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

            <div
              className="my-10"
              dangerouslySetInnerHTML={{ __html: configDatas[5]?.value }}
            />
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto my-2">
        <FooterSection />
      </div>
    </AdminLayout>
  );
};

export default OpenAccount;
