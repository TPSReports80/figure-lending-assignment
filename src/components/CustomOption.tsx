import { components, type OptionProps } from "react-select";
import { MenuOption } from "../types/menuTypes";

const CustomOption = (props: OptionProps<MenuOption, false>) => (
  <components.Option {...props}>
    <div
      className={`px-3 py-2 font-medium ${
        props.isFocused && "border-4 border-black rounded-md"
      }`}
    >
      {props.label}
    </div>
  </components.Option>
);

export default CustomOption;
