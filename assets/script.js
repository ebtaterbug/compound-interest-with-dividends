
var futureValues = []
var inflation = 0.034
var r = 0.10-inflation // Rate of Return
var n = 12 // Compound Monthly
var reinvested = 0;
var dividendYield = 0.02 // Average Dividend Yield

function compound()  {
  var p = $('#amount').val() //Principal
  var pmt = $('#additions').val() //Monthly Addition
  var t = $('#years').val() // Number of Years

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
  console.log(` $${Math.floor(futureValues[t])}  -  Invested ${t} years without dividends reinvested `)
  console.log(` $${Math.floor(reinvested)}  -  Invested ${t} years with dividends reinvested `)
}




$("#btn").on("click", function() {
  compound();
  $(".searches").append($("<li class='search' ></li>").text(compound()));

})