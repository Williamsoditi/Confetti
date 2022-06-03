function confettiFalling() {
    var box = document.getElementById("box");
    var colors = ['red','green','blue','yellow','purple','orange','maroon', 'white'];

    for (var i = 0; i < 1000; i++) {
        // Create 1000 Div elements for confetti
        var div = document.createElement('div');
        div.classList.add("confetti");
        box.appendChild(div);
    }

    var confetti = document.querySelectorAll('.confetti');

    for (var i = 0; i < confetti.length; i++) {

        var size = Math.random() *0.01 * [i];

        confetti[i].style.width = 2 * size + 'px';
        confetti[i].style.height = 3 * size + 'px';
        confetti[i].style.left = Math.random() * innerWidth + 'px';

        var background = colors[Math.floor(Math.random() * colors.length)];
        confetti[i].style.backgroundColor = background;

        box.children[i].style.transform = "rotate("+ size*[i] +"deg)";

    }
}
confettiFalling();