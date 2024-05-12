import chicago from "../assets/the-chicago-times.png";
import morbes from "../assets/morbes.png";
import state from "../assets/state-living.png";

const testimonial = [
  {
    logo: chicago,
    name: "The Chicago Times",
    testimony: "LMAOOO"
  },
  {
    logo: morbes,
    name: "Morbes",
    testimony: "LMAOOO"
  },
  {
    logo: state,
    name: "StateLiving",
    testimony: "LMAOOO"
  },
];

function Testimonials() {
  return (
    <div id="testimonials">
      <div className="magazines">
        {testimonial.map((magazine) => (
            <img src={magazine.logo}/>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
