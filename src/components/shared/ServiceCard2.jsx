import { Link, useNavigate } from "react-router-dom";

const ServiceCard2 = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="md:border flex flex-col  gap-y-5 p-1">
      <h1 onClick={()=>navigate(`${item?.link}`)} className=" hover:text-red-700 text-2xl  font-semibold">{item.title}</h1>
      <div className="relative">
       {
        item?.img && (
            <img
            src={item.img}
            alt="Next Image"
            width={1920}
            height={1080}
            onClick={() => navigate(`${item?.link}`)}
            className="object-cover w-full h-full cursor-pointer"
          />
        )
       }

        <Link
          to={`${item?.link}`}
          className="absolute -bottom-2.5 left-5 bg-white border border-slate-500 px-2 py-[2px] text-xs hover:bg-red-700 hover:text-white uppercase"
        >
          Agent
        </Link>
      </div>

      <p className="text-sm text-center">{item.des}</p>

      <div className="w-full">
        <button
          onClick={() => navigate(`${item?.link}`)}
          className="mt-8 text-sm bg-gray-100 hover:bg-gray-300 w-full py-2 border border-slate-400"
        >
          Read More...কাস্টমার সার্ভিস লিষ্ট
        </button>
      </div>
    </div>
  );
};

export default ServiceCard2;
