import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiBlockchaindotcom } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRef } from "react";
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className=" flex md:flex-row pb-5 flex-col bg-[#050404] ">
      <Link href="/">
        <div className="logo mx-3  text-xs pb-3 pt-4">
          <Image
            src="/logo.png"
            className=" cursor-pointer rounded-2xl"
            width={140}
            height={50}
            alt=""
          />
        </div>
      </Link>
      <div className="nav ">
        <ul className="flex mx-3 space-x-2 pb-1  items-center  md:pb-3 pt-6 text-[#fce48f]  md:space-x-10 md:text-lg font-semibold ">
          <a></a>
          <Link href={"/bitcoin"}>
            <a>
              <li className="hover:text-yellow-500 pb-1 ">Bitcoin</li>
            </a>
          </Link>
          <Link href={"/ethereum"}>
            <a>
              <li className="hover:text-yellow-500 pb-1">Ethereum</li>
            </a>
          </Link>
          <Link href={"/solana"}>
            <a>
              <li className="hover:text-yellow-500 pb-1">Solana </li>
            </a>
          </Link>
          <Link href={"/dogecoin"}>
            <a>
              <li className="hover:text-yellow-500 pb-1">Dogecoin</li>
            </a>
          </Link>
          <Link href={"/tether"}>
            <a>
              <li className="hover:text-yellow-500 pb-1">Tether</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className=" cursor-pointer pt-4 flex absolute rounded-full right-0 top-3 mx-3"
      >
        <h1 className="text-neutral-300 pr-5  font-mono font-semibold  hover:text-white ">More Projects</h1>
        <SiBlockchaindotcom color="#fce48f" className=" md:text-3xl text-xl" />
      </div>
      <div
        ref={ref}
        className="sidebar absolute top-1 right-1 rounded-xl bg-[#fce48f] pt-8 pl-5 pr-2 trasfrom transition-transform translate-x-full"
      >
        <h2 className="font-bold pb-2 text-xl"> Projects On Blockchain</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2  cursor-pointer text-yellow-700 text-2xl"
        >
          <AiFillCloseCircle />
        </span>
        <div className=" w-full pl-6 px-4">

          <nav className="list-none pl-8 space-y-2 mb-10">
            <li>
              <a
                href="https://ethcrypt.netlify.app/"
                className="text-slate-900 hover:font-semibold cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
               1. Ethcrypt
              </a>
            </li>
            <li>
              <a
                href="https://cryptex2.netlify.app/"
                className="cursor-pointer  text-slate-900 hover:font-semibold "
                target="_blank"
                rel="noreferrer"
              >
               2. Cryptex
              </a>
            </li>
            <li>
              <a
              href="https://blocktech.netlify.app/"
                className="cursor-pointer text-slate-900 hover:font-semibold "
                target="_blank"
                rel="noreferrer"
              >
              3. BlockTech
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
