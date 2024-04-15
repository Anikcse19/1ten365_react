import { useNavigate } from "react-router-dom"
import { images } from "../../../config"



const Logo = () => {
  const navigate=useNavigate()
  return (
    <div className=' w-full mx-auto pb-3 cursor-pointer'>
        <img onClick={()=>navigate('/adminHomePage')} width={300} height={300} className='w-[30%] mx-auto' src={images.logo} alt=''/>
    </div>
  )
}

export default Logo
