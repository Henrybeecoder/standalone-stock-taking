import search_icon from "@/public/assets/icons/search_icon.svg";
import Image from "next/image";
import { InputHTMLAttributes } from "react";

interface SearchbarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  handleSearch?: (searchString: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  placeholder,
  handleSearch,
  ...props
}) => {
  return (
    <div className="searchbar relative border border-[#D2D6DE] ">
      <Image
        className="absolute left-2 top-1"
        src={search_icon}
        alt="search-icon"
      />
      <input
        type="text"
        placeholder={`${placeholder ?? "Search"}`}
        className="search-input text-sm w-full pl-7"
        onChange={(e) => handleSearch && handleSearch(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default Searchbar;
