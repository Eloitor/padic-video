import * as ReactDOM from "react-dom";

import {Player} from "liqvid";

// resources
import controls from "@env/controls";
import {script} from "./markers";

import Padics from "./Padics";

function Lesson() {
  /* react allows to split components  like this */
  return (
      <Padics data-during="padics/"/>
  );

}

ReactDOM.render(<Lesson/>, document.querySelector("main"));
