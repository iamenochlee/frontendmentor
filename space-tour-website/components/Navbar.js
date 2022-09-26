//dependencies
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//styles
import classes from "./Navbar.module.css";

//navbar
export default function Navbar() {
  const [shown, setShown] = useState(false);
  const router = useRouter();
  const node = useRef(null);

  //detecting and closing the sidenav on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (!node.current.contains(e.target)) {
        setShown(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [node]);

  //disabling scroll when the sidebar is open
  useEffect(() => {
    if (shown) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflowY = "unset";
    }
  }, [shown]);
  //this closes the sidenav whenever a new route is visited
  useEffect(() => {
    setShown(false);
  }, [router.pathname]);

  return (
    <>
      <nav className={classes.navbar}>
        <Link href="/">
          <img className={classes.logo} src="/images/logo.svg" alt="logo" />
        </Link>
        <span className={classes.line}></span>

        <div ref={node}>
          <button
            className={classes.button}
            aria-controls="navbarNav"
            aria-expanded={shown ? "true" : "false"}
            onClick={() => setShown(!shown)}
            style={{
              display: "block",
            }}>
            <img
              className={classes.toggler}
              src={
                !shown ? "/images/icon-hamburger.svg" : "/images/icon-close.svg"
              }
              aria-hidden="true"
              alt="toggle navigation visibility"
            />
          </button>
          <ul
            aria-labelledby="navbarNav"
            className={classes.menu}
            style={{
              left: !shown ? "100%" : "25%",
            }}>
            <li
              className={
                router.pathname == "/" ? `${classes.active}` : undefined
              }>
              <small>00</small>
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.pathname == "/destination" ? `${classes.active}` : ""
              }>
              <small>01</small>
              <Link a href="/destination">
                Destination
              </Link>
            </li>
            <li
              className={router.pathname == "/crew" ? `${classes.active}` : ""}>
              <small>02</small>
              <Link href="/crew">Crew</Link>
            </li>
            <li
              className={
                router.pathname == "/technology" ? `${classes.active}` : ""
              }>
              <small>03</small>
              <Link href="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
