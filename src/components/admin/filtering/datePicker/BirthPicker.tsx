import { useRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { UserFilteringData } from "../../../../model/interface/userList";
import { calculateMonthWithDay, calculateYear } from "../../../../utils/calculateDatePicker";
import { inputSetValues } from "../../../../utils/validateForm";
import BirthSelector from "./BirthSelector";

interface Props {
  register: UseFormRegister<UserFilteringData>;
}

const BirthPicker = ({ register }: Props) => {
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);
  const yearRange = calculateYear();
  const monthRange = calculateMonthWithDay(12);
  const dayRange = calculateMonthWithDay(31);

  return (
    <div className="mb-2 relative">
      <label className="text-sm font-bold">생년월일</label>
      <div className="mt-2 relative w-full flex space-x-4">
        {/* 년 */}
        <div className="">
          <BirthSelector
            register={register("year", {
              onChange: (e) => {
                e.target.size = 1;
                e.target.blur();
              },
              onBlur: (e) => {
                return (e.target.size = 1);
              },
              setValueAs: (v) => inputSetValues(v),
            })}
            selectorRef={yearRef}
            dateRange={yearRange}
            title="년"
          />
        </div>
        {/* 월 */}
        <div className="flex items-center">
          <BirthSelector
            register={register("month", {
              onChange: (e) => {
                e.target.size = 1;
                e.target.blur();
              },
              onBlur: (e) => {
                return (e.target.size = 1);
              },
              setValueAs: (v) => inputSetValues(v),
            })}
            dateRange={monthRange}
            selectorRef={monthRef}
            title="월"
          />
        </div>
        {/* 일 */}
        <BirthSelector
          register={register("day", {
            onChange: (e) => {
              e.target.size = 1;
              e.target.blur();
            },
            onBlur: (e) => {
              return (e.target.size = 1);
            },
            setValueAs: (v) => inputSetValues(v),
          })}
          dateRange={dayRange}
          selectorRef={dayRef}
          title="일"
        />
      </div>
    </div>
  );
};

export default BirthPicker;
