import { intervalToDuration } from "date-fns";

const getTimeInFormat = (startDate, endDate) => {
  const datesDifferences = intervalToDuration({
    start: startDate,
    end: endDate,
  });
  return `${datesDifferences.hours
    .toString()
    .padStart(2, "0")}:${datesDifferences.minutes
    .toString()
    .padStart(2, "0")}:${datesDifferences.seconds.toString().padStart(2, "0")}`;
};
export default getTimeInFormat;
