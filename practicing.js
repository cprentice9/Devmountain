// let number = 1;
// while (number <= 250) {
//   console.log(number);
//   number++;
// }

let totalTrains = 12;
let trainsOperational = 8;
let trainNumber = 1;
while (trainNumber <= trainsOperational) {
  console.log("Train #" + trainNumber + " is running!");
  trainNumber++;
}

for (let trainNumber = 1; trainNumber <= trainsOperational; trainNumber++) {
  console.log("Train #" + trainNumber + " is running!");
}

for (let number = 5; number > 0; number--) {
  console.log(number);
}

for (let stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++) {
  console.log("Train #" + stoppedTrain + " is not operational.");
}
