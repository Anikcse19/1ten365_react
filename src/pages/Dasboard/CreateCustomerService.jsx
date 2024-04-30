
import axios from "axios";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/shared/Dashboard/DashboardLayout";
import base_url from "../../utils/url";




const CustomService = () => {
  const [adminId, setAdminId] = useState();
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerWp, setCustomerWP] = useState("");
  const [quickAgent,setQuickAgent]=useState({})
  const router = useNavigate();

  const token=localStorage.getItem('token')

  useEffect(() => {
    axios.get(`${base_url}/quick-agent`).then(res=>setQuickAgent(res?.data?.quickagent))
    fetch(`${base_url}/admins?type=এজেন্ট`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdminId(data?.admins))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, []);



  const handleTypeChange = (event) => {
    const data = { id: Number(event.target.value) };

    fetch(`${base_url}/update-quick-agent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json()).then(data=>{
        if(data.msg=='success'){
          toast.success('Created new quick agent',{
            position:'top-right'
          })
        }else{
          toast.error(`${data.error}`,{
            position:'top-right'
          })
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        toast.error(error,{
          position:'top-right'
        })
      });
  };

  const handleCreateCustomerService = () => {
    

    const data = {
      name: customerName,
      phone: customerPhone,
      wa_link: customerWp,
    }; 

    axios
      .post(`${base_url}/types/create`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if(res?.data?.msg=='success'
        ){
          toast.success('created customer service')
          router('/admins/customerService')
        }
      });
  };
  const inputFieldSTyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring";
  return (
    <DashboardLayout>
      <div>
        <div className="w-full">
          <p className="text-lg lg:text-2xl underline font-semibold">
            Custom Service
          </p>
        </div>

        {/* Select Quick Agent */}
        <div className="lg:w-[45%] mx-auto mt-10 bg-gray-200 p-5">
          <span className="my-4 block">Quick Agent: <p className="text-green-600 text-2xl font-bold inline">{quickAgent?.name}</p></span>
          <label className="text-slate-900 font-bold">Select Quick Agent</label>
          <select  onChange={handleTypeChange} className={inputFieldSTyle}>
            <option value="">Select Agent</option>
            {adminId?.map((item, i) => (
              <option key={i} value={item.id}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>

        {/* Create Customer Service */}
        <div className="lg:w-[45%] mx-auto mt-10 bg-gray-200 p-5">
          <label className="text-slate-900 font-bold">
            Create Customer Service
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center mt-3">
            <div className="col-span-1 flex flex-col gap-1 text-slate-900">
              <label htmlFor="">Name</label>
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className={inputFieldSTyle}
                type="text"
                placeholder="Type your name"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1 text-slate-900">
              <label htmlFor="">Phone</label>
              <input
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className={inputFieldSTyle}
                type="number"
                placeholder="Type your Phone No"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1 text-slate-900">
              <label htmlFor="">Whats App Number</label>
              <input
                value={customerWp}
                onChange={(e) => setCustomerWP(e.target.value)}
                className={inputFieldSTyle}
                type="number"
                placeholder="Type your What's App No"
              />
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <button
              onClick={handleCreateCustomerService}
              className="px-5 py-1 bg-slate-900 rounded-md hover:bg-slate-600 hover:text-black text-white font-bold"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomService;
