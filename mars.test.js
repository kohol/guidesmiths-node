import { Mars, RobotPosition } from './mars.js';

test('Test few robots can exist at once', () => {
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
1 1 W`
  let output = mars.getOutput()

  expect(output).toBe(expectedOutput)
})


test('Test that robots falls North', () => {
  let mars = new Mars(10, 10)

  let startPosition1 = new RobotPosition(1, 1, "N")
  let moves1 = "FFFFFFFFFFF"

  mars.addRobot(startPosition1, moves1)

  let expectedOutput = `1 9 N LOST`
  let output = mars.getOutput()

  expect(output).toBe(expectedOutput)
})

test('Test that robots falls South', () => {
  let mars = new Mars(10, 10)

  let startPosition1 = new RobotPosition(1, 1, "N")
  let moves1 = "RRFFFFF"

  mars.addRobot(startPosition1, moves1)

  let expectedOutput = `1 0 S LOST`
  let output = mars.getOutput()

  expect(output).toBe(expectedOutput)
})

test('Test that robots falls East', () => {
  let mars = new Mars(10, 10)

  let startPosition1 = new RobotPosition(1, 1, "N")
  let moves1 = "RFFFFFFFFFFFFFF"

  mars.addRobot(startPosition1, moves1)

  let expectedOutput = `9 1 E LOST`
  let output = mars.getOutput()

  expect(output).toBe(expectedOutput)
})

test('Test that robots falls West', () => {
  let mars = new Mars(10, 10)

  let startPosition1 = new RobotPosition(1, 1, "W")
  let moves1 = "FFF"

  mars.addRobot(startPosition1, moves1)

  let expectedOutput = `0 1 W LOST`
  let output = mars.getOutput()

  expect(output).toBe(expectedOutput)
})

test('Test that robot is not falling down if sence is left', () => {
  let mars = new Mars(10, 10)

  let startPosition1 = new RobotPosition(1, 1, "W")
  let moves1 = "FFF"

  let startPosition2 = new RobotPosition(1, 1, "W")
  let moves2 = "FFF"

  mars.addRobot(startPosition1, moves1)
  mars.addRobot(startPosition2, moves2)

  let expectedOutput = `0 1 W LOST
0 1 W`
  let output = mars.getOutput()

  expect(output).toBe(expectedOutput)
})
