//dependencies
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
//hooks
import useClickOutsideToClose from "./hooks/useClickOutsideToClose";

//styles
import classes from "./Navbar.module.css";

//navbar
export default function Navbar() {
  const [shown, setShown] = React.useState(false);
  const router = useRouter();
  const { node } = useClickOutsideToClose(setShown);

  //disabling scroll when the sidebar is open
  React.useEffect(() => {
    if (shown) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflowY = "unset";
    }
  }, [shown]);
  //this closes the sidenav whenever a new route is visited
  React.useEffect(() => {
    setShown(false);
  }, [router.pathname]);

  return (
    <>
      <nav className={classes.navbar}>
        <Link href="/">
          <a
            className={classes.logo}
            href=""
            style={{ position: "relative", display: "block" }}>
            <Image src="/images/logo.svg" alt="logo" layout="fill" />
          </a>
        </Link>
        <span className={classes.line}></span>

        <div ref={node}>
          <button
            className={classes.button}
            style={{ display: "block" }}
            aria-labelledby="navbarNav"
            aria-haspopup="true"
            aria-expanded={shown ? "true" : "false"}
            onClick={(e) => {
              e.preventDefault();
              setShown(!shown);
            }}>
            <Image
              height="100%"
              width="100%"
              style={{ display: "block" }}
              src={
                !shown ? "/images/icon-hamburger.svg" : "/images/icon-close.svg"
              }
              aria-hidden="true"
              alt="toggle navigation visibility"
            />
          </button>

          <ul
            id="navbarNav"
            aria-label="navbarNav"
            className={classes.menu}
            style={{
              left: "25%",
              display: !shown ? "none" : "block",
            }}>
            <li
              className={
                router.pathname == "/" ? `${classes.active}` : undefined
              }>
              <small aria-hidden="true">00</small>
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.pathname == "/destination" ? `${classes.active}` : ""
              }>
              <small aria-hidden="true">01</small>
              <Link a href="/destination">
                Destination
              </Link>
            </li>
            <li
              className={router.pathname == "/crew" ? `${classes.active}` : ""}>
              <small aria-hidden="true">02</small>
              <Link href="/crew">Crew</Link>
            </li>
            <li
              className={
                router.pathname == "/technology" ? `${classes.active}` : ""
              }>
              <small aria-hidden="true">03</small>
              <Link href="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
