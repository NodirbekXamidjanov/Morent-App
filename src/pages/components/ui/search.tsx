import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
export function Search() {
  const navigate = useNavigate();

  // const handlePath = () => {
  //   navigate("/categories")
  // }
  return (
    <div className="search-box flex justify-between absolute top-23 gap-4 md:relative md:top-0">
      <InputGroup className="w-[243px] md:w-123 md:rounded-[70px] h-12">
        <InputGroupInput placeholder="Searching something here" />
        <InputGroupAddon>
          <SearchIcon className="text-gray-500" />
        </InputGroupAddon>
      </InputGroup>

      <Button
        variant={"ghost"}
        onClick={() => navigate("/categories")}
        className="w-12 md:absolute border outline-[#C3D4E966] md:right-0 p-3 md:border-none md:p-4 md:rounded-[70px] h-12"
      >
        <img src="/Property 1=linear.png" alt="filter" />
      </Button>
    </div>
  );
}
