var gamejs = require('gamejs');
require('test/BlockFactorySpec');
require('test/BlockSpec');
require('test/MapSpec');
require('test/PlayerSpec');
require('test/screenSpec');
//require('test/engine.inputSpec');

function test() {
    jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
    jasmine.getEnv().execute();
};

gamejs.preload([
    'img/icon.png',
    'img/blocks.png'
    ]);
gamejs.ready(test);

