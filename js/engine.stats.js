//engine.stats = new Stats();

// Align top-left
engine.stats.domElement.style.position = 'absolute';
engine.stats.domElement.style.left = '0px';
engine.stats.domElement.style.top = '0px';

document.body.appendChild( engine.stats.domElement );
//document.body.appendChild( engine.stats );

setInterval( function () {

    engine.stats.update();

}, 1000 / 250 );