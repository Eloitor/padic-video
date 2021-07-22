import * as ReactDOM from "react-dom";

import {Player} from "liqvid";

// resources
import controls from "@env/controls";
import {script} from "./markers";

import Intro from "./Intro";
import Padics from "./Padics";

function Lesson() {
  /* react allows to split components  like this */
  return (
    <Player controls={controls} script={script}>
      <Intro data-during="intro/"/>
      <Padics data-during="padics/"/>
    </Player>
  );

}

ReactDOM.render(<Lesson/>, document.querySelector("main"));
