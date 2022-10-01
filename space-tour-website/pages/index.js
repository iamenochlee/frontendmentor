import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";

//styles
import classes from "../styles/Home.module.css";
import { motion } from "framer-motion";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/staticdata", fetcher);
  let homeData;
  let objectData;
  if (data) {
    objectData = JSON.parse(data);
    homeData = objectData.home;
  }

  return (
    <>
      <Head>
        <title>Space Tour Website | Home</title>
      </Head>
      <div className={classes.home}>
        {homeData?.map((home, index) => (
          <div key={index} className={classes.container}>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.5 }}>
              <p className={classes.title}>{home.intro}</p>
              <h1 className={classes.header}>{home.name}</h1>
              <p className={classes.desc}>{home.desc}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.8 }}>
              <div className={classes.circle}>
                <div className={classes.effect}></div>
                <Link className={classes.text} href="/destination">
                  {home.type}
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}
