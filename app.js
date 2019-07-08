var student={
    name:"",
    type:"student"
};

document.addEventListener('DOMContentLoaded',ContentLoaded);

function ContentLoaded(event) {
    document.getElementById('name').addEventListener("keyup",keyUp);
}

function keyUp(event) {
    calculateNumericOutput();
}

function calculateNumericOutput() {
    student.name=document.getElementById('name').value;

    var totalNameValue=0;
    for(var i=0;i<student.name.length;i++){
        totalNameValue+=student.name.charAt(i);
    }

    var output="Total Numeric value of person's name is "+totalNameValue;
    document.getElementById('Output').innerText=output;
<<<<<<< HEAD
}
=======
}
>>>>>>> d8760db20d464622285d90c2e4c3f97986668f7d
