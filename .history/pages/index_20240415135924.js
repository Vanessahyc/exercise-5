import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import VerticalBar from "@/components/VerticalBar";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
       <VerticalBar/>
      </main>
    </>
  );
}
