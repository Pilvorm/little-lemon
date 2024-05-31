import { useReducer, useEffect } from "react";
import App from "../App";
import Header from "../section/reservation/Header";
import Testimonials from "../components/Testimonials";
import ReservationForm from "../section/reservation/ReservationForm";
import { useInView } from "react-intersection-observer";

function Reservation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: myRef, inView: visibleHeader } = useInView({
    threshold: 0.1,
  });

  const randomize = (date) => {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = date % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = (date) => {
    let result = [];
    let random = randomize(date.getDate());
    for (let i = 11; i <= 22; i++) {
      if (random() < 0.5) result.push(i + ":00");
      if (random() > 0.5) result.push(i + ":30");
    }
    return result;
  };

  const updateTimes = (state, action) => {
    return { availableTimes: fetchAPI(action.date) };
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <App navBackground={visibleHeader}>
      <Header refer={myRef} />
      <ReservationForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
      />
      <Testimonials />
    </App>
  );
}

export default Reservation;
