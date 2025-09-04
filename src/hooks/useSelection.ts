import { useEffect, useMemo } from "react";
import { MenuItem, MenuOption } from "../types/menuTypes";
import useLocalStorage from "./useLocalStorage";

function useSelection(
  menuItems: MenuItem[],
  onSelectionChange?: (option: MenuOption | null) => void
) {
  const [selectedOption, setSelectedOption] =
    useLocalStorage<MenuOption | null>("selectedOption", null);

  const menuOptions = useMemo(
    () => menuItems.map((item) => ({ value: item.id, label: item.name })),
    [menuItems]
  );

  useEffect(() => {
    if (!selectedOption && menuItems.length > 0) {
      setSelectedOption(menuOptions[0]);
    }
  }, [selectedOption, menuOptions, setSelectedOption]);

  useEffect(() => {
    onSelectionChange?.(selectedOption);
  }, [selectedOption, setSelectedOption, menuOptions]);

  return { selectedOption, setSelectedOption, menuOptions };
}

export default useSelection;
