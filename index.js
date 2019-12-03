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
  subtract:function(num1, num2){
    return num1 - num2;
  },
  multiply:function(num1, num2) {
    return num1 * num2;
  },
  divide:function(num1, num2){
    return num1 / num2;
  }
}
function actionApplyer (here , array){
    if (array.length === 0 ) {
        return 0 ;
    }
    for (const OMG of array) {
        here = OMG(here);
    }
    return here;


}