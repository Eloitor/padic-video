//Hello <span data-from-first="intro/world">World!</span></h1>
import * as React from "react";

import {KTX} from "rp-katex";
type Handle = React.RefAttributes<typeof KTX>;

import { script } from "./markers";

export default function Intro(props) {
    
    return (   

      <section {...props}>
        <h1 data-from-first="intro/title" data-from-last="padics/">
          p-adic numbers
          </h1>
        <ul id="intro/agenda" data-from-first="intro/agenda">
          <li>p-adic norm</li>
          <li>Completion</li>
          <li>Hensel's lemma</li>
          <li><KTX>\mathbb Q_p</KTX> and <KTX>\mathbb Z_p</KTX></li>
        </ul> 
      </section>
    );
  }

