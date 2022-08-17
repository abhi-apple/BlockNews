// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useEffect } from "react";
export default function handler(req, res) {
  // useEffect(() => {
  //   axios
  //     .get(`https://newsapi.org/v2/everything?q=${SEARCH}&apiKey=${API_KEY}`)
  //     .then((res) => {
  //       setcoins(res.data.articles);
  //       console.log(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // });
  res.status(200).json({ name: 'John Doe' })
}
