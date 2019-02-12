/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let qttyChar = 0
   S
    .split("")
    .forEach(char => {
      qttyChar += J.indexOf(char) !== -1
    })

    return qttyChar
};

let J = "aA", S = "aAAbbbb"
console.log(numJewelsInStones(J,S))