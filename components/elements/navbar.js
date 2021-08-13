import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { MdMenu } from "react-icons/md"
import MobileNavMenu from "./mobile-nav-menu"
import ButtonLink from "./button-link"
import Image from "../image"
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "@/utils/types"
import { getButtonAppearance } from "@/utils/button"
import CustomLink from "./custom-link"
import LocaleSwitch from "../locale-switch"     //没加{}是const
import { localizePath } from "@/utils/localize" //{}内的是function
import  Switchtry  from "@/components/mode-sw-try";
//import {setmodev} from "@/templates/page"
//import modev from "@/config";
import  setmodev  from "@/cf-fuc"  //为啥明明是函数却不用{}，害我浪费好久
import modev from "../../config"

//var fn = x => x * x;
function Navbar({vv, setvv, navbar, pageContext}){
//const Navbar = ({ navbar, pageContext, props}) => {
  
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  return (
    <>
      {/* The actual navbar */}
      <nav className="border-gray-200 border-b-2 py-6 sm:py-2">
        <div className="container flex flex-row items-center justify-between">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            <Link             //图片链接
              to={localizePath({ ...pageContext, isPreview: false, slug: "" })}
            >
              <Image
                placeholder="none"
                style={{ width: "112px" }}
                media={navbar.logo}
                className="h-8 w-auto object-contain"
              />
            </Link>
            {/* List of links on desktop     两个英文的链接   */}
            <ul className="hidden list-none md:flex flex-row gap-4 items-baseline ml-10">
              {navbar.links.map(navLink => (
                <li key={navLink.id}>
                  <CustomLink
                    link={{
                      ...navLink,
                      url: `${localizePath({
                        ...pageContext,
                        isPreview: false,
                        // Remove the '/'
                        slug: navLink.url.slice(1),
                      })}`,
                    }}
                  >
                    <div className="hover:text-gray-900 px-2 py-1">
                      {navLink.text}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            {/* Locale Switch Mobile */}
            {pageContext.localizations && (
              <div className="md:hidden">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )}
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="p-1 block md:hidden"
            >
              <MdMenu className="h-8 w-auto" />
            </button>

{<div>
<Switchtry vv={vv} setvv={setvv}/>
</div>
}     


            {/* CTA button on desktop           sign up      */}
            {navbar.button && (
              <div className="hidden md:block">
                <ButtonLink
                  button={navbar.button}
                  appearance={getButtonAppearance(navbar.button.type, "light")}
                  compact
                />
              </div>
            )}
            {/* Locale Switch Desktop */}
            {pageContext.localizations && (
              <div className="hidden md:block">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  )
}

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
}

export default Navbar


