import axios from "axios";
import { useEffect, useState } from "react";
import { images } from "../../../config";
import FooterSection from "../../components/shared/Footer/FooterSection";
import AdminLayout from "../../components/shared/Layout/AdminLayout";
import base_url from "../../utils/url";


const HowToTransactionPage = () => {
  const [configDatas,setConfigDatas]=useState([])

  const token=localStorage.getItem('token')

  useEffect(()=>{
    axios.get(`${base_url}/config`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(res=>setConfigDatas(res?.data?.data))
  },[])
  return (
    <AdminLayout>
      <div className="bg-white w-full min-h-screen">
        <div className="p-3 md:p-12">
          <div className=" md:border border-gray-400 md:p-10">
          <p className="text-2xl md:text-4xl font-bold ">
              1Ten তে কিভাবে লেনদেন করবেন?
            </p>
            <div className="w-[100%] mx-auto  my-3">
              <img
                width={400}
                height={200}
                className="w-[100%]"
                src={images.transacPoster}
                alt="poster"
              />
            </div>
           

           <div dangerouslySetInnerHTML={{ __html: configDatas[3]?.value }}/>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto ">
        <FooterSection />
      </div>
    </AdminLayout>
  );
};

export default HowToTransactionPage;
