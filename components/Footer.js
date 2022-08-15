import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { SiCodechef, SiHackerrank } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <footer className="text-white bg-black body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href="/">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-yellow-400">
                <Image
                  src="/logo.png"
                  className="cursor-pointer rounded-xl pb-3"
                  width={160}
                  height={60}
                  alt=""
                />
              </a>
            </Link>
            <p className="mt-2 text-sm text-gray-500 hover:text-stone-50">
              Blockchain technology could change our world more than people can ever image 
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
                BITCOIN
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://bitcoin.org/en/"
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/bitcoin/bitcoin"
                    className="text-neutral-400 cursor-pointer  hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git-Hub
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reddit
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
                ETHEREUM
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git-Hub
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reddit
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
                SOLANA
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git-Hub
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reddit
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-yellow-400 tracking-widest text-sm mb-3">
                DOEGECOIN
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git-Hub
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Reddit
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 cursor-pointer hover:text-neutral-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 Abhinay —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @abhinayreddy0112@gmail.com
              </a>
            </p>
            <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center pb-6 sm:justify-start">
              <a target="_blank" rel="noreferrer"  className="text-2xl hover:text-3xl transition  delay-150 duration-300 mr-3 cursor-pointer" href="https://www.instagram.com/abhinay_reddy_gujjala/">
                <AiFillInstagram className="hover:bg-yellow-400 border-cyan-400 hover:rounded-lg"  />

              </a>

              <a target="_blank" rel="noreferrer"  className="text-2xl hover:text-3xl transition delay-150 duration-300  mr-3 cursor-pointer" href="https://github.com/abhi-apple">
                <AiFillGithub className="hover:bg-yellow-400 border-cyan-400 hover:rounded-lg" />
              </a>

              <a target="_blank" rel="noreferrer"  className="text-2xl hover:text-3xl transition delay-150 duration-300  mr-3 cursor-pointer" href="https://www.linkedin.com/in/gujjala-abhinay-prakash-reddy-9375a1203/">
                <AiFillLinkedin className="hover:bg-yellow-400 border-cyan-400 hover:rounded-lg" />
              </a>

              <a target="_blank" rel="noreferrer"  className="text-2xl hover:text-3xl transition delay-150 duration-300  mr-3 cursor-pointer" href="https://www.codechef.com/users/abhi1890">
                <SiCodechef className="hover:bg-yellow-400 border-cyan-400 hover:rounded-lg" />
              </a>

              <a target="_blank" rel="noreferrer"  className="text-2xl hover:text-3xl transition delay-150 duration-300  mr-3 cursor-pointer" href="https://www.hackerrank.com/abhinayreddy0112">
                <SiHackerrank className="hover:bg-yellow-400 border-cyan-400 hover:rounded-lg" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
