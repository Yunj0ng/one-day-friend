import { createContext, useContext, useState } from "react";
import { useSettingContext } from "@context/SettingContext";

const OderContext = createContext();
const useOderContext = () => useContext(OderContext);

const OderContextProvider = ({ children }) => {
  const { dateStart, startTime, basicFee } = useSettingContext();
  const [seletedDate, setSeletedDate] = useState(dateStart);
  const [seletedStartTime, setSeletedStartTime] = useState(startTime);
  const [seletedHours, setSeletedHours] = useState(1);
  const totalFee = basicFee * Number(seletedHours);

  function handleDateChange(newDate) {
    setSeletedDate(newDate);
  }

  function handleStartTimeChange(newStartTime) {
    setSeletedStartTime(newStartTime);
  }

  function handleSeletedHoursChange(e) {
    const { value } = e.target;
    setSeletedHours(value);
  }
  return (
    <OderContext.Provider
      value={{
        seletedDate,
        seletedStartTime,
        seletedHours,
        handleDateChange,
        handleStartTimeChange,
        handleSeletedHoursChange,
        totalFee,
      }}
    >
      {children}
    </OderContext.Provider>
  );
};

export { useOderContext, OderContextProvider };
