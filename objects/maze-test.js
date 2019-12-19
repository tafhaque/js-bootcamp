const mazeExit = false;
const robotMove = '';
const door = false;
const move = false;

let forward = function() {
    if (move) {
        console.log('Robot can move forward');
        return true;
    } else {
        return false;
    }

}

while (mazeExit = fasle) {
    forward();
    if (forward() === false) {
        turnRight();
        forward();
        if (forward() === false) {
            turnRight();
            turnRight();
            forward();


        }
    }

}