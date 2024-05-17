import { Formik, Field, Form } from "formik";
import * as yup from "yup";

import Logo from "../assets/Logo-White-Text.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please specify a valid email")
      .required("Please specify an email"),
  });

  return (
    <footer>
      <div className="upper">
        <p>140 West 4th Street | NY, NY 10012</p>
        <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
        </div>
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
            validationSchema={validationSchema}
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
                <p className="text-danger">{errors.email}</p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="lower">
        <p>&copy;2024 Little Lemon Chicago</p>
        <div className="mid footer-nav">
          <button>Home</button>
          <button>About</button>
          <button>Menu</button>
          <button>Reservations</button>
        </div>
        <p className="right">
          Developed by{" "}
          <a href="https://github.com/Pilvorm" target="_blank" rel="noreferrer">
            Daniel Emerald S.
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
