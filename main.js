function playSoundFunction(e) {
    var audios = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (audios === null) {
        return;
    }
    audios.currentTime = 0;
    audios.play();
    key.classList.add('active');
};


function removeTransitionFunction(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('active');
}


const keys = document.querySelectorAll('.key');
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('transitionend', removeTransitionFunction);
}
window.addEventListener('keydown', playSoundFunction);