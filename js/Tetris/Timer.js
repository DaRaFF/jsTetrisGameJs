var Timer = function(game, fallDownTime, callback){
    this.game = game;
    this.lastTick = new Date;
    this.fallDownTime = fallDownTime;
    this.fallDownTimeLeft = fallDownTime;

    this.update = function(){
        this.fallDownTimeLeft -= new Date - this.lastTick;
        this.lastTick = new Date;
        if(this.fallDownTimeLeft <= 0){
            this.fallDownTimeLeft = this.fallDownTime;
            callback(this.game);
        }
    }
}

exports.Timer = Timer;