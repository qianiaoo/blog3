import React from "react";
import { LuConstruction } from "react-icons/lu";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900" legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date as string} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.date as string), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

const SideList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col p-5">
      <h1 className="mx-auto font-bold text-2xl hover:underline">Archive List</h1>
      <div className="flex mt-10 gap-5 mx-auto font-bold text-2xl">
        <div className="flex flex-col">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideList;
