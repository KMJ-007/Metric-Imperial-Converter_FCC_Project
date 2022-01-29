function ConvertHandler() {
  
  

  this.getNum = function(input) {
  let number = input.split(/[a-z]/gi)[0];
  // console.log(number);
  let result;
  if(number!==""){
    if(number.includes("/")){
      result=number.split("/").length!==2?"invalid number":eval(number);
    }
    else{
      result=parseFloat(number);
    }
  }else{
    result=1;
  }
  
    
    return result;
  };
  
  this.getUnit = function(input) {
    let unit=input.match(/[a-z]+$/gi)[0];    
    let result;
    if(unit && ["gal", "lbs", "mi", "l", "kg", "km"].includes(unit.toLowerCase())){
      result=unit.toLowerCase();
      if(result === "l") result = "L";
    }
    else{
      result = "invalid unit";
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch(initUnit.toLowerCase()){
      case "gal":
        result = "L";
        break;
      case "lbs":
        result = "kg";
        break;
      case "mi":
        result = "km";
        break;
      case "l":
        result = "gal";
        break;
      case "kg":
        result = "lbs";
        break;
      case "km":
        result = "mi";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit.toLowerCase()){
      case "gal":
        result = "gallons";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "mi":
        result = "miles";
        break;
      case "l":
        result = "liters";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "km":
        result = "kilometers";
        break;
      };
      return result;
}
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch(initUnit.toLowerCase()){
      case "gal":
        result = initNum * 3.78541;
        break;
      case "lbs":
        result = initNum*0.453592;
        break;
      case "mi":
        result = initNum *1.60934;
        break;
      case "l":
        result = initNum / 3.78541;
        break;
      case "kg":
        result = initNum / 0.453592;
        break;
      case "km":
        result = initNum / 1.60934;
        break;
    }
    console.log(result);
    result=parseFloat(result.toFixed(5));
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result =`${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit) }`;
    return result;
  }; 
  
}

module.exports = ConvertHandler;
