/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    const visited = Array(grid.length).fill(null).map(() => Array(grid[0].length).fill(0));
    let count = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1' && visited[i][j] === 0){
                dfs(grid ,  i , j  , visited);
                count++;
            }
        }
    }
    return count;
    
};


function dfs(grid, i , j , visited){
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || 
       grid[i][j] === '0' || visited[i][j] === 1)
        return;
    visited[i][j] = 1;
    dfs(grid, i - 1 , j , visited);
    dfs(grid, i  , j  +1 , visited);
    dfs(grid, i  , j - 1 , visited);
    dfs(grid, i + 1 , j , visited);
}