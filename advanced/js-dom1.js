//Ex4: Selecting elements using childNodes
window.addEventListener("load", function() {
    var sec4 = document.querySelector("#sec4");
    //var inputs = sec4.querySelectorAll("input");
    var box = sec4.querySelector(".box");
    //var input1 = box.childNodes[0];       //childNodes can include comment, text and white space
    //var input2 = box.childNodes[1];
    var input1 = box.children[0];           //children includes only tag-type elements
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";

});

//Ex3: Selectors API Level1
window.addEventListener("load", function() {
    var sec3 = document.getElementById("sec3");
    
    var txtX    = sec3.querySelector("input[name='txt-x']");     //querySelector returns 1 element
    var txtY    = sec3.querySelector(".txt-y");     //querySelectorAll returns multi elem.
    var btnAdd  = sec3.querySelector(".btn-add");
    var txtSum  = sec3.querySelector(".txt-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x + y;
    };
});

//Ex2: Improved elements selecting
window.addEventListener("load", function() {
    var sec2 = document.getElementById("sec2");
    
    var txtX    = sec2.getElementsByClassName("txt-x")[0];
    var txtY    = sec2.getElementsByClassName("txt-y")[0];
    var btnAdd  = sec2.getElementsByClassName("btn-add")[0];
    var txtSum  = sec2.getElementsByClassName("txt-sum")[0];

/*
    var inputs = sec2.getElementsByTagName("input");
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
*/
    btnAdd.onclick = function() {
        //console.log("add");
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x + y;
    };
});

//Ex1: Calculator
window.addEventListener("load", function() {
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function() {
        //console.log("add");
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x + y;
    };
});