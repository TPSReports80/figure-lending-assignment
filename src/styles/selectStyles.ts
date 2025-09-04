export const selectStyles = {
  dropdownIndicator: () => ({
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  control: (base: any) => ({
    ...base,
    cursor: "pointer",
    padding: "0",
    width: "320px",
    border: "none",
    outline: "none",
    boxShadow: "none",
    borderColor: "transparent",
    ":hover": {
      ...base[":hover"],
      borderColor: "transparent",
    },
  }),
  menu: (base: any) => ({
    ...base,
    background: "white",
    border: "none",
    borderRadius: "none",
    marginTop: "0",
    boxShadow: "none",
    overflow: "hidden",
  }),
  menuList: (base: any) => ({
    ...base,
    maxHeight: "280px",
    paddingTop: 0,
    paddingBottom: 0,
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }),
  option: (base: any) => ({
    ...base,
    cursor: "pointer",
    color: "darkslategray",
    backgroundColor: "transparent",
  }),
};
