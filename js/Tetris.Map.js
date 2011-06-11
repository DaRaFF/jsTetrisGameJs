Tetris.Map = function(tilesX, tilesY){
    this.tilesX = tilesX;
    this.tilesY = tilesY;
    this.currentMap = null;
    
    this.createMap = function(){
        for (var y = 0; y  < this.tilesX ; y ++) {
            for (var x = 0; x < this.tilesY; x++) {
                currentMap[y][x] = 0;
            }
    
        }
    }
}


