import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const Content = getMDXComponent(post.body.code);

  return (
    <div className="w-screen h-screen bg-gradient-linear-5">
      <article className="py-8 mx-auto max-w-xl ">
        <div className="mb-8 text-center">
          <time dateTime={post.date as string} className="mb-1 text-xs text-gray-600">
            {format(parseISO(post.date as string), "LLLL d, yyyy")}
          </time>
          <h1>{post.title}</h1>
        </div>
        <Content />
      </article>
    </div>
  );
};

export default PostLayout;
