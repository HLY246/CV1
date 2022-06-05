import React from "react";
import {Link} from "react-scroll"; /*smooth scrolling*/
import Typed from "react-typed";


class Header extends React.Component {
    render() {
        return <div className="App-header">
          <p id="headText">
            {/* Hello, my name is Pete Holyland. I'm a web developer. */}
            <Typed 
              strings={["Hello, my name is Pete Holyland.</br>I'm a web developer..."]}
              typeSpeed={60}
              backSpeed={40}
            />
          </p>
          <br />
          <Link to="about" smooth={true} duration={500}><button id="button"><span>Learn More &#8594;</span></button></Link>
        </div>
    }
}

export default Header;