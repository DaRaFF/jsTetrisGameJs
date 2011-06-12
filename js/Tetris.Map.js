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
    
    var create = function(){
        for (var y = 0; y < that.tilesY ; y++) {
            that.shape[y] = [];
            for (var x = 0; x < that.tilesX; x++) {
                that.shape[y][x] = 0;
            }
    
        }
    }
    create();
}


