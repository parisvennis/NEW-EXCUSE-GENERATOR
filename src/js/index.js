/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  let ranWho = Math.floor(Math.random() * who.length);
  let ranAction = Math.floor(Math.random() * action.length);
  let ranWhat = Math.floor(Math.random() * what.length);
  let ranWhen = Math.floor(Math.random() * when.length);

  var outcome =
    who[ranWho] +
    " " +
    action[ranAction] +
    " " +
    what[ranWhat] +
    " " +
    when[ranWhen];

  console.log(outcome);
  document.querySelector("#excuse").innerHTML = outcome;
};
