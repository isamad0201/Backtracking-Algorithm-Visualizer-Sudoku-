var validValColor = "green" , invalidValColor = "red" , defaultColor = "yellow" ;

var sudoku = [[0,0,0,2,6,0,7,0,1],[6,8,0,0,7,0,0,9,0],[1,9,0,0,0,4,5,0,0],
            [8,2,0,1,0,0,0,4,0],[0,0,4,6,0,2,9,0,0],[0,5,0,0,0,3,0,2,8],
            [0,0,9,3,0,0,0,7,4],[0,4,0,0,5,0,0,3,6],[7,0,3,0,1,8,0,0,0]];

            

function fillSudoku(){
    for(var i = 0; i<sudoku.length ; i++){
        for(var j = 0;j<sudoku[i].length ; j++){
            if(sudoku[i][j] != 0){
                var gridNumber  = (Math.floor(i/3)*3)+Math.floor(j/3);
                var cellNumber  = ((i%3)*3)+(j%3);
                var cellId = "cell"+gridNumber+cellNumber;
                var cell = document.getElementById(cellId);
                cell.innerHTML = sudoku[i][j];
                // cell.style.backgroundColor = 'green'
            }
        }
    }
}

function fun(){
    sudokuSolver(0,0);
}

function validStep(row , col , val){
    var gridNumber = (Math.floor(row/3)*3)+Math.floor(col/3);
    var gridRow = Math.floor(gridNumber/3)*3 , gridCol = (gridNumber%3)*3 ;
    for(var i = 0;i<sudoku.length ;i++){
        if(sudoku[i][col] == val){
            return 0;
        }
        if(sudoku[row][i] == val){
            return 0;
        }
        if(sudoku[gridRow+Math.floor(i/3)][gridCol+(i%3)] == val){
            return 0;
        }
    }
    return 1;
}

function sudokuSolver( row , col){
    if(row == 9){
        return 1;
    }
    // console.log( row,col)
    var nextRow = row , nextCol = col + 1;
    if(nextCol == 9){
        nextCol = 0;
        nextRow++;
    }
    if(sudoku[row][col] != 0){
        return sudokuSolver(nextRow , nextCol);
    }

    var gridNumber  = (Math.floor(row/3)*3)+Math.floor(col/3);
    var cellNumber  = ((row%3)*3)+(col%3);
    var cellId = "cell"+gridNumber+cellNumber;
    
    
    for(var val=1;val<10;val++){
        if( validStep(row , col , val) ){
            updateCellValue(cellId , val);
            changeCellColor(cellId , validValColor)
            sudoku[row][col] = val ;
             

            if(sudokuSolver( nextRow , nextCol)){
                return 1;
            }
            sudoku[row][col] = 0 ;
            
            updateCellValue( cellId , "" );
            changeCellColor(cellId , invalidValColor);
        }
    }

    changeCellColor(cellId , defaultColor);
    return 0;
}

function changeCellColor(cellId , color){
    var cell = document.getElementById(cellId);
    cell.style.background = color ;
    
    
}

function updateCellValue(cellId , val){
    // console.log(cellId + "  " + val)
    var cell = document.getElementById(cellId);
    cell.innerHTML = ""+val ;
}

// function sleep(timeInMilliSecconds){
//     if(timeInMilliSecconds==0)return;

// setTimeout(
//     function () {sleep(timeInMilliSecconds-1)} , timeInMilliSecconds
// )

// }

