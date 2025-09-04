import { components, type SingleValueProps } from "react-select";
import { MenuOption } from "../types/menuTypes";
import { Check } from "lucide-react";

const CustomSingleValue = (props: SingleValueProps<MenuOption, false>) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-2 justify-between bg-gray-900 text-white p-4 rounded-md w-full">
      <span className="font-medium uppercase">{props.data.label}</span>
      <Check className="w-5 h-5" />
    </div>
  </components.SingleValue>
);

export default CustomSingleValue;
