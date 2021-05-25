window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}

const shapes = document.querySelectorAll(".shape");
  
  // ===> Data transformations
  const shapesArr = [...shapes];
  const matrixChunks = _.chunk(shapesArr, 9);
  
  // ===> Helper functions
  
  // Generate random color
  const generateRandomRGB = () => {
    const o = Math.round,
    r = Math.random,
    s = 255;
    return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
  };
  
  // Spiral iteration
  const directions = {
    x: [1, 0, -1, 0],
    y: [0, 1, 0, -1] };
  
  const spiralForEach = matrix => {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    const size = rowCount * colCount;
    const visited = new Array(rowCount).fill(0).map(() => new Array());
    const result = [];
  
    let x = y = direction = 0;
  
    for (let i = 0; i < size; i++) {if (window.CP.shouldStopExecution(0)) break;
      result.push(matrix[y][x]);
      matrix[y][x].style["animation-delay"] = `${i * 0.03}s`;
      // matrix[y][x].style.background = generateRandomRGB();
      visited[y][x] = true;
  
      const diffX = x + directions.x[direction];
      const diffY = y + directions.y[direction];
  
      if (
      diffX >= 0 &&
      diffX < colCount &&
      diffY >= 0 &&
      diffY < rowCount &&
      !visited[diffY][diffX])
      {
        x = diffX;
        y = diffY;
      } else {
        direction = (direction + 1) % 4;
  
        x += directions.x[direction];
        y += directions.y[direction];
      }
    }window.CP.exitedLoop(0);
  
    return result;
  };
  
  // Spiral animation
  spiralForEach(matrixChunks);
  //# sourceURL=pen.js