import React from "react";
import Head from "next/head";
// import Image from 'next/image'
import Styles from "../styles/Home.module.css";
const index = () => {
  return (
    <div>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="generaed by next app" />
        <meta name="keywords" content="nextjs,hunting blog,hunting coder" />
      </Head>
      {/* <Script src='sc.js' strategy='lazyOnload'>
     </Script> */}
      <div className={Styles.grid}>
        <div className="blog">
          <h1 className={Styles.head}>&lt;Hunting Coder/&gt;</h1>
          <img
            src="/coder.avif"
            className={Styles.myImg}
            width={250}
            height={170}
          />
          <p>
            This blog solve your all query Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Explicabo quas repellat, dicta,
            perferendis ullam assumenda, voluptatum quod voluptatem ipsam
            praesentium magnam placeat vitae!
          </p>
          <h1 className={Styles.mainHead}>------Latest Blogs------</h1>
          <div>
            <h2 className="subHead">How to learn Javascript in 2022?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <h2 className="subHead">How to learn Java in 2022?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default index;
