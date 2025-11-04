import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
export  function Navbar() {
  return (
        <div className="navbar justify-between flex flex-row container">
                <h2 className="font-bold text-2xl leading-[120%] tracking-[0px] align-middle text-[#3563E9] font-['Plus Jakarta Sans', sans-serif]">
                MORENT
                </h2>

                <DropdownMenu>
                <DropdownMenuTrigger className="rounded-[50%] w-[32px]">
                    <img
                    className="rounded-[50%]"
                    src="/f1f56cb57c6c5d88e94501a481b5f732536c2851 (1).png"
                    alt="avatar"
                    />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
  )
}
