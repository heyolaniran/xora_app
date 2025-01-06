import { useState } from "react";
import NavLink from "./ui/LinkScroll";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full py-10 ">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="images/xora.svg" alt="logo" width={115} height={55} />
        </a>
        <div
          className={clsx(`w-full max-lg:fixed transition-opacity duration-500 max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0`, isOpen ? 'max-lg:opacity-100': 'pointer-events-none')}
        >
          <div className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:py-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:flex max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Features" />
                  <div className="dot" />
                  <NavLink title="Pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll to="hero" offset={-100} spy smooth className={clsx('max-lg:hidden transition-transform duration-500')}>
                    <img
                      src="images/xora.svg"
                      alt="logo"
                      width={160}
                      height={55}

                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="About" />
                  <div className="dot" />
                  <NavLink title="Download" />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button className="lg:hidden z-2 border-2 border-s4/25 rounded-full size-10 flex justify-center items-center">
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className=" size-1/2 object-contain"
            onClick={() => setIsOpen((prevState) => !prevState)}
          />
        </button>
      </div>
    </header>
  );
}
