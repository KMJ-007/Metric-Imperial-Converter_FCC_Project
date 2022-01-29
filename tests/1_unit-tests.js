const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    suite("convertHandler.getNum(input)",()=>{
        test("return whole number",(done)=>{
            let input="1km";
            assert.equal(convertHandler.getNum(input),1);
            done();
        })
        test("return decimal number",(done)=>{
            let input="1.5km";
            assert.equal(convertHandler.getNum(input),1.5);
            done();
        })
        test("read fraction number and return float",(done)=>{
            let input="1/2km";
            assert.equal(convertHandler.getNum(input),0.5);
            done();
        })
        test("read fraction decimal number and return float",(done)=>{
            let input="2.5/2km";
            assert.equal(convertHandler.getNum(input),1.25);
            done();
        })
        test("return invalid number when input is double-fraction",(done)=>{
            let input="3/2/3km";
            assert.equal(convertHandler.getNum(input),"invalid number");
            done();
        })
        test("default number should be 1",(done)=>{
            let input="km";
            assert.equal(convertHandler.getNum(input),1);
            done();
        })
        
    })

    suite('convertHandler.getUnit(input)',()=>{

        test('read each input value correct', (done) => {
        var correctInput = ["gal",  "mi", "km", "lbs", "kg", "GAL",  "MI", "KM", "LBS", "KG"];
          correctInput.forEach((unit)=>{
              unit=unit.toLowerCase();
              let input=`25${unit}`
              assert.equal(convertHandler.getUnit(input),unit);
            })
            done();
        });
        test("return the correct return unit for each valid input unit",(done)=>{
            let input="45karan";
            assert.equal(convertHandler.getUnit(input),"invalid unit");
            done();
        })
        
    })

    suite('convertHandler.returnUnit(initUnit)', () => {
        test('return the correct return unit for each valid input unit', (done) => {
          var validUnit = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
          var returnUnit = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];
          validUnit.forEach((unit, i) => {
            assert.equal(convertHandler.getReturnUnit(unit), returnUnit[i]);
          });
          done();
        })
      })
    
      suite('convertHandler.spellOutUnit(unit)', () => {
        test('return the spelled-out string unit for each valid input unit', (done) => {
          var units = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
          var spellOutUnit = ['gallons', 'liters', 'miles', 'kilometers', 'pounds' , 'kilograms'];
          units.forEach((unit, i) => {
            assert.equal(convertHandler.spellOutUnit(unit), spellOutUnit[i]);
          });
          done();
        })
      })
    
      suite('convertHandler.convert(initNum, initUnit)', () => {
        test('convert gal to L', (done) => {
          var initNum = 1.5;
          var initUnit = "gal";
          var returnNum = 5.67812;
          assert.approximately(convertHandler.convert(initNum, initUnit), returnNum, 0.1)
          done();
        })
    
        test('convert L to gal', (done) => {
          var initNum = 2.3;
          var initUnit = "L";
          var returnNum = 0.60760;
          assert.approximately(convertHandler.convert(initNum, initUnit), returnNum, 0.1)
          done();
        })
    
        test('convert mi to km', (done) => {
          var initNum = 13.8;
          var initUnit = "mi";
          var returnNum = 22.20889;
          assert.approximately(convertHandler.convert(initNum, initUnit), returnNum, 0.1)
          done();
        })
    
        test('convert km to mi', (done) => {
          var initNum = 4;
          var initUnit = "km";
          var returnNum = 2.48549;
          assert.approximately(convertHandler.convert(initNum, initUnit), returnNum, 0.1)
          done();
        })
    
        test('convert lbs to kg', (done) => {
          var initNum = 150;
          var initUnit = "lbs";
          var returnNum = 68.03880;
          assert.approximately(convertHandler.convert(initNum, initUnit), returnNum, 0.1)
          done();
        })
    
        test('convert kg to lbs', (done) => {
          var initNum = 48;
          var initUnit = "kg";
          var returnNum = 105.82197;
          assert.approximately(convertHandler.convert(initNum, initUnit), returnNum, 0.1)
          done();
        })
      })
});