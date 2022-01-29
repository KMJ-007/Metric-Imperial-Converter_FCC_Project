'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  
  //first let's make api  request for taking an input given by the user then sending that user input to ConvertHandler
  app.route("/api/convert").get((req,res)=>{
    
    // console.log(req.query.input);
    const input=req.query.input;

    let convertHandler = new ConvertHandler();

    let initNum=convertHandler.getNum(input);
    let initUnit=convertHandler.getUnit(input);
    
    console.log(initNum);
    console.log(initUnit + "units");
    // console.log(convertHandler);
    if(initNum === "invalid number"){
      if(initUnit=== "invalid unit"){
        res.end("invalid number and unit");
      }  else{
        res.end("invalid number");
      }
    }
    else if(initUnit === "invalid unit"){
      res.end("invalid unit");
    }
    let returnUnit=convertHandler.getReturnUnit(initUnit);
    // console.log(returnUnit);
    let returnNum=convertHandler.convert(initNum,initUnit);
    // console.log(returnNum);
    let string = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);
    console.log(string);

    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string
    })
  })

};
