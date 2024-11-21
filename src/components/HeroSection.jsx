import HeroSectionImage from "../assets/images/hero-section-car-image.svg";

export const HeroSection = () => {
  return (
    <section className="mt-9 mb-12 px-10">
      <h1 className="font-serif font-semibold text-7xl mb-10 pb-8">
        The Pioneering Wheels: A Journey Through <br /> Cars of the 1900s
      </h1>

      <section className="w-full flex gap-2">
        <article className="w-1/2 flex flex-col justify-between">
          <p className="font-serif font-medium text-2xl">
            The turn of the 20th century marked a revolutionary period <br /> in
            the history of transportation, as the horse-drawn <br /> carriages
            were gradually being replaced by a novel <br /> invention – the
            automobile.
          </p>

          <article>
            <h3 className="font-serif font-semibold text-4xl mb-9">
              The Birth of an Era:
            </h3>
            <p className="font-sans-serif text-2xl font-normal leading-9 -tracking-normal">
              The late 1800s and early 1900s saw the birth of the <br />{" "}
              automotive industry, with inventors and innovators <br />{" "}
              experimenting with different designs and propulsion systems.{" "}
              <br /> One of the earliest and most iconic pioneers was Karl Benz,{" "}
              <br /> who is credited with creating the first true automobile. In{" "}
              <br /> 1886, Benz introduced the Benz Patent-Motorwagen, a <br />{" "}
              three-wheeled vehicle powered by an internal combustion <br />{" "}
              engine fueled by gasoline. Reflecting on his groundbreaking <br />{" "}
              invention, Benz stated, "I do not dream at night, I dream all{" "}
              <br /> day; I dream for a living."
            </p>
            <p className="font-sans-serif text-2xl font-normal leading-9 -tracking-normal mt-10">
              As the years progressed,other visionaries such as Henry Ford{" "}
              <br /> and the Dodge brothers joined the automotive revolution,{" "}
              <br /> each contributing to the evolution of the automobile. Ford,
              <br /> known for revolutionizing the production process with{" "}
              <br /> assembly line techniques, remarked, "Coming together is a{" "}
              <br /> beginning; keeping together is progress; working together
              is <br />
              success.
            </p>
          </article>
        </article>
        <div className="w-1/2">
          <img className="w-full" src={HeroSectionImage} alt="" />
        </div>
      </section>
    </section>
  );
};
