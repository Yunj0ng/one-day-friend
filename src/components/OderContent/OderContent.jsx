import styles from "./OderContent.module.scss";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useSettingContext } from "@context/SettingContext";
import { useOderContext } from "@context/OderContext";

// 依選擇的見面時間生成可見面時數的選項
const generateMenuItems = (startTime, endTime) => {
  const hoursBetween = endTime.diff(startTime, "hour") + 1;
  // 最後轉換為字串 確保正確顯示在畫面上
  const menuItems = Array.from({ length: hoursBetween }, (_, index) =>
    (index + 1).toString()
  );
  return menuItems;
};

const OderContent = () => {
  const { dateStart, dateLine, startTime, endTime } = useSettingContext();
  const {
    seletedDate,
    seletedStartTime,
    seletedHours,
    handleDateChange,
    handleStartTimeChange,
    handleSeletedHoursChange,
  } = useOderContext();

  const avilableTimes = generateMenuItems(startTime, endTime);

  return (
    <div className={styles.wrapper}>
      <div className={styles.pickerWrapper}>
        <DatePicker
          label="請選擇欲見面日期"
          desktopModeMediaQuery="(min-width:1024px)"
          defaultValue={dateStart}
          value={seletedDate}
          minDate={dateStart}
          maxDate={dateLine}
          onChange={(newDate) => handleDateChange?.(newDate)}
        />
        <div className={styles.space}></div>
        <TimePicker
          label="請選擇欲見面時間"
          desktopModeMediaQuery="(min-width:1024px)"
          defaultValue={startTime}
          value={seletedStartTime}
          minTime={startTime}
          maxTime={endTime}
          // 設置最小時間單位為5分鐘
          minutesStep={5}
          onChange={(newStartTime) => handleStartTimeChange(newStartTime)}
        />
      </div>
      <div className={styles.selectContainer}>
        <FormControl fullWidth>
          <InputLabel id="select-helper-label">請選擇欲見面時數</InputLabel>
          <Select
            labelId="select-heaper-label"
            id="select-helper"
            label="請選擇欲見面時數"
            value={seletedHours}
            onChange={(e) => handleSeletedHoursChange?.(e)}
          >
            {avilableTimes.map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            ＊可見面時間為晚上9點以前，如未滿 1小時均以 1小時計算
          </FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default OderContent;
