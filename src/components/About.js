import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-green-100 min-h-screen p-12">
      <div className="mb-4">
        <Link to="/" className="border-2 p-2 ml-8">
          Go Back
        </Link>
      </div>
      <div className="container mx-auto h-max">
        <h1 className="text-red-500 text-3xl">About Me</h1>
        <div className="w-full flex flex-col justify-between items-center p-0 mt-8 sm:flex-row md:flex-row sm:items-start">
          <div className="w-full sm:w-1/3 md:text-2xl">
            <p className="text-gray-700">
              Hello it's me, Sergen, and I'm a community-taught web developer. I
              love learning. Since the pandemic started, I've learned to play
              the guitar and web development utilising free resources online. I
              got myself a degree in Psychology and then I went on and moved to
              the UK to get my Master's degree so I could work in tech
              companies. But little did I know, that wasn't going to be enough
              for me, personally. I had to learn how to code. For any enquiries
              please visit my{" "}
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.sergendemir.com/Contact"
                  className="text-red-400"
                >
                  website.
                </a>
              </span>
            </p>
            <h1 className="text-red-500 sm:text-2xl mt-8">
              Main Resources I've Used:
            </h1>
            <ul className="list-disc mt-4">
              <li className="text-gray-700 text-lg ">
                <a href="/">FreeCodeCamp</a>
              </li>
              <li className="text-gray-700 text-lg">
                <a href="/">CodeCademy</a>
              </li>
              <li className="text-gray-700 text-lg">
                <a href="/">W3Schools</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 mt-4 flex justify-center items-center sm:mt-0 ">
            <img
              className="w-full"
              src="https://www.sergendemir.com/static/media/profile_picture2.4494aceb.JPG"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
