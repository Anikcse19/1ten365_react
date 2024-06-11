import axios from "axios";
import { useEffect, useState } from "react";
import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";
import base_url from "../../utils/baseUrl";
import { useNavigate } from "react-router-dom";

const FbGroupLinkPage = () => {
  const [configDatas, setConfigDatas] = useState([]);
  const navigate = useNavigate();

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
          <div className=" md:border border-gray-400 md:p-10">
            <p className="text-2xl md:text-4xl font-bold ">
              1Ten এর ফেইসবুক গ্রুপ লিঙ্ক কোন টা?
            </p>
            <div className="w-[100%] mx-auto p-5 my-3">
              <img
                onClick={() => {
                  window.open("https://www.facebook.com/join1ten365");
                }}
                width={400}
                height={200}
                className="w-[100%] cursor-pointer"
                src={images.fbGroupPoster}
                alt="poster"
              />
            </div>

            <div
              className="my-10"
              dangerouslySetInnerHTML={{ __html: configDatas[7]?.value }}
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

export default FbGroupLinkPage;
