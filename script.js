




function listboxresult(){
    var result = new Object()
    var result2 = new Object()
    var result3 = new Object()
    // var allResult = new Object()

    var total = {}
    var Total = []
    var totalValues =[]
    // var total1 = []
    // var total2 = []
    // var total3 = []
    // var spanResult = parseInt(document.getElementById("result").value)
    // spanResult = 0;
    var x = document.getElementById("dnr");
    // console.log(x)
    document.getElementById("dnr").multiple = true;

    var values = [];
    var keys = [];
    for (var option of document.getElementById('dnr').options)
    {
        if (option.selected) {
            values.push(option.value);
            keys.push(option.text);
            result = Object.assign.apply({}, keys.map((v, i)=>({[v]:values[i]})))
            
        }
        
    }
    
    // total1=push(result)
    // console.log(total1)
//     console.log(result)
//  console.log(values)


    var x = document.getElementById("lnch");
    // console.log(x)
    document.getElementById("lnch").multiple = true;

    var values1 = [];
    var keys = [];
    for (var option of document.getElementById('lnch').options)
    {
        if (option.selected) {
            values1.push(option.value);
            keys.push(option.text);
            result2 = Object.assign.apply({}, keys.map((v, i)=>({[v]:values[i]})))
        }
    }
    // total2.push(result2)
    // console.log(total2)
    // console.log(result2)
    // console.log(values1)
    

    var x = document.getElementById("");

    document.getElementById("gft").multiple = true;

    var values2 = [];
    var keys = [];
    for (var option of document.getElementById('gft').options)
    {
        if (option.selected) {
            values2.push(option.value);
            keys.push(option.text);
            result3 = Object.assign.apply({}, keys.map((v, i)=>({[v]:values[i]})))
        }
    }
    // total3.push(result3)
    // console.log(total3)
    // console.log(result3)
    // console.log(values2)

    totalValues = [...values, ...values2, ...values]
    // console.log(totalValues.length)
    // console.log(totalValues)
    // console.log(totalValues[0])
    var TotalBillsum = 0
    
    for(var i=0; i<totalValues.length; i++){
        
        TotalBillsum += Number(totalValues[i])
    }
    console.log(TotalBillsum)
    document.getElementById("result").innerHTML = `<h4>Total Bill : ${TotalBillsum}<h4>`
    
    total = {...result, ...result2, ...result3}
    // total = [...total1, ...total2, ...total3]

    Total.push(total)
    console.log(total)
    console.log(Total[0])
    // console.log(typeof(total))
    // console.log(typeof(Total))
    // for(var item of Total.keys)
    // {
    //     console.log("value "+item)
    // }
    // for(i=0; i<Total.length; i++){

    // }

}
// console.log(allResult)


// document.getElementById("btn1").addEventListener("submit",listboxresult)