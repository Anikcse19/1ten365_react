import axios from "axios";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";
import base_url from "../../utils/baseUrl";

const CustomerServicePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}/types`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => setServices(res?.data?.types));
  }, []);

  return (
    <AdminLayout>
      <div className="bg-white">
        <div className="lg:w-[90%] mx-auto bg-white p-5 my-5 lg:my-10">
          <div className="w-[100%]">
            <img
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              src={images.custServicePoster}
              alt="poster"
            />
          </div>
          <div className="text-center">
            <p className="mt-2 text-base md:text-2xl font-bold">
              1ten365 CUSTOMER SERVICE LIST
            </p>
          </div>

          <div className="w-full relative overflow-x-auto overflow-y-auto max-w-screen  max-h-screen mt-5 border-2 border-orange-700 ">
            <table className="w-full">
              <thead className="sticky top-0 text-sm lg:text-base bg-gray-400 w-full">
                <tr className="border-b border-orange-700 ">
                  <th scope="col" className=" px-5 lg:px-10 py-3">
                    ID NO
                  </th>
                  <th scope="col" className=" px-5 lg:px-10 py-3">
                    NAME
                  </th>
                  <th scope="col" className=" px-5 lg:px-10 py-3">
                    AGENT
                  </th>
                  <th scope="col" className=" px-5 lg:px-10 py-3">
                    APP
                  </th>
                  <th scope="col" className=" px-5 lg:px-10 py-3">
                    PHONE NUMBER
                  </th>
                </tr>
              </thead>
              <tbody>
                {services?.map((service) => {
                  return (
                    <tr
                      key={service.id}
                      className="border-b border-black text-[14px]"
                    >
                      <td className="px-3 py-3 text-center">{service?.id}</td>
                      <td className="px-3 py-3 text-center">{service?.name}</td>
                      <td className="px-3 py-3 text-center">
                        Customer Service
                      </td>
                      <td className="px-3 py-3 text-center flex justify-center items-center ">
                        <IoLogoWhatsapp
                          onClick={() => {
                            window.open(
                              `https://wa.me/${service?.wa_link},'_blank`
                            );
                          }}
                          className="text-green-600 text-lg font-bold cursor-pointer"
                        />
                      </td>
                      <td className="px-3 py-3 text-center">
                        {service?.phone}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-2">
        <FooterSection />
      </div>
    </AdminLayout>
  );
};

export default CustomerServicePage;
