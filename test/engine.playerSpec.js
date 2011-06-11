describe('Player', function () {
    var currentShape = [];
    var currentMap = [];
    var currentBlock;
    beforeEach(function(){
        currentShape = [
        [0,1,0],
        [0,1,0],
        [1,1,0],
        ];
    
        currentMap = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1]
        ];
        engine.screen.tileCountX = 16;
        engine.screen.tileCountY = 16;
        currentBlock = new Tetris.Block(currentShape, engine.player.tileX, engine.player.tileY);
    });
    
    describe('Collision right', function () {
        it('should return true if collided at right border', function () {
            engine.player.tileX = 14;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentBlock, currentMap, 1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 1', function () {
            engine.player.tileX = 2;
            engine.player.tileY = 6;
            var collided = engine.player.collide(currentBlock, currentMap, 1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 2', function () {
            engine.player.tileX = 2;
            engine.player.tileY = 3;
            var collided = engine.player.collide(currentBlock, currentMap, 1,0);
            expect(collided).toBeTruthy();
        });

        it('should return false if not colliding', function () {
            engine.player.tileX = 1;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentBlock, currentMap, 1,0);
            expect(collided).toBeFalsy();
        });
    });
    
    describe('Collision left', function () {
        it('should return true if collided at left border', function () {
            engine.player.tileX = 0;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentBlock, currentMap, -1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 1', function () {
            engine.player.tileX = 5;
            engine.player.tileY = 3;
            var collided = engine.player.collide(currentBlock, currentMap, -1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 2', function () {
            engine.player.tileX = 4;
            engine.player.tileY = 6;
            var collided = engine.player.collide(currentBlock, currentMap, -1,0);
            expect(collided).toBeTruthy();
        });

        it('should return false if not colliding', function () {
            engine.player.tileX = 1;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentBlock, currentMap, -1,0);
            expect(collided).toBeFalsy();
        });
    });
    
    describe('Collision down', function () {
        it('should return true if collided at bottom border', function () {
            engine.player.tileX = 0;
            engine.player.tileY = 15;
            var collided = engine.player.collide(currentBlock, currentMap, 0, 1);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 1', function () {
            engine.player.tileX = 0;
            engine.player.tileY = 14;
            var collided = engine.player.collide(currentBlock, currentMap, 0, 1);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 2', function () {
            engine.player.tileX = 6;
            engine.player.tileY = 14;
            var collided = engine.player.collide(currentBlock, currentMap, 0, 1);
            expect(collided).toBeTruthy();
        });

        it('should return false if not colliding', function () {
            engine.player.tileX = 6;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentBlock, currentMap, 0, 1);
            expect(collided).toBeFalsy();
        });
    });
});


