import App from "../App";
import Header from "../section/reservation/Header";
import { useInView } from "react-intersection-observer";

function Reservation() {
  const { ref: myRef, inView: visibleHeader } = useInView({
    threshold: 0.1,
  });
  return (
    <App navBackground={visibleHeader}>
      <Header refer={myRef}/>
    </App>
  );
}

export default Reservation;
