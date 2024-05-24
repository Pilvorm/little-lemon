import { useState } from "react";
import { Formik, Field, Form } from "formik";
import moment from "moment";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import * as yup from "yup";

const time = [
  {
    day: ["Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"],
    hour: [
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "21:30",
      "22:00",
      "22:30",
    ],
  },
];

function Reserve() {
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
            email: "lol",
            date: date,
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
                <Field as="select" name="color" className="field">
                  <option value="red">1 People</option>
                  <option value="green">2 People</option>
                  <option value="blue">3 People</option>
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
                  }}
                />
              </div>
              <div className="reserve-hours">
                {time[0].hour.map((hour) => (
                  <button key={hour} className="hour-btn">
                    {hour}
                  </button>
                ))}
              </div>
            </Form>
          )}
        </Formik>
        <div className="location-info">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380514.49362758215!2d-88.06160897466418!3d41.833261696645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sid!4v1716387818280!5m2!1sen!2sid"
            title="Chicago Map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="location-details">
            <h3 className="markazi">Little Lemon</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Reserve;
