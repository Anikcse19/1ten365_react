import axios from "axios";
import { useEffect, useState } from "react";
import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";
import base_url from "../../utils/baseUrl";

const ComplainAgentPage = () => {
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
      <div className="bg-white w-full min-h-screen">
        <div className="p-3 md:p-12">
          <div className=" md:border border-gray-400 md:p-3 md:p-10">
            <p className="text-2xl md:text-4xl font-bold ">
              এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন?
            </p>
            <div className="w-[100%] mx-auto p-5 my-3">
              <img
                width={400}
                height={200}
                className="w-[100%]"
                src={images.complainCenter}
                alt="poster"
              />
            </div>

            <div
              className="my-10"
              dangerouslySetInnerHTML={{ __html: configDatas[9]?.value }}
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[76%] mx-auto ">
        <FooterSection />
      </div>
    </AdminLayout>
  );
};

export default ComplainAgentPage;
