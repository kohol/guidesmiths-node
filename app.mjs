import { Mars, RobotPosition } from './mars.js';

let mars = new Mars(10, 10)

let startPosition1 = new RobotPosition(1, 1, "N")
let moves1 = "FFFRFFFRFFFRFFF"

let startPosition2 = new RobotPosition(3, 2, "N")
let moves2 = "LLFFFFF"

let startPosition3 = new RobotPosition(1, 1, "N")
let moves3 = "FFFRFFFRFFFRFFF"

mars.addRobot(startPosition1, moves1)
mars.addRobot(startPosition2, moves2)
mars.addRobot(startPosition3, moves3)

let expectedOutput = `1 1 W
3 0 S LOST
2 3 S`

let output = mars.getOutput()

console.log(output)
