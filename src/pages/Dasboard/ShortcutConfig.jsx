import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../../components/shared/Dashboard/DashboardLayout";
import base_url from "../../utils/baseUrl";

const token = localStorage.getItem("token");
const ShortcutConfig = () => {
  const editor = useRef(null);
  const [text1, setText1] = useState(""); // for how to open acc
  const [text2, setText2] = useState(""); // for agent list
  const [text3, setText3] = useState(""); // for how many types of agent
  const [switch1, setSwitch1] = useState(false);
  const [allConfigs, setAllConfigs] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}/config`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res?.data?.message == "success") {
          setAllConfigs(res?.data?.data);

          setText1(res?.data?.data[0]?.value);
          setText2(res?.data?.data[1]?.value);
          setText3(res?.data?.data[2]?.value);
        }
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5">
        {/* how to open acc */}
        <div className="flex flex-col gap-2">
          <div className="text-2xl text-gray-900 font-bold flex items-center gap-2">
            <p>How to open account</p>
          </div>

          <textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="outline-none border border-gray-800 px-3 py-2"
            name=""
            id=""
            cols="100"
            rows="5"
          ></textarea>
          <div>
            <button
              onClick={() => {
                axios
                  .post(
                    `${base_url}/config/create`,
                    { name: "how_to_open_acc", value: text1 },
                    {
                      headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then((res) => {
                    if (res?.data?.message == "success") {
                      toast.success("Updated", {
                        position: "top-center",
                      });
                    }
                  });
              }}
              className="bg-gray-900 px-12 py-2 rouned text-white font-bold"
            >
              Save
            </button>
          </div>
        </div>

        {/* agent list text */}
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-gray-900 font-bold">Agent List</p>
          <textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="outline-none border border-gray-800 px-3 py-2"
            name=""
            id=""
            cols="100"
            rows="5"
          ></textarea>
          <div>
            <button
              onClick={() => {
                axios
                  .post(
                    `${base_url}/config/create`,
                    { name: "agent_list", value: text2 },
                    {
                      headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then((res) => {
                    if (res?.data?.message == "success") {
                      toast.success("Updated", {
                        position: "top-center",
                      });
                    }
                  });
              }}
              className="bg-gray-900 px-12 py-2 rouned text-white font-bold"
            >
              Save
            </button>
          </div>
        </div>

        {/* how many types of agent */}
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-gray-900 font-bold">
            How many types of Agent
          </p>
          <textarea
            value={text3}
            onChange={(e) => setText3(e.target.value)}
            className="outline-none border border-gray-800 px-3 py-2"
            name=""
            id=""
            cols="100"
            rows="5"
          ></textarea>
          <div>
            <button
              onClick={() => {
                axios
                  .post(
                    `${base_url}/config/create`,
                    { name: "how_many_types_of_agent", value: text3 },
                    {
                      headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  )
                  .then((res) => {
                    if (res?.data?.message == "success") {
                      toast.success("Updated", {
                        position: "top-center",
                      });
                    }
                  });
              }}
              className="bg-gray-900 px-12 py-2 rouned text-white font-bold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ShortcutConfig;
