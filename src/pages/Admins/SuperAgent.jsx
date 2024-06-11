import axios from "axios";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { images } from "../../../config";
import Complain from "../../components/shared/Complain/Complain";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";
import base_url from "../../utils/baseUrl";

const SuperAgent = () => {
  const [adminType, setAdminType] = useState("");
  const [adminId, setAdminId] = useState("");
  const [searchedResult, setSearchedResult] = useState({});
  const [types, setTypes] = useState([]);
  const [subAdmins, setSubAdmins] = useState([]);

  const [userNotFound, setUserNotFound] = useState(false);
  const [currentSelected, setCurrentSelected] = useState({
    obj: {},
    status: false,
  });
  const router = useLocation();
  const [configData, setConfigData] = useState({});

  useEffect(() => {
    axios
      .get(`${base_url}/config`)
      .then((res) => setConfigData(res?.data?.data[13]));
    fetch(`${base_url}/admins/types`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTypes(data.types);
        setAdminType(data?.types[2]);
      });

    fetch(`${base_url}/admins?type=সাব এডমিন`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSubAdmins(data.admins));
  }, []);

  const handleAdminSearch = () => {
    setUserNotFound(false);
    setSearchedResult({});
    setCurrentSelected({
      obj: {},
      status: false,
    });
    axios
      .get(`${base_url}/admins/${adminId}?type=${adminType}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res?.data?.msg == "success") {
          setSearchedResult(res?.data?.admin);
        } else {
          setUserNotFound(true);
        }
      });
  };

  return (
    <AdminLayout>
      <div>
        {/*Site admin config  start*/}
        <div className="w-full mt-6 lg:mt-12 p-5">
          {/* agent/admin search start */}
          <div className=" lg:w-[90%] mx-auto bg-white flex flex-col justify-center md:items-center gap-5 p-5 ">
            <div>
              <p className="text-2xl lg:text-xl text-center font-semibold lg:font-bold">
                এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
              </p>
            </div>

            <div className="bg-gray-200 px-12 py-3 rounded-md shadow-lg flex flex-col justify-center md:items-center gap-3">
              <div className="flex flex-col ">
                <label htmlFor="" className="text-base lg:text-lg mb-1">
                  Agent Type:
                </label>
                <select
                  value={adminType}
                  onChange={(e) => setAdminType(e.target.value)}
                  className="outline-none border-2 w-full border-gray-500 rounded px-2 py-2 md:w-[320px]"
                >
                  {types?.map((type, i) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className="text-base lg:text-lg mb-1">
                  Agent ID:
                </label>
                <input
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  className="outline-none border-2 border-gray-500 rounded px-2 py-2 w-full md:w-[320px]"
                  type="number"
                />
              </div>
              <div>
                <button
                  onClick={handleAdminSearch}
                  className="bg-green-500 px-6 py-2 rounded text-white font-bold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* agent/admin search end */}

          {/* show Complain box start */}
          {currentSelected.status && (
            <div id="complain">
              <Complain
                from="superAgent"
                currentSelected={currentSelected}
                setCurrentSelected={setCurrentSelected}
              />
            </div>
          )}
          {/* show Complain box end */}

          {/* show search result start */}
          {userNotFound && (
            <div className="lg:w-[80%] mx-auto bg-white  p-5 my-10">
              <div className="text-center">
                <p className="text-base md:text-2xl font-bold my-3 ">
                  আপনি যে এজেন্ট খুজচ্ছেন তার নাম আমাদের লিষ্টে নেই
                </p>
                <p className="text-base md:text-lg font-bold my-3 ">
                  দয়া করে কাষ্টমার সার্ভিসে যোগাযোগ করুন।
                </p>
                <p
                  onClick={() => router("/admins/customerService")}
                  className="text-base md:text-xl font-bold my-3 text-red-600 hover:underline cursor-pointer"
                >
                  কাষ্টমার সার্ভিস এর নাম্বার গুলো পেতে এই লিঙ্ক এ ক্লিক করুন
                </p>
              </div>
            </div>
          )}

          {searchedResult?.id && (
            <div className="md:w-[80%] w-[90%] mx-auto bg-white  p-5 my-10">
              {/* show search admin details start*/}
              <p className="text-center text-base lg:text-lg font-bold mb-3">
                উনি 1ten365 এর একজন অনলাইন {searchedResult?.profile?.type}{" "}
                নাম্বার {searchedResult?.input_id}
              </p>
              <div className=" w-full border border-black flex flex-col p-2">
                {/* 1st row start */}
                <div className="w-full flex border border-black p-3 bg-blue-300">
                  <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                    <p className="text-black">
                      উনার {searchedResult?.profile?.type} আইডিঃ{" "}
                    </p>
                  </div>
                  <div className=" w-[50%] h-full flex justify-center items-center text-white">
                    <p className="text-black">{searchedResult?.input_id}</p>
                  </div>
                </div>
                {/* 1st row end */}

                {/* 2nd row start */}
                <div className=" w-full flex border border-black p-3 bg-blue-100">
                  <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                    <p className="text-black">উনার হোয়াটসঅ্যাপ নাম্বারঃ</p>
                  </div>
                  <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                    <IoLogoWhatsapp
                      onClick={() => {
                        window.open(
                          `https://wa.me/${searchedResult?.profile?.wa_link},'_blank'`
                        );
                      }}
                      className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                    />
                    <p className="text-black">
                      {searchedResult?.profile?.phone}
                    </p>
                  </div>
                </div>
                {/* 2nd row end */}
              </div>
              {/* show search admin details end*/}

              {/* show parent admin details start*/}
              {searchedResult?.super?.id && (
                <div>
                  <p className="text-center text-base lg:text-lg font-bold m-3">
                    এই 1ten365 এর অনলাইন {searchedResult?.profile?.type} এর
                    আপলাইনের তথ্যঃ
                  </p>
                  <p className="text-center text-base lg:text-lg  mb-3">
                    উপরের {searchedResult?.profile?.type} এর এর বিরুদ্ধে অভিযোগ
                    করতে হলে নিচের যে কোন নাম্বার এ হোয়াটসঅ্যাপ এ মেসেজ দিলেই
                    হবে
                  </p>
                  <div className=" w-full border border-black flex flex-col p-2">
                    {/* 1st row start */}
                    <div className="w-full flex border border-black p-3 bg-blue-300">
                      <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                        <p className="text-black px-1">
                          উনার {searchedResult?.super?.profile?.type} এর{" "}
                          {searchedResult?.super?.profile?.type} আইডিঃ{" "}
                        </p>
                      </div>
                      <div className=" w-[50%] h-full flex justify-center items-center text-white">
                        <p className="text-black">2</p>
                      </div>
                    </div>
                    {/* 1st row end */}

                    {/* 2nd row start */}
                    <div className=" w-full flex border border-black p-3 bg-blue-100">
                      <div className=" w-[50%] h-full flex justify-center items-center text-white border-r-2 border-black">
                        <p className="text-black px-1">
                          উনার {searchedResult?.super?.profile?.type} এর
                          হোয়াটসঅ্যাপ নাম্বারঃ
                        </p>
                      </div>
                      <div className=" w-[50%] h-full flex gap-3 justify-center items-center text-white">
                        <IoLogoWhatsapp
                          onClick={() => {
                            window.open(
                              `https://wa.me/${searchedResult?.profile?.wa_link},'_blank'`
                            );
                          }}
                          className="text-base md:text-2xl text-green-500 font-bold cursor-pointer"
                        />
                        <p className="text-black">+90912345</p>
                      </div>
                    </div>
                    {/* 2nd row end */}
                  </div>
                </div>
              )}
              {/* show parent admin details end*/}
            </div>
          )}
          {/* show search result end */}

          {/* show complain start */}
          {/* <div className="w-[80%] mx-auto bg-white  p-5 my-10">
        <p className="text-center text-base lg:text-lg font-bold mb-3">
            উনি 1ten365 এর একজন অনলাইন {complain?.type} নাম্বার {complain?.input_id}
          </p>
        </div> */}
          {/* show complain end */}

          {/* poster start */}

          <div className="lg:w-[80%] mx-auto my-10">
            <img
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              src={images.superAgentPoster}
              alt="poster"
            />
          </div>
          {/* poster end */}

          {/* user alert start*/}
          <div className="md:w-[80%] w-[100%] mx-2 md:mx-auto bg-white border-l-4 border-gray-500  p-5 my-10">
            <div dangerouslySetInnerHTML={{ __html: configData?.value }} />
            <p className="text-center mt-5 text-lg lg:text-2xl font-bold">
              1ten365 Super Agent List
            </p>
          </div>
          {/* user alert end*/}

          {/* admin table start */}
          {subAdmins?.map((admin) => (
            <div
              className="md:w-[80%] w-[100%]  md:mx-auto bg-white  p-5 my-10"
              key={admin?.input_id}
            >
              <div className="text-center">
                {admin?.super?.id ? (
                  <span className="text-center text-base md:text-xl">
                    এডমিন{" "}
                    <p className="text-lg md:text-2xl font-bold inline">
                      {admin?.super?.name}
                    </p>{" "}
                    এর অধীনে সাব-এডমিন{" "}
                    <p className="text-lg md:text-2xl font-bold inline">
                      {admin?.name}
                    </p>{" "}
                    এর অধীনে সর্বমোট সুপার এজেন্ট আছে {admin?.children?.length}{" "}
                    জন
                  </span>
                ) : (
                  <span className="text-center text-base md:text-xl">
                    সাব-এডমিন{" "}
                    <p className="text-lg md:text-2xl font-bold inline">
                      {admin?.name}
                    </p>{" "}
                    এর অধীনে সর্বমোট সুপার এজেন্ট আছে {admin?.children?.length}{" "}
                    জন
                  </span>
                )}
              </div>
              <div className="w-full relative overflow-x-auto overflow-y-auto max-w-screen  max-h-screen mt-5 border-2 border-orange-700 ">
                <table className="w-full">
                  <thead className="sticky top-0 text-base bg-gray-400 w-full">
                    <tr className="border-b border-orange-700 ">
                      <th
                        scope="col"
                        className="px-3 md:px-10 py-1 md:py-3 text-xs md:text-base "
                      >
                        ID NO
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-10 py-1 md:py-3 text-xs md:text-base "
                      >
                        NAME
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-10 py-1 md:py-3 text-xs md:text-base "
                      >
                        AGENT
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-10 py-1 md:py-3 text-xs md:text-base "
                      >
                        APP
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-10 py-1 md:py-3 text-xs md:text-base "
                      >
                        PHONE NUMBER
                      </th>
                      <th
                        scope="col"
                        className="px-3 md:px-10 py-1 md:py-3 text-xs md:text-base "
                      >
                        COMPALIN
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {admin?.children?.map((adminC) => {
                      return (
                        <tr
                          key={adminC.id}
                          className="border-b border-black text-[14px]"
                        >
                          <td className="px-3 py-3 text-center">
                            {adminC?.input_id}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {adminC?.name}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {adminC?.profile?.type}
                          </td>
                          <td className="px-3 py-3 text-center flex justify-center items-center ">
                            {/* {adminC?.profile?.wa_link} */}
                            <IoLogoWhatsapp
                              onClick={() => {
                                window.open(
                                  `https://wa.me/${adminC?.profile?.wa_link},'_blank`
                                );
                              }}
                              className="text-green-600 text-lg font-bold cursor-pointer"
                            />
                          </td>
                          <td className="px-3 py-3 text-center text-red-500  font-bold">
                            {adminC?.profile?.phone}
                          </td>
                          <td
                            onClick={() => {
                              setSearchedResult({});
                              setUserNotFound(false);
                              setCurrentSelected({
                                obj: {},
                                status: false,
                              });

                              window.scrollTo({
                                top: 500,
                                behavior: "smooth", // This smooth scrolls the page to the top
                              });

                              setCurrentSelected({
                                obj: adminC,
                                status: true,
                              });

                              setSearchedResult({});
                            }}
                            className="px-3 py-3 font-bold text-center cursor-pointer text-red-500 hover:underline "
                          >
                            অভিযোগ
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          {/* admin table end */}
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-2">
        <FooterSection />
      </div>
    </AdminLayout>
  );
};

export default SuperAgent;
