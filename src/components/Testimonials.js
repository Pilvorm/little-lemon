import chicago from "../assets/the-chicago-times.png";
import morbes from "../assets/morbes.png";
import state from "../assets/state-living.png";

const testimonial = [
  {
    logo: chicago,
    name: "The Chicago Times",
    testimony: "Little Lemon has captured the hearts of diners with their innovation.",
  },
  {
    logo: morbes,
    name: "Morbes",
    testimony: "A gem in Chicago's culinary crown. Little Lemon is a must-visit.",
  },
  {
    logo: state,
    name: "StateLiving",
    testimony: "Five-star Flavor. A meal at Little Lemon is an experience not to be missed.",
  },
];

function Testimonials() {
  return (
    <div id="testimonials">
      {testimonial.map((magazine) => (
        <div className="magazines">
          <img src={magazine.logo} />
          <p className="special-elite">" {magazine.testimony} "</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
