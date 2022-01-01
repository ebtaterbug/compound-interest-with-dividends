var p = 10000
var pmt = 10000
var futureValues = []
var r = 0.10
var n = 12
var t = 10
var reinvested
var dividendYield = 0.025

for (let i=0; i<t+1; i++){
  var ci = p*(Math.pow((1 + (r / n)), (n * i)))
  var fv = Math.floor(pmt*(((Math.pow((1 + (r / n)), (n * i)))-1)/(r/n)))
  futureValues.push(Math.floor(ci+fv))
}

for (let i=0; i<t+1; i++){
  var ci = p*(Math.pow((1 + (r / n)), (n * i)))
  var fv = Math.floor((pmt+(futureValues[i]*dividendYield)/12)*(((Math.pow((1 + (r / n)), (n * i)))-1)/(r/n)))
  var reinvested = (Math.floor(ci+fv))
}

console.log(`$${futureValues[t]}  -  Invested ${t} years without dividends reinvested`)
console.log(`$${reinvested}  -  Invested ${t} years with dividends reinvested`)