const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

// this code works when you substitute with the object bt cant pass tests 
// function superbowlWin(array){
//     if ( array.result=="W") {
//          return j;
//     } else {
//       return undefined;
//     }

// }
// array.find(superbowlWin).year;
// console.log(array.find(superbowlWin).year);

function superbowlWin(j){
 const win = j.find(({result})=>result=="W");
 if (win){
  return win.year;
 }else{
  return undefined
 }
  }



