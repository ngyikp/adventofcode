// @ts-check

const monkeys = [];

getInput()
  .split('\n\n')
  .forEach((monkeyLine) => {
    const lines = monkeyLine.split('\n').map((line) => line.trim());

    const operationLine = lines[2].replace('Operation: new = old ', '');
    /** @type number|string */
    let operationNumber = operationLine.substring(2);
    if (operationNumber !== 'old') {
      operationNumber = parseInt(operationNumber, 10);
    }

    monkeys.push({
      // @ts-ignore
      num: parseInt(lines[0].match(/Monkey (\d):/)[1], 10),
      items: lines[1]
        .replace('Starting items: ', '')
        .split(', ')
        .map((num) => {
          return parseInt(num, 10);
        }),
      operation: operationLine[0],
      operationNumber,
      testDivisible: parseInt(lines[3].replace('Test: divisible by ', ''), 10),
      throwIfTrue: parseInt(
        lines[4].replace('If true: throw to monkey ', ''),
        10
      ),
      throwIfFalse: parseInt(
        lines[5].replace('If false: throw to monkey ', ''),
        10
      ),

      itemsInspected: 0,
    });
  });

for (let i = 1; i <= 20; i += 1) {
  monkeys.forEach((monkey) => {
    monkey.items.map((item) => {
      const operationNumber =
        monkey.operationNumber === 'old' ? item : monkey.operationNumber;

      let worryLevel;
      if (monkey.operation === '+') {
        worryLevel = item + operationNumber;
      } else if (monkey.operation === '*') {
        worryLevel = item * operationNumber;
      } else {
        throw new Error();
      }

      worryLevel = Math.floor(worryLevel / 3);

      const throwToMonkey = monkeys.find((monkeyToFind) => {
        return worryLevel % monkey.testDivisible === 0
          ? monkeyToFind.num === monkey.throwIfTrue
          : monkeyToFind.num === monkey.throwIfFalse;
      });
      throwToMonkey.items.push(worryLevel);

      monkey.itemsInspected += 1;
    });

    monkey.items = [];
  });
}

const mostInspected = monkeys
  .map((monkey) => {
    return monkey.itemsInspected;
  })
  .sort((a, b) => {
    return a - b;
  })
  .reverse();

console.log(mostInspected[0] * mostInspected[1]);

function getInput() {
  //   return `Monkey 0:
  // Starting items: 79, 98
  // Operation: new = old * 19
  // Test: divisible by 23
  //     If true: throw to monkey 2
  //     If false: throw to monkey 3

  // Monkey 1:
  // Starting items: 54, 65, 75, 74
  // Operation: new = old + 6
  // Test: divisible by 19
  //     If true: throw to monkey 2
  //     If false: throw to monkey 0

  // Monkey 2:
  // Starting items: 79, 60, 97
  // Operation: new = old * old
  // Test: divisible by 13
  //     If true: throw to monkey 1
  //     If false: throw to monkey 3

  // Monkey 3:
  // Starting items: 74
  // Operation: new = old + 3
  // Test: divisible by 17
  //     If true: throw to monkey 0
  //     If false: throw to monkey 1`;

  return `Monkey 0:
  Starting items: 89, 74
  Operation: new = old * 5
  Test: divisible by 17
    If true: throw to monkey 4
    If false: throw to monkey 7

Monkey 1:
  Starting items: 75, 69, 87, 57, 84, 90, 66, 50
  Operation: new = old + 3
  Test: divisible by 7
    If true: throw to monkey 3
    If false: throw to monkey 2

Monkey 2:
  Starting items: 55
  Operation: new = old + 7
  Test: divisible by 13
    If true: throw to monkey 0
    If false: throw to monkey 7

Monkey 3:
  Starting items: 69, 82, 69, 56, 68
  Operation: new = old + 5
  Test: divisible by 2
    If true: throw to monkey 0
    If false: throw to monkey 2

Monkey 4:
  Starting items: 72, 97, 50
  Operation: new = old + 2
  Test: divisible by 19
    If true: throw to monkey 6
    If false: throw to monkey 5

Monkey 5:
  Starting items: 90, 84, 56, 92, 91, 91
  Operation: new = old * 19
  Test: divisible by 3
    If true: throw to monkey 6
    If false: throw to monkey 1

Monkey 6:
  Starting items: 63, 93, 55, 53
  Operation: new = old * old
  Test: divisible by 5
    If true: throw to monkey 3
    If false: throw to monkey 1

Monkey 7:
  Starting items: 50, 61, 52, 58, 86, 68, 97
  Operation: new = old + 4
  Test: divisible by 11
    If true: throw to monkey 5
    If false: throw to monkey 4`;
}
