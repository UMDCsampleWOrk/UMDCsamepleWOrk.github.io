function Equals(){
    var operation = document.getElementById("Op");
    var selectOp = operation.value;
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var ofTotal = 0;

    if(selectOp == "+"){
        console.log(parseInt(input1)+parseInt(input2));
        ofTotal = parseInt(input1)+parseInt(input2);
    }
    if(selectOp == "-"){
        console.log(input1-input2);
        ofTotal = input1-input2;
    }
    if(selectOp == "/"){
        console.log(input1/input2);
        ofTotal = input1/input2;
    }
    if(selectOp == "*"){
        console.log(input1*input2);
       ofTotal = input1*input2;
    }

    var Total = document.getElementById("Total");
    Total.value = ofTotal;
}