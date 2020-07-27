//Event functions
/*
    function event1() {                
        btn.value = "b_output";
        //span.innerText = "s_output";
        var spanWords = document.getElementById("span-words");
        spanWords.innerText = "s_output";
    };
    //span.onclick = event1;              //without (), because its only for calling in <script>
                                        //if uses (), return value returned
    
    function init() {
        //span-words.onclick = event1;        //error with - in javascript
        var spanWords = document.getElementById("span-words");  //good way
        spanWords.onclick = event1;
    };
    window.onload = init;
*/ //upgrade and simplify this code above as below


//window.onload = function() {               //init. function name omitted
window.addEventListener("load", function() { //always uses addEventListener for multi js files
                                             //to avoid overlapping window.onload on js files
    var spanWords = document.getElementById("span-words");
    var btn = document.getElementById("btn");

    spanWords.onclick = function() {    //span onclick function
        spanWords.innerText = "s_output";
    };
    btn.onclick = function() {          //btn onclick
        btn.value = "b_output";
    };

});