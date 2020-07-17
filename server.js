import { Mars, RobotPosition } from './mars.mjs';

import express from 'express'
// const express = require('express');
// const { Mars, RobotPosition } = require('./mars.mjs')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send(`
<html><body><pre>
             ,-"     "-.
            / o       o \\
           /   \\     /   \\
          /     )-"-(     \\
         /     ( 6 6 )     \\
        /       \ " /       \\
       /         )=(         \\
      /   o   .--"-"--.   o   \\
     /    I  /  -   -  \\  I    \\
 .--(    (_}y/\       /\\y{_)    )--.
(    ".___l\\/__\\_____/__\\/l___,"    )
 \\                                 /
  "-._      o O o O o O o      _,-"
      \`--Y--.___________.--Y--'
         |==.___________.==| hjw
         \`==.___________.=='\`97

</pre></body></html>
`
  );
});

app.post('/', (req, res, next) => {
  let lines = req.body.input.split("\n")

  // At least one line
  if (lines.lenght == 0) { next ({ status: 422, message: 'Wrong params' }); return }

  // Must contian 2 numbers
  let sizes = lines[0].split(" ")
  if (sizes.lenght < 2) { next ({ status: 422, message: 'Wrong params' }); return }

  // Must be positive
  let width = parseInt(sizes[0])
  let height = parseInt(sizes[1])
  if (!(width > 0 && height > 0)) { next ({ status: 422, message: 'Wrong params' }); return }

  // Handle the martians
  let marsians = lines.slice(1, lines.lenght)
  let firstLines = marsians.filter((item, index) => index % 2 === 0)
  let secondLines = marsians.filter((item, index) => index % 2 !== 0)
  if (firstLines.lenght != secondLines.lenght) { next ({ status: 422, message: 'Wrong params' }); return }

  // Creating the Mars
  let mars = new Mars(width, height)
  firstLines.forEach((element, index) => {
    let numbers = element.split(" ")
    
    if (numbers.length === 3) {
      
      let x = parseInt(numbers[0])
      let y = parseInt(numbers[1])
      let direction = numbers[2]

      if (x >= 0 && y >= 0 && ["S", "N", "E", "W"].includes(direction)) {
        let position = new RobotPosition(x, y, direction, false)

        mars.addRobot(position, secondLines[index])
      }
    }
  });

  res.send(mars.getOutput());
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);