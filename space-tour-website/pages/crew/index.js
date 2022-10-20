import Head from "next/head";
import useSWR from "swr";
import Image from "next/image";
//hooks
import useLocalStorage from "../../components/hooks/useLocalStorage";
//styles
import classes from "./styles.module.css";
import { motion } from "framer-motion";

//data fetching
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Crew() {
  const { index, setIndex } = useLocalStorage("crewIndex");

  //data fetching
  const { data, error } = useSWR("/api/staticdata", fetcher);
  let result;
  let objectData;
  if (data) {
    objectData = JSON.parse(data);
    result = objectData.crew[index];
  } else if (error) {
    console.log(error);
  }

  const variants = {
    hidden: { opacity: 0, x: 50 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>Space Tour Website | Crew</title>
      </Head>
      <div className={classes.home}>
        {result && (
          <>
            <h2 className={classes.title}>
              <span className={classes.info}>02</span> Meet Your Crew
            </h2>
            <motion.div
              className={classes.body}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}>
              <motion.div
                className={classes.image}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                key={index}
                transition={{
                  duration: 0.6,
                }}
                whileHover={{
                  x: 10,
                }}
                style={{ position: "relative" }}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={result?.images.png}
                  alt={`${result?.name} image`}
                />
              </motion.div>
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
                  transition={{
                    duration: 1,
                  }}
                  key={index}>
                  <h1 className={classes.role}>{result?.role}</h1>
                  <h2 className={classes.name}>{result?.name}</h2>
                  <p className={classes.desc}>{result?.bio}</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}
