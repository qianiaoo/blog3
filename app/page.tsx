import SideList from "components/SideList";
import ArticleList from "components/ArticleList";
import LinkCard from "components/LinkCard";
import ProfileCard from "components/ProfileCard";
import { TopArticleCard } from "components/TopArticleCard";
import TypewriterEffect from "components/TypewriterEffect";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Home() {
  console.log("33333333333");
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date as string), new Date(b.date as string)));
  console.log("posts", posts);

  return (
    <main className="bg-gradient-linear-3">
      <div className="grid grid-cols-4 h-screen overflow-hidden">
        <div className="hidden lg:grid lg:col-span-1 grid-rows-3 pl-14 pr-5">
          <div className="row-span-2  ">
            <ProfileCard />
          </div>
          <div className="row-span-1 flex items-end">
            <LinkCard />
          </div>
        </div>
        <div className="col-span-4 flex flex-col lg:col-span-2 px-5 overflow-auto lg:overflow-hidden">
          <div className="h-fit">
            <TopArticleCard post={posts[0]} />
          </div>
          <div className="min-h-[5rem]  flex justify-center items-center">
            <TypewriterEffect />
          </div>
          <div className="h-auto lg:h-screen overflow-y-auto lg:overflow-hidden">
            <ArticleList posts={posts} />
          </div>
        </div>
        <div className="hidden lg:grid lg:col-span-1 pl-5">
          <div className="w-full h-full border-l-2 border-black">
            <SideList posts={posts} />
          </div>
        </div>
      </div>
    </main>
  );
}
