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

const Calculator = {
  add:function(arg1, arg2){
    return arg1 + arg2;
  },
  subtract:function(arg1, arg2){
    return arg1 - arg2;
  },
  multiply:function(arg1, arg2) {
    return arg1 * arg2;
  },
  divide:function(arg1, arg2){
    return arg1 / arg2;
  }
}
function actionApplyer (start , funArr){
    if (funArr.length === 0 ) {
        return 0 ;
    }
    for (const fun of funArr) {
        start = fun(start);
    }
    return start;


}

