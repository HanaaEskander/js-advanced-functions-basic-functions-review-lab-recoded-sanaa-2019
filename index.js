// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(value = "*"){
  return function(me = "special"){
    return `You are ${value}${me}${value}!`;
  }
}

const Calculator = {
  add:function(num1, num2){
    return num1 + num2;
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