import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/shared/Dashboard/DashboardLayout";
import DownlineListModal from "../../components/shared/DownlineListModal";
import UplineListModal from "../../components/shared/UplineListModal";
import base_url from "../../utils/baseUrl";

const ViewAdmins = () => {
  const [currentSelected, setCurrentSelected] = useState({
    obj: {},
    status: false,
    from: "",
  });

  const [datas, setDatas] = useState([]);
  const [searchedDatas, setSearchedDatas] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedtype, setSelectedType] = useState("");
  const [trigger, setTrigger] = useState(false);
  const fetchData = () => {
    try {
      // const response =  fetch(
      //   `${base_url}/admins`,
      //   {
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",

      //     },
      //   }
      // );
      // const data =  response.json();

      // setDatas(data);

      axios
        .get(`${base_url}/admins`, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((res) => setDatas(res?.data?.admins));
    } catch (error) {
      console.log(error);
      toast.error(error, {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    fetchData();

    fetch(`${base_url}/admins/types`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTypes(data?.types);
      });
  }, [selectedtype]);

  const token = localStorage.getItem("token");
  const handleDelete = (adminId) => {
    try {
      const formData = new FormData();
      formData.append("id", adminId);
      axios
        .post(`${base_url}/admins/destroy`, formData, {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res?.data?.msg == "success") {
            toast.success("User Deleted");
            fetchData();
          }
        });
    } catch (error) {
      console.log(error);
      toast.error(error, {
        position: "top-right",
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="">
        <div className=" mx-auto md:px-4   md:p-5">
          <div className="items-start justify-between md:flex">
            <div className="max-w-lg">
              <h3 className="text-slate-800 text-xl font-bold sm:text-2xl">
                All Admins
              </h3>
            </div>
            <div className="mt-3 md:mt-0 flex items-center gap-x-5">
              <Link
                to="/dashboard/addAdmin"
                className=" px-2 lg:px-4 py-1 lg:py-2 text-white duration-150 lg:font-medium bg-slate-900 rounded-lg hover:bg-slate-700 md:text-sm"
              >
                +Add Admins
              </Link>
            </div>
          </div>

          {/* filter start */}

          <div className="flex items-center gap-3 mt-5">
            <select
              className="px-5 py-2 rounded-md outline-none border border-gray-800"
              onChange={(e) => {
                setSelectedType(e.target.value);
              }}
              name=""
              id=""
            >
              <option value="all">All</option>
              {types.map((type, i) => (
                <option className="px-5 py-2 rounded-md" value={type} key={i}>
                  {type}
                </option>
              ))}
            </select>
            <span
              onClick={() => {
                if (selectedtype == "all") {
                  fetchData();
                  setSearchedDatas([]);
                  return;
                }
                const filteredData = datas?.filter(
                  (data) => data?.profile?.type == selectedtype
                );
                setSearchedDatas(filteredData);
              }}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold cursor-pointer px-12 py-2 rounded-md"
            >
              Search
            </span>
          </div>
          {/* filter end */}
          <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto relative ">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-300 text-slate-800 font-medium border-b">
                <tr>
                  <th className="py-3 px-6 text-center">ID</th>
                  <th className="py-3 px-6 text-center">Name</th>
                  <th className="py-3 px-6 text-center">Phone</th>
                  <th className="py-3 px-6 text-center">Type</th>
                  <th className="py-3 px-6 text-center">WhatsApp Link</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-slate-800 divide-y">
                {!datas?.length > 0 && (
                  <tr className="animate-pulse text-center bg-gray-500 w-full h-[500px]">
                    <td colSpan={6} className="text-white font-bold">
                      Loading...
                    </td>
                  </tr>
                )}
                {searchedDatas.length > 0
                  ? searchedDatas?.map((item, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap ">
                          {item?.input_id}
                        </td>

                        <td className=" py-3 px-6 whitespace-nowrap">
                          <p> {item?.name}</p>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap   text-center">
                          <p>{item?.profile.phone}</p>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-center font-bold ">
                          {item?.profile.type}
                          <div className="flex flex-col items-center justify-center gap-3 my-2">
                            {item?.profile?.type == "এডমিন" ? (
                              <p></p>
                            ) : (
                              <span
                                onClick={() =>
                                  setCurrentSelected({
                                    obj: item,
                                    status: true,
                                    from: "upline",
                                  })
                                }
                                className="text-green-600 px-2 py-1 rounded-md  font-bold cursor-pointer flex gap-2 items-center"
                              >
                                <p>Upline</p> <FaAngleDoubleUp />
                              </span>
                            )}

                            {item?.profile?.type == "এজেন্ট" ? (
                              <p></p>
                            ) : (
                              <span
                                onClick={() =>
                                  setCurrentSelected({
                                    obj: item,
                                    status: true,
                                    from: "downline",
                                  })
                                }
                                className="text-red-600 px-2 py-1 rounded-md font-bold cursor-pointer flex gap-2 items-center"
                              >
                                <p>Downline</p>
                                <FaAngleDoubleDown />
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item?.profile?.wa_link}
                        </td>

                        <td className="text-right px-6 whitespace-nowrap">
                          <Link
                            to={`/dashboard/editAdmin/${item?.input_id}`}
                            className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(item?.id)}
                            className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  : datas?.map((item, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap ">
                          {item?.input_id}
                        </td>

                        <td className=" py-3 px-6 whitespace-nowrap">
                          <p> {item?.name}</p>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap   text-center">
                          <p>{item?.profile.phone}</p>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-center font-bold ">
                          {item?.profile.type}
                          <div className="flex flex-col items-center justify-center gap-3 my-2">
                            {item?.profile?.type == "এডমিন" ? (
                              <p></p>
                            ) : (
                              <span
                                onClick={() =>
                                  setCurrentSelected({
                                    obj: item,
                                    status: true,
                                    from: "upline",
                                  })
                                }
                                className="text-green-600 px-2 py-1 rounded-md  font-bold cursor-pointer flex gap-2 items-center"
                              >
                                <p>Upline</p> <FaAngleDoubleUp />
                              </span>
                            )}

                            {item?.profile?.type == "এজেন্ট" ? (
                              <p></p>
                            ) : (
                              <span
                                onClick={() =>
                                  setCurrentSelected({
                                    obj: item,
                                    status: true,
                                    from: "downline",
                                  })
                                }
                                className="text-red-600 px-2 py-1 rounded-md font-bold cursor-pointer flex gap-2 items-center"
                              >
                                <p>Downline</p>
                                <FaAngleDoubleDown />
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item?.profile?.wa_link}
                        </td>

                        <td className="text-right px-6 whitespace-nowrap">
                          <Link
                            to={`/dashboard/editAdmin/${item?.input_id}`}
                            className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(item?.id)}
                            className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {currentSelected.status && currentSelected.from == "upline" && (
        <div className="fixed left-[50%] top-[50%] md:left-[50%]  md:top-[50%] -translate-x-1/2 -translate-y-1/2">
          <UplineListModal
            currentSelected={currentSelected}
            setCurrentSelected={setCurrentSelected}
          />
        </div>
      )}

      {currentSelected.status && currentSelected.from == "downline" && (
        <div className="fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <DownlineListModal
            currentSelected={currentSelected}
            setCurrentSelected={setCurrentSelected}
          />
        </div>
      )}
    </DashboardLayout>
  );
};
export default ViewAdmins;
