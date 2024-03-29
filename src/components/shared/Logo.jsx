import { images } from "../../../config"



const Logo = () => {
  return (
    <div className=' w-full mx-auto pb-3'>
        <img width={300} height={300} className='w-[30%] mx-auto' src={images.logo} alt=''/>
    </div>
  )
}

export default Logo
