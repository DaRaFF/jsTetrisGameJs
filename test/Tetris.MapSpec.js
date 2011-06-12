describe('Tetris.Map', function () {
    describe('create', function () {
        it('should initialise an empty 2 dimensional logic map', function () {
            var expectedMap = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
            ];
            
            var map = new Tetris.Map(4, 5);
            expect(expectedMap).toEqual(map.shape);
        });
    });
});


