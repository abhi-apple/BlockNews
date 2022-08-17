import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { SiBitcoin, SiEthereum, SiDogecoin } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdMoneyOff } from "react-icons/md";
import Link from "next/link";
const About = () => {
  const router = useRouter();
  const data = router.query;
  return (
    <div>
      <section className="text-yellow-400 body-font  bg-[#0b0a0a]">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
                {data.title}
              </h1>
            </div>
            <div className="shadow-lg rounded-3xl transition duration-1000 transform hover:shadow-amber-300   overflow-hidden">
              <picture>
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={data.image}
                />
              </picture>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <picture>
                    <img
                      src={`https://source.unsplash.com/random`}
                      className=" cursor-pointer rounded-full"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4  text-lg">
                    {data.author}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                  <p className="text-base text-neutral-50">
                    {data.description}
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-neutral-400 hover:text-neutral-50 text-lg mb-4">
                  {data.description}
                </p>
                <p className="leading-relaxed text-lg text-neutral-400 hover:text-neutral-50 mb-4">
                  {data.content}
                </p>
                <Link
                  href={`${data.urls}`}
                  passHref={true}
            
                  className="text-indigo-500 pt-2 inline-flex items-center"
                >
                <a target="_blank">
                  <button
                    type="button"
                    className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
                  >
                    {(() => {
                      switch (data.search) {
                        case "/bitcoin":
                          return (
                            <SiBitcoin
                              color="#fce48f"
                              className=" md:text-3xl pr-3 text-xl"
                            />
                          );
                        case "/ethereum":
                          return (
                            <SiEthereum
                              color="#fce48f"
                              className=" md:text-3xl pr-3 text-xl"
                            />
                          );
                        case "/dogecoin":
                          return (
                            <SiDogecoin
                              color="#fce48f"
                              className=" md:text-3xl pr-3 text-xl"
                            />
                          );
                        case "/solana":
                          return (
                            <MdMoneyOff
                              color="#fce48f"
                              className=" md:text-3xl pr-3 text-xl"
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                    Read More
                  </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
