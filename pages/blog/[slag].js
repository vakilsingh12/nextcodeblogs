import React from "react";
import Styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";
const Slag = ({ blog }) => {
  const dangersly = (c) => {
    return { __html: c };
  };
  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <h1>Title of the Page {blog && blog.title}</h1>
        <hr />
        {blog && <div dangerouslySetInnerHTML={dangersly(blog.content)}></div>}
      </main>
    </div>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slag: "how-to-learn-javascript" } },
      { params: { slag: "how-to-learn-mern-stack" } },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { slag } = context.params;
  let blog = await fs.promises.readFile(`blogdata/${slag}.json`, "utf-8");
  return {
    props: { blog: JSON.parse(blog) },
  };
}

export default Slag;
