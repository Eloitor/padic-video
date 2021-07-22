import {Script} from "liqvid";

export const markers = [
  ["intro/title", "0:01"],
  ["intro/agenda", "0:03"],
  ["padics/", "0:23"],
] as [string, string][];

export const script = new Script(markers);
export const playback = script.playback;
