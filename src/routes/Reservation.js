import { useState, useReducer, useEffect } from "react";
import App from "../App";
import Header from "../section/reservation/Header";
import Testimonials from "../components/Testimonials";
import ReservationForm from "../section/reservation/ReservationForm";
import { useInView } from "react-intersection-observer";
import moment from "moment";

const weekday = ["Monday", "Tuesday", "Wednesday", "Friday"];
const weekend = ["Saturday", "Sunday"];

const defaultTime = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "16:00",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "21:30",
  "22:00",
];

const updateTimes = (state, action) => {
  if (weekday.includes(action.day)) {
    return [
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "16:00",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "21:30",
      "22:00",
    ];
  }
  if (weekend.includes(action.day)) {
    return [
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
    ];
  }
  return state;
};

function Reservation() {
  const { ref: myRef, inView: visibleHeader } = useInView({
    threshold: 0.1,
  });

  const randomize = (date) => {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = date % m;
    return function() {
      return (s = s * a % m) / m;
    }
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
    // alert("UPDATE TIMES")
    return { availableTimes: fetchAPI(new Date()) };
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <App navBackground={visibleHeader}>
      <Header refer={myRef} />
      <ReservationForm availableTimes={state.availableTimes} dispatch={dispatch} />
      <Testimonials />
    </App>
  );
}

export default Reservation;
