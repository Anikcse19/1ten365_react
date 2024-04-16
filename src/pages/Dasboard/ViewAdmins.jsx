import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/shared/Dashboard/DashboardLayout";
import base_url from "../../utils/url";




const ViewAdmins=()=> {


  
 
  const [datas, setDatas] = useState([]);
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

      axios.get(`${base_url}/admins`,{
        headers:{
          Accept:'application/json'
        }
      }).then(res=>setDatas(res?.data))
    } catch (error) {
      console.log(error);
      toast.error(error,{
        position:'top-right'
      })
    }
  };

  useEffect(() => {
   fetchData();
  }, []);

  const token=localStorage.getItem('token')
  const handleDelete = (adminId) => {
  
  
      try {
        const formData=new FormData()
        formData.append('id',adminId)
        axios.post(`${base_url}/admins/destroy`,formData,{
         headers:{
          Accept:'application/json',
          'Content-type':'application/json',
          Authorization:`Bearer ${token}`
         }
        }).then( res=>{
          if(res?.data?.msg=='success'){
            toast.success('User Deleted')
             fetchData()
          }
        })
      } catch (error) {
        console.log(error);
        toast.error(error,{
          position:'top-right'
        })
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
          <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-300 text-slate-800 font-medium border-b">
                <tr>
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Phone</th>
                  <th className="py-3 px-6">Type</th>
                  <th className="py-3 px-6">WhatsApp Link</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-slate-800 divide-y">
                {
                 ! datas?.admins?.length >0 && (
                    <tr className="animate-pulse text-center bg-gray-500 w-full h-[500px]">
                      <td colSpan={6} className="text-white font-bold">Loading...</td>
                    </tr>                  )
                }
                {datas?.admins?.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.input_id}
                    </td>

                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                      <div>
                        <span className="block text-slate-800 text-sm font-medium">
                          {item?.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.profile.phone}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {item?.profile.type}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
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
    </DashboardLayout>
  );
}
export default ViewAdmins