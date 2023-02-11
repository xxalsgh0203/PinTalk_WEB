import React, { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { getMonth, getYear } from "date-fns";
import { calculateYear } from "../../../../utils/calculateDatePicker";
import cls from "../../../../utils/cls";
import { Control } from "react-hook-form";
import { UserFilteringData } from "../../../../model/interface/userList";

interface Props {
  label?: string;
  Controller?: any;
  control?: Control<UserFilteringData, any>;
  name?: string;
  textEnd?: boolean;
}

const DatePicker = ({ label, Controller, control, name, textEnd }: Props) => {
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const years = calculateYear();
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const handleClick = (e: React.MouseEvent<HTMLElement>, monthHandler: () => void) => {
    e.preventDefault();
    monthHandler();
  };

  return (
    <div className="flex flex-col w-[140px] rounded-lg">
      <div className="shadow-sm">
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, onBlur } }: any) => (
            <ReactDatePicker
              className={cls(textEnd ? "text-end" : "text-start")}
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              onChange={onChange}
              selected={value}
              onBlur={onBlur}
              placeholderText={label}
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="custom-react-datepicker__select-wrapper flex items-center justify-center space-x-2">
                  <button
                    onClick={(e) => handleClick(e, decreaseMonth)}
                    disabled={prevMonthButtonDisabled}
                  >
                    {"<"}
                  </button>
                  <div className="custom-react-datepicker__select-item relative space-x-16">
                    <select
                      className="w-14 mr-2 absolute bg-transparent cursor-pointer z-30"
                      ref={yearRef}
                      value={getYear(date)}
                      onFocus={() => {
                        if (yearRef.current === null) return;
                        yearRef.current.size = 10;
                      }}
                      onBlur={() => {
                        if (yearRef.current === null) return;
                        yearRef.current.size = 1;
                      }}
                      onChange={({ target: { value } }) => {
                        if (yearRef.current === null) return;
                        yearRef.current.blur();
                        changeYear(Number(value));
                      }}
                    >
                      {years.map((option) => (
                        <option
                          className="bg-white hover:bg-gray-50 cursor-pointer"
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    <span>년</span>
                  </div>
                  <div className="custom-react-datepicker__select-item relative space-x-12">
                    {/* 월 선택 select box */}
                    <select
                      className="w-10 mr-2 absolute bg-transparent cursor-pointer"
                      ref={monthRef}
                      value={months[getMonth(date)]}
                      onFocus={() => {
                        if (monthRef.current === null) return;
                        monthRef.current.size = 10;
                      }}
                      onBlur={() => {
                        if (monthRef.current === null) return;
                        monthRef.current.size = 1;
                      }}
                      onChange={({ target: { value } }) => {
                        if (monthRef.current === null) return;
                        monthRef.current.blur();
                        changeMonth(Number(value) - 1);
                      }}
                    >
                      {months.map((option) => (
                        <option
                          className="bg-white hover:bg-gray-50 cursor-pointer"
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    <span>월</span>
                  </div>
                  {/* 다음 월로 이동하는 버튼 */}
                  <button
                    onClick={(e) => handleClick(e, increaseMonth)}
                    disabled={nextMonthButtonDisabled}
                  >
                    {">"}
                  </button>
                </div>
              )}
            />
          )}
        />
      </div>
    </div>
  );
};
export default DatePicker;
