import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           _updatedAt,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div className="hidden">Loading...</div>;
  const updatedAt = postData._updatedAt.split("T");

  return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="flex w-36">
        <Link to="/" className="border-2 p-2 ml-8 mb-2">
          Go back
        </Link>
        <Link to="/About" className="border-2 p-2 ml-8 mb-2">
          About
        </Link>
      </div>

      <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="w-1/2 bg-white bg-opacity-75 rounded p-12 text-center">
              <h2 className="cursive text-3xl lg:text-5xl mb-4">
                {postData.title}
              </h2>
              <div className="flex justify-center items-center flex-col text-gray-800">
                <img
                  src={urlFor(postData.authorImage).url()}
                  className="w-10 h-10 rounded-full"
                  alt="Author is Sergen"
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {postData.name}
                </h4>
                <h4 className="cursive">Updated at: {updatedAt[0]}</h4>
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(postData.mainImage).url()}
            alt=""
            style={{ height: "500px" }}
          />
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}
