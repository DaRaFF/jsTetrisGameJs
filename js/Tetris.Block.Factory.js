/**
* Factory for Block creation
*
* @return
*/
Tetris.Block.Factory = function (){
    
    /**
    * Factory for Block creation
    * blockElements are default defined in Tetris.Block.Elements
    * 
    * @param {Tetris.Block.Elements} shapes where the Factory can chose for creation
    * @param {Number} tileX The x start position of Block in Map
    * @param {Number} tileX The y start position of Block in Map
    * @return {Tetris.Block} Block
    */
    this.create = function(shapes, tileX, tileY){
        var randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        return new Tetris.Block(randomShape, tileX, tileY);
    }
}


