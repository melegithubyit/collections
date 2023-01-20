function compute()
{
    //assigning the value of the input texts in html file to their respective variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //computing the total amount to be displayed
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);    
//the code below is to check whether the input number is above 0.
//if not it alert a message enter a positive number
            if(principal<=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
            }

//the code below is to compute the inner html using the id we assigned for the spa on the index.html document. 
//there are three ways to display the js outputs. those are:
// 1,using inner html
// 2,using window.alert
// 3,using document.write()
    document.getElementById("result").innerHTML="If you deposit <span style = 'background-color: yellow'>"+ principal + "</span>"
    +",<br>at an interest rate of <span style='background-color:yellow'>"+rate+ "%</span>"
    +"<br>You will receive an amount of<span style='background-color:yellow'> "+amount+ "</span>" +",\<br\>in the year <span style='background-color:yellow'>"
    +year+ "<br>"   

}

//the code below is to take the value we used for the range and reveal it beside it.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
