var gamejs = require('gamejs');
var Block = require('Tetris/Block').Block;

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
        block.blockSurface = new gamejs.Surface([50, 50]);
        
        block.blockSurface.blit(
            blockElement.imageSrc, 
            [0,0], 
            (new gamejs.Rect(
                [blockElement.imageX,blockElement.imageY], 
                [blockElement.imageSrc.rect.width,blockElement.imageSrc.rect.height]
            ))
        );
        
        return block;
    }
}

exports.BlockFactory = BlockFactory;


