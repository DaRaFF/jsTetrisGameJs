describe('Player', function () {
    var blockShape = [];
    var block;
    var map;
    
    beforeEach(function(){
        blockShape = [
        [0,1,0],
        [0,1,0],
        [1,1,0],
        ];
    
        mapShape = [
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
        block = new Tetris.Block(blockShape, 0, 0);
        map = new Tetris.Map(16, 16);
        map.shape = mapShape;
    });
    
    describe('Collision right', function () {
        it('should return true if collided at right border', function () {
            block.tileX = 14;
            block.tileY = 0;
            var collided = block.collide(map, 1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 1', function () {
            block.tileX = 2;
            block.tileY = 6;
            var collided = block.collide(map, 1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 2', function () {
            block.tileX = 2;
            block.tileY = 3;
            var collided = block.collide(map, 1,0);
            expect(collided).toBeTruthy();
        });

        it('should return false if not colliding', function () {
            block.tileX = 1;
            block.tileY = 0;
            var collided = block.collide(map, 1,0);
            expect(collided).toBeFalsy();
        });
    });
    
    describe('Collision left', function () {
        it('should return true if collided at left border', function () {
            block.tileX = 0;
            block.tileY = 0;
            var collided = block.collide(map, -1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 1', function () {
            block.tileX = 5;
            block.tileY = 3;
            var collided = block.collide(map, -1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 2', function () {
            block.tileX = 4;
            block.tileY = 6;
            var collided = block.collide(map, -1,0);
            expect(collided).toBeTruthy();
        });

        it('should return false if not colliding', function () {
            block.tileX = 1;
            block.tileY = 0;
            var collided = block.collide(map, -1,0);
            expect(collided).toBeFalsy();
        });
    });
    
    describe('Collision down', function () {
        it('should return true if collided at bottom border', function () {
            block.tileX = 0;
            block.tileY = 15;
            var collided = block.collide(map, 0, 1);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 1', function () {
            block.tileX = 0;
            block.tileY = 14;
            var collided = block.collide(map, 0, 1);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 2', function () {
            block.tileX = 6;
            block.tileY = 14;
            var collided = block.collide(map, 0, 1);
            expect(collided).toBeTruthy();
        });

        it('should return false if not colliding', function () {
            block.tileX = 6;
            block.tileY = 0;
            var collided = block.collide(map, 0, 1);
            expect(collided).toBeFalsy();
        });
    });
});


