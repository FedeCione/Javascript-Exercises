function checkingIfOneIsTheLowest(n) {
  let nLength = n.toString().length;
  let nString = n.toString();

  let nScopeNumber;
  let nScopeValue;

  for (let i = 0; i < nLength; i++) {

    let positionValue = +nString[i];
    let sliceToLeft;

    if(i - positionValue < 0){
        sliceToLeft = 0;
    } else {
        sliceToLeft = i - positionValue;
    }

    resultSlice = nString.slice(sliceToLeft, i + positionValue + 1);

    let reduceResult = resultSlice.split('')
        .map(j => parseInt(j))
        .reduce((previousValue, currentValue) => previousValue + currentValue);
    
    reduceResult = reduceResult - positionValue;

    if(nScopeValue > reduceResult || !nScopeValue){
        nScopeNumber = positionValue;
        nScopeValue = reduceResult;
    }

  }
  if (nScopeNumber === 1) {
    console.log("If there is 1 number with lowest scope value then return:");
    console.log(true);
  } else {
    console.log("If there is no 1 number with lowest scope value then return:");
    console.log(false);
  }
}

checkingIfOneIsLowest(182);
checkingIfOneIsLowest(521315);
