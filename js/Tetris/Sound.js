/**
 * Sound for the game
 * Starts after init
 *
 * @returns undefined
 */
var Sound = function(){
    this.gameSound;
    
    this.init = function(){
        this.gameSound = new buzz.sound( "/sound/tetris_sound_A", {        
            formats: [ "mp3", "ogg" ],
            preload: 'metadata',
            autoplay: false,
            loop: true
        });
    }
    
    this.getNetworkStateMessage = function (){
        return this.gameSound.getNetworkStateMessage();
    }
    
    this.getStateMessage = function (){
        return this.gameSound.getStateMessage();
    }
}

exports.Sound = Sound;


