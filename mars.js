function RobotPosition(x, y, direction, isLost) {
    this.x = x
    this.y = y
    this.direction = direction
    this.isLost = false

    this.toString = () => `${x} ${y} ${direction}${isLost ? " LOST" : ""}`
}

function Mars(width, height) {
    this.width = width
    this.height = height
    this.output = []
    this.scentsPositions = [] // scents 

    this.mapDirectionToLeft = (direction) => {
        let directions = ["E", "S", "W", "N", "E"]
        let index = directions.indexOf(direction) + 1
        return directions[index]
    }

    this.mapDirectionToRight = (direction) => {
        let directions = ["E", "N", "W", "S"]
        let index = directions.indexOf(direction)
        return index == 0 ? "S" : directions[index - 1]
    }

    this.isScentLeft = (x,y) => {
        return this.scentsPositions.some(e => e.x === x && e.y === y)
    }

    this.createPositionForForwardMove = (position) => {
        let newX = position.direction === "E" ? position.x + 1 : position.direction === "W" ? position.x - 1 : position.x
        let newY = position.direction === "N" ? position.y + 1 : position.direction === "S" ? position.y - 1 : position.y

        return new RobotPosition(newX, newY, position.direction, position.isLost)
    }

    this.isPositionForFallingDown = (position) => {
        return position.x < 0 || position.y < 0 || position.x > this.width - 1 || position.y > this.height - 1 
    }

    /// Returns new position based on the last position and desired move
    this.newPosition = (position, move) => {
        switch (move) {
            case 'L':
                return new RobotPosition(position.x, position.y, this.mapDirectionToLeft(position.direction), position.isLost)
            case 'R':
                return new RobotPosition(position.x, position.y, this.mapDirectionToRight(position.direction), position.isLost)
            case 'F':
                let newPosition = this.createPositionForForwardMove(position)

                // If is suppose to fall down
                if (this.isPositionForFallingDown(newPosition)) {
                    
                    if (!this.isScentLeft(position.x, position.y)) {
                        // If scent is NOT left, leave it and fall
                        this.scentsPositions.push({x: position.x, y: position.y})
                        
                        return new RobotPosition(position.x, position.y, position.direction, true)
                    } else {
                        // If scent is left, ignore the move
                        return position
                    }
                }

                // Otherwise return new position
                return newPosition

            default:
              console.log(`Move ${move} not supported`);
          }
    }

    this.addRobot = (startPosition, movesString) => {
        let moves = movesString.split("")

        let finalPosition = moves
            .reduce( (position, move) => {

                // If alread lost, continue
                if (position.isLost) {
                    return position
                }

                return this.newPosition(position, move)
            }, startPosition)
        
        this.output.push(finalPosition.toString())
    }

    this.getOutput = () => {
        return this.output.join("\n")
    }
}

export {
    Mars,    
    RobotPosition
};
