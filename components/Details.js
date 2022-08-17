import React from "react";
import About from "../pages/about";
import Link from "next/link";
function Details(props) {
  return (
    
    <div className="lg:w-1/4 md:w-1/2 p-4 shadow-lg rounded-3xl transition duration-1000 transform hover:shadow-amber-300 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <picture>

        <img
          alt="ecommerce"
          className="m-auto md:m-0 mt-2 md:w-full  h-[30vh]   block"
          src={props.image}
        />
        </picture>
      </a>
      <Link
        href={{
          pathname: "/about",
          query: {title: props.title,urls:props.url, image: props.image, content: props.content,search: props.search,description: props.description, author: props.author ,},
        }}
      >
        <div className="mt-4 text-center">
          <button>
            <h3 className="  text-base tracking-widest font-serif text-neutral-400 hover:text-neutral-50 title-font mb-1">
              {props.title}
            </h3>
          </button>

        </div>
      </Link>
    </div>
  );
}

export default Details;
