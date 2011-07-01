if(typeof require == 'function'){
    var Block = require('Tetris/Block').Block;
}

/**
* Factory for Block creation
*
* @return
*/
var BlockFactory = function (){
    
    /**
    * Factory for Block creation
    * blockElements are default defined in BlockElements
    * 
    * @param {BlockElements} shapes where the Factory can chose for creation
    * @param {Number} tileX The x start position of Block in Map
    * @param {Number} tileX The y start position of Block in Map
    * @return {Block} Block
    */
    this.create = function(shapes, tileX, tileY){
        var randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        return new Block(randomShape, tileX, tileY);
    }
}

exports.BlockFactory = BlockFactory;


