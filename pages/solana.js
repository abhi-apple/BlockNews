
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import Head from "next/head";
// import Details from "../components/Details";
// const Solana = () => {
//   const router = useRouter();
//   console.log(router.asPath);
//   const SEARCH = router.asPath;
//   // const { slug } = router.query
//   const API_KEY = "78b45085752c4e7aaa51f2e603be5b64";
//   const [coins, setcoins] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`https://newsapi.org/v2/everything?q=${SEARCH}&apiKey=${API_KEY}`)
//       .then((res) => {
//         setcoins(res.data.articles);
//         console.log(res.data);
//       })
//       .catch((error) => console.log(error));
//   });

  
//   return (
//     <>
//           <Head>
//         <title>Solana</title>
//         <meta name="description" content="BlockNews" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//     <section className="text-yellow-300   body-font bg-[#0b0a0a]">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {console.log(coins)}
//             {coins?.map((coin) => {
//               return (
//                 <Details image={coin?.urlToImage} search={SEARCH} description={coin?.description} content={coin?.content} author={coin?.author} title={coin?.title} publishedAt={coin?.publishedAt} key={coin?.urlToImage}  />
//               );
//             })}

//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default Solana;


import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import Details from "../components/Details";
const Solana = ({news}) => {
  const router = useRouter();
  // console.log(router.asPath);
  const SEARCH = router.asPath;
  const API_KEY = "78b45085752c4e7aaa51f2e603be5b64";
  const [coins, setcoins] = useState([]);
  useEffect(() => {
    setcoins(news.articles);
   },[news])

  return (
    <>
      <Head>
        <title>Solana</title>
        <meta name="description" content="BlockNews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-yellow-300   body-font bg-[#0b0a0a]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* {console.log(coins)} */}
            {coins?.map((coin) => {
              return (
                <Details
                  image={coin?.urlToImage}
                  search={SEARCH}
                  description={coin?.description}
                  content={coin?.content}
                  author={coin?.author}
                  title={coin?.title}
                  publishedAt={coin?.publishedAt}
                  key={coin?.urlToImage}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solana;

export const getStaticProps = async () => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=solana&apiKey=78b45085752c4e7aaa51f2e603be5b64`);
  const coin = await res.json();
  return {
    props: {
      news: coin,
    },
  };
};
