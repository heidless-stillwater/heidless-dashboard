import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Dashboard from "@/pages/dashboard";
import Header from "@/pages/components/Header";
import SideMenu from "@/pages/components/SideMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Heidless Data Daskboard</title>
        <meta name="description" content="Heidless Data Daskboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <Header />
        <SideMenu />
        <Dashboard />
      </main>
    </>
  );
}
