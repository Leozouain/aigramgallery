/* eslint-disable react/prop-types */
import { HashLink as Link } from "react-router-hash-link";
import NewsCard from "../components/NewsCard";
import { useState } from "react";
import Carrousel from "../components/Carrousel";
import Contact from "../components/Contact";

export default function Main({ news }) {
  const [aiNews, setAiNews] = useState(3);

  return (
    <div>
      <div className="flex flex-row relative">
        <div
          className=" text-[var(--text-color)] h-[100vh] absolute sm:relative sm:bg-[rgba(6,6,6,0.66)] w-full sm:w-1/2 
        flex flex-col justify-center z-10 px-5"
        >
          <p className="sm:text-5xl text-3xl leading-snug my-6">
            {" "}
            AI Image Generators:
          </p>
          <p className="sm:text-3xl text-xl leading-relaxed mb-6">
            {" "}
            How They Work And Why <br /> They Are Important
          </p>
          <Link smooth to="/details/#detailsTop">
            <button className="w-48 z">See How it Works</button>
          </Link>
        </div>
        <div
          id="maintop"
          className="opacity-60 h-[100vh] bg-[url(https://cdn.leonardo.ai/users/0ef8aff5-694f-4a92-9145-6b1e5a0e2333/generations/3f44776c-5c3c-4f54-b754-8cddbc1fe8eb/variations/Default_full_headtoshoulder_portrait_soft_natural_lighting_Cut_0_3f44776c-5c3c-4f54-b754-8cddbc1fe8eb_1.jpg)]
        bg-[cover] bg-[center]    w-full sm:w-1/2"
        ></div>
      </div>

      <div
        className=" my-5 text-[var(--text-color)] bg-[rgba(6,6,6,0.66)]  
        py-4 md:text-6xl text-3xl font-bold text-center"
      >
        Explore the AiGram Gallery
      </div>
      <div className="flex flex-col items-center justify-center bg-[var(--secondary-color)]">
        <div
          className=" w-full md:w-[75vw]  h-[45vh] bg-[var(--secondary-color) ]
        flex justify-between items-center gap-4 relative overflow-hidden "
        >
          <Carrousel />
        </div>
        <Link to="/gallery" className="absolute">
          <button className="">Witness AI-Generated Wonders</button>
        </Link>
      </div>

      <div
        className=" 
        p-4   text-[2rem] text-[var(--third-color)] font-bold text-center"
      >
        Most Popular AI Tools
      </div>
      <div
        className="grid grid-cols-1 grid-rows-3
       md:grid-cols-3 overflow-hidden md:grid-rows-1 justify-evenly py-8 px-8"
      >
        <div
          className="mb-3   md:w-[30vw]  rounded-md bg-[var(--secondary-color)]
        "
        >
          <div className="max-h-[60%] overflow-hidden rounded-md m-4">
            <img
              src="https://global-uploads.webflow.com/644238b1cf656a0846763003/6459dce1dbf1473e835283ec_Leonardo%20AI%20(1).png"
              alt=""
            />
          </div>
          <div className="text-white max-w-[100%] p-4 pt-0 self-start">
            <h3 className="font-bold text-2xl">Leonardo Ai</h3>
            <p>
              "Unlock boundless creativity with Leonardo AI: Empowering your
              vision with cutting-edge design tools. Join now!"
            </p>
          </div>
          <Link
            target={`__blank`}
            to="https://leonardo.ai/"
            className="underline pb-3 self-start mx-4 
          text-[var(--text-color)] bg-[var(---color)]"
          >
            Learn more
          </Link>
        </div>

        <div
          className="mb-3 flex flex-col 
        justify-center items-center   md:w-[30vw]  rounded-md bg-[var(--secondary-color)]
        "
        >
          <div className="max-h-[60%] overflow-hidden rounded-md m-4">
            <img
              src="https://blog.adobe.com/en/publish/2023/03/21/media_17a0c7e1c188d83c0793b9807e1b027718113fb7b.png?width=750&format=png&optimize=medium"
              alt=""
            />
          </div>
          <div className="text-white max-w-[100%] p-4 pt-0 self-start">
            <h3 className="font-bold text-2xl">Adobe Firefly</h3>
            <p>
              "Unleash creativity with Adobe Firefly: Innovative design tools
              for stunning visuals. Join now!"
            </p>
          </div>
          <Link
            target={`__blank`}
            to="https://www.adobe.com/sensei/generative-ai/firefly.html"
            className="underline pb-3 self-start mx-4
          text-[var(--text-color)] bg-[var(---color)]"
          >
            Learn more
          </Link>
        </div>

        <div
          className="mb-3   md:w-[30vw]  rounded-md bg-[var(--secondary-color)]
        "
        >
          <div className="max-h-[60%] overflow-hidden rounded-md m-4">
            <img
              src="https://cdn.neowin.com/news/images/uploaded/2023/03/1680197846_midjourney-logo.jpg"
              alt=""
            />
          </div>
          <div className="text-white max-w-[100%] p-4 pt-0 self-start">
            <h3 className="font-bold text-2xl">Midjourney</h3>
            <p>
              ""Explore creativity with Midjourney: Unleash design potential
              through innovative tools. Join us now!"
            </p>
          </div>
          <Link
            target={`__blank`}
            to="https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F"
            className="underline pb-3 self-start mx-4
          text-[var(--text-color)] bg-[var(---color)]"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div className=" ">
        <p className="text-3xl text-[var(--third-color)] font-bold flex justify-center items-center text-[var(--text-color)">
          Ai News
        </p>
        <div className="mx-4 grid md:grid-cols-3 sm:grid-cols-2 gap-8 items-center justify-items-center py-4 ">
          {news.map((article, index) =>
            index < aiNews ? (
              <Link
                key={index}
                to={article.url}
                target={"__blank"}
                className=" hover:scale-110 transition-all
              text-[var(--text-color)] hover:text-[var(--text-color)]"
              >
                <NewsCard
                  author={article.author}
                  urlToImage={article.urlToImage}
                  title={article.title}
                  url={article.url}
                  publishedAt={article.publishedAt}
                  description={article.description}
                  source={article.source}
                />
              </Link>
            ) : null
          )}
        </div>
        <div className="flex justify-center items-center mb-5">
          {aiNews <= 22 && (
            <button onClick={() => setAiNews(aiNews + 3)} className="">
              See More
            </button>
          )}
        </div>
      </div>

      <div id="contactmain">
        <Contact/>
      </div>
    </div>
  );
}
