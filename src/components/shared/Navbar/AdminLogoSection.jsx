import { images } from "../../../../config";
import Calendar from "./Calender";


const AdminLogoSection = () => {
  const currentDate = new Date(); // Get the current date

  return (
    <div className=" border-b-2 bg-white border-red-500">
      <div className="w-[76%] mx-auto flex items-center justify-between  py-4">
        <img src={images.logo} width={200} alt=""/>

        <div className="w-[85px] h-[85px] h-ful flex flex-col justify-center items-center bg-gray-200">
          <Calendar startDate={currentDate} />
        </div>
      </div>
    </div>
  );
};

export default AdminLogoSection;
