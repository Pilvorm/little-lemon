import { Formik, Field, Form } from "formik";

import Logo from "../assets/Logo-White-Text.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="upper">
        <p>140 West 4th Street | NY, NY 10012</p>
        <ul>
          <li>
            <a>
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a>
              <FaFacebookF size={20} />
            </a>
          </li>
        </ul>
        <p className="right">+1 (347) 799-1312</p>
      </div>
      <div className="mid info">
        <div className="hours">
          <h4>Hours</h4>
          <p>
            Monday: Closed
            <br />
            Tuesday - Thursday: 5:00 pm - 11:00 pm (Kitchen closes at 10:30)
            <br />
            Friday: 5:00 pm - 11:30 pm
            <br />
            Saturday: 11:00 am - 3:00 pm / 5:00 pm - 11:30 pm (Brunch)
            <br />
            Sunday: 11:00 am - 3:00 pm (Brunch) / 5:00 pm - 11:00 pm (Kitchen
            closes at 10:30)
          </p>
        </div>
        <div className="newsletter">
          <h4>Subscribe to Little Lemon's Newsletter</h4>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={async (values) => {
              // await new Promise((r) => setTimeout(r, 500));
              // alert(JSON.stringify(values, null, 2));
              alert(values.email);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field id="email" name="email" placeholder="E-Mail" />
                <button type="submit">Subscribe</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="lower">
        <p>&copy;2024 Little Lemon Chicago</p>
        <div className="mid footer-nav">
          <a>Home</a>
          <a>About</a>
          <a>Menu</a>
          <a>Reservations</a>
        </div>
        <p className="right">+1 (347) 799-1312</p>
      </div>
    </footer>
  );
}

export default Footer;
