import Head from "next/head";
import React, { useEffect } from "react";
import useSWR from "swr";

//styles
import classes from "./styles.module.css";
import { motion } from "framer-motion";

//data fetching
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Crew() {
  const [index, setIndex] = React.useState(null);

  //saving index
  useEffect(() => {
    if (index === null) {
      setIndex(0);
    } else {
      localStorage.setItem("index2", JSON.stringify(index));
    }
  }, [index]);

  //retrieving index

  useEffect(() => {
    const savedIndex = JSON.parse(localStorage.getItem("index2"));
    if (savedIndex === null) {
      setIndex(0);
    } else {
      setIndex(savedIndex);
    }
  }, []);
  const { data, error } = useSWR("/api/staticdata", fetcher);
  let result;
  let objectData;
  if (data) {
    objectData = JSON.parse(data);
    result = objectData.crew[index];
  }

  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 200, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Space Tour Website | Crew</title>
      </Head>
      <div className={classes.home}>
        <h2 className={classes.title}>
          <span className={classes.info}>02</span> Meet Your Crew
        </h2>
        <motion.div
          className={classes.body}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}>
          <div className={classes.image}>
            <motion.img
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              key={index}
              whileHover={{
                x: 10,
              }}
              src={`${result?.images.png}`}
              alt={`${result?.name} image`}
            />
          </div>
          <div className={classes.container}>
            <div className={classes.nav}>
              {objectData?.crew.map((n, i) => (
                <button
                  aria-label="click to switch to see a new crew"
                  className={i === index ? classes.active : undefined}
                  key={i}
                  onClick={() => setIndex(i)}></button>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              key={index}>
              <h1 className={classes.role}>{result?.role}</h1>
              <h2 className={classes.name}>{result?.name}</h2>
              <p className={classes.desc}>{result?.bio}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
