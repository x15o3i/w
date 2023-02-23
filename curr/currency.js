let btn = document.getElementById("btn");


btn.addEventListener("click", function() {
    let naira = document.getElementById("naira").value
    let dollar = document.getElementById("dollar")
    let Euro = document.getElementById("Euro")
    let Pound = document.getElementById("Pound")
    dollar.value = naira / 460;
    Euro.value = naira / 498.79
    Pound.value = naira / 567.45


});
