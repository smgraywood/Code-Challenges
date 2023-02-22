// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
    for (let i=0;i<matrix.length;i++) {
        for (let j=i;j<matrix[0].length;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length/2;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[0].length-j-1];
            matrix[i][matrix[0].length-j-1] = temp;
        }
    }
};
