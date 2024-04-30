
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../components/shared/Dashboard/DashboardLayout";
import base_url from "../../utils/url";



const EditAdmin = () => {

    
  const router = useNavigate();
  const { id } = useParams();

  const { register, handleSubmit, reset } = useForm();
  const [admiDetails, setAdminDetails] = useState();
  const [types,setTypes]=useState([])
  const [selectedType, setSelectedType] = useState("");
  const [superVisor,setSuperVisor]=useState('')
  const [name,setName]=useState('')
  const [inputId,setInputId]=useState('')
  const [wpLink,setWpLink]=useState('')
  const [phone,setPhone]=useState('')
  const [supervisors,setSupervisorsList]=useState([])
  const [adminId,setAdminId]=useState('')

  const token=localStorage.getItem('token')
  useEffect(() => {
    fetch(`${base_url}/admins/types`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTypes(data?.types))
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors


      fetch(`${base_url}/admins/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdminDetails(data)
          setSelectedType(data?.admin?.profile?.type)
          setSuperVisor(data?.admin?.super?.name)
          setAdminId(data?.admin?.super?.id)
          setName(data?.admin?.name)
          setInputId(data?.admin?.input_id)
          setWpLink(data?.admin?.profile?.wa_link)
          setPhone(data?.admin?.profile?.phone)
        })
        .catch((error) => console.error("Error fetching data:", error));
  }, []);


  useEffect(() => {
      fetch(`${base_url}/admins?type=${
        
        selectedType === "সাব এডমিন"
          ? "এডমিন"
          : selectedType === "সুপার এজেন্ট"
          ? "সাব এডমিন"
          : selectedType === "এজেন্ট"
          ? "সুপার এজেন্ট"
          : ""
      }`,{
        headers:{
          Accept:'application/json'
        }
      }).then(res=>res.json()).then(data=>{
        setSupervisorsList(data?.admins);
       
      })


  }, [selectedType]);

  

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const onSubmit = (data) => {

    const infos = {
      name:name,
      phone:phone,
      wa_link:wpLink,
      input_id:inputId,
      type: selectedType,
      admin_id:adminId
    };

    if (infos.type == "এডমিন") {
      delete infos.admin_id;
    }

    fetch(`${base_url}/admins/update/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(infos),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        if(data?.msg=='success'){
          toast.success('succesfully updated',{
            position:'top-right'
          })
          router('/dashboard/viewAdmins')
        }else{
          toast.error(`${data.error}`,{
            position:'top-right'
          })
        }
        // Handle success response here
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        // Handle error here
      });
  };

  
  const inputFieldSTyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring";

  return (
    <DashboardLayout>
      <div className="">
        <div className="w-full">
          <p className=" text-lg lg:text-2xl underline font-semibold">
            Edit Admins
          </p>
        </div>

        <section className="mt-8 w-[95%] md:w-[80%] p-6 mx-auto bg-gray-300 rounded-md shadow-md ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* Name */}
              <div className="text-text-gray-800 ">
                <label className="text-gray-800 ">
                  Name {admiDetails?.admin?.name}
                </label>
                <input
                  type="text"
                  value={name}
                  //   placeholder="name"
                onChange={(e)=>setName(e.target.value)}
                  className={inputFieldSTyle}
                />
              </div>

              {/* phone number */}
              <div>
                <label className="text-gray-800 ">Phone Number</label>
                <input
                  type="number"
                  defaultValue={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  placeholder="phone number"
                  className={inputFieldSTyle}
                />
              </div>

              {/* input id */}
              <div>
                <label className="text-gray-800 ">Input Id</label>
                <input
                  type="number"
                  defaultValue={inputId}
                  onChange={(e)=>setInputId(e.target.value)}
                  placeholder="input id"
                  className={inputFieldSTyle}
                />
              </div>

              {/* Whats App Link */}
              <div>
                <label className="text-gray-800 ">Whats Link</label>
                <input
                  type="text"
                  placeholder="what's app link"
                  value={wpLink}
                  onChange={(e)=>setWpLink(e.target.value)}
                  className={inputFieldSTyle}
                />
              </div>

              {/* Types */}
             {/* Types */}
             <div>
                <label className="text-gray-800 ">Types</label>
                <select
                  className={inputFieldSTyle}
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  <option value="" hidden>
                    Select Types
                  </option>
                  {types?.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Supervisor */}
              <div className={`${selectedType === "এডমিন" ? "hidden" : ""}`}>
                <label className="text-gray-800 ">Supervisor</label>
                <select defaultValue={adminId} onChange={(e)=>setAdminId(Number(e.target.value))} className={inputFieldSTyle}>                 
                  {supervisors?.map((item, i) => (
                    <option key={i} value={item?.id}>
                      {`${item?.name} - ${item?.profile?.type}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-800 hover:bg-gray-700 rounded-md  "
              >
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default EditAdmin;
