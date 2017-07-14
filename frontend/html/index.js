// index.html background carousel
function run(interval, frames) {
    var int = 1;

    function func() {
        document.body.id = "index-bg"+int;
        int++;
        if(int === frames) { int = 1; }
    }

    var swap = window.setInterval(func, interval);
}

run(5000, 8); //milliseconds, frames
