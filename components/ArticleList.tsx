import React from "react";

import { Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

export const ArticleCard = ({ post }: { post: Post }) => {
  const Content = getMDXComponent(post.body.code);

  return (
    <div
      className="flex flex-col sm:flex-row overflow-hidden  border-b border-gray-300  max-w-full mx-auto
      hover:scale-105 transition-transform duration-200 hover:shadow-md"
    >
      <div className="flex-1 p-6">
        <div className="font-bold text-xl text-black overflow-hidden">
          <div className="line-clamp-2">{post.title}</div>
        </div>

        <div className="mt-2 text-gray-500">{post.summary}</div>
      </div>
      {!post.image.endsWith("undefined") && (
        <div className="w-full sm:w-1/3">
          <img className="object-cover h-48 w-full sm:h-auto sm:min-h-full" src={post.image} alt="Article Image" />
        </div>
      )}
    </div>
  );
};

const ArticleList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="h-full overflow-auto snap-y border-x-2 border-t-2 border-black rounded-t-3xl  ">
      {posts.map((article) => {
        return (
          <Link key={article.url} href={article.url}>
            <ArticleCard post={article} />
          </Link>
        );
      })}
    </div>
  );
};

export default ArticleList;
