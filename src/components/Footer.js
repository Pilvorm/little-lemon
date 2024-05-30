import { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please specify a valid email")
      .required("Please specify an email"),
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <footer>
      <div className="upper">
        <p>W Montrose Ave 34th | Chicago, IL</p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF size={24} />
          </a>
        </div>
        <p className="right">+1 (312) 773-2305</p>
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
              toggle();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <Field id="email" name="email" placeholder="E-Mail" />
                  <button type="submit">Subscribe</button>
                </div>
                {errors.email && touched.email ? (
                  <div className="text-danger">{errors.email}</div>
                ) : null}
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>Reservation Details</ModalHeader>
                  <ModalBody>OK</ModalBody>
                </Modal>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="lower">
        <p>&copy;2024 Little Lemon Chicago</p>
        <div className="mid footer-nav">
          <Link to={"/"}>Home</Link>
          <button>About</button>
          <button>Menu</button>
          <Link to={"/reservation"}>Reservations</Link>
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
