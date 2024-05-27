import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import moment from "moment";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import * as yup from "yup";

const GUESTS = 10;
const occasions = ["No Occasion", "Birthday", "Anniversary"];

const ReservationModal = ({ modal, toggle, formData }) => (
  <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>
        Do Something
      </Button>{" "}
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

function ReservationForm({ availableTimes, dispatch }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please specify a valid email")
      .required("Please specify an email"),
  });

  const [date, setDate] = useState(new Date());

  return (
    <main id="reserve-main">
      <div id="reserve-header">
        <h2 className="special-elite">Reserve a Table</h2>
      </div>
      <div className="reserve-info">
        <Formik
          initialValues={{
            guests: "",
            date: date,
            occasion: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            // await new Promise((r) => setTimeout(r, 500));
            // alert(JSON.stringify(values, null, 2));
            alert(values.email);
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <div className="form-join">
                <Field as="select" name="guests" className="field">
                  {[...Array(GUESTS)].map((e, i) => (
                    <option value={i + 1} key={i + 1}>
                      {i + 1} People
                    </option>
                  ))}
                </Field>
                <Flatpickr
                  data-enable-time
                  value={moment(date).toDate()}
                  options={{
                    dateFormat: "d M Y",
                    enableTime: false,
                    hourIncrement: 1,
                    minuteIncrement: 1,
                    time_24hr: true,
                    // onReady: function (a, b, fp) {
                    //   fp.calendarContainer.setAttribute(
                    //     "data-test-id",
                    //     `flatpickr-${fieldName}`
                    //   );
                    // },
                  }}
                  onChange={([date]) => {
                    setDate(date);
                    dispatch();
                    // Fri May 24 2024 00:00:00 GMT+0700 (Western Indonesia Time)
                  }}
                />
                <Field as="select" name="occasion" className="field">
                  {occasions.map((occasion, i) => (
                    <option value={occasion} key={occasion}>
                      {occasion}
                    </option>
                  ))}
                </Field>
              </div>
              <div>
                <p>Available Times</p>
                <div className="reserve-hours">
                  {availableTimes.map((hour) => (
                    <button
                      type="button"
                      key={hour}
                      className="hour-btn"
                      onClick={toggle}
                    >
                      {hour}
                    </button>
                  ))}
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4149.476800744214!2d-87.65106784474668!3d41.96553519431503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3d0045310dd%3A0x2e3ee100b12333b0!2sN%20Marine%20Dr%2C%20Chicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sid!4v1716788066408!5m2!1sen!2sid"
            title="Chicago Map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="location-info">
            <h3 className="markazi">Little Lemon, Chicago</h3>
            <div className="location-details">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                N Marine Dr 34
                <br /> Chicago, IL
              </a>
              <div className="socials">
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
            </div>
          </div>
        </div>
      </div>
      <ReservationModal modal={modal} toggle={toggle} />
    </main>
  );
}

export default ReservationForm;
