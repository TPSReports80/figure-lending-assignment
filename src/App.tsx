import { useState, useEffect } from "react";
import { ApplicationSelect } from "./components/ApplicationSelect";
import Header from "./components/Header";
import { MenuOption, MenuItem } from "./types/menuTypes";

export function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [errors, setErrors] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<MenuOption | null>(null);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/v1/applications");
      if (!res.ok) {
        throw new Error(`Unable to retrieve data. Status: ${res.status}`);
      }
      const data = await res.json();
      // grab the first 10 items
      const slicedMenuItems = data.applications.slice(0, 10);
      setMenuItems(slicedMenuItems);
    } catch (err) {
      setErrors(
        err instanceof Error ? err.message : "Unable to fetch menu items."
      );
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSelectionChange = (option: MenuOption | null) => {
    setSelectedOption(option);
  };

  return (
    <main className="min-h-screen w-screen bg-slate-200 flex justify-center items-center">
      <div className="basis-full lg:basis-2/3 h-[500px] bg-white border-4 border-dashed rounded-xl p-6 space-y-4">
        <section className="flex justify-center items-center h-full gap-3">
          {/* left panel  */}
          <div className="relative p-10 h-full flex flex-col justify-center after:content-[''] after:absolute after:top-0 after:right-[-5px] after:w-[1px] after:h-full after:bg-gray-300">
            <Header text="Applications" />
            {/* show error message if unable to fetch items */}
            {errors && (
              <div
                className="mt-4 text-red-600 text-md font-medium"
                role="alert"
              >
                {errors}
              </div>
            )}
            {/* display selected item as instructed by feature requirements */}
            {selectedOption && (
              <div className="mt-2 text-gray-500 text-base">
                Selected:{" "}
                <span className="font-medium">{selectedOption.label}</span>
              </div>
            )}
          </div>
          {/* right panel */}
          <div className="relative px-10 py-3 h-full flex flex-col justify-start">
            <ApplicationSelect
              menuItems={menuItems}
              onSelectionChange={handleSelectionChange}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
