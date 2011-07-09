var BlockFactory = require('Tetris/BlockFactory').BlockFactory;
var Block = require('Tetris/Block').Block;

describe('BlockFactory', function () {
    describe('create', function () {
        it('should return a L Block', function () {
            var shapes = [
            [ // L
            [0,1,0],
            [0,1,0],
            [0,1,1],    
            ],
            ];
            
            var tileX = 11;
            var tileY = 22;
            
            var blockFactory = new BlockFactory();
            var block = blockFactory.create(shapes, tileX, tileY);
            
            var epectedBlock = new Block(shapes[0], tileX, tileY);
            
            expect(block.shape).toEqual(epectedBlock.shape);
            expect(block.tileX).toEqual(epectedBlock.tileX);
            expect(block.tileY).toEqual(epectedBlock.tileY);
        });
    });
});


