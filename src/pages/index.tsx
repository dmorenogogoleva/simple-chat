import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Roboto } from "next/font/google";
import { clsx } from "clsx";
import { ChatContainer } from "@/components/ChatContainer/ChatContainer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

// interface HomeProps {
//   messages?: Message[];
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>simple chat</title>
        <meta name="description" content="just simple chat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx(styles.main, roboto.className)}>
        <header className={styles.header}>
          <h1>simple chat</h1>
        </header>
        <ChatContainer />
      </main>
    </>
  );
}

// export async function getServerSideProps() {
//   const messages = await getMessages();

//   return { props: { messages } };
// }

// export async function getServerSideProps() {
//   const res = await fetch(`https://cat-fact.herokuapp.com/facts`);
//   const data = await res.json();

//   return { props: { data } };
// }
