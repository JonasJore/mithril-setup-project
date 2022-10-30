import m from "mithril";
import { App } from "./App";

const node = document.querySelector("#app");

if (node) m.mount(node, App);