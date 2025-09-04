import { MenuOption, MenuItem } from "../types/menuTypes";
import Select from "react-select";
import { selectStyles } from "../styles/selectStyles";
import CustomOption from "./CustomOption";
import CustomSingleValue from "./CustomSingleValue";
import useSelection from "../hooks/useSelection";

interface ApplicationSelectProps {
  menuItems: MenuItem[];
  onSelectionChange?: (option: MenuOption | null) => void;
}

export function ApplicationSelect({
  menuItems,
  onSelectionChange,
}: ApplicationSelectProps) {
  const { selectedOption, setSelectedOption, menuOptions } = useSelection(
    menuItems,
    onSelectionChange
  );

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md p-3 h-full">
      <label
        htmlFor="menu-dropdown"
        className="pb-4 text-gray-500 text-xl font-medium"
      >
        Applications
      </label>
      <Select
        name="menu"
        id="menu-dropdown"
        options={menuOptions}
        value={selectedOption}
        className="mx-[-8px]"
        onChange={(option) => setSelectedOption(option)}
        components={{
          Option: CustomOption,
          SingleValue: CustomSingleValue,
        }}
        styles={selectStyles}
      />
    </div>
  );
}
