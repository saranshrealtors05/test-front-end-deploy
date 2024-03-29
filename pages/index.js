import { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get("http://13.60.28.193/api/aws");
  //       console.log(response.data); // Log the response data to the console
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>hello Next js</h1>
      </main>
    </>
  );
}
