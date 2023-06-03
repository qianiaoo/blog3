import { defineDocumentType, makeSource } from "contentlayer/source-files";

const getSummarizedText = (rawText: string) => {
  const plainText = rawText.replace(/[*_~`#]+/g, "").trim(); // strip markdown formatting
  const firstSentence = plainText.indexOf("。");
  if (firstSentence <= 120) {
    return plainText.substring(0, firstSentence + 1);
  }
  return plainText.substring(0, 120) + "...";
};

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The image of the post",
      required: false,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    image: {
      type: "string",
      resolve: (doc) => `/images/${doc.image}`,
    },
    summary: {
      type: "string",
      resolve: (doc) => {
        return getSummarizedText(doc.body.raw); // strip markdown formatting
      },
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
