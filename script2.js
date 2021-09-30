// var whole = []
// console.log(d)
// var result
function listboxresult(){

    var spanResult = parseInt(document.getElementById("result").value)
    spanResult = 0;
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
            // whole = [...selected]
            var result = Object.assign.apply({}, keys.map((v, i)=>({[v]:values[i]})))
        }
    }
    console.log(result)
 console.log(values)
    // for(var i=0; i<x.options.length; i++){
    //     if(x.options[i].selected === true){
    //         var i = parseInt(x.options[i].value)
    //         d.push(i)
    //         // spanResult += parseInt(x.options[i].value);
    //         // console.log(spanResult)
    //         // document.getElementById("result").innerHTML = `<h4>total cost : ${spanResult}</h4>`;
    //         // document.getElementById("result").style.color = 'Green'
    //     }
    //     // console.log(d)
    // }
    
    // if(document.getElementById("result").value ==""){
    //     document.getElementById("result").innerHTML = "please select atleast one item"
    //     document.getElementById("result").style.color = "Red"
    // }
}



function listboxresult1(){

    var spanResult = parseInt(document.getElementById("result").value)
    spanResult = 0;
    var x = document.getElementById("");
    // console.log(x)
    document.getElementById("lnch").multiple = true;

    var values = [];
    var keys = [];
    for (var option of document.getElementById('lnch').options)
    {
        if (option.selected) {
            values.push(option.value);
            keys.push(option.text);
            // whole = [...selected]
            var result = Object.assign.apply({}, keys.map((v, i)=>({[v]:values[i]})))
        }
    }
    console.log(result)
    console.log(values)
    // for(var i=0; i<x.options.length; i++){
    //     if(x.options[i].selected === true){
    //         var i = parseInt(x.options[i].value)
    //         d.push(i)
    //         // spanResult += parseInt(x.options[i].value);
    //         // console.log(spanResult)
    //         // document.getElementById("result").innerHTML = `<h4>total cost : ${spanResult}</h4>`;
    //         // document.getElementById("result").style.color = 'Green'
    //     }
    //     // console.log(d)
    // }
    
    // if(document.getElementById("result").value ==""){
    //     document.getElementById("result").innerHTML = "please select atleast one item"
    //     document.getElementById("result").style.color = "Red"
    // }
}


function listboxresult2(){

    var spanResult = parseInt(document.getElementById("result").value)
    spanResult = 0;
    var x = document.getElementById("");
    // console.log(x)
    document.getElementById("gft").multiple = true;

    var values = [];
    var keys = [];
    for (var option of document.getElementById('gft').options)
    {
        if (option.selected) {
            values.push(option.value);
            keys.push(option.text);
            // whole = [...selected]
            var result = Object.assign.apply({}, keys.map((v, i)=>({[v]:values[i]})))
        }
    }
    console.log(result)
    console.log(values)
    // for(var i=0; i<x.options.length; i++){
    //     if(x.options[i].selected === true){
    //         var i = parseInt(x.options[i].value)
    //         d.push(i)
    //         // spanResult += parseInt(x.options[i].value);
    //         // console.log(spanResult)
    //         // document.getElementById("result").innerHTML = `<h4>total cost : ${spanResult}</h4>`;
    //         // document.getElementById("result").style.color = 'Green'
    //     }
    //     // console.log(d)
    // }
    
    // if(document.getElementById("result").value ==""){
    //     document.getElementById("result").innerHTML = "please select atleast one item"
    //     document.getElementById("result").style.color = "Red"
    // }
}


























































