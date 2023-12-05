function tower_of_hanoi(n, from, to, aux) {
  if (n === 1) {
    console.log(`Move one disk from ${from} to ${to}.`);
  } else {
    tower_of_hanoi(n - 1, from, aux, to);
    console.log(`Move the ${n}th disk from ${from} to ${to}.`);
    tower_of_hanoi(n - 1, aux, to, from);
  }
}

tower_of_hanoi(4, 'X', 'Y', 'Z');
