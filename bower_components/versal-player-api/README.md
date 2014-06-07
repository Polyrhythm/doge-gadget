# Versal Player API

The Versal Player API provides a convenience layer and stability buffer on top
of the [gadget api spec](https://github.com/Versal/gadget-api-spec). Please
refer to the gadget api spec for the full list of supported events and commands.

## Installation

Install with bower `bower install versal-player-api` and include it on the page:

    <script src="bower_components/versal-player-api/dist/api.js"></script>

## Usage

    var player = new VersalPlayerAPI();
    player.on('attributesChanged', function(attrs){
      // do something
    });

    // send this command to receive initial events
    player.startListening();

## Rebuilding

    npm run-script build
