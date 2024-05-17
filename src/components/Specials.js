import salad from "../assets/greek-salad-2.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import dessert from "../assets/lemon-dessert.jpg";


const specials = [
  {
    image: salad,
    name: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: bruschetta,
    name: "Bruschetta",
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
      <img alt={name} src={image} />
      <div className="card-details">
        <div className="card-header">
          <h3 className="markazi">{name}</h3>
          <div className="markazi price-tag">
            <p className="price-tag-main">${price.split(".")[0]}</p>
            <p className="price-tag-decimal">{price.split(".")[1]}</p>
          </div>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

function Specials() {
  return (
    <section id="specials">
      <div className="special-header">
        <h2 className="special-elite">This Week's Specials</h2>
        <button className="button-fill">Our Menu</button>
      </div>
      <div className="specials-list">
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
    </section>
  );
}

export default Specials;
