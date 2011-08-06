/**
 * Sound for the game
 * Starts after init
 *
 * @returns undefined
 */
var Sound = function(){
    this.gameSound;
    
    this.init = function(){
        buzz.defaults.formats = [ 'ogg', 'mp3' ];
        buzz.defaults.preload = 'auto';
        buzz.defaults.loop = true;
        if ( !buzz.isSupported() ) {
            console.log('buzz is not supported');
        } else{
            console.log('buzz is supported');
        }
        if (!buzz.isOGGSupported()) {
            console.log("Your browser doesn't support OGG Format.");
        }
        if (!buzz.isMP3Supported()) {
            console.log("Your browser doesn't support MP3 Format.");
        }
        this.gameSound = new buzz.sound('sound/tetris_sound_A' );
        this.gameSound.play();
    }
}

exports.Sound = Sound;


