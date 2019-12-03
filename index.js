// Your code here
function dairy1(activity="Greeting"){
  return `Tmw, I am ${activity} my students!`;
}

function dairy2(activity="attend meeting"){
  return `Tmw, I will ${activity}.`;
}
function wrapAdjective(value = "*"){
  return function(me = "special"){
  return `You are ${value} ${me} ${value}!`;
  }
}

let encouragingPromptFunction = wrapAdjective("!!!");

