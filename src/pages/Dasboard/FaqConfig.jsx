import axios from 'axios'
import JoditEditor from 'jodit-react'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import DashboardLayout from '../../components/shared/Dashboard/DashboardLayout'
import base_url from '../../utils/url'


const token=localStorage.getItem('token')
const FaqConfig = () => {
    const editor = useRef(null);
    const [text1,setText1]=useState('') 
    const [text2,setText2]=useState('') 
    const [text3,setText3]=useState('')
    const [text4,setText4]=useState('') 
    const [text5,setText5]=useState('') 
    const [text6,setText6]=useState('') 
    const [text7,setText7]=useState('') 
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

                setText1(res?.data?.data[4]?.value)
                setText2(res?.data?.data[5]?.value)
                setText3(res?.data?.data[6]?.value)
                setText4(res?.data?.data[7]?.value)
                setText5(res?.data?.data[8]?.value)
                setText6(res?.data?.data[9]?.value)
                setText7(res?.data?.data[10]?.value)
            }
        })
    },[])

   
  return (
    <DashboardLayout>
        <div className='flex flex-col gap-5'>

            {/* how to transaction */}
        <div className='flex flex-col gap-2'>
            <div className='text-2xl text-gray-900 font-bold flex items-center gap-2'>
                <p>How to transaction</p>
                
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
                axios.post(`${base_url}/config/create`,{name:'how_to_transaction', value:text1},{
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

        {/* How to open account */}
         <div className='flex flex-col gap-2'>
            <p className='text-2xl text-gray-900 font-bold'>How to open account</p>
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
                axios.post(`${base_url}/config/create`,{name:'how_to_open_account', value:text2},{
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

        {/* condition of opening account*/}
        <div className='flex flex-col gap-2'>
            <p className='text-2xl text-gray-900 font-bold'>What are the rules or condition for opening an account</p>
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
                axios.post(`${base_url}/config/create`,{name:'condition_of_opening_acc', value:text3},{
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

         {/* fb group links*/}
         <div className='flex flex-col gap-2'>
            <p className='text-2xl text-gray-900 font-bold'>Facebook group links</p>
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
                axios.post(`${base_url}/config/create`,{name:'fb_group_links', value:text4},{
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

          {/* how to be agent*/}
          <div className='flex flex-col gap-2'>
            <p className='text-2xl text-gray-900 font-bold'>How to be an agent</p>
            <div className="border border-gray-700  ">
           <JoditEditor
               
                ref={editor}
                value={text5}
                onChange={(newContent) => {
                  setText5(newContent);
                }}
              />
           </div>
            <div>
            <button onClick={()=>{
                axios.post(`${base_url}/config/create`,{name:'how_to_be_agent', value:text5},{
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

         {/* how to do complain*/}
         <div className='flex flex-col gap-2'>
            <p className='text-2xl text-gray-900 font-bold'>How to do complain aganist agent</p>
            <div className="border border-gray-700  ">
           <JoditEditor
               
                ref={editor}
                value={text6}
                onChange={(newContent) => {
                  setText6(newContent);
                }}
              />
           </div>
            <div>
            <button onClick={()=>{
                axios.post(`${base_url}/config/create`,{name:'how_to_do_complain', value:text6},{
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

         {/* proxy links*/}
         <div className='flex flex-col gap-2'>
            <p className='text-2xl text-gray-900 font-bold'>Proxy links</p>
            <div className="border border-gray-700  ">
           <JoditEditor
               
                ref={editor}
                value={text7}
                onChange={(newContent) => {
                  setText7(newContent);
                }}
              />
           </div>
            <div>
            <button onClick={()=>{
                axios.post(`${base_url}/config/create`,{name:'proxy_links', value:text7},{
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

export default FaqConfig
