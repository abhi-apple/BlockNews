import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { DiFsharp } from "react-icons/di";
import { MdSecurity } from "react-icons/md";
import {
  AiFillCodeSandboxSquare,
  AiFillEyeInvisible,
  AiOutlineQrcode,
} from "react-icons/ai";
import { BsGearWideConnected } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";
export default function Home() {
  return (
    <div>
      <Head>
        <title>BlockNews</title>
        <meta name="description" content="BlockNews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        {/* <img className="h-fit hover:rotate-180 transition duration-1000 transform" src="/eth.jpeg" alt="" /> */}
        <Slideshow/>
      </div>
      <section className=" body-font bg-[#0b0a0a]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20  flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-yellow-400">
              Blockchain The Future
            </h1>
            <p className="lg:w-1/2 text-neutral-400 hover:text-neutral-50 w-full leading-relaxed text-opacity-80">
              Building a New Future So lets build it together and make it Great
            </p>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#fce48f] mb-4">
                  <MdSecurity />
                </div>
                <h2 className="text-lg text-yellow-400 font-medium title-font mb-2">
                  Immutability
                </h2>
                <p className="leading-relaxed text-base text-neutral-400 hover:text-neutral-50 ">
                  There are some exciting blockchain features but among them
                  “Immutability” is undoubtedly one of the key features of
                  blockchain technology. But why is this technology uncorrupted?
                  Let’s start with a connecting blockchain with immutability.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#fce48f] mb-4">
                  <BsGearWideConnected />
                </div>
                <h2 className="text-lg text-yellow-400 font-medium title-font mb-2">
                  Decentralized
                </h2>
                <p className="leading-relaxed text-base text-neutral-400 hover:text-neutral-50">
                  you can store anything starting from cryptocurrencies,
                  important documents, contracts or other valuable digital
                  assets. And with the help of blockchain, you’ll have direct
                  control over them using your private key. So, you see the
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#fce48f] mb-4">
                  <AiFillCodeSandboxSquare />
                </div>
                <h2 className="text-lg text-yellow-400 font-medium title-font mb-2">
                  Enhanced Security
                </h2>
                <p className="leading-relaxed text-base text-neutral-400 hover:text-neutral-50">
                  Every information on the blockchain is hashed
                  cryptographically. In simple terms, the information on the
                  network hides the true nature of the data. For this process,
                  any input data gets through a mathematical algorithm that
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#fce48f] mb-4">
                  <AiFillEyeInvisible />
                </div>
                <h2 className="text-lg text-yellow-400 font-medium title-font mb-2">
                  Distributed Ledgers
                </h2>
                <p className="leading-relaxed text-base text-neutral-400 hover:text-neutral-50">
                  Usually, a public ledger will provide every information about
                  a transaction and the participant. It’s all out in the open,
                  nowhere to hide. Although the case for private or federated
                  blockchain is a bit different. But still, in those cases, many
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#fce48f] mb-4">
                  <AiOutlineQrcode />
                </div>
                <h2 className="text-lg text-yellow-400 font-medium title-font mb-2">
                  Consensus
                </h2>
                <p className="leading-relaxed text-base text-neutral-400 hover:text-neutral-50">
                  Every blockchain thrives because of the consensus algorithms.
                  The architecture is cleverly designed, and consensus
                  algorithms are at the core of this architecture. Every
                  blockchain has a consensus to help the network make decisions.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#fce48f] mb-4">
                  <DiFsharp />
                </div>
                <h2 className="text-lg text-yellow-400 font-medium title-font mb-2">
                  Faster Settlement
                </h2>
                <p className="leading-relaxed text-base text-neutral-400 hover:text-neutral-50">
                  Traditional banking systems are quite slow. Sometimes it can
                  take days to process a transaction after finalizing all
                  settlements. It also can be corrupted quite easily. Blockchain
                  offers a faster settlement compared to traditional banking
                </p>
              </div>
            </div>
          </div>
          <a
            href="http://cryptex2.netlify.app/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <button className="flex mx-auto mt-16 text-black bg-[#fce48f] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-300 rounded text-lg">
              Visualize
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
