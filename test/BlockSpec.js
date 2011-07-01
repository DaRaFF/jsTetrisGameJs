describe('Block', function () {
    describe('turn Stone', function () {
        it('should be turned right', function () {
            var shape = [
            [0,1,0],
            [0,1,0],
            [1,1,0],
            ];
            var expectedShape = [
            [1,0,0],
            [1,1,1],
            [0,0,0],
            ];
            var block = new Block(shape, 0, 0);
            block.turn('right');
            expect(expectedShape).toEqual(block.shape);
        });
        
        
        it('should be turned left', function () {
            var shape = [
            [0,1,0],
            [0,1,0],
            [1,1,0],
            ];
            var expectedShape = [
            [0,0,0],
            [1,1,1],
            [0,0,1],
            ];
            var block = new Block(shape, 0, 0);
            block.turn('left');
            expect(expectedShape).toEqual(block.shape);
        });
    });
});
