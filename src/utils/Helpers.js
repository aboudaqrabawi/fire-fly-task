export const trim = (string) => {
  var newString = "";
  var counter = "false";
  for (var i = 0; string.length > i; i++) {
    if (
      string[i] === "+" ||
      string[i] === "/" ||
      string[i] === "*" ||
      string[i] === "-"
    ) {
      counter = "false";
      newString = newString + " " + string[i] + " ";
    } else {
      newString = newString + string[i];
      counter = "false";
    }
  }
  return newString;
};

export const handleZero = (string) => {
  var newString = "";
  var counter = "false";

  for (var i = 0; string.length > i; i++) {
     
  


    if (string[i] != "0" && string[i] !=  "+" &&
    string[i] !=  "/" &&
    string[i] !=  "*" &&
    string[i] !=  "-") {
        
      newString = newString + string[i];
      counter = "false"
    }

   else if (
      string[i] === "+" ||
      string[i] === "/" ||
      string[i] === "*" ||
      string[i] === "-"
    ) {
      newString = newString +  string[i];
      counter = "true";
    }

   else if (string[i] == "0" && counter === "true") {
    
    }
  }
  return newString
};



// export const handleClick = async (e, operator) => {
//   if (operator === "C") {
//     setEqua("0");
//   } else if (operator === "=") {
//     addPastLogs(`${trim(Equa)} = ${eval(Equa)}`);

//     setEqua(eval(Equa));
//   } else if (Equa[0] === "0") {
//     setEqua(operator);
//   } else {
//     setEqua(Equa + operator);
//   }
// };
