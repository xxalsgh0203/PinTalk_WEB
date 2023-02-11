import { UseFormRegisterReturn } from "react-hook-form";
import cls from "../../../../utils/cls";

interface Props {
  selectorRef: React.MutableRefObject<HTMLSelectElement | null>;
  dateRange: string[];
  title: string;
  register: UseFormRegisterReturn;
}

const BirthSelector = ({ selectorRef, dateRange, title, register }: Props) => {
  const { ref, ...rest } = { ...register };

  return (
    <div className="flex items-center">
      <select
        defaultValue=""
        ref={(e) => {
          ref(e);
          selectorRef.current = e;
        }}
        {...rest}
        className={cls(
          "absolute z-10 border-2 border-gray-200 rounded-md bg-clip-padding",
          "w-[105px]",
        )}
        onFocus={() => {
          if (!selectorRef.current) return;
          selectorRef.current.size = 10;
        }}
      >
        <option value="">{title}</option>
        {dateRange.map((item) => (
          <option className="hover:bg-gray-50 cursor-pointer" value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <span className="pl-28">{title}</span>
    </div>
  );
};
export default BirthSelector;
