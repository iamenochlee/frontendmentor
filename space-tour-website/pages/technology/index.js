import Head from "next/head";
import React, { useEffect } from "react";
import useSWR from "swr";

import { useMediaQuery } from "react-responsive";
//styles
import classes from "./styles.module.css";
import { motion } from "framer-motion";

//data fetching
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Technology() {
  const isBigScreen = useMediaQuery({ minWidth: 672 });
  const [index, setIndex] = React.useState(null);

  //saving index
  useEffect(() => {
    if (index === null) {
      setIndex(0);
    } else {
      localStorage.setItem("index3", JSON.stringify(index));
    }
  }, [index]);

  //retrieving index

  useEffect(() => {
    const savedIndex = JSON.parse(localStorage.getItem("index3"));
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
    result = objectData.technology[index];
  }

  const variant = {
    hidden: { opacity: 0, x: 100, y: 80 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Head>
        <title>Space Tour Website | Technology</title>
      </Head>
      <div className={classes.home}>
        <h2 className={classes.title}>
          <span className={classes.info}>03 </span>Space Launch 101
        </h2>
        <div className={classes.body}>
          <div>
            <motion.img
              variants={variant}
              initial="hidden"
              animate="enter"
              exit="exit"
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className={classes.image}
              src={
                !isBigScreen
                  ? `${result?.images.landscape}`
                  : `${result?.images.portrait}`
              }
              alt={`${result?.name} image`}
            />
          </div>
          <motion.div
            className={classes.container}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div className={classes.nav}>
              {objectData?.technology.map((n, i) => (
                <button
                  aria-label="click to switch to see a new technology"
                  className={i === index ? classes.active : undefined}
                  key={i}
                  onClick={() => setIndex(i)}>
                  <h4>{i + 1}</h4>
                </button>
              ))}
            </div>
            <motion.div
              transition={{ duration: 0.6 }}
              variants={variant}
              initial="hidden"
              animate="enter"
              exit="exit"
              key={index}>
              <small className={classes.role}>The technology...</small>
              <h1 className={classes.name}>{result?.name}</h1>
              <p className={classes.desc}>{result?.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
