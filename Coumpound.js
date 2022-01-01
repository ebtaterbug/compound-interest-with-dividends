var p = 150000 //Principal
var pmt = 4000 //Monthly Addition
var futureValues = []
var r = 0.10 // Rate of Return
var n = 12 // Compound Monthly
var t = 9 // Number of Years
var reinvested
var dividendYield = 0.02// Average Dividend Yield

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

console.log(` $${Math.floor(futureValues[t]*0.75)}  -  Invested ${t} years without dividends reinvested `)
console.log(` $${Math.floor(reinvested*0.75)}  -  Invested ${t} years with dividends reinvested `)
