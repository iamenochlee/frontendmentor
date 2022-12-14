import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";

//hooks
import useLocalStorage from "../../components/hooks/useLocalStorage";
//styles
import classes from "./styles.module.css";
import { motion } from "framer-motion";

//data fetching
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Destination() {
  const { index, setIndex } = useLocalStorage("destinationIndex");

  //data fetcher
  const { data } = useSWR("/api/staticdata", fetcher);
  let result;
  let objectData;
  if (data) {
    objectData = JSON.parse(data);
    result = objectData.destinations[index];
  }

  //framer oton animation
  const variants = {
    hidden: { rotate: 0 },
    enter: { rotate: 180 },
    exit: { rotate: 360 },
  };

  const variant = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  //app
  return (
    <>
      <Head>
        <title>Space Tour Website | Destination</title>
      </Head>
      <div className={classes.home}>
        <h2 className={classes.title}>
          <span className={classes.info}>01</span> Pick Your Destination
        </h2>
        <div className={classes.body}>
          <div transition={{ type: "linear" }}>
            {data && (
              <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                className={classes.image}
                style={{ position: "relative" }}
                whileHover={{
                  scale: 1.09,
                }}
                transition={{ duration: 0.5 }}
                key={index}>
                <Image
                  layout="fill"
                  src={result?.images.png}
                  alt={`${result?.name} image`}
                />
              </motion.div>
            )}
          </div>
          <motion.div
            className={classes.container}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div className={classes.nav}>
              {objectData?.destinations.map((n, i) => (
                <button
                  aria-label="click to switch to see a new destination"
                  className={i === index ? classes.active : undefined}
                  key={i}
                  onClick={() => setIndex(i)}>
                  {n.name}
                </button>
              ))}
            </div>
            <motion.div
              key={index}
              variants={variant}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear" }}>
              <h1 className={classes.planet}>{result?.name}</h1>
              <p className={classes.desc}>{result?.description}</p>
              <div className={classes.stats}>
                <div className={classes.details}>
                  <h3>Avg Distance</h3>
                  <p>{result?.distance}</p>
                </div>
                <div className={classes.details}>
                  <h3>Est. Travel time</h3>
                  <p>{result?.travel}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
