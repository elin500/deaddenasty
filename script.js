var timeset = 0;
var id = setInterval(function() {
    timeset++;
    if(timeset === 5)
    {
        clearInterval(id);
    }
    document.getElementById("ads_left").remove();
}, 1000);
