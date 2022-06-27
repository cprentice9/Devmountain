/*jslint browser:true */
"use strict";

function addMonths(elem) {
  var annualUseKw = 0,
    dailyUseKw = 0,
    i = 0,
    x = 0;

  var months = document.getElementById(elem).getElementsByTagName("input");

  for (i = 0; i < months.length; i++) {
    x = Number(months[i].value);
    annualUseKw += x;
  }

  dailyUseKw = annualUseKw / 365;
  return dailyUseKw;
}

function sunHours() {
  var hrs;
  var theZone = document.forms.solarForm.zone.selectedIndex;
  theZone += 1;
  switch (theZone) {
    case 1:
      hrs = 6;
      break;
    case 2:
      hrs = 5.5;
      break;
    case 3:
      hrs = 5;
      break;
    case 4:
      hrs = 4.5;
      break;
    case 5:
      hrs = 4;
      break;
    case 6:
      hrs = 3.5;
      break;
    default:
      hrs = 0;
  }
  return hrs;
}

function calculateSolar() {
  var dailyUseKw = addMonths("mpc");
  console.log(dailyUseKw);

  var sunHoursPerDay = sunHours();
  console.log(sunHoursPerDay);
}
