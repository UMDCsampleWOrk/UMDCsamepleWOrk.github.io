function Result(){
    var correctNumber1 = Math.floor(Math.random() * 99) + 1;
    var correctNumber2 = Math.floor(Math.random() * 99) + 1;
    var correctNumber3 = Math.floor(Math.random() * 99) + 1;
    var correctNumber4 = Math.floor(Math.random() * 99) + 1;
    var correctNumber5 = Math.floor(Math.random() * 99) + 1;
    var correctNumber6 = Math.floor(Math.random() * 99) + 1;

    var input1 = document.getElementById("In1").value;
    var input2 = document.getElementById("In2").value;
    var input3 = document.getElementById("In3").value;
    var input4 = document.getElementById("In4").value;
    var input5 = document.getElementById("In5").value;
    var input6 = document.getElementById("In6").value;

    var Random = [correctNumber1, correctNumber2, correctNumber3, correctNumber4, correctNumber5, correctNumber6];
    var Inputs = [input1, input2, input3, input4, input5, input6];

    var isCorrect = true;

    for (var i = 0; i < Random.length; i++) {
        if (Inputs[i] != Random[i]) {
            isCorrect = false;
            break;
        }
    }

    if(isCorrect){
        console.log("Congrats");
        document.getElementById("Congrats").innerHTML = "Congrats!!";
    }else{
        console.log("Wrong");
        document.getElementById("Congrats").innerHTML = "Wrong!!";
        document.getElementById("Wrong").innerHTML = "The Correct Number";
        document.getElementById("Number").innerHTML = Random;
    }

    console.log(Random);
    console.log(Inputs);
    console.log("Working");
}