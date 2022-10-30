import m from "mithril";
import "./App.css";

export const App = () => {
  return {
    view: () => {
      return m("section", { class: "main" }, [
        m("h1", { class: "title" }, "This app runs on mithril!"),
      ]);
    },
  };
};