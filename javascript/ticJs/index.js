let GameBoard = () =>{
    let board = []
    for (let i=0; i < 3; i++){
        let row = []
        for (let j=0; j<3; j++){
            row.push(" ");
        }
        board.push(row);
    }
    function displayBoard() {
        for (let i =0; i<3; i++){
            console.log(board[i].join("|"));
        }
        
    }
    function move(player, row, col){
        if(board[row][col] ==" "){
            board[row][col] = player;
            return true;
        }
        return false;

    }
    return{board, move, displayBoard}
}

let Game = (cs) => {
    gameBoard = GameBoard();
    currentPlayer = "O";

    GameState = {
        PLAYING: "PLAYING",
        WON: "WON",
        DRAW: "DRAW"
    }

    function switchPlayer(){
        if (currentPlayer =="O"){
            currentPlayer = "X";
        }
        else currentPlayer ="O";
    }
    function checkDraw(){
        for (let i=0; i<3; i++){
            for (let j =0; j<3; j++){
                if (gameBoard.board[i][j] == " "){
                    return false;
                }
            }
        }
        return true;
    }

    function checkWin(){
        // horizontal 
        let b = gameBoard.board 
        for (let i=0; i <3;i++){
            if ((b[i][0] == b[i][1]) && (b[i][1] == b[i][2])){
                console.log("row", i);
                return b[i][0]
            }
        }
        
        // vertical 
        for (let j=0; j <3;j++){
            if ((b[0][0] == b[1][j]) && (b[1][j] == b[2][j])){
                console.log("col", j);
                return b[0][j];
            }
        }
        
        // crosses 
        if ((b[0][0] == b[1][1]) && (b[1][1] == b[2][2])) return b[0][0];

        if ((b[0][2] == b[1][1]) && (b[1][1] == b[2][0])) return b[0][2];
        
        return " ";
    }

    function play(){
        cs.readInput((row, col) => {
        
            let status = gameBoard.move(currentPlayer, row, col)
    
            if (status){
                switchPlayer();
            }
            gameBoard.displayBoard(currentPlayer)
    
            if (!checkDraw()){
    
                winner = checkWin();
                console.log(winner);
                if (winner == " "){
                    play();
                }
                else {
                    console.log(winner, " Won!");
                }
           
            }

        })

    }
    return {gameBoard, play};
}

ConsoleScreen = () => {
    function readInput(callback){
        console.log("Please enter the cell number for player (1-9):", currentPlayer)
        process.stdin.resume();
        process.stdin.setEncoding("utf8");

        process.stdin.once("data", function (input) {
            // Trim the input to remove any trailing newline or whitespace
            ix = parseInt(input.trim()) -1;
            
            row = Math.floor(ix / 3);
            col = ix % 3;

            // To end the input after receiving one line
            process.stdin.pause();
            
            callback(row, col);

        });

    }
    return {readInput};
}

c = ConsoleScreen();

Game(c).play()