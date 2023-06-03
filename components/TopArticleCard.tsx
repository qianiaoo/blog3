import React from "react";
import { Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

export type ArticleCardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export const TopArticleCard = ({ post }: { post: Post }) => {
  const Content = getMDXComponent(post.body.code);
  console.log("post");
  console.log(post);

  return (
    <Link href={post.url}>
      <article
        className="flex flex-col sm:flex-row  rounded-b-3xl border-x-2 border-b-2 border-black
       overflow-hidden shadow-lg
    max-w-md mx-auto hover:scale-105 transition-transform duration-200"
      >
        {/*<img className="h-32 w-full object-cover sm:h-full sm:w-2/5" src={"/wall.jpg"} alt="Article Image" />*/}
        <div className="w-full sm:w-2/5">
          <img className="h-32 sm:h-full w-full object-cover" src={post.image} alt="pic of the post" />
          {/*<img className="h-32 w-full object-cover sm:h-full sm:w-2/5" src="/wall.jpg" alt="文章图片" />*/}
        </div>
        <div className="w-full p-6 flex flex-col my-auto justify-between">
          <div>
            <span className="font-bold text-2xl text-black line-clamp-2">{post.title}</span>
            <div className="mt-2 text-gray-500 line-clamp-3">{post.summary}</div>
          </div>
        </div>
      </article>
    </Link>
  );
};
