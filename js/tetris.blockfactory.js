var tetris = {};

tetris.blockfactory = {
    stones: [
    [ // J
    [0,1,0],
    [0,1,0],
    [1,1,0],    
    ],
    [ // L
    [0,1,0],
    [0,1,0],
    [0,1,1],    
    ],
    [ // T
    [0,0,0],
    [1,1,1],
    [0,1,0],    
    ],
    [ // S
    [0,1,0],
    [0,1,1],
    [0,0,1],    
    ],
    [ // O
    [1,1],
    [1,1],
    ],
    [ // Z
    [0,0,1],
    [0,1,1],
    [0,1,0],    
    ],
    [ // I
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],    
    [0,1,0,0],    
    ],
    ]
}

/**
 * Create a new stone
 *
 * @returns {void}
 */
tetris.blockfactory.create = function(){
    return nextBlock = this.stones[Math.floor(Math.random() * this.stones.length)];
}


