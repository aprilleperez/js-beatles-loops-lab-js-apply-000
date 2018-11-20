// add solution here
function theBeatlesPlay (musicians, instruments) {
  const new_array = []

  for (let i = 0; i < musicians.length; i++) {
    new_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return new_array
}

function johnLennonFacts(facts) {
  var exclamation = [];
  let spot = 0;
  while (spot < facts.length) {
    let newString = facts[spot] + "!!!";
    exclamation.push(newString);
    spot++;
  }

  return exclamation;
}

function iLoveTheBeatles(number) {
  var love = [];
  var i = 0;

  do {
    love.push("I love the Beatles!");
    i++;
  } while (i < number.length);

  // function increment() {
  //   i = i + 1;
  // }

  return love;
}
