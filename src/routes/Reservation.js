import App from "../App";
import Header from "../section/reservation/Header";
import Testimonials from "../components/Testimonials";
import Reserve from "../section/reservation/Reserve";
import { useInView } from "react-intersection-observer";

function Reservation() {
  const { ref: myRef, inView: visibleHeader } = useInView({
    threshold: 0.1,
  });
  return (
    <App navBackground={visibleHeader}>
      <Header refer={myRef}/>
      <Reserve />
      <Testimonials />
    </App>
  );
}

export default Reservation;
