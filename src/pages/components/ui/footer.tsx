// components/Footer.tsx
export const Footer = () => {
  return (
    <footer
      className="w-full px-8 md:px-15 py-10 text-[#131313]"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      <div className="mx-auto flex flex-col gap-10">
        {/* TOP — md da ikki qismga bo‘linadi */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
          {/* LEFT — Logo + description */}
          <div className="flex flex-col gap-6 max-w-[250px]">
            <h2 className="text-[#3563E9] text-2xl font-bold">MORENT</h2>
            <p className="text-[#90A3BF] text-[14px] leading-[150%]">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* RIGHT — 3 columns */}
          <div className="flex flex-wrap justify-between gap-12 md:gap-20 text-left">
            {/* About */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[16px] text-[#1A202C]">
                About
              </h3>
              <ul className="flex flex-col gap-2 text-[#90A3BF] text-[14px]">
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[16px] text-[#1A202C]">
                Community
              </h3>
              <ul className="flex flex-col gap-2 text-[#90A3BF] text-[14px]">
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-[16px] text-[#1A202C]">
                Socials
              </h3>
              <ul className="flex flex-col gap-2 text-[#90A3BF] text-[14px]">
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#3563E9]">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM — md da 3ga bo‘linadi */}
        <div className="flex flex-col border-t border-[#E5E5E5] pt-6 gap-4 text-[12px] text-[#131313] md:flex-row md:justify-between md:items-center">
          <p className="text-[#90A3BF]">©2022 MORENT. All rights reserved</p>

          <div className="flex justify-between gap-8 text-[12px] text-[#1A202C] font-medium">
            <span className="hover:text-[#3563E9] cursor-pointer">
              Privacy & Policy
            </span>
            <span className="hover:text-[#3563E9] cursor-pointer">
              Terms & Condition
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
