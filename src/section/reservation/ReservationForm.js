import { useState } from "react";
import { useNavigate } from "react-router";
import { Formik, Field, Form } from "formik";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { PiUsersFourThin } from "react-icons/pi";
import { GiPartyFlags } from "react-icons/gi";
import moment from "moment";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import * as yup from "yup";

import restaurant from "../../assets/restaurant-7.jpg";

const GUESTS = 10;
const occasions = ["No Occasion", "Birthday", "Anniversary"];

const ReservationModal = ({
  modal,
  toggle,
  values,
  handleSubmit,
  isSubmitting,
  finishedRes,
  navigate,
}) => (
  <Modal
    isOpen={modal}
    toggle={toggle}
    size="lg"
    onClosed={finishedRes ? () => navigate(0) : undefined}
    backdrop={"static"}
  >
    <ModalHeader toggle={toggle}>Reservation Details</ModalHeader>
    <ModalBody>
      <div className="reservation-details">
        <h6 className="markazi">Little Lemon Chicago</h6>
        <div className="icon-info">
          <CiCalendar size={24} />{" "}
          {moment(values.date).format("dddd, MMM DD, YYYY")}
        </div>
        <div className="icon-info">
          <PiUsersFourThin size={24} />
          {values.guests} Guests
        </div>
        <div className="icon-info">
          <CiClock2 size={24} />
          {values.time} {moment().hour(values.time.split(":")[0]).format("A")}
        </div>
        <div className="icon-info">
          <GiPartyFlags size={24} />
          {values.occasion}
        </div>
      </div>
      <div className="reservation-policy">
        {isSubmitting ? (
          <Spinner
            className="spinner"
            style={{
              height: "6rem",
              width: "6rem",
            }}
          />
        ) : finishedRes ? (
          <div className="confirmation">
            <h6 className="special-elite">Thank You!</h6>
            <p>Your reservation has been confirmed</p>
          </div>
        ) : (
          <>
            <p className="cancellation-policy">
              <span>Cancellation Policy</span>
              While you won't be charged if you need to cancel, we ask that you
              do so at least 24 hours in advance.
            </p>
            <p className="privacy-policy">
              All transmission of personally identifiable information is via
              secure channels. By clicking "Reserve Now" you agree to Little
              Lemon's <u className="text-link">Terms of Use</u> and{" "}
              <u className="text-link">Privacy Policy</u>.
            </p>
          </>
        )}
      </div>
    </ModalBody>
    <ModalFooter>
      <Button
        color="warning"
        disabled={isSubmitting}
        type="submit"
        onClick={
          finishedRes
            ? () => {
                (window.location.href = `/`);
              }
            : () => handleSubmit()
        }
        className="submit-btn"
      >
        {isSubmitting
          ? "Submitting..."
          : finishedRes
          ? "Back to Home"
          : "Reserve Now"}
      </Button>
    </ModalFooter>
  </Modal>
);

function ReservationForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const validationSchema = yup.object({});

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const [finishedRes, setFinishedRes] = useState(false);

  return (
    <main id="reserve-main">
      <div id="reserve-section">
        <div id="reserve-header">
          <h2 className="special-elite">Reserve a Table</h2>
        </div>
        <div className="reserve-info">
          <Formik
            initialValues={{
              guests: 1,
              date: date,
              time: time,
              occasion: "No Occasion",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true);
              await new Promise((r) => setTimeout(r, 1750));
              setFinishedRes(true);
            }}
          >
            {({ errors, touched, values, handleSubmit, isSubmitting }) => (
              <Form>
                <div className="form-join">
                  <Field as="select" name="guests" className="field">
                    {[...Array(GUESTS)].map((e, i) => (
                      <option value={i + 1} key={i + 1}>
                        {i + 1} Guests
                      </option>
                    ))}
                  </Field>
                  <Flatpickr
                    data-enable-time
                    value={moment(date).toDate()}
                    options={{
                      dateFormat: "M d, Y",
                      enableTime: false,
                      hourIncrement: 1,
                      minuteIncrement: 1,
                      time_24hr: true,
                    }}
                    onChange={([date]) => {
                      setDate(date);
                      dispatch({date: date});
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
                        onClick={() => {
                          setTime(hour);
                          toggle();
                        }}
                      >
                        {hour} {moment().hour(hour.split(":")[0]).format("A")}
                      </button>
                    ))}
                  </div>
                </div>
                <ReservationModal
                  modal={modal}
                  toggle={toggle}
                  values={{ ...values, date: date, time: time }}
                  handleSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  finishedRes={finishedRes}
                  navigate={navigate}
                />
              </Form>
            )}
          </Formik>
          <div className="location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3493.8557359141623!2d-87.64436598848019!3d41.96202898336941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDU3JzQ0LjEiTiA4N8KwMzgnMzkuMyJX!5e0!3m2!1sen!2sid!4v1716864480708!5m2!1sen!2sid"
              title="Chicago Map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="location-info">
              <h3 className="markazi">Little Lemon Chicago</h3>
              <a
                href="https://maps.app.goo.gl/V64N2S39Zrqets4CA"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                W Montrose Ave 34th
                <br /> Chicago, IL
              </a>
              <p>+1 (312) 773-2305</p>

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
      <div id="promo" className="two-side">
        <div className="img-container image-1">
          <img
            alt="Little Lemon Restaurant"
            src={restaurant}
            style={{ objectPosition: "0 60%" }}
          />
        </div>
        <div className="two-side-description">
          <h2 className="special-elite">Little Lemon</h2>
          <p>
            <span>Monday:</span> Closed
          </p>
          <p>
            <span>Tuesday - Thursday:</span> 5:00 pm - 11:00 pm (Kitchen closes
            at 10:30)
          </p>
          <p>
            <span>Friday:</span> 5:00 pm - 11:30 pm
          </p>
          <p>
            <span>Saturday:</span> 11:00 am - 3:00 pm / 5:00 pm - 11:30 pm
            (Brunch)
          </p>
          <p>
            <span>Sunday:</span> 11:00 am - 3:00 pm (Brunch) / 5:00 pm - 11:00
            pm (Kitchen closes at 10:30)
          </p>
        </div>
      </div>
    </main>
  );
}

export default ReservationForm;
