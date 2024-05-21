import App from "../App";
import { useInView } from "react-intersection-observer";

import Header from "../section/homepage/Header";
import Specials from "../section/homepage/Specials";
import About from "../section/homepage/About";
import Testimonials from "../components/Testimonials";

function Home() {
  const { ref: myRef, inView: visibleHeader } = useInView({
    threshold: 0.1,
  });
  return (
    <App navBackground={visibleHeader}>
      <Header refer={myRef} />
      <main>
        <Specials />
        <About />
        <Testimonials />
      </main>
    </App>
  );
}

export default Home;
