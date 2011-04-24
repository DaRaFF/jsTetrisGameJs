describe('Input', function () {
    var e = {
        touches: [{
            pageX: 0,
            pageY: 0
        }]
    };
    
    beforeEach(function(){
        spyOn(engine, 'getInnerHeight').andReturn(900);
        spyOn(engine, 'getInnerWidth').andReturn(900);
        spyOn(engine.player, 'move');
    });
    
    describe('Touch', function () {
        it('should call move down', function () {
            e.touches[0].pageX = 0;
            e.touches[0].pageY = 600;
            engine.input.parseTouchInput(e);
            expect(engine.player.move).toHaveBeenCalledWith('down');
            
            engine.player.move.reset();
            
            e.touches[0].pageX = 450;
            e.touches[0].pageY = 600;
            engine.input.parseTouchInput(e);
            expect(engine.player.move).toHaveBeenCalledWith('down');
            
            engine.player.move.reset();
            
            e.touches[0].pageX = 900;
            e.touches[0].pageY = 600;
            engine.input.parseTouchInput(e);
            expect(engine.player.move).toHaveBeenCalledWith('down');
        });
        
        it('should call move left', function () {
            e.touches[0].pageX = 0;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(engine.player.move).toHaveBeenCalledWith('left');
            
            engine.player.move.reset();
            
            e.touches[0].pageX = 299;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(engine.player.move).toHaveBeenCalledWith('left');
        });
        
        it('should call move right', function () {
            e.touches[0].pageX = 601;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(engine.player.move).toHaveBeenCalledWith('right');
            
            engine.player.move.reset();
            
            e.touches[0].pageX = 900;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(engine.player.move).toHaveBeenCalledWith('right');
        });
        
        it('should call move turn', function () {
            e.touches[0].pageX = 301;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(engine.player.move).toHaveBeenCalledWith('turn');
            
            engine.player.move.reset();
            
            e.touches[0].pageX = 600;
            e.touches[0].pageY = 599;
            engine.input.parseTouchInput(e);
            expect(engine.player.move).toHaveBeenCalledWith('turn');
        });
    });
});


