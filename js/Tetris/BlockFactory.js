var gamejs = require('gamejs');
var Block = require('./Block').Block;

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
    * @param {BlockElements} blockElements where the Factory can chose for creation
    * @param {Number} tileX The x start position of Block in Map
    * @param {Number} tileX The y start position of Block in Map
    * @return {Block} Block
    */
    this.create = function(blockElements, tileX, tileY){
        var blockElement = blockElements[Math.floor(Math.random() * blockElements.length)];
        var block = new Block(blockElement.shape, tileX, tileY);
        block.shapeSurface = new gamejs.graphics.Surface([50, 50]);
        
        block.shapeSurface.blit(
            blockElement.imageSrc,
            (new gamejs.Rect(
                [0,0], 
                [50,50]
                )
            ),
            (new gamejs.Rect(
                [blockElement.imageX,blockElement.imageY], 
                [50,50]
                ))
            );
        return block;
    }
}

exports.BlockFactory = BlockFactory;


