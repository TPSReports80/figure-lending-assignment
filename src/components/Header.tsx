import { Grip, ChevronRight } from "lucide-react";

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return (
    <header className="flex items-center gap-5 text-2xl font-semibold text-gray-600">
      <Grip size={30} aria-hidden="true" strokeWidth={2.5} />
      {text}
      <ChevronRight
        size={32}
        className="ml-16"
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
