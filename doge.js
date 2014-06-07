// this is doge-script 
// aaron says this should be a real versal gadget 

var player = new VersalPlayerAPI();
var learnerState = {};
var codeInput = undefined;

var playerListeners = function() {

    player.on('learnerStateChanged', function(data) {

        console.log();

        for (var key in data) {

            learnerState[key] = data[key]

        }

    })
}

var populateInput = function() {

    if (learnerState.code) {

        codeInput.value = learnerState.code

    }
}

var addListeners = function() {

    codeInput.addEventListener('keyup', function(e) {

        var keyCode = e.which || e.keyCode;


        if (keyCode === 13) {


            var code = codeInput.value;


            // much good idea 

            var obj = {
                code: code
            };

            player.setLearnerState(obj);


            eval(code);

        }

    })
}

var onload = function() {

    codeInput = document.querySelector('.code');


    player.startListening();

    playerListeners();

    addListeners();

    populateInput();
}

window.onload = onload();