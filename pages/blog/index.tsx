import type { NextPage } from "next";
import { Heads } from "@components/Head";
import Tilt from "react-tilt";
import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import { GoBack } from "@utils/GoBack";
const Blogs: NextPage = ({ a }: any) => {
  return (
    <div className="w-full h-screen">
      <Heads page="Blog" />
      <div>
        <div className="ml-2 mt-2">
        <GoBack url="/"/>
        </div>
        <p className="text-gray-300 text-2xl font-extrabold text-center md:text-left md:ml-20 mt-20">
          Latest Blog Posts
        </p>
      
        <div className="ml-1 grid md:grid-cols-2  xl:grid-cols-3 xl:ml-10 grid-cols-1 mt-4 gap-y-5 mr-4">
            {a.length > 0 &&
              a.map((data: any, index: number) => {
                let tags = data.tags.split(",");
                if (index < 3)
                  return (
                    <div key={index}>
                    < BlogCard data={data} tags={tags} key={index}/>
                    </div>
                  );
              })}
          </div>
          <div>
          <p className="text-gray-300 text-2xl font-extrabold text-center md:text-left md:ml-20 mt-20">
          All Blog Posts
        </p>
        <div className="ml-1 grid md:grid-cols-2  xl:grid-cols-3 xl:ml-10 grid-cols-1 mt-4 gap-y-5 mr-4">
            {a.length > 0 &&
              a.map((data: any, index: number) => {
                let tags = data.tags.split(",");
              
                  return (
                    <div key={index}>
                    < BlogCard data={data} tags={tags} key={index}/>
                    </div>
                  );
              })}
          </div>
          </div>
        </div>
      </div>
  );
};

export default Blogs;

const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");
export function getStaticProps() {
  const postsDir = path.join(process.cwd(), "posts");

  let doba = fs.readdirSync(postsDir);
  let duba: any = [];
  let str;
  doba.forEach((file: any) => {
    str = fs.readFileSync(`${postsDir}/${file}`, "utf8");
    duba.push(matter(str).data);
  });



  return {
    props: {
      a: duba,
    },
  };
}

function BlogCard({data,tags}:any){
  return (
    <div
    className="w-96 rounded-lg h-32 mx-auto  over:scale-110 bg-[#1f2023] transition duration-500 ease-in-out hover:scale-110"
  >
    <Link href={`/blog/${data && data.url}`}>
      <a href={`/blog/${data && data.url}`} rel="noreferrer">
        <div className="flex">
          <img
            src={data && data.photo}
            className="w-20 h-20 my-auto mt-4 rounded ml-2"
          />

          <div className="flex flex-col mx-auto ml-6 mt-3">
            <div className="flex">
              <p className=" text-white text-2xl font-bold">
                {data && data.title}
              </p>
              <p className="flex mt-3">
                <BiTimeFive className=" ml-10 mt-0.5 text-gray-200" />
                <span className=" font-medium ml-1 text-sm text-gray-200">
                  {data.date}
                </span>
              </p>
              
            </div>
            <p className="text-gray-300 text-sm mr-2">
              {data && data.description}
            </p>
            <div className="flex mt-2">
              {tags &&
                tags.length > 0 &&
                tags.map((tag: string, index: number) => (
                  <div className="p-1  bg-gradient-to-r from-indigo-500 to-blue-400 text-white mr-2 rounded" key={index}>
                    <p className="text-sm font-medium ">
                      {tag}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  </div>
  )
}