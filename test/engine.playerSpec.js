describe('Player', function () {
    var currentStone = [];
    var currentMap = [];
    beforeEach(function(){
        currentStone = [
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
    });
    
    describe('Collision right', function () {
        it('should return true if collided at right border', function () {
            engine.player.tileX = 14;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentStone, currentMap, 1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 1', function () {
            engine.player.tileX = 2;
            engine.player.tileY = 6;
            var collided = engine.player.collide(currentStone, currentMap, 1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 2', function () {
            engine.player.tileX = 2;
            engine.player.tileY = 3;
            var collided = engine.player.collide(currentStone, currentMap, 1,0);
            expect(collided).toBeTruthy();
        });

        it('should return false if not colliding', function () {
            engine.player.tileX = 1;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentStone, currentMap, 1,0);
            expect(collided).toBeFalsy();
        });
    });
    
    describe('Collision left', function () {
        it('should return true if collided at left border', function () {
            engine.player.tileX = 0;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentStone, currentMap, -1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 1', function () {
            engine.player.tileX = 5;
            engine.player.tileY = 3;
            var collided = engine.player.collide(currentStone, currentMap, -1,0);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 2', function () {
            engine.player.tileX = 4;
            engine.player.tileY = 6;
            var collided = engine.player.collide(currentStone, currentMap, -1,0);
            expect(collided).toBeTruthy();
        });

        it('should return false if not colliding', function () {
            engine.player.tileX = 1;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentStone, currentMap, -1,0);
            expect(collided).toBeFalsy();
        });
    });
    
    describe('Collision down', function () {
        it('should return true if collided at bottom border', function () {
            engine.player.tileX = 0;
            engine.player.tileY = 15;
            var collided = engine.player.collide(currentStone, currentMap, 0, 1);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 1', function () {
            engine.player.tileX = 0;
            engine.player.tileY = 14;
            var collided = engine.player.collide(currentStone, currentMap, 0, 1);
            expect(collided).toBeTruthy();
        });

        it('should return true if colliding in the map 2', function () {
            engine.player.tileX = 6;
            engine.player.tileY = 14;
            var collided = engine.player.collide(currentStone, currentMap, 0, 1);
            expect(collided).toBeTruthy();
        });

        it('should return false if not colliding', function () {
            engine.player.tileX = 6;
            engine.player.tileY = 0;
            var collided = engine.player.collide(currentStone, currentMap, 0, 1);
            expect(collided).toBeFalsy();
        });
    });
    
    describe('fix Stone in Map', function () {
        it('should be map = map + stone tiles 1', function () {
            var newMap = [
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
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1]
            ];
            engine.player.tileX = 2;
            engine.player.tileY = 13;
            engine.player.fixStone(currentStone, currentMap);
            expect(newMap).toEqual(currentMap);
        });
        it('should be map = map + stone tiles 1', function () {
            var newMap = [
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
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1]
            ];
            engine.player.tileX = 6;
            engine.player.tileY = 12;
            engine.player.fixStone(currentStone, currentMap);
            expect(newMap).toEqual(currentMap);
        });
    });
   
    
        

});


