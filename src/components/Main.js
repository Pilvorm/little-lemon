import salad from "../assets/greek-salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import dessert from "../assets/lemon-dessert.jpg";

import { IoIosArrowRoundForward } from "react-icons/io";

import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const specials = [
  {
    image: salad,
    name: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bruchetta,
    name: "Bruchetta",
    price: "5.99",
    description:
      "Our brushcetta — made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image: dessert,
    name: "Lemon Cake",
    price: "5.00",
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Card({ image, name, price, description }) {
  return (
    <div className="special-card">
      <img src={image} />
      <div className="special-details">
        <h3 className="markazi">{name}</h3>
        <p>${price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Main() {

  return (
    <main>
      <div className="special-header">
        <h2 className="markazi">This Week's Specials</h2>
        <a>Our Menu</a>
      </div>
      <div className="specials">
        {specials.map((food, idx) => (
          <Card
            key={idx}
            image={food.image}
            name={food.name}
            price={food.price}
            description={food.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
