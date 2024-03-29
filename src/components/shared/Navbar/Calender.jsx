import { format } from "date-fns";

const Calendar = ({ startDate }) => {
  const formattedDay = format(startDate, "d");
  const formattedMonth = format(startDate, "MMM");
  const formattedDayOfWeek = format(startDate, "E");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-[35px] font-medium"> {formattedDay}</p>
      <div className="text-sm flex items-center gap-x-2">
       <span> {formattedMonth}</span>
        <span>{formattedDayOfWeek}</span>
      </div>
    </div>
  );
};

export default Calendar;
