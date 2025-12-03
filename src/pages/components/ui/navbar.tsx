import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Search } from "./search";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  search: boolean;
}
export function Navbar(props: NavbarProps) {
  const navigate = useNavigate();
  return (
    <div className="justify-between flex flex-row container">
      <div className="md:flex md:items-center md:gap-16">
        <h2
          onClick={() => navigate("/")}
          className="font-bold text-2xl cursor-pointer leading-[120%] tracking-[0px] align-middle text-[#3563E9] font-['Plus Jakarta Sans', sans-serif]"
        >
          MORENT
        </h2>
        {props.search && <Search />}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none border-none rounded-[50%] w-8 md:w-12">
          <img
            className="rounded-[50%]"
            src="/f1f56cb57c6c5d88e94501a481b5f732536c2851 (1).png"
            alt="avatar"
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="md:flex md:absolute md:top-[-45px] md:right-10 md:gap-[20px] md:z-50">
          <DropdownMenuItem className="md:w-11 md:h-11">
            <img src="/Like.svg" alt="" />
          </DropdownMenuItem>
          <DropdownMenuItem className="md:w-11 md:h-11">
            <img src="/Notification.svg" alt="" />
          </DropdownMenuItem>
          <DropdownMenuItem className="md:w-11 md:h-11">
            <img src="/Settings.svg" alt="" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
