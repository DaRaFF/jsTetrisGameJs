/**
 * Map
 *
 * @param {Number} tilesX number of tiles in x direction 
 * @param {Number} tilesY number of tiles in y direction
 * @returns
 */
Tetris.Map = function(tilesX, tilesY){
    var that = this;
    this.tilesX = tilesX;
    this.tilesY = tilesY;
    this.shape = [[]];
    
    this.init = function(){
        for (var y = 0; y < that.tilesY ; y++) {
            that.shape[y] = [];
            for (var x = 0; x < that.tilesX; x++) {
                that.shape[y][x] = 0;
            }
    
        }
    }
    
    this.draw = function(){
        for(var y = 0; y < that.shape.length; y++){
            for(var x = 0; x < that.shape[0].length; x++){
                if(that.shape[y][x]){
                    engine.context.fillStyle = "rgb(200,0,0)";
                    engine.context.fillRect (engine.screen.tilesX * x, engine.screen.tilesX * y, engine.screen.tilesX, engine.screen.tilesY);
                }
            }
        }
    }

    this.update = function(){
    
    }    
}


