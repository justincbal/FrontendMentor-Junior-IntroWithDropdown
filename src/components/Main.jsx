import "../styles/Main.css";

const Main = () => {
  return (
    <>
      <main>
        <section className="hero">
          <img
            className="heroImg"
            src="/image-hero-mobile.png"
            alt=""
          />
        </section>
        <section className="textSec">
          <h2>Make remote work</h2>
          <p>
            Get your team in sync. no matter your location. Streamline
            processes. create team rituals, and watch productivity soar.
          </p>
          <button className="lMButton">Learn more</button>
          <div className="logos">
            <img src="/client-databiz.svg" alt="" />
            <img src="/client-audiophile.svg" alt="" />
            <img src="/client-meet.svg" alt="" />
            <img src="/client-maker.svg" alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
