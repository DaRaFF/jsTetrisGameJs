var screen = {
    tileCountX: 16,
    tileCountY: 16,
    canvas: null,
    tilesX: 0,
    tilesY: 0
};

screen.getWidth = function(realWidth, realHeight){
    var smaller  = Math.min(realWidth,realHeight);
    return (smaller > 1024 ? 1024 : smaller);
};
screen.getInnerHeight = function(){
    return window.innerHeight;
};
screen.getInnerWidth = function(){
    return window.innerWidth;
};

screen.update = function(){
    screen.canvas = document.getElementById('gjs-canvas');
    screen.tilesX = screen.canvas.width / screen.tileCountX;
    screen.tilesY = screen.canvas.height / screen.tileCountY;
    screen.screen_width = screen.getWidth(screen.getInnerWidth(), screen.getInnerHeight());
    screen.screen_height = screen.screen_width;
}

exports.screen = screen;


