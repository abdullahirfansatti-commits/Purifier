import About from "./components/About";
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <>
    <div className="main">
      <Navbar />
      <div className="d-flex j-c1">
        <div className="c2 m-c2">
        </div>
      <div className="c1 m-c1">
      </div>
      <div className="c3 m-c2">
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <About/>
    </div>
    </>
  );
}
