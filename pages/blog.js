import Link from "next/link";
import React, { useEffect, useState } from "react";
import Styles from "../styles/Blog.module.css";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";
const blog = ({ allblog,allcount }) => {
  const [blogData, setAllblog] = useState(allblog);
  const [count, setcount] = useState(2);
  const fetchMoreData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`);
    setcount(count+2)
    let data = await d.json();
    setAllblog(data);
  };
  return (
    <>
      <div className={Styles.blog}>
        <h1>------Latest Blogs------</h1>
        <InfiniteScroll
          dataLength={blogData.length}
          next={fetchMoreData}
          hasMore={blogData.length!==allcount}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogData.map((blog) => {
            return (
              <div className={Styles.innerDev} key={blog.slug}>
                <Link href={`./blog/${blog.slug}`}>
                  <h2>{blog.title}</h2>
                </Link>
                <p>{blog.content.substr(0, 200)}</p>
                <Link href={`./blog/${blog.slug}`}>
                  <button type="submit" className={Styles.btnPrimary}>
                    Read More
                  </button>
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
};
export async function getStaticProps(context) {
  let data = await fs.promises.readdir(`blogdata`);
  let allcount=data.length
  let allblog = [];
  for (let index = 0; index < 2; index++) {
    let item = data[index];
    let allData = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allblog.push(JSON.parse(allData));
  }
  return {
    props: {
      allblog,
      allcount
    },
  };
}
export default blog;
