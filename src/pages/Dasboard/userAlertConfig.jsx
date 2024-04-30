import axios from 'axios'
import JoditEditor from 'jodit-react'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import DashboardLayout from '../../components/shared/Dashboard/DashboardLayout'
import base_url from '../../utils/url'


const token=localStorage.getItem('token')
const UserAlertConfig = () => {
    const editor = useRef(null);
    const [text1,setText1]=useState('') // for how to open acc
    const [text2,setText2]=useState('') // for agent list
    const [text3,setText3]=useState('') // for how many types of agent
    const [text4,setText4]=useState('')
    const [switch1,setSwitch1]=useState(false)
    const [allConfigs,setAllConfigs]=useState([])

    useEffect(()=>{
        axios.get(`${base_url}/config`,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${token}`
            }
        }).then(res=>{
            if(res?.data?.message=='success'){
                setAllConfigs(res?.data?.data)

                setText1(res?.data?.data[12]?.value)
                setText2(res?.data?.data[13]?.value)
                setText3(res?.data?.data[14]?.value)
                setText4(res?.data?.data[15]?.value)
            }
        })
    },[])

  
  return (
    <DashboardLayout>
    <div className='flex flex-col gap-5'>

        {/* User Alert Text For Agent List */}
    <div className='flex flex-col gap-2'>
        <div className='text-2xl text-gray-900 font-bold flex items-center gap-2'>
            <p>User Alert Text For Agent List Page</p>
            
        </div>
 
       <div className="border border-gray-700  ">
       <JoditEditor
           
            ref={editor}
            value={text1}
            onChange={(newContent) => {
              setText1(newContent);
            }}
          />
       </div>
        <div>
        <button onClick={()=>{
            axios.post(`${base_url}/config/create`,{name:'user_alert_for_agent', value:text1},{
                headers:{
                    Accept:'application/json',
                    Authorization:`Bearer ${token}`
                }
            }).then(res=>{
                if(res?.data?.message=='success'){
                    toast.success('Updated',{
                        position:'top-center'
                    })
                }
            })
        }} className='bg-gray-900 px-12 py-2 rouned text-white font-bold'>Save</button>
        
        </div>
    </div>

    {/* User Alert Text For super Agent List */}
    <div className='flex flex-col gap-2'>
        <div className='text-2xl text-gray-900 font-bold flex items-center gap-2'>
            <p>User Alert Text For Super-Agent List Page</p>
            
        </div>
 
       <div className="border border-gray-700  ">
       <JoditEditor
           
            ref={editor}
            value={text2}
            onChange={(newContent) => {
              setText2(newContent);
            }}
          />
       </div>
        <div>
        <button onClick={()=>{
            axios.post(`${base_url}/config/create`,{name:'user_alert_for_super_agent', value:text2},{
                headers:{
                    Accept:'application/json',
                    Authorization:`Bearer ${token}`
                }
            }).then(res=>{
                if(res?.data?.message=='success'){
                    toast.success('Updated',{
                        position:'top-center'
                    })
                }
            })
        }} className='bg-gray-900 px-12 py-2 rouned text-white font-bold'>Save</button>
        
        </div>
    </div>

   {/* User Alert Text For sub admin List */}
   <div className='flex flex-col gap-2'>
        <div className='text-2xl text-gray-900 font-bold flex items-center gap-2'>
            <p>User Alert Text For Sub Admin List Page</p>
            
        </div>
 
       <div className="border border-gray-700  ">
       <JoditEditor
           
            ref={editor}
            value={text3}
            onChange={(newContent) => {
              setText3(newContent);
            }}
          />
       </div>
        <div>
        <button onClick={()=>{
            axios.post(`${base_url}/config/create`,{name:'user_alert_for_sub_admin', value:text3},{
                headers:{
                    Accept:'application/json',
                    Authorization:`Bearer ${token}`
                }
            }).then(res=>{
                if(res?.data?.message=='success'){
                    toast.success('Updated',{
                        position:'top-center'
                    })
                }
            })
        }} className='bg-gray-900 px-12 py-2 rouned text-white font-bold'>Save</button>
        
        </div>
    </div>


     {/* User Alert Text For admin List */}
   <div className='flex flex-col gap-2'>
        <div className='text-2xl text-gray-900 font-bold flex items-center gap-2'>
            <p>User Alert Text For Admin List Page</p>
            
        </div>
 
       <div className="border border-gray-700  ">
       <JoditEditor
           
            ref={editor}
            value={text4}
            onChange={(newContent) => {
              setText4(newContent);
            }}
          />
       </div>
        <div>
        <button onClick={()=>{
            axios.post(`${base_url}/config/create`,{name:'user_alert_for_admin', value:text4},{
                headers:{
                    Accept:'application/json',
                    Authorization:`Bearer ${token}`
                }
            }).then(res=>{
                if(res?.data?.message=='success'){
                    toast.success('Updated',{
                        position:'top-center'
                    })
                }
            })
        }} className='bg-gray-900 px-12 py-2 rouned text-white font-bold'>Save</button>
        
        </div>
    </div>

    

     

   

    

    </div>
</DashboardLayout>
  )
}

export default UserAlertConfig
