// @ts-check

let currentCycle = 0;
let registerX = 1;

let drawing = '';
const CRT_WIDTH = 40;
let pixelPosition = 0;

const input = getInput()
  .split('\n')
  .forEach((line) => {
    const split = line.split(' ');
    const command = split[0];
    const num = parseInt(split[1], 10);

    if (command === 'noop') {
      currentCycle += 1;
      maybeDraw();
    } else if (command === 'addx') {
      currentCycle += 1;
      maybeDraw();

      currentCycle += 1;
      maybeDraw();
      registerX += num;
    } else {
      throw new Error();
    }
  });

console.log(drawing);

function maybeDraw() {
  const spriteRange = [registerX - 1, registerX + 1];
  if (spriteRange[0] === -1) {
    spriteRange[0] = 0;
    spriteRange[1] += 1;
  }

  if (spriteRange[0] <= pixelPosition && spriteRange[1] >= pixelPosition) {
    drawing += '#';
  } else {
    drawing += '.';
  }

  pixelPosition += 1;
  if (pixelPosition % CRT_WIDTH === 0) {
    drawing += '\n';
    pixelPosition = 0;
  }
}

function getInput() {
  //   return `noop
  // addx 3
  // addx -5`;

  //   return `addx 15
  // addx -11
  // addx 6
  // addx -3
  // addx 5
  // addx -1
  // addx -8
  // addx 13
  // addx 4
  // noop
  // addx -1
  // addx 5
  // addx -1
  // addx 5
  // addx -1
  // addx 5
  // addx -1
  // addx 5
  // addx -1
  // addx -35
  // addx 1
  // addx 24
  // addx -19
  // addx 1
  // addx 16
  // addx -11
  // noop
  // noop
  // addx 21
  // addx -15
  // noop
  // noop
  // addx -3
  // addx 9
  // addx 1
  // addx -3
  // addx 8
  // addx 1
  // addx 5
  // noop
  // noop
  // noop
  // noop
  // noop
  // addx -36
  // noop
  // addx 1
  // addx 7
  // noop
  // noop
  // noop
  // addx 2
  // addx 6
  // noop
  // noop
  // noop
  // noop
  // noop
  // addx 1
  // noop
  // noop
  // addx 7
  // addx 1
  // noop
  // addx -13
  // addx 13
  // addx 7
  // noop
  // addx 1
  // addx -33
  // noop
  // noop
  // noop
  // addx 2
  // noop
  // noop
  // noop
  // addx 8
  // noop
  // addx -1
  // addx 2
  // addx 1
  // noop
  // addx 17
  // addx -9
  // addx 1
  // addx 1
  // addx -3
  // addx 11
  // noop
  // noop
  // addx 1
  // noop
  // addx 1
  // noop
  // noop
  // addx -13
  // addx -19
  // addx 1
  // addx 3
  // addx 26
  // addx -30
  // addx 12
  // addx -1
  // addx 3
  // addx 1
  // noop
  // noop
  // noop
  // addx -9
  // addx 18
  // addx 1
  // addx 2
  // noop
  // noop
  // addx 9
  // noop
  // noop
  // noop
  // addx -1
  // addx 2
  // addx -37
  // addx 1
  // addx 3
  // noop
  // addx 15
  // addx -21
  // addx 22
  // addx -6
  // addx 1
  // noop
  // addx 2
  // addx 1
  // noop
  // addx -10
  // noop
  // noop
  // addx 20
  // addx 1
  // addx 2
  // addx 2
  // addx -6
  // addx -11
  // noop
  // noop
  // noop`;

  return `addx 2
addx 3
addx 1
noop
addx 4
noop
noop
noop
addx 5
noop
addx 1
addx 4
addx -2
addx 3
addx 5
addx -1
addx 5
addx 3
addx -2
addx 4
noop
noop
noop
addx -27
addx -5
addx 2
addx -7
addx 3
addx 7
addx 5
addx 2
addx 5
noop
noop
addx -2
noop
addx 3
addx 2
addx 5
addx 2
addx 3
noop
addx 2
addx -29
addx 30
addx -26
addx -10
noop
addx 5
noop
addx 18
addx -13
noop
noop
addx 5
noop
noop
addx 5
noop
noop
noop
addx 1
addx 2
addx 7
noop
noop
addx 3
noop
addx 2
addx 3
noop
addx -37
noop
addx 16
addx -12
addx 29
addx -16
addx -10
addx 5
addx 2
addx -11
addx 11
addx 3
addx 5
addx 2
addx 2
addx -1
addx 2
addx 5
addx 2
noop
noop
noop
addx -37
noop
addx 17
addx -10
addx -2
noop
addx 7
addx 3
noop
addx 2
addx -10
addx 22
addx -9
addx 5
addx 2
addx -5
addx 6
addx 2
addx 5
addx 2
addx -28
addx -7
noop
noop
addx 1
addx 4
addx 17
addx -12
noop
noop
noop
noop
addx 5
addx 6
noop
addx -1
addx -17
addx 18
noop
addx 5
noop
noop
noop
addx 5
addx 4
addx -2
noop
noop
noop
noop
noop`;
}
