describe('Block', function () {
    describe('turn Stone', function () {
        it('should be turned right', function () {
            var originalStone = [
            [0,1,0],
            [0,1,0],
            [1,1,0],
            ];
            var turnedStoneRight = [
            [1,0,0],
            [1,1,1],
            [0,0,0],
            ];
            var test = new Tetris.Block(0, 0);
            var turnedStone =  test.turn(originalStone, 'right');
            expect(turnedStoneRight).toEqual(turnedStone);
        });
        
        
        it('should be turned left', function () {
            var originalStone = [
            [0,1,0],
            [0,1,0],
            [1,1,0],
            ];
            var turnedStoneLeft = [
            [0,0,0],
            [1,1,1],
            [0,0,1],
            ];
            var test = new Tetris.Block(0, 0);
            var turnedStone = test.turn(originalStone, 'left');
            expect(turnedStoneLeft).toEqual(turnedStone);
        });
    });
});
