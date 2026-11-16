$(function() {

    let timerId = null;
    let startTime = 0;
    let elapsedTime = 0;
    let previousTime = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    // スタートボタン
    $("#start").on("click", function() {
        $("#start").prop("disabled", true);
        $("#stop, #reset").prop("disabled", false);
        startTime = Date.now();
        timerId = setInterval(function() {

            elapsedTime = Date.now() - startTime  + previousTime;
            hours = Math.floor(elapsedTime / 3600000);
            minutes = Math.floor(elapsedTime / 60000) % 60;
            seconds = Math.floor(elapsedTime / 1000) % 60;
            milliseconds = Math.floor(elapsedTime / 100) % 10;

            $("#display").text(hours + ":" + minutes + ":" + seconds + ":" + milliseconds);

        console.log(elapsedTime);
        }, 100);
    });

    // ストップボタン
    $("#stop").on("click", function() {

        $("#start").prop("disabled", false);
        $("#stop").prop("disabled", true);
        clearInterval(timerId);
        previousTime = elapsedTime;

    });

    // リセットボタン
    $("#reset").on("click", function() {

        clearInterval(timerId);
        timerId = null;
        startTime = 0;
        elapsedTime = 0;
        previousTime = 0;
        $("#start").prop("disabled", false);
        $("#stop, #reset").prop("disabled", true);
        $("#display").text("0:0:0:0");
        
    });
});