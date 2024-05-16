import restaurant from "../assets/restaurant-3.jpg";
import founder from "../assets/carmy-sydney-4.jpg";
import table from "../assets/restaurant-4.jpg";

function About() {
  return (
    <section id="about">
      <div className="about-section">
        <div className="img-container image-1">
          <img alt="Little Lemon Restaurant" src={restaurant} style={{ objectPosition: "0 60%" }} />
        </div>
        <div className="about-description">
          <h3 className="special-elite">Little Lemon</h3>
          <p>
            Nestled in the bustling heart of <span>Chicago</span>, Little Lemon
            has been a beacon of culinary experience, blending the rich tapestry
            of Mediterranean flavors with a modern twist that reflects the
            dynamic spirit of our beloved city.
          </p>
          <p>
            Central to our culinary philosophy is a steadfast commitment to
            sourcing the finest, locally grown ingredients. We ensure that every
            ingredient that graces your plate is of the highest quality.
          </p>

          <p>
            Our team at Little Lemon is passionate about providing an
            unforgettable dining experience for every guest who walks through
            our doors. From our attentive service to our meticulously crafted
            cocktails and thoughtfully curated wine list, every aspect of your
            visit is designed to delight and inspire.
          </p>

          <p>
            Join us at Little Lemon and embark on an unforgettable culinary
            journey.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-description">
          <h3 className="special-elite">How It Came to Be</h3>
          <p>
            Drawn together by their mutual love for Mediterranean cuisine and
            dedication to sustainable sourcing,{" "}
            <span>Carmen "Carmy" Berzatto</span> and <span>Sydney Adamu</span>{" "}
            embarked on a culinary adventure that would soon captivate the city.
          </p>
          {/* <p>
            Inspired by their respective backgrounds — Carmy's roots in Greek
            and Italian traditions, and Sydney's upbringing surrounded by the
            vibrant flavors of North Africa — the duo envisioned a restaurant
            that would celebrate the diverse tapestry of Mediterranean flavors
            while embracing modern culinary techniques.
          </p> */}

          <p>
            With Carmy's expertise in traditional recipes passed down through
            generations and Sydney's innovative approach to flavor pairings and
            presentation, Little Lemon was born. Together, they poured their
            hearts and souls into creating a dining experience that would
            transport guests to the sun-drenched shores of the Mediterranean,
            right here in Chicago.
          </p>

          <p>
            Their dedication to quality, community, and creativity quickly
            garnered attention, and Little Lemon soon became a beloved fixture
            in the city's culinary landscape. Today, their legacy lives on as
            Little Lemon continues to delight diners with its tantalizing
            dishes, warm hospitality, and commitment to excellence.
          </p>
        </div>
        <div className="img-container image-2">
          <img alt="Little Lemon Founder" src={founder} style={{ objectPosition: "55% 50%" }} />
        </div>
      </div>

      <div className="about-section">
        <div className="img-container image-3">
          <img alt="Little Lemon Restaurant Table" src={table} style={{ objectPosition: "0 60%" }} />
        </div>
        <div className="about-description">
          <h3 className="special-elite">Reservation</h3>
          <p>
            Little Lemon is ideal for making special occasions, or for making
            any occasion special.
          </p>
          
          <p>
            Secure a spot at Little Lemon for an unforgettable dining
            experience. Personalize your reservations and we will be ready to
            prioritize your comfort and satisfaction.
          </p>

          <button className="button-fill">Reserve a Table</button>
        </div>
      </div>
    </section>
  );
}

export default About;
