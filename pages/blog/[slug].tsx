import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoBack } from "@utils/GoBack";
import hljs from "highlight.js";

var showdown = require("showdown"),
  converter = new showdown.Converter();

const Slug = ({ data }: any) => {
  useEffect(() => {
    hljs.highlightAll();
  });
  let router = useRouter();
  data = JSON.parse(data);
  return (
    <div>
      <div className="ml-2 mt-2">
        <GoBack url="/blog" />
      </div>
      <img
        src={data.data.photo}
        className="md:h-96 w-8/12 mx-auto rounded-md mt-10"
      />
      {console.log(data.title)}
      <p className="text-white text-center text-5xl font-bold mt-4">
        {data.data.title}
      </p>
      <main className="md:ml-20 mx-auto m-5 ">
        <div
          className="prose text-white m-3 prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-a:text-[#60A5FA] prose-a:no-underline	 prose-strong:text-white prose-code:rounded prose-code:overflow-auto prose-code:max-h-48"
          dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.content) }}
        />
      </main>
    </div>
  );
};

const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

export function getStaticProps(context: any) {
  const postsDir = path.join(process.cwd(), "posts");
  let postsPath = fs.readdirSync(postsDir);
  let filedataArray: any = [];
  let str;
  postsPath.forEach((file: any) => {
    str = fs.readFileSync(`${postsDir}/${file}`, "utf8");
    filedataArray.push({ url: matter(str).data.url, data: matter(str) });
  });
  let filtered = filedataArray.filter(
    (data: any) => data.url === context.params.slug
  );
  return {
    props: {
      data: JSON.stringify(filtered[0].data),
    },
  };
}
export const getStaticPaths = () => {
  const postsDir = path.join(process.cwd(), "posts");
  let postsPath = fs.readdirSync(postsDir);
  const paths = postsPath.map((file: any) => {
    let str = fs.readFileSync(`${postsDir}/${file}`, "utf8");
    let slug = matter(str).data.url;
    return {
      params: { slug: slug.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default Slug;
