
import eel  
import time
eel.init("web")  

validValColor = "green" 
invalidValColor = "red" 
defaultColor = "#f9eae0c7" 



board = [[0,0,0,2,6,0,7,0,1],[6,8,0,0,7,0,0,9,0],[1,9,0,0,0,4,5,0,0],[8,2,0,1,0,0,0,4,0],[0,0,4,6,0,2,9,0,0],[0,5,0,0,0,3,0,2,8],[0,0,9,3,0,0,0,7,4],[0,4,0,0,5,0,0,3,6],[7,0,3,0,1,8,0,0,0]]

def fillGrid():
    for row in range(0, 9):
        for col in range(0, 9):
            if board[row][col] != 0 :
                eel.updateCellValue(row,col,board[row][col])
    
@eel.expose
def getUnsolvedGrid():
    fillGrid()

@eel.expose
def visualize():
    solveSudoku(0,0)

def valid(row, col, val):

    gridNumber = ((row//3)*3)+(col//3)
    gridRow = (gridNumber//3)*3
    gridCol = (gridNumber%3)*3 

    for k in range(0,9):
        if board[k][col] == val or board[row][k] == val:
            return False
        if board[gridRow+(row//3)][gridCol+(row%3)] == val:
            return False
    
    return True


def solveSudoku(row, col):
    if row == len(board):
        return True
    newRow = row
    newCol = col+1
    if newCol == len(board):
        newCol = 0
        newRow+=1
    if board[row][col] != 0:
        return solveSudoku(newRow , newCol)
    
    #attempt to assign all values
    for val in range(1, len(board)+1):
        if valid(row, col, val):
            board[row][col] = val
            eel.updateCellValue(row,col,str(board[row][col]))
            eel.changeCellColor(row,col,validValColor)
            time.sleep(0.5)
            if solveSudoku(newRow , newCol):
                return True
            
            eel.changeCellColor(row,col,invalidValColor)
            time.sleep(0.5)
            eel.updateCellValue(row,col,"")
            eel.changeCellColor(row,col,defaultColor)

    board[row][col] = 0
    return False


eel.start("visualizer.html")  