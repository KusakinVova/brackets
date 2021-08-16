module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    
    let element = str[i];
    let elementSimple = false;
    let positionElementInConfig = -1;
    let thisPair = [];

    for (let j = 0; j < bracketsConfig.length; j++) {
      positionElementInConfig = bracketsConfig[j].indexOf(element);
      if(positionElementInConfig == 0 || positionElementInConfig == 1) {
        thisPair = bracketsConfig[j];
        break;
      }
    }
    
    if(thisPair[0] == thisPair[1]){
      if( thisPair[0] == stack[stack.length-1] ) stack.pop();
      else stack.push(element);
      continue;
    }

    if(positionElementInConfig == -1 ) return false; // because not found element in config
    // console.log(thisPair);
    if( positionElementInConfig == 1){
      if( thisPair[0] == stack[stack.length-1] ) stack.pop();
      else return false;
    }
    if( positionElementInConfig == 0) stack.push(element);
  }
  
  
  // console.log(stack);
  // console.log(str + bracketsConfig);
  if(stack.length > 0) return false;
  return true;
}
