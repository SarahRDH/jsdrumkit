//the data-key attributes are already paired with each audio file in the html.
//so just grab the audio[data-key] elements and add an event listener to those.
//could querySelectorAll for all data-keys and loop through them

//keyCode is a built in function in JS
//data- attributes in html are built in container that hold whatever data you want
//using "${e.keyCode}" in the querySelector will grab whatever key number is pressed WITHOUT making those an array and looping through!

//listen for the keyed event
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    
    if (!audio) return; //if you can't find an audio element associated with that keyCode, stop
    audio.play();
    audio.currentTime=0; //plays the sound from the beginning each time the key is pressed. sort of cuts it of so it can be repeated.

    key.classList.add('playing');
    

});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skips all the other objects unless it's the transform property
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
//COULD loop through all of these and listen for the end of the transition, but it's easier to use forEach
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


//need to clean up the function event line 10
//need to find a way to avoid using keyCode because it's deprecated.