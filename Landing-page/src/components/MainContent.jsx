import mobileBg from "../images/image-hero-mobile.png";
//styles
import classes from "./maincontent.module.css";
const MainContent = ({ clients }) => {
  return (
    <main className={classes.container}>
      <section>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes ,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className={classes.clients}>
          {clients.map((client, index) => (
            <div className={classes.imageContainer} key={index}>
              <img src={client.src} alt={client.name} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <img src={mobileBg} alt="a man with a laptop" />
      </section>
    </main>
  );
};

export default MainContent;
