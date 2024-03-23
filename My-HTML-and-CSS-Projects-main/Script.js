"use strict";
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const dot = document.querySelector(".dot");
const body = document.querySelector(".body");
const heading = document.querySelector(".heading");
const follows = document.querySelectorAll(".follow");
const topBoxes = document.querySelectorAll(".dashboard__top-boxes--box");
const names = document.querySelectorAll(".name");
const overview = document.querySelector(".overview");
const Followers = document.querySelectorAll(".Followers");
const dataNums = document.querySelectorAll(".data__num");
const darkMod = document.querySelector(".dark-mod");
const overviewBoxes = document.querySelectorAll(".overview__boxes-box");
const Views = document.querySelectorAll(".View");

let leftIsClickable = false;
let rightIsClickable = true;

right.addEventListener("click", function (e) {
  if (rightIsClickable) {
    console.log("right");
    dot.style.left = "4.2rem";
    body.style.backgroundColor = "hsl(0, 0%, 100%)";
    heading.style.color = " hsl(230, 17%, 14%)";
    follows.forEach((f) => (f.style.color = "hsl(230, 17%, 14%)"));
    topBoxes.forEach((b) => (b.style.backgroundColor = " hsl(227, 47%, 96%)"));
    darkMod.style.color = "hsl(230, 17%, 14%)";
    names.forEach((n) => (n.style.color = "hsl(230, 17%, 14%)"));
    overview.style.color = "hsl(230, 17%, 14%)";
    Followers.forEach((f) => (f.style.color = "hsl(230, 17%, 14%)"));
    dataNums.forEach((dN) => (dN.style.color = " hsl(230, 17%, 14%)"));
    overviewBoxes.forEach(
      (ov) => (ov.style.backgroundColor = " hsl(227, 47%, 96%)")
    );
    Views.forEach((v) => (v.style.color = "hsl(230, 17%, 14%)"));

    rightIsClickable = false;
    leftIsClickable = true;
  }
});

left.addEventListener("click", function (e) {
  if (leftIsClickable) {
    dot.style.left = "0.1rem";

    body.style.backgroundColor = " hsl(230, 17%, 14%)";
    heading.style.color = "hsl(227, 47%, 96%)";
    follows.forEach((f) => (f.style.color = "hsl(227, 47%, 96%)"));
    darkMod.style.color = "hsl(227, 47%, 96%)";
    topBoxes.forEach((b) => (b.style.backgroundColor = " hsl(228, 28%, 20%)"));
    names.forEach((n) => (n.style.color = "hsl(227, 47%, 96%)"));
    overview.style.color = "hsl(227, 47%, 96%)";
    Followers.forEach((f) => (f.style.color = "hsl(228, 34%, 66%)"));
    dataNums.forEach((dN) => (dN.style.color = " hsl(227, 47%, 96%)"));
    overviewBoxes.forEach(
      (ov) => (ov.style.backgroundColor = " hsl(228, 28%, 20%)")
    );
    Views.forEach((v) => (v.style.color = "hsl(227, 47%, 96%)"));

    leftIsClickable = false;
    rightIsClickable = true;
    console.log("right");
  }
});
