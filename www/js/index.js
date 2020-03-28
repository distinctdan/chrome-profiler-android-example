var img = document.querySelector('.app');
var offset = {x: 50, y: 0};
var vel = {x: 0.5, y: 0};
var min = 30;
var max = 70;

// Move the "Device is Ready" banner left and right.
function tick() {
    move();
    setStyle(offset.x);
    
    requestAnimationFrame(tick);
}

function move() {
    offset.x += vel.x;
    if (offset.x > max || offset.x < min) vel.x = -vel.x;
    
    // Sleep to make this method take long enough to show up on the profiler
    sleep(5);
}

function setStyle(x) {
    img.style.left = x + '%';
}

function sleep(duration) {
    var now = new Date().getTime();
    while(new Date().getTime() < now + duration){ /* do nothing */ }
}

tick();