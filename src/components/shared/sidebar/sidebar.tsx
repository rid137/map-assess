'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import { bottomLinks, topLinks } from "./links";
import { truncate } from "@/utils/helper";

const SideNav = () => {
  const [activePage, setActivePage] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleDropdown = (index: number, pageName: string) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setActivePage(pageName)
  };

  return (
    <aside className="fixed left-0 flex flex-col justify-between px-4 pt-6 min-h-[100vh] w-[16.3125rem] bg-[#F7F9FC] z-50">

      {/* Top Links */}
      <div className="flex flex-col px-3 pb-3 pt-">
        <div className="flex items-center justify-center mb-6">
            <Logo />
        </div>
        {topLinks.map((link, index) => (
          <div key={index} className="mb-2">
            <div
              className={`flex items-center justify-between p-3 cursor-pointer hover:bg-lightBlue rounded-lg ${activePage === link.pageName ? 'bg-lightBlue rounded-lg' : ''} text-base font-light`}
              onClick={() => link.subLinks ? toggleDropdown(index, link.pageName) : setActivePage(link.pageName)}
            >
              <div className="flex items-center">
                {activePage === link.pageName ? (
                  <link.whiteIcon className="" />
                ) : (
                  <link.blackIcon />
                )}
                <span className="ml-[1.125rem] text-sm">{link.text}</span>
              </div>
              {link.subLinks && (
                expandedIndex === index ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              )}
              {
                link.isCount && <span className="bg-primary text-white rounded-full px-2 text-xs">10</span>
              }
            </div>

            {/* Sublinks */}
            {link.subLinks && expandedIndex === index && (
              <div className="pl-8 mt-2 space-y-2">
                {link.subLinks.map((subLink, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subLink.href}
                    className={`block text-sm p-2 rounded hover:bg-lightBlue ${activePage === subLink.text ? 'bg-lightBlue' : ''}`}
                    onClick={() => setActivePage(subLink.text)}
                  >
                    {subLink.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <hr />

      {/* Bottom Links */}
      <div className="flex flex-col bottom-4 absolute w-full px-4">
          {bottomLinks.map((link, index) => (
          <div key={index}>
              <div
              className={`flex items-center p-3 cursor-pointer hover:bg-lightBlue rounded-lg ${activePage === link.pageName ? 'bg-lightBlue rounded-lg' : ''} text-base font-light`}
              onClick={() => setActivePage(link.pageName)}
              
              >
              {activePage === link.pageName ? (
                  <link.whiteIcon/>
              ) : (
                  <link.blackIcon />
              )}
              <span className="ml-[1.125rem] text-sm">{link.text}</span>
              </div>
          </div>
          ))}
          
          <div className="flex items-center gap-6">
              <div className="flex gap-2 items-center mt-6">
                  <div className="">
                      <Image src="/images/profile.svg" width={40} height={40} alt="profile image" className="rounded-full" />
                  </div>
                  <div className="">
                      <h5 className="font-bold text-sm">Mark Benson</h5>
                      <p className="text-sm">{truncate("markbenson@coremed.com", 12)}</p>
                  </div>
              </div>

              <div className="mt-6">
                  <Image src="/icons/logout.svg" width={20} height={20} alt="logout" />
              </div>
          </div>
      </div>
    </aside>
  );
};

export default SideNav;
