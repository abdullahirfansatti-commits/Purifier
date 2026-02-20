import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons";
export default function Navbar() {
  return (
        <>
         <div className="navbar d-flex justify p-left p-right color">
            <div className="weave">
                <h1><i className="bi bi-activity"></i>WEAVE</h1>
            </div>
            <div>
                <ul className="d-flex gap-li li-m ">
                  <Link href="/About"><li>About</li></Link>
                  <Link href="/Feature"><li>Features</li></Link>
                  <Link href="/Gallerypage"><li>Gallery</li></Link>
                  <Link href="/Support"><li>Support</li></Link>
                </ul>
            </div>
            <div>
                <Link href="/Gallerypage"><button className="btn">Explore</button></Link>
            </div>
         </div>
         <hr className="black"/>
         </>
  );
}