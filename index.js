// Your code here
function saturdayFun(activity="jump"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(value = "*"){
  return function(item = "special"){
    return `You are ${value}${item}${value}!`;
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