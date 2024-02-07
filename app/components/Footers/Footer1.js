import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "../../constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full py-6 md:py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-6 justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className="text-sm text-gray-600">
                  {columns.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href="/" passHref className="hover:text-blue-500">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5 md:w-1/3">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, idx) => (
                  <p key={idx} className="text-sm text-gray-600">
                    <span className="font-medium">{link.label}:</span>{" "}
                    <span className="text-blue-500">{link.value}</span>
                  </p>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <div className="flex gap-4 text-gray-600">
                  {SOCIALS.links.map((SocialIcon, index) => (
                    <span key={index} className="cursor-pointer">
                      {SocialIcon}
                    </span>
                  ))}
                </div>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 md:mt-8" />

        <p className="text-sm text-center text-gray-600 mt-6 md:mt-8">
          2024 0x3f.Lancers | All rights reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-base font-semibold">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
