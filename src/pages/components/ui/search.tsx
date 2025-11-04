import {
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
  } from "@/components";
  import { SearchIcon } from "lucide-react";
export function Search() {
  return (
    <div className="search-box flex justify-between">
    <InputGroup className="w-60 h-12">
    <InputGroupInput placeholder="Searching something here" />
    <InputGroupAddon>
        <SearchIcon className="text-gray-500" />
    </InputGroupAddon>
    </InputGroup>

    <Button variant={"outline"} className="w-12 p-3 h-12">
    <img src="/Property 1=linear.png" alt="filter" />
    </Button>
</div>
  )
}
