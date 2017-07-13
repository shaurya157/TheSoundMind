function play() {
  var x = document.getElementsByClassName("material-icons init")
  for (var i = 0; i < x.length; i++) {
    if (x[i].innerHTML === "play_circle_outline") {
      x[i].innerHTML = "pause_circle_outline";
    }
  }

  var y = document.getElementsByClassName("material-icons hover")
  for (var i = 0; i < y.length; i++) {
    if (y[i].innerHTML === "play_circle_filled") {
      y[i].innerHTML = "pause_circle_filled";
    }
  }

  var z = document.getElementsByClassName("play-pause")
  for (var i = 0; i < x.length; i++) {
    if (z[i].getAttribute("onclick") === "play()") {
      z[i].setAttribute("onclick", "pause()");
    }
  }
}

function pause() {
  var x = document.getElementsByClassName("material-icons init")
  for (var i = 0; i < x.length; i++) {
    if (x[i].innerHTML === "pause_circle_outline") {
      x[i].innerHTML = "play_circle_outline";
    }
  }

  var y = document.getElementsByClassName("material-icons hover")
  for (var i = 0; i < y.length; i++) {
    if (y[i].innerHTML === "pause_circle_filled") {
      y[i].innerHTML = "play_circle_filled";
    }
  }

  var z = document.getElementsByClassName("play-pause")
  for (var i = 0; i < x.length; i++) {
    if (z[i].getAttribute("onclick") === "pause()") {
      z[i].setAttribute("onclick", "play()");
    }
  }
}

function thumbUpInit() {
  document.getElementById("thumbup-btn").setAttribute("onclick", "thumbUpAfter()");
  document.getElementById("thumbup-btn").setAttribute("id", "thumbup-btn-1");

  if (document.getElementById("thumbdown-btn-1")) {
    document.getElementById("thumbdown-btn-1").setAttribute("onclick", "thumbDownInit()");
    document.getElementById("thumbdown-btn-1").setAttribute("id", "thumbdown-btn");
  }
}

function thumbUpAfter() {
  document.getElementById("thumbup-btn-1").setAttribute("onclick", "thumbUpInit()");
  document.getElementById("thumbup-btn-1").setAttribute("id", "thumbup-btn");
}

function thumbDownInit() {
  document.getElementById("thumbdown-btn").setAttribute("onclick", "thumbDownAfter()");
  document.getElementById("thumbdown-btn").setAttribute("id", "thumbdown-btn-1");

  if (document.getElementById("thumbup-btn-1")) {
    document.getElementById("thumbup-btn-1").setAttribute("onclick", "thumbUpInit()");
    document.getElementById("thumbup-btn-1").setAttribute("id", "thumbup-btn");
  }
}

function thumbDownAfter() {
  document.getElementById("thumbdown-btn-1").setAttribute("onclick", "thumbDownInit()");
  document.getElementById("thumbdown-btn-1").setAttribute("id", "thumbdown-btn");
}

function moreInit() {
  document.getElementById("more-btn").setAttribute("onclick", "moreAfter()");
  document.getElementById("more-btn").setAttribute("id", "more-btn-1");
}

function moreAfter() {
  document.getElementById("more-btn-1").setAttribute("onclick", "moreInit()");
  document.getElementById("more-btn-1").setAttribute("id", "more-btn");
}

function satisfiedInit() {
  document.getElementById("satisfied-btn").setAttribute("onclick", "satisfiedAfter()");
  document.getElementById("satisfied-btn").setAttribute("id", "satisfied-btn-1");

  if (document.getElementById("dissatisfied-btn-1")) {
    document.getElementById("dissatisfied-btn-1").setAttribute("onclick", "dissatisfiedInit()");
    document.getElementById("dissatisfied-btn-1").setAttribute("id", "dissatisfied-btn");
  }
}

function satisfiedAfter() {
  document.getElementById("satisfied-btn-1").setAttribute("onclick", "satisfiedInit()");
  document.getElementById("satisfied-btn-1").setAttribute("id", "satisfied-btn");
}

function dissatisfiedInit() {
  document.getElementById("dissatisfied-btn").setAttribute("onclick", "dissatisfiedAfter()");
  document.getElementById("dissatisfied-btn").setAttribute("id", "dissatisfied-btn-1");

  if (document.getElementById("satisfied-btn-1")) {
    document.getElementById("satisfied-btn-1").setAttribute("onclick", "satisfiedInit()");
    document.getElementById("satisfied-btn-1").setAttribute("id", "satisfied-btn");
  }
}

function dissatisfiedAfter() {
  document.getElementById("dissatisfied-btn-1").setAttribute("onclick", "dissatisfiedInit()");
  document.getElementById("dissatisfied-btn-1").setAttribute("id", "dissatisfied-btn");
}
