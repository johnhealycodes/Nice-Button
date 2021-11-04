var clicks = 0;

function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    if (clicks === 69) {
        console.log ("hit 69");
        window.alert("nice");
    } else if (clicks === 420) {
        console.log ("hit 420");
        window.alert("blaze it");
    }

}