'use-strict';

function h1Selector(){
  return $("h1")
}

function liInOlSelector(){
  return $("ol").find("li")
}

function linkSelector(){
  return $(".box5#box4 a")
}

function imageSelector(){
  return $("[alt*='cat-sleeping']")
}

function checkboxInputSelector(){
  return $(":checkbox")
}