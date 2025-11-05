// components/Footer.tsx
export const Footer = () => {
  return (
    <footer
      className="bg-[#F6F7F9] px-8 py-10  text-[#131313]"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      <div className="mx-auto flex flex-col gap-10">
        {/* Top section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[#3563E9] text-2xl font-bold">MORENT</h2>
          <p className="text-[#90A3BF] text-[14px] leading-[150%] max-w-[250px]">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Middle links */}
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[16px] text-[#1A202C]">About</h3>
            <ul className="flex flex-col gap-2 text-[#90A3BF] text-[14px]">
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[16px] text-[#1A202C]">
              Community
            </h3>
            <ul className="flex flex-col gap-2 text-[#90A3BF] text-[14px]">
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[16px] text-[#1A202C]">
              Socials
            </h3>
            <ul className="flex flex-col gap-2 text-[#90A3BF] text-[14px]">
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#3563E9] transition">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col border-t border-[#E5E5E5] pt-6 gap-4 text-[12px] text-[#131313]">
          <div className="flex justify-between text-[12px] text-[#1A202C] font-medium">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
          </div>
          <p className="text-[#90A3BF]">©2022 MORENT. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
