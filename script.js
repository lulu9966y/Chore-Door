let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3"); //get door elements
let startButton = document.getElementById("start"); //get button element

let botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"; //door URL
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3; //random door
let currentPlaying = true;

const isBot = door => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

const playDoor = door => {
  numberClosedDoors--;
  if (numberClosedDoors === 0) {
    gameover("win");
  } else if (isBot(door) === true) {
    gameover("lose");
  }
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors); //randomly create 0, 1, 2
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}; //generate random doors

doorImage1.onclick = () => {
  if (currentPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1; //random door
    playDoor(doorImage1); //reduce one chance
  }
};
doorImage2.onclick = () => {
  if (currentPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2; //random door
    playDoor(doorImage2); //reduce one chance
  }
};
doorImage3.onclick = () => {
  if (currentPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3; //random door URL
    playDoor(doorImage3); //reduce one chance
  }
};

startButton.onclick = () => {
  if (currentPlaying === false) {
    startRound();
  }
};

const startRound = () => {
  numberClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = "Good luck!";
  currentPlaying = true;
  randomChoreDoorGenerator();
};

const gameover = status => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentPlaying = false;
};

startRound();
