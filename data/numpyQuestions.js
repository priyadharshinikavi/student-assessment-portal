window.numpyQuestions = {
  set1: [
    {
        id: 58,
        question: "np.var([1,2,3,4,5]) equals",
        options: ["2.5", "2.0", "1.0", "3.0"],
        correctAnswer: "2.0",
        explanation: "The correct answer is 2.0"
    },
    {
        id: 13,
        question: "Which attribute gives the length of each dimension?",
        options: ["shape", "ndim", "size", "dtype"],
        correctAnswer: "shape",
        explanation: "The correct answer is shape"
    },
    {
        id: 141,
        question: "np.random.randint(1, 100, 5) generates numbers from",
        options: ["1 to 100", "0 to 99", "1 to 99", "2 to 100"],
        correctAnswer: "1 to 99",
        explanation: "The correct answer is 1 to 99"
    },
    {
        id: 126,
        question: "Which function creates an identity matrix?",
        options: ["np.eye", "np.identity_only_no", "np.id", "np.one_diag"],
        correctAnswer: "np.eye",
        explanation: "The correct answer is np.eye"
    },
    {
        id: 115,
        question: "np.linalg.solve(A, B) solves",
        options: ["A x = B", "A x B = 0", "A + x = B", "x = A.T"],
        correctAnswer: "A x = B",
        explanation: "The correct answer is A x = B"
    },
    {
        id: 72,
        question: "reshape() changes",
        options: ["The dtype only", "The shape of an array", "The values of an array", "The file name"],
        correctAnswer: "The shape of an array",
        explanation: "The correct answer is The shape of an array"
    },
    {
        id: 53,
        question: "np.max(np.array([10,20,30,40,50])) is",
        options: ["50", "10", "150", "30"],
        correctAnswer: "50",
        explanation: "The correct answer is 50"
    },
    {
        id: 280,
        question: "np.sqrt(16) is",
        options: ["256", "8.0", "4.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 45,
        question: "a[1] for np.array([[1,2],[3,4]]) is",
        options: ["[1 2]", "[3 4]", "3", "[2 4]"],
        correctAnswer: "[3 4]",
        explanation: "The correct answer is [3 4]"
    },
    {
        id: 217,
        question: "np.array([1, 2, 3]).dtype is typically",
        options: ["bool", "str", "int64", "float64"],
        correctAnswer: "int64",
        explanation: "The correct answer is int64"
    },
    {
        id: 17,
        question: "np.array([[1,2,3],[4,5,6]]).ndim is",
        options: ["2", "1", "3", "6"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 16,
        question: "np.array([[1,2,3],[4,5,6]]).shape is",
        options: ["(2, 3)", "(3, 2)", "(6,)", "(2, 2)"],
        correctAnswer: "(2, 3)",
        explanation: "The correct answer is (2, 3)"
    },
    {
        id: 48,
        question: "Negative index -1 refers to",
        options: ["Second element", "Last element", "First element", "Invalid index"],
        correctAnswer: "Last element",
        explanation: "The correct answer is Last element"
    },
    {
        id: 112,
        question: "np.linalg.inv requires",
        options: ["A string", "Zero determinant", "1D array", "Non-zero determinant"],
        correctAnswer: "Non-zero determinant",
        explanation: "The correct answer is Non-zero determinant"
    },
    {
        id: 120,
        question: "np.linalg.eig returns",
        options: ["Only rank", "Eigenvalues and eigenvectors", "Only inverse", "Only determinant"],
        correctAnswer: "Eigenvalues and eigenvectors",
        explanation: "The correct answer is Eigenvalues and eigenvectors"
    },
    {
        id: 259,
        question: "Which broadcasts correctly?",
        options: ["Shape (2,) with (3,)", "Shape (3,) with (4,)", "Shape (2,3) with (4,5)", "Shape (3,) with scalar"],
        correctAnswer: "Shape (3,) with scalar",
        explanation: "The correct answer is Shape (3,) with scalar"
    },
    {
        id: 14,
        question: "Which attribute gives total number of elements?",
        options: ["len_all", "ndim", "shape", "size"],
        correctAnswer: "size",
        explanation: "The correct answer is size"
    },
    {
        id: 288,
        question: "np.arange(6).reshape(2,3)[:,1] is",
        options: ["[3 4 5]", "[1 4]", "[2 5]", "[0 1 2]"],
        correctAnswer: "[1 4]",
        explanation: "The correct answer is [1 4]"
    },
    {
        id: 102,
        question: "Matrix multiplication formula is",
        options: ["C_ij = Σ A_ik B_kj", "C_ij = A_ji", "C_ij = A_ij × B_ij", "C_ij = A_ij + B_ij"],
        correctAnswer: "C_ij = Σ A_ik B_kj",
        explanation: "The correct answer is C_ij = Σ A_ik B_kj"
    },
    {
        id: 215,
        question: "A NumPy array holds elements of",
        options: ["Only strings", "Only functions", "The same data type", "Any mixed types freely"],
        correctAnswer: "The same data type",
        explanation: "The correct answer is The same data type"
    },
    {
        id: 113,
        question: "np.linalg.inv([[1,2],[3,4]]) is",
        options: ["[[4 -2] [-3 1]]", "[[0.5 0.25] [0.33 0.25]]", "[[-2. 1.] [1.5 -0.5]]", "[[1 3] [2 4]]"],
        correctAnswer: "[[-2. 1.] [1.5 -0.5]]",
        explanation: "The correct answer is [[-2. 1.] [1.5 -0.5]]"
    },
    {
        id: 230,
        question: "np.arange(10)[:3] is",
        options: ["[0 1 2]", "[7 8 9]", "[1 2 3]", "[0 1 2 3]"],
        correctAnswer: "[0 1 2]",
        explanation: "The correct answer is [0 1 2]"
    },
    {
        id: 143,
        question: "np.random.randint(1, 10, size=(3,3)) returns",
        options: ["A 9x9 matrix", "A 3x3 matrix of integers 1 to 9", "A 1D array", "A 3x3 matrix of floats"],
        correctAnswer: "A 3x3 matrix of integers 1 to 9",
        explanation: "The correct answer is A 3x3 matrix of integers 1 to 9"
    },
    {
        id: 4,
        question: "The standard NumPy import is",
        options: ["using numpy", "include numpy", "import numpy as np", "import np as numpy"],
        correctAnswer: "import numpy as np",
        explanation: "The correct answer is import numpy as np"
    },
    {
        id: 82,
        question: "np.vstack stacks arrays",
        options: ["Diagonally", "Randomly", "Side by side", "Vertically (one above another)"],
        correctAnswer: "Vertically (one above another)",
        explanation: "The correct answer is Vertically (one above another)"
    },
    {
        id: 175,
        question: "np.savetxt('numbers.txt', a) saves",
        options: ["Nothing", "A binary .npy file", "A human-readable text file", "A CSV with header only"],
        correctAnswer: "A human-readable text file",
        explanation: "The correct answer is A human-readable text file"
    },
    {
        id: 80,
        question: "flatten() returns",
        options: ["A 1D copy", "A list of shapes", "A scalar", "A 2D view"],
        correctAnswer: "A 1D copy",
        explanation: "The correct answer is A 1D copy"
    },
    {
        id: 111,
        question: "A matrix with determinant 0 is",
        options: ["Diagonal only", "Identity", "Singular (no inverse)", "Invertible"],
        correctAnswer: "Singular (no inverse)",
        explanation: "The correct answer is Singular (no inverse)"
    },
    {
        id: 173,
        question: "np.savez('data.npz', first=a, second=b) saves",
        options: ["A CSV", "Only one array", "Multiple named arrays in one file", "A text file"],
        correctAnswer: "Multiple named arrays in one file",
        explanation: "The correct answer is Multiple named arrays in one file"
    },
    {
        id: 195,
        question: "np.var computes",
        options: ["Mean", "Median", "Variance", "Rank"],
        correctAnswer: "Variance",
        explanation: "The correct answer is Variance"
    },
    {
        id: 50,
        question: "np.sum(np.array([10,20,30,40,50])) is",
        options: ["30", "100", "50", "150"],
        correctAnswer: "150",
        explanation: "The correct answer is 150"
    },
    {
        id: 184,
        question: "For the sales data, np.max is",
        options: ["2800", "2500", "3500", "3000"],
        correctAnswer: "3000",
        explanation: "The correct answer is 3000"
    },
    {
        id: 177,
        question: "Which preserves the array efficiently in binary?",
        options: [".png", ".txt", ".npy", ".docx"],
        correctAnswer: ".npy",
        explanation: "The correct answer is .npy"
    },
    {
        id: 136,
        question: "np.outer([1,2],[3,4]) gives",
        options: ["[11]", "[3 8]", "[[4 3] [8 6]]", "[[3 4] [6 8]]"],
        correctAnswer: "[[3 4] [6 8]]",
        explanation: "The correct answer is [[3 4] [6 8]]"
    },
    {
        id: 23,
        question: "np.arange(1, 11, 2) gives",
        options: ["[1 3 5 7 9]", "[1 3 5 7 9 11]", "[1 2 3 4 5]", "[2 4 6 8 10]"],
        correctAnswer: "[1 3 5 7 9]",
        explanation: "The correct answer is [1 3 5 7 9]"
    },
    {
        id: 236,
        question: "np.arange(5, 0, -1) is",
        options: ["[1 2 3 4 5]", "[4 3 2 1 0]", "[5 4 3 2 1]", "[5 4 3 2 1 0]"],
        correctAnswer: "[5 4 3 2 1]",
        explanation: "The correct answer is [5 4 3 2 1]"
    },
    {
        id: 275,
        question: "np.diff([1,4,9]) is",
        options: ["[3 5]", "[5 3]", "[8]", "[1 4 9]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 64,
        question: "Broadcasting allows NumPy to",
        options: ["Delete arrays", "Combine compatible shapes", "Save arrays", "Sort arrays"],
        correctAnswer: "Combine compatible shapes",
        explanation: "The correct answer is Combine compatible shapes"
    },
    {
        id: 194,
        question: "For the sales data, adding bonus 500 uses",
        options: ["Concatenation", "Broadcasting", "Looping only", "Transpose"],
        correctAnswer: "Broadcasting",
        explanation: "The correct answer is Broadcasting"
    },
    {
        id: 41,
        question: "a[1,2] for np.array([[10,20,30],[40,50,60]]) is",
        options: ["20", "30", "60", "50"],
        correctAnswer: "60",
        explanation: "The correct answer is 60"
    },
    {
        id: 283,
        question: "np.floor_divide(7, 2) is",
        options: ["3", "3.5", "2", "4"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 151,
        question: "np.random.shuffle returns",
        options: ["None", "A copy", "The shuffled array", "A list"],
        correctAnswer: "None",
        explanation: "The correct answer is None"
    },
    {
        id: 186,
        question: "For the sales data, sales + 500 on first element gives",
        options: ["2000", "1700", "1500", "1200"],
        correctAnswer: "1700",
        explanation: "The correct answer is 1700"
    },
    {
        id: 296,
        question: "np.zeros((3,4)).shape is",
        options: ["(4, 3)", "(3, 4)", "(12,)", "(3,)"],
        correctAnswer: "(3, 4)",
        explanation: "The correct answer is (3, 4)"
    },
    {
        id: 99,
        question: "A @ B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[18 20] [40 50]]", "[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]"],
        correctAnswer: "[[19 22] [43 50]]",
        explanation: "The correct answer is [[19 22] [43 50]]"
    },
    {
        id: 36,
        question: "Slice syntax is",
        options: ["array{start:stop}", "array[start:stop:step]", "array(start,stop,step)", "array<start,stop>"],
        correctAnswer: "array[start:stop:step]",
        explanation: "The correct answer is array[start:stop:step]"
    },
    {
        id: 24,
        question: "np.arange(0, 5) gives",
        options: ["[0 1 2 3 4]", "[0 1 2 3 4 5]", "[0 5]", "[1 2 3 4 5]"],
        correctAnswer: "[0 1 2 3 4]",
        explanation: "The correct answer is [0 1 2 3 4]"
    },
    {
        id: 117,
        question: "Solving x+y=10 and x−y=2 gives",
        options: ["x=7, y=3", "x=6, y=4", "x=5, y=5", "x=4, y=6"],
        correctAnswer: "x=6, y=4",
        explanation: "The correct answer is x=6, y=4"
    },
    {
        id: 149,
        question: "Standard normal distribution has mean and SD of",
        options: ["0 and 0", "1 and 1", "0 and 1", "1 and 0"],
        correctAnswer: "0 and 1",
        explanation: "The correct answer is 0 and 1"
    },
    {
        id: 52,
        question: "np.min(np.array([10,20,30,40,50])) is",
        options: ["30", "50", "0", "10"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
  ],
  set2: [
    {
        id: 195,
        question: "np.var computes",
        options: ["Mean", "Median", "Variance", "Rank"],
        correctAnswer: "Variance",
        explanation: "The correct answer is Variance"
    },
    {
        id: 143,
        question: "np.random.randint(1, 10, size=(3,3)) returns",
        options: ["A 9x9 matrix", "A 3x3 matrix of integers 1 to 9", "A 1D array", "A 3x3 matrix of floats"],
        correctAnswer: "A 3x3 matrix of integers 1 to 9",
        explanation: "The correct answer is A 3x3 matrix of integers 1 to 9"
    },
    {
        id: 233,
        question: "np.linspace(0, 1, 3) is",
        options: ["[0.3 0.6 1]", "[0. 0.5 1. ]", "[0 1 2]", "[0 0.25 0.5]"],
        correctAnswer: "[0. 0.5 1. ]",
        explanation: "The correct answer is [0. 0.5 1. ]"
    },
    {
        id: 187,
        question: "For the sales data, sales.reshape(2,5) has shape",
        options: ["(1, 10)", "(5, 2)", "(2, 5)", "(10,)"],
        correctAnswer: "(2, 5)",
        explanation: "The correct answer is (2, 5)"
    },
    {
        id: 84,
        question: "np.vstack((np.array([1,2,3]), np.array([4,5,6]))) has shape",
        options: ["(6,)", "(1, 6)", "(3, 2)", "(2, 3)"],
        correctAnswer: "(2, 3)",
        explanation: "The correct answer is (2, 3)"
    },
    {
        id: 190,
        question: "For the sales data, sales.ndim is",
        options: ["0", "1", "10", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 182,
        question: "For the sales data, np.sum is",
        options: ["19700", "19000", "20700", "18700"],
        correctAnswer: "19700",
        explanation: "The correct answer is 19700"
    },
    {
        id: 108,
        question: "np.linalg.det([[1,2],[3,4]]) is",
        options: ["10.0", "-10.0", "2.0", "-2.0"],
        correctAnswer: "-2.0",
        explanation: "The correct answer is -2.0"
    },
    {
        id: 137,
        question: "np.linalg.norm([3,4]) is",
        options: ["5.0", "25.0", "7.0", "1.0"],
        correctAnswer: "5.0",
        explanation: "The correct answer is 5.0"
    },
    {
        id: 37,
        question: "In slicing, stop is",
        options: ["Excluded", "Doubled", "Optional always error", "Included"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 88,
        question: "a.T swaps",
        options: ["Nothing", "Rows and columns", "Values and index", "Rows and values"],
        correctAnswer: "Rows and columns",
        explanation: "The correct answer is Rows and columns"
    },
    {
        id: 274,
        question: "np.clip([1,5,10], 2, 8) is",
        options: ["[1 5 10]", "[2 5 8]", "[2 5 10]", "[1 5 8]"],
        correctAnswer: "[2 5 8]",
        explanation: "The correct answer is [2 5 8]"
    },
    {
        id: 126,
        question: "Which function creates an identity matrix?",
        options: ["np.eye", "np.identity_only_no", "np.id", "np.one_diag"],
        correctAnswer: "np.eye",
        explanation: "The correct answer is np.eye"
    },
    {
        id: 237,
        question: "A view shares memory with the original; a copy",
        options: ["Shares memory", "Has its own memory", "Is not an array", "Is always slower to create"],
        correctAnswer: "Has its own memory",
        explanation: "The correct answer is Has its own memory"
    },
    {
        id: 139,
        question: "np.random.rand() generates a value in",
        options: ["[0, 1)", "(-1, 1)", "[1, 100]", "[0, 10)"],
        correctAnswer: "[0, 1)",
        explanation: "The correct answer is [0, 1)"
    },
    {
        id: 286,
        question: "np.arange(6).reshape(2,3).sum(axis=0) is",
        options: ["[0 3]", "[3 5 7]", "[15]", "[ 3 12]"],
        correctAnswer: "[3 5 7]",
        explanation: "The correct answer is [3 5 7]"
    },
    {
        id: 113,
        question: "np.linalg.inv([[1,2],[3,4]]) is",
        options: ["[[4 -2] [-3 1]]", "[[0.5 0.25] [0.33 0.25]]", "[[-2. 1.] [1.5 -0.5]]", "[[1 3] [2 4]]"],
        correctAnswer: "[[-2. 1.] [1.5 -0.5]]",
        explanation: "The correct answer is [[-2. 1.] [1.5 -0.5]]"
    },
    {
        id: 167,
        question: "np.unique returns values in",
        options: ["Reverse order", "Sorted order", "Original order", "Random order"],
        correctAnswer: "Sorted order",
        explanation: "The correct answer is Sorted order"
    },
    {
        id: 29,
        question: "linspace(start, stop, n) uses n as",
        options: ["Number of values", "Step size", "Dimension", "Last value"],
        correctAnswer: "Number of values",
        explanation: "The correct answer is Number of values"
    },
    {
        id: 118,
        question: "np.linalg.matrix_rank([[2,0],[0,3]]) is",
        options: ["2", "3", "1", "0"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 17,
        question: "np.array([[1,2,3],[4,5,6]]).ndim is",
        options: ["2", "1", "3", "6"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 162,
        question: "np.sort returns",
        options: ["A sorted copy", "A list of tuples", "Sorts in place only", "The index only"],
        correctAnswer: "A sorted copy",
        explanation: "The correct answer is A sorted copy"
    },
    {
        id: 206,
        question: "np.isnan(np.nan) is",
        options: ["False", "0", "NaN", "True"],
        correctAnswer: "True",
        explanation: "The correct answer is True"
    },
    {
        id: 138,
        question: "np.cross([1,0,0],[0,1,0]) is",
        options: ["[1 1 0]", "[1 0 0]", "[0 0 1]", "[0 0 0]"],
        correctAnswer: "[0 0 1]",
        explanation: "The correct answer is [0 0 1]"
    },
    {
        id: 34,
        question: "a[-1] for np.array([10,20,30,40,50]) is",
        options: ["40", "10", "50", "Error"],
        correctAnswer: "50",
        explanation: "The correct answer is 50"
    },
    {
        id: 109,
        question: "np.linalg.det([[2,0],[0,3]]) is",
        options: ["6.0", "1.0", "5.0", "0.0"],
        correctAnswer: "6.0",
        explanation: "The correct answer is 6.0"
    },
    {
        id: 291,
        question: "np.zeros_like(a) creates",
        options: ["Random of same shape", "Ones of same shape", "Zeros with the same shape as a", "A scalar"],
        correctAnswer: "Zeros with the same shape as a",
        explanation: "The correct answer is Zeros with the same shape as a"
    },
    {
        id: 256,
        question: "Which is a correct statement about * and @ for matrices?",
        options: ["Both are the same", "* is matrix multiplication, @ is element-wise", "Both are invalid", "* is element-wise, @ is matrix multiplication"],
        correctAnswer: "* is element-wise, @ is matrix multiplication",
        explanation: "The correct answer is * is element-wise, @ is matrix multiplication"
    },
    {
        id: 203,
        question: "Boolean indexing selects elements",
        options: ["At random", "Where the condition is True", "Where the condition is False", "By position only"],
        correctAnswer: "Where the condition is True",
        explanation: "The correct answer is Where the condition is True"
    },
    {
        id: 235,
        question: "np.arange(2, 10, 3) is",
        options: ["[2 5 8 11]", "[3 6 9]", "[2 5 8]", "[2 4 6 8]"],
        correctAnswer: "[2 5 8]",
        explanation: "The correct answer is [2 5 8]"
    },
    {
        id: 74,
        question: "np.arange(1,7).reshape(2,3) gives",
        options: ["Error", "[1 2 3 4 5 6]", "[[1 2 3] [4 5 6]]", "[[1 2] [3 4] [5 6]]"],
        correctAnswer: "[[1 2 3] [4 5 6]]",
        explanation: "The correct answer is [[1 2 3] [4 5 6]]"
    },
    {
        id: 136,
        question: "np.outer([1,2],[3,4]) gives",
        options: ["[11]", "[3 8]", "[[4 3] [8 6]]", "[[3 4] [6 8]]"],
        correctAnswer: "[[3 4] [6 8]]",
        explanation: "The correct answer is [[3 4] [6 8]]"
    },
    {
        id: 72,
        question: "reshape() changes",
        options: ["The dtype only", "The shape of an array", "The values of an array", "The file name"],
        correctAnswer: "The shape of an array",
        explanation: "The correct answer is The shape of an array"
    },
    {
        id: 127,
        question: "Identity matrix times A gives",
        options: ["Identity", "Inverse of A", "A", "0"],
        correctAnswer: "A",
        explanation: "The correct answer is A"
    },
    {
        id: 288,
        question: "np.arange(6).reshape(2,3)[:,1] is",
        options: ["[3 4 5]", "[1 4]", "[2 5]", "[0 1 2]"],
        correctAnswer: "[1 4]",
        explanation: "The correct answer is [1 4]"
    },
    {
        id: 276,
        question: "np.maximum([1,5],[3,2]) is",
        options: ["[5]", "[1 2]", "[3 2]", "[3 5]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 135,
        question: "np.diag([1,2,3]) creates",
        options: ["A 3x1 matrix", "A 3x3 diagonal matrix", "A 1D array", "A scalar"],
        correctAnswer: "A 3x3 diagonal matrix",
        explanation: "The correct answer is A 3x3 diagonal matrix"
    },
    {
        id: 220,
        question: "a.astype(int) on [1.7, 2.2] gives",
        options: ["[1.7 2.2]", "[2 3]", "[2 2]", "[1 2]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 205,
        question: "np.all([1,1,0]) is",
        options: ["False", "True", "0", "1"],
        correctAnswer: "False",
        explanation: "The correct answer is False"
    },
    {
        id: 186,
        question: "For the sales data, sales + 500 on first element gives",
        options: ["2000", "1700", "1500", "1200"],
        correctAnswer: "1700",
        explanation: "The correct answer is 1700"
    },
    {
        id: 71,
        question: "np.array([1,2,3]) == 2 gives",
        options: ["[1 2 3]", "True", "[False True False]", "[False False False]"],
        correctAnswer: "[False True False]",
        explanation: "The correct answer is [False True False]"
    },
    {
        id: 261,
        question: "Shapes (2,3) and (2,) are broadcast-compatible?",
        options: ["No", "Only if sorted", "Only if 1D", "Yes"],
        correctAnswer: "No",
        explanation: "The correct answer is No"
    },
    {
        id: 253,
        question: "np.mean(a, axis=1) for [[2,4],[6,8]] is",
        options: ["[2. 6.]", "[5.]", "[4. 6.]", "[3. 7.]"],
        correctAnswer: "[3. 7.]",
        explanation: "The correct answer is [3. 7.]"
    },
    {
        id: 47,
        question: "a[-1,-1] for np.array([[1,2],[3,4]]) is",
        options: ["2", "3", "4", "1"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 25,
        question: "np.linspace(0, 10, 5) gives",
        options: ["[0 5 10]", "[ 0. 2.5 5. 7.5 10. ]", "[0 2 4 6 8]", "[2.5 5 7.5]"],
        correctAnswer: "[ 0. 2.5 5. 7.5 10. ]",
        explanation: "The correct answer is [ 0. 2.5 5. 7.5 10. ]"
    },
    {
        id: 57,
        question: "Standard deviation is",
        options: ["√Variance", "Variance²", "Variance / 2", "Mean / Variance"],
        correctAnswer: "√Variance",
        explanation: "The correct answer is √Variance"
    },
    {
        id: 79,
        question: "np.arange(12).reshape(-1,2) has shape",
        options: ["(2, 2)", "(2, 6)", "(12,)", "(6, 2)"],
        correctAnswer: "(6, 2)",
        explanation: "The correct answer is (6, 2)"
    },
    {
        id: 82,
        question: "np.vstack stacks arrays",
        options: ["Diagonally", "Randomly", "Side by side", "Vertically (one above another)"],
        correctAnswer: "Vertically (one above another)",
        explanation: "The correct answer is Vertically (one above another)"
    },
    {
        id: 217,
        question: "np.array([1, 2, 3]).dtype is typically",
        options: ["bool", "str", "int64", "float64"],
        correctAnswer: "int64",
        explanation: "The correct answer is int64"
    },
    {
        id: 33,
        question: "a[0] for np.array([10,20,30,40,50]) is",
        options: ["0", "50", "20", "10"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
  ],
  set3: [
    {
        id: 198,
        question: "np.prod([1,2,3,4]) is",
        options: ["24", "10", "4", "12"],
        correctAnswer: "24",
        explanation: "The correct answer is 24"
    },
    {
        id: 196,
        question: "np.median([1,3,5,7]) is",
        options: ["4.0", "5.0", "3.0", "16"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 240,
        question: "flatten() returns a",
        options: ["View always", "List of lists", "Scalar", "Copy"],
        correctAnswer: "Copy",
        explanation: "The correct answer is Copy"
    },
    {
        id: 271,
        question: "Which module does linear algebra?",
        options: ["np.linalg", "np.algebra", "np.lin", "np.matrixmod"],
        correctAnswer: "np.linalg",
        explanation: "The correct answer is np.linalg"
    },
    {
        id: 129,
        question: "Matrix multiplication of 2x3 and 2x3 is",
        options: ["Invalid (inner dimensions mismatch)", "2x3", "2x2", "3x3"],
        correctAnswer: "Invalid (inner dimensions mismatch)",
        explanation: "The correct answer is Invalid (inner dimensions mismatch)"
    },
    {
        id: 284,
        question: "np.arange(6).reshape(2,3)[1,2] is",
        options: ["2", "3", "4", "5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 6,
        question: "NumPy uses which indexing?",
        options: ["Two-based", "One-based", "Zero-based", "Letter-based"],
        correctAnswer: "Zero-based",
        explanation: "The correct answer is Zero-based"
    },
    {
        id: 59,
        question: "np.std([2,2,2,2]) equals",
        options: ["4.0", "2.0", "1.0", "0.0"],
        correctAnswer: "0.0",
        explanation: "The correct answer is 0.0"
    },
    {
        id: 275,
        question: "np.diff([1,4,9]) is",
        options: ["[3 5]", "[5 3]", "[8]", "[1 4 9]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 137,
        question: "np.linalg.norm([3,4]) is",
        options: ["5.0", "25.0", "7.0", "1.0"],
        correctAnswer: "5.0",
        explanation: "The correct answer is 5.0"
    },
    {
        id: 175,
        question: "np.savetxt('numbers.txt', a) saves",
        options: ["Nothing", "A binary .npy file", "A human-readable text file", "A CSV with header only"],
        correctAnswer: "A human-readable text file",
        explanation: "The correct answer is A human-readable text file"
    },
    {
        id: 58,
        question: "np.var([1,2,3,4,5]) equals",
        options: ["2.5", "2.0", "1.0", "3.0"],
        correctAnswer: "2.0",
        explanation: "The correct answer is 2.0"
    },
    {
        id: 151,
        question: "np.random.shuffle returns",
        options: ["None", "A copy", "The shuffled array", "A list"],
        correctAnswer: "None",
        explanation: "The correct answer is None"
    },
    {
        id: 223,
        question: "len(np.array([[1,2,3],[4,5,6]])) is",
        options: ["6", "2", "1", "3"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 81,
        question: "np.array([[1,2],[3,4]]).flatten() is",
        options: ["[1 3 2 4]", "[1 2 3 4]", "[4 3 2 1]", "[[1 2 3 4]]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 233,
        question: "np.linspace(0, 1, 3) is",
        options: ["[0.3 0.6 1]", "[0. 0.5 1. ]", "[0 1 2]", "[0 0.25 0.5]"],
        correctAnswer: "[0. 0.5 1. ]",
        explanation: "The correct answer is [0. 0.5 1. ]"
    },
    {
        id: 2,
        question: "The main data structure of NumPy is",
        options: ["ndarray", "dict", "Series", "DataFrame"],
        correctAnswer: "ndarray",
        explanation: "The correct answer is ndarray"
    },
    {
        id: 135,
        question: "np.diag([1,2,3]) creates",
        options: ["A 3x1 matrix", "A 3x3 diagonal matrix", "A 1D array", "A scalar"],
        correctAnswer: "A 3x3 diagonal matrix",
        explanation: "The correct answer is A 3x3 diagonal matrix"
    },
    {
        id: 257,
        question: "np.matmul is equivalent to",
        options: ["np.add", "The * operator", "np.sort", "The @ operator"],
        correctAnswer: "The @ operator",
        explanation: "The correct answer is The @ operator"
    },
    {
        id: 92,
        question: "np.split(np.arange(6), 3) returns",
        options: ["2 arrays of 3 elements", "6 arrays of 1", "3 arrays of 2 elements", "1 array of 6"],
        correctAnswer: "3 arrays of 2 elements",
        explanation: "The correct answer is 3 arrays of 2 elements"
    },
    {
        id: 260,
        question: "Shapes (2,3) and (3,) are broadcast-compatible?",
        options: ["Yes", "Only for addition", "Only for @", "No"],
        correctAnswer: "Yes",
        explanation: "The correct answer is Yes"
    },
    {
        id: 55,
        question: "Mean formula is",
        options: ["N / Σx", "Σx / N", "Σx × N", "Σx²"],
        correctAnswer: "Σx / N",
        explanation: "The correct answer is Σx / N"
    },
    {
        id: 153,
        question: "Random numbers produced by NumPy are called",
        options: ["True random", "Cryptographic only", "Pseudo-random", "Fixed"],
        correctAnswer: "Pseudo-random",
        explanation: "The correct answer is Pseudo-random"
    },
    {
        id: 102,
        question: "Matrix multiplication formula is",
        options: ["C_ij = Σ A_ik B_kj", "C_ij = A_ji", "C_ij = A_ij × B_ij", "C_ij = A_ij + B_ij"],
        correctAnswer: "C_ij = Σ A_ik B_kj",
        explanation: "The correct answer is C_ij = Σ A_ik B_kj"
    },
    {
        id: 79,
        question: "np.arange(12).reshape(-1,2) has shape",
        options: ["(2, 2)", "(2, 6)", "(12,)", "(6, 2)"],
        correctAnswer: "(6, 2)",
        explanation: "The correct answer is (6, 2)"
    },
    {
        id: 192,
        question: "For the sales data, sorted ascending first element is",
        options: ["1100", "1500", "1200", "3000"],
        correctAnswer: "1100",
        explanation: "The correct answer is 1100"
    },
    {
        id: 83,
        question: "np.hstack stacks arrays",
        options: ["One above another", "Diagonally", "Horizontally (side by side)", "Randomly"],
        correctAnswer: "Horizontally (side by side)",
        explanation: "The correct answer is Horizontally (side by side)"
    },
    {
        id: 277,
        question: "np.minimum([1,5],[3,2]) is",
        options: ["[3 5]", "[1]", "[1 2]", "[5 3]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 272,
        question: "Which function counts nonzero elements?",
        options: ["np.nonzero_sum", "np.zerocount", "np.nzcount_all", "np.count_nonzero"],
        correctAnswer: "np.count_nonzero",
        explanation: "The correct answer is np.count_nonzero"
    },
    {
        id: 1,
        question: "NumPy stands for",
        options: ["New Python", "Numeric Print", "Number Pyramid", "Numerical Python"],
        correctAnswer: "Numerical Python",
        explanation: "The correct answer is Numerical Python"
    },
    {
        id: 166,
        question: "np.unique([10,20,10,30,20,40]) is",
        options: ["[10 10 20 20]", "[40 30 20 10]", "[10 20 10 30 20 40]", "[10 20 30 40]"],
        correctAnswer: "[10 20 30 40]",
        explanation: "The correct answer is [10 20 30 40]"
    },
    {
        id: 251,
        question: "np.max(a, axis=1) for [[1,5],[7,2]] is",
        options: ["[7 5]", "[1 2]", "[7]", "[5 7]"],
        correctAnswer: "[5 7]",
        explanation: "The correct answer is [5 7]"
    },
    {
        id: 10,
        question: "np.sqrt(np.array([1,4,9,16])) gives",
        options: ["[1 2 3 4 5]", "[1 4 9 16]", "[1. 2. 3. 4.]", "[2 4 6 8]"],
        correctAnswer: "[1. 2. 3. 4.]",
        explanation: "The correct answer is [1. 2. 3. 4.]"
    },
    {
        id: 186,
        question: "For the sales data, sales + 500 on first element gives",
        options: ["2000", "1700", "1500", "1200"],
        correctAnswer: "1700",
        explanation: "The correct answer is 1700"
    },
    {
        id: 158,
        question: "np.random.random_sample() returns floats in",
        options: ["[0, 1)", "(-inf, inf)", "[1, 2]", "[0, 10)"],
        correctAnswer: "[0, 1)",
        explanation: "The correct answer is [0, 1)"
    },
    {
        id: 123,
        question: "Rank measures",
        options: ["Number of independent dimensions", "Sum of values", "Number of zeros", "Number of rows only"],
        correctAnswer: "Number of independent dimensions",
        explanation: "The correct answer is Number of independent dimensions"
    },
    {
        id: 30,
        question: "np.arange(0, 20+1, 2) creates",
        options: ["Even numbers from 0 to 20", "Odd numbers from 0 to 20", "Numbers from 0 to 19", "Only 0 and 20"],
        correctAnswer: "Even numbers from 0 to 20",
        explanation: "The correct answer is Even numbers from 0 to 20"
    },
    {
        id: 124,
        question: "Linear algebra is important in",
        options: ["Only typing", "Only painting", "Machine learning, PCA, optimization", "Only cooking"],
        correctAnswer: "Machine learning, PCA, optimization",
        explanation: "The correct answer is Machine learning, PCA, optimization"
    },
    {
        id: 291,
        question: "np.zeros_like(a) creates",
        options: ["Random of same shape", "Ones of same shape", "Zeros with the same shape as a", "A scalar"],
        correctAnswer: "Zeros with the same shape as a",
        explanation: "The correct answer is Zeros with the same shape as a"
    },
    {
        id: 41,
        question: "a[1,2] for np.array([[10,20,30],[40,50,60]]) is",
        options: ["20", "30", "60", "50"],
        correctAnswer: "60",
        explanation: "The correct answer is 60"
    },
    {
        id: 44,
        question: "a[:, 0] for np.array([[1,2],[3,4]]) is",
        options: ["[1 2]", "[1 3]", "[2 4]", "[3 4]"],
        correctAnswer: "[1 3]",
        explanation: "The correct answer is [1 3]"
    },
    {
        id: 249,
        question: "np.ravel flattens to",
        options: ["1D", "3D", "2D", "Scalar"],
        correctAnswer: "1D",
        explanation: "The correct answer is 1D"
    },
    {
        id: 36,
        question: "Slice syntax is",
        options: ["array{start:stop}", "array[start:stop:step]", "array(start,stop,step)", "array<start,stop>"],
        correctAnswer: "array[start:stop:step]",
        explanation: "The correct answer is array[start:stop:step]"
    },
    {
        id: 273,
        question: "np.count_nonzero([0,1,2,0]) is",
        options: ["1", "4", "3", "2"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 65,
        question: "np.array([100,200,300]) + 10 is",
        options: ["Error", "[10 10 10]", "[110 210 310]", "[100 200 300 10]"],
        correctAnswer: "[110 210 310]",
        explanation: "The correct answer is [110 210 310]"
    },
    {
        id: 66,
        question: "np.array([1000,2000,3000]) * 0.10 is",
        options: ["[100. 200. 300.]", "[1000 2000 3000]", "[10 20 30]", "[0.1 0.2 0.3]"],
        correctAnswer: "[100. 200. 300.]",
        explanation: "The correct answer is [100. 200. 300.]"
    },
    {
        id: 244,
        question: "np.append([1,2],[3]) is",
        options: ["[[1 2] [3]]", "[1 2]", "[1 2 3]", "Error"],
        correctAnswer: "[1 2 3]",
        explanation: "The correct answer is [1 2 3]"
    },
    {
        id: 282,
        question: "np.reciprocal([2.0, 4.0]) is",
        options: ["[-2 -4]", "[0.2 0.4]", "[2 4]", "[0.5 0.25]"],
        correctAnswer: "[0.5 0.25]",
        explanation: "The correct answer is [0.5 0.25]"
    },
    {
        id: 85,
        question: "np.hstack((np.array([1,2,3]), np.array([4,5,6]))) gives",
        options: ["Error", "[[1 2 3] [4 5 6]]", "[5 7 9]", "[1 2 3 4 5 6]"],
        correctAnswer: "[1 2 3 4 5 6]",
        explanation: "The correct answer is [1 2 3 4 5 6]"
    },
    {
        id: 136,
        question: "np.outer([1,2],[3,4]) gives",
        options: ["[11]", "[3 8]", "[[4 3] [8 6]]", "[[3 4] [6 8]]"],
        correctAnswer: "[[3 4] [6 8]]",
        explanation: "The correct answer is [[3 4] [6 8]]"
    },
  ],
  set4: [
    {
        id: 271,
        question: "Which module does linear algebra?",
        options: ["np.linalg", "np.algebra", "np.lin", "np.matrixmod"],
        correctAnswer: "np.linalg",
        explanation: "The correct answer is np.linalg"
    },
    {
        id: 217,
        question: "np.array([1, 2, 3]).dtype is typically",
        options: ["bool", "str", "int64", "float64"],
        correctAnswer: "int64",
        explanation: "The correct answer is int64"
    },
    {
        id: 109,
        question: "np.linalg.det([[2,0],[0,3]]) is",
        options: ["6.0", "1.0", "5.0", "0.0"],
        correctAnswer: "6.0",
        explanation: "The correct answer is 6.0"
    },
    {
        id: 277,
        question: "np.minimum([1,5],[3,2]) is",
        options: ["[3 5]", "[1]", "[1 2]", "[5 3]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 103,
        question: "np.dot([1,2,3],[4,5,6]) is",
        options: ["6", "15", "21", "32"],
        correctAnswer: "32",
        explanation: "The correct answer is 32"
    },
    {
        id: 160,
        question: "np.random.normal(0, 1, 5) returns",
        options: ["5 ones", "5 values from a normal distribution", "5 zeros", "5 integers"],
        correctAnswer: "5 values from a normal distribution",
        explanation: "The correct answer is 5 values from a normal distribution"
    },
    {
        id: 205,
        question: "np.all([1,1,0]) is",
        options: ["False", "True", "0", "1"],
        correctAnswer: "False",
        explanation: "The correct answer is False"
    },
    {
        id: 192,
        question: "For the sales data, sorted ascending first element is",
        options: ["1100", "1500", "1200", "3000"],
        correctAnswer: "1100",
        explanation: "The correct answer is 1100"
    },
    {
        id: 225,
        question: "np.ones((2,2)) sum is",
        options: ["1.0", "2.0", "0.0", "4.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 265,
        question: "Variance of [10,20,30,40,50] is",
        options: ["100.0", "14.14", "200.0", "50.0"],
        correctAnswer: "200.0",
        explanation: "The correct answer is 200.0"
    },
    {
        id: 232,
        question: "np.arange(10)[::-2] starts with",
        options: ["9", "0", "1", "8"],
        correctAnswer: "9",
        explanation: "The correct answer is 9"
    },
    {
        id: 62,
        question: "axis=0 gives",
        options: ["Row-wise results", "Column-wise results", "Whole array", "Diagonal"],
        correctAnswer: "Column-wise results",
        explanation: "The correct answer is Column-wise results"
    },
    {
        id: 127,
        question: "Identity matrix times A gives",
        options: ["Identity", "Inverse of A", "A", "0"],
        correctAnswer: "A",
        explanation: "The correct answer is A"
    },
    {
        id: 116,
        question: "Solving x+y=5 and 2x+y=8 gives",
        options: ["x=2, y=3", "x=4, y=1", "x=3, y=2", "x=5, y=0"],
        correctAnswer: "x=3, y=2",
        explanation: "The correct answer is x=3, y=2"
    },
    {
        id: 33,
        question: "a[0] for np.array([10,20,30,40,50]) is",
        options: ["0", "50", "20", "10"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 174,
        question: ".npz format stores",
        options: ["Multiple arrays", "Only images", "Only strings", "Only one array"],
        correctAnswer: "Multiple arrays",
        explanation: "The correct answer is Multiple arrays"
    },
    {
        id: 11,
        question: "np.array([70,80,90,60]).mean() gives",
        options: ["300", "75.0", "70.0", "80.0"],
        correctAnswer: "75.0",
        explanation: "The correct answer is 75.0"
    },
    {
        id: 284,
        question: "np.arange(6).reshape(2,3)[1,2] is",
        options: ["2", "3", "4", "5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 118,
        question: "np.linalg.matrix_rank([[2,0],[0,3]]) is",
        options: ["2", "3", "1", "0"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 113,
        question: "np.linalg.inv([[1,2],[3,4]]) is",
        options: ["[[4 -2] [-3 1]]", "[[0.5 0.25] [0.33 0.25]]", "[[-2. 1.] [1.5 -0.5]]", "[[1 3] [2 4]]"],
        correctAnswer: "[[-2. 1.] [1.5 -0.5]]",
        explanation: "The correct answer is [[-2. 1.] [1.5 -0.5]]"
    },
    {
        id: 4,
        question: "The standard NumPy import is",
        options: ["using numpy", "include numpy", "import numpy as np", "import np as numpy"],
        correctAnswer: "import numpy as np",
        explanation: "The correct answer is import numpy as np"
    },
    {
        id: 37,
        question: "In slicing, stop is",
        options: ["Excluded", "Doubled", "Optional always error", "Included"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 31,
        question: "np.eye(3) creates",
        options: ["3x3 matrix of ones", "3x3 identity matrix", "3x3 zeros", "3 random numbers"],
        correctAnswer: "3x3 identity matrix",
        explanation: "The correct answer is 3x3 identity matrix"
    },
    {
        id: 35,
        question: "a[1:4] for np.array([10,20,30,40,50]) is",
        options: ["[10 20 30 40]", "[20 30 40 50]", "[20 30 40]", "[30 40]"],
        correctAnswer: "[20 30 40]",
        explanation: "The correct answer is [20 30 40]"
    },
    {
        id: 17,
        question: "np.array([[1,2,3],[4,5,6]]).ndim is",
        options: ["2", "1", "3", "6"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 170,
        question: "np.save('numbers.npy', a) does",
        options: ["Saves array to .npy file", "Deletes array", "Prints array", "Loads array"],
        correctAnswer: "Saves array to .npy file",
        explanation: "The correct answer is Saves array to .npy file"
    },
    {
        id: 264,
        question: "Broadcasting makes code",
        options: ["Longer", "Unusable", "Shorter without explicit loops", "Sequential only"],
        correctAnswer: "Shorter without explicit loops",
        explanation: "The correct answer is Shorter without explicit loops"
    },
    {
        id: 122,
        question: "Eigenvalues of a diagonal matrix are",
        options: ["Its diagonal entries", "Always zero", "Always one", "Its determinant"],
        correctAnswer: "Its diagonal entries",
        explanation: "The correct answer is Its diagonal entries"
    },
    {
        id: 143,
        question: "np.random.randint(1, 10, size=(3,3)) returns",
        options: ["A 9x9 matrix", "A 3x3 matrix of integers 1 to 9", "A 1D array", "A 3x3 matrix of floats"],
        correctAnswer: "A 3x3 matrix of integers 1 to 9",
        explanation: "The correct answer is A 3x3 matrix of integers 1 to 9"
    },
    {
        id: 249,
        question: "np.ravel flattens to",
        options: ["1D", "3D", "2D", "Scalar"],
        correctAnswer: "1D",
        explanation: "The correct answer is 1D"
    },
    {
        id: 110,
        question: "np.linalg.det of identity matrix is",
        options: ["-1.0", "0.0", "1.0", "n"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 68,
        question: "np.array([1,2,3]) ** 2 is",
        options: ["[3 6 9]", "[2 4 6]", "[1 4 9]", "[1 2 3]"],
        correctAnswer: "[1 4 9]",
        explanation: "The correct answer is [1 4 9]"
    },
    {
        id: 293,
        question: "Which is the best one-line definition of NumPy?",
        options: ["A plotting tool", "A database engine", "Python library for numerical computing built around the ndarray", "A web framework"],
        correctAnswer: "Python library for numerical computing built around the ndarray",
        explanation: "The correct answer is Python library for numerical computing built around the ndarray"
    },
    {
        id: 296,
        question: "np.zeros((3,4)).shape is",
        options: ["(4, 3)", "(3, 4)", "(12,)", "(3,)"],
        correctAnswer: "(3, 4)",
        explanation: "The correct answer is (3, 4)"
    },
    {
        id: 243,
        question: "np.concatenate(([1,2],[3,4])) is",
        options: ["[1 2 3 4]", "[4 6]", "[[1 2] [3 4]]", "[1 2]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 125,
        question: "Which module provides linear algebra in NumPy?",
        options: ["np.linalg", "np.mat_tools", "np.algebra", "np.linear"],
        correctAnswer: "np.linalg",
        explanation: "The correct answer is np.linalg"
    },
    {
        id: 209,
        question: "np.ceil(2.1) is",
        options: ["3.0", "2.1", "2", "2.0"],
        correctAnswer: "3.0",
        explanation: "The correct answer is 3.0"
    },
    {
        id: 98,
        question: "A * B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]", "[[26 30] [26 30]]"],
        correctAnswer: "[[5 12] [21 32]]",
        explanation: "The correct answer is [[5 12] [21 32]]"
    },
    {
        id: 49,
        question: "np.array([10,20,30]) * np.array([2,3,4]) is",
        options: ["[240]", "[20 60 120]", "Error", "[12 23 34]"],
        correctAnswer: "[20 60 120]",
        explanation: "The correct answer is [20 60 120]"
    },
    {
        id: 50,
        question: "np.sum(np.array([10,20,30,40,50])) is",
        options: ["30", "100", "50", "150"],
        correctAnswer: "150",
        explanation: "The correct answer is 150"
    },
    {
        id: 221,
        question: "Which function checks the NumPy version?",
        options: ["np.version()", "np.__version__", "np.release", "np.ver"],
        correctAnswer: "np.__version__",
        explanation: "The correct answer is np.__version__"
    },
    {
        id: 182,
        question: "For the sales data, np.sum is",
        options: ["19700", "19000", "20700", "18700"],
        correctAnswer: "19700",
        explanation: "The correct answer is 19700"
    },
    {
        id: 211,
        question: "np.exp(0) is",
        options: ["1.0", "0.0", "Error", "2.718"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 240,
        question: "flatten() returns a",
        options: ["View always", "List of lists", "Scalar", "Copy"],
        correctAnswer: "Copy",
        explanation: "The correct answer is Copy"
    },
    {
        id: 28,
        question: "arange(start, stop, step) uses step as",
        options: ["Last value", "Gap between values", "Number of values", "First value"],
        correctAnswer: "Gap between values",
        explanation: "The correct answer is Gap between values"
    },
    {
        id: 51,
        question: "np.mean(np.array([10,20,30,40,50])) is",
        options: ["50", "10", "150", "30.0"],
        correctAnswer: "30.0",
        explanation: "The correct answer is 30.0"
    },
    {
        id: 32,
        question: "np.eye(3) main diagonal contains",
        options: ["1s", "Random values", "0s", "2s"],
        correctAnswer: "1s",
        explanation: "The correct answer is 1s"
    },
    {
        id: 207,
        question: "np.round(2.567, 2) is",
        options: ["2.6", "3", "2.56", "2.57"],
        correctAnswer: "2.57",
        explanation: "The correct answer is 2.57"
    },
    {
        id: 56,
        question: "Variance formula (population) is",
        options: ["√Σx", "Σ(x−µ)² / N", "Σx² × N", "Σ(x−µ) / N"],
        correctAnswer: "Σ(x−µ)² / N",
        explanation: "The correct answer is Σ(x−µ)² / N"
    },
    {
        id: 128,
        question: "Matrix multiplication of 2x3 and 3x2 gives shape",
        options: ["(2, 3)", "(2, 2)", "(3, 2)", "(3, 3)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
  ],
  set5: [
    {
        id: 99,
        question: "A @ B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[18 20] [40 50]]", "[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]"],
        correctAnswer: "[[19 22] [43 50]]",
        explanation: "The correct answer is [[19 22] [43 50]]"
    },
    {
        id: 98,
        question: "A * B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]", "[[26 30] [26 30]]"],
        correctAnswer: "[[5 12] [21 32]]",
        explanation: "The correct answer is [[5 12] [21 32]]"
    },
    {
        id: 275,
        question: "np.diff([1,4,9]) is",
        options: ["[3 5]", "[5 3]", "[8]", "[1 4 9]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 230,
        question: "np.arange(10)[:3] is",
        options: ["[0 1 2]", "[7 8 9]", "[1 2 3]", "[0 1 2 3]"],
        correctAnswer: "[0 1 2]",
        explanation: "The correct answer is [0 1 2]"
    },
    {
        id: 72,
        question: "reshape() changes",
        options: ["The dtype only", "The shape of an array", "The values of an array", "The file name"],
        correctAnswer: "The shape of an array",
        explanation: "The correct answer is The shape of an array"
    },
    {
        id: 217,
        question: "np.array([1, 2, 3]).dtype is typically",
        options: ["bool", "str", "int64", "float64"],
        correctAnswer: "int64",
        explanation: "The correct answer is int64"
    },
    {
        id: 94,
        question: "np.expand_dims(np.array([1,2,3]), axis=0).shape is",
        options: ["(1, 1, 3)", "(3,)", "(3, 1)", "(1, 3)"],
        correctAnswer: "(1, 3)",
        explanation: "The correct answer is (1, 3)"
    },
    {
        id: 143,
        question: "np.random.randint(1, 10, size=(3,3)) returns",
        options: ["A 9x9 matrix", "A 3x3 matrix of integers 1 to 9", "A 1D array", "A 3x3 matrix of floats"],
        correctAnswer: "A 3x3 matrix of integers 1 to 9",
        explanation: "The correct answer is A 3x3 matrix of integers 1 to 9"
    },
    {
        id: 237,
        question: "A view shares memory with the original; a copy",
        options: ["Shares memory", "Has its own memory", "Is not an array", "Is always slower to create"],
        correctAnswer: "Has its own memory",
        explanation: "The correct answer is Has its own memory"
    },
    {
        id: 128,
        question: "Matrix multiplication of 2x3 and 3x2 gives shape",
        options: ["(2, 3)", "(2, 2)", "(3, 2)", "(3, 3)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 39,
        question: "a[::-1] for np.array([10,20,30,40,50]) is",
        options: ["[50]", "[10 20 30 40 50]", "Error", "[50 40 30 20 10]"],
        correctAnswer: "[50 40 30 20 10]",
        explanation: "The correct answer is [50 40 30 20 10]"
    },
    {
        id: 227,
        question: "np.arange(5).sum() is",
        options: ["4", "10", "5", "15"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 282,
        question: "np.reciprocal([2.0, 4.0]) is",
        options: ["[-2 -4]", "[0.2 0.4]", "[2 4]", "[0.5 0.25]"],
        correctAnswer: "[0.5 0.25]",
        explanation: "The correct answer is [0.5 0.25]"
    },
    {
        id: 51,
        question: "np.mean(np.array([10,20,30,40,50])) is",
        options: ["50", "10", "150", "30.0"],
        correctAnswer: "30.0",
        explanation: "The correct answer is 30.0"
    },
    {
        id: 26,
        question: "arange() the stop value is",
        options: ["Ignored", "Excluded", "Included", "Doubled"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 277,
        question: "np.minimum([1,5],[3,2]) is",
        options: ["[3 5]", "[1]", "[1 2]", "[5 3]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 8,
        question: "Output of [10,20,30] + [1,2,3] for Python lists is",
        options: ["[10, 20, 30, 1, 2, 3]", "[33]", "[11, 22, 33]", "Error"],
        correctAnswer: "[10, 20, 30, 1, 2, 3]",
        explanation: "The correct answer is [10, 20, 30, 1, 2, 3]"
    },
    {
        id: 48,
        question: "Negative index -1 refers to",
        options: ["Second element", "Last element", "First element", "Invalid index"],
        correctAnswer: "Last element",
        explanation: "The correct answer is Last element"
    },
    {
        id: 122,
        question: "Eigenvalues of a diagonal matrix are",
        options: ["Its diagonal entries", "Always zero", "Always one", "Its determinant"],
        correctAnswer: "Its diagonal entries",
        explanation: "The correct answer is Its diagonal entries"
    },
    {
        id: 86,
        question: "hstack of [[1],[2]] and [[3],[4]] gives",
        options: ["[[1] [2] [3] [4]]", "[[1 3] [2 4]]", "[[4 3] [2 1]]", "[1 2 3 4]"],
        correctAnswer: "[[1 3] [2 4]]",
        explanation: "The correct answer is [[1 3] [2 4]]"
    },
    {
        id: 209,
        question: "np.ceil(2.1) is",
        options: ["3.0", "2.1", "2", "2.0"],
        correctAnswer: "3.0",
        explanation: "The correct answer is 3.0"
    },
    {
        id: 249,
        question: "np.ravel flattens to",
        options: ["1D", "3D", "2D", "Scalar"],
        correctAnswer: "1D",
        explanation: "The correct answer is 1D"
    },
    {
        id: 247,
        question: "np.repeat([1,2], 2) is",
        options: ["[1 2]", "[1 2 1 2]", "[2 2 1 1]", "[1 1 2 2]"],
        correctAnswer: "[1 1 2 2]",
        explanation: "The correct answer is [1 1 2 2]"
    },
    {
        id: 110,
        question: "np.linalg.det of identity matrix is",
        options: ["-1.0", "0.0", "1.0", "n"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 206,
        question: "np.isnan(np.nan) is",
        options: ["False", "0", "NaN", "True"],
        correctAnswer: "True",
        explanation: "The correct answer is True"
    },
    {
        id: 31,
        question: "np.eye(3) creates",
        options: ["3x3 matrix of ones", "3x3 identity matrix", "3x3 zeros", "3 random numbers"],
        correctAnswer: "3x3 identity matrix",
        explanation: "The correct answer is 3x3 identity matrix"
    },
    {
        id: 85,
        question: "np.hstack((np.array([1,2,3]), np.array([4,5,6]))) gives",
        options: ["Error", "[[1 2 3] [4 5 6]]", "[5 7 9]", "[1 2 3 4 5 6]"],
        correctAnswer: "[1 2 3 4 5 6]",
        explanation: "The correct answer is [1 2 3 4 5 6]"
    },
    {
        id: 195,
        question: "np.var computes",
        options: ["Mean", "Median", "Variance", "Rank"],
        correctAnswer: "Variance",
        explanation: "The correct answer is Variance"
    },
    {
        id: 2,
        question: "The main data structure of NumPy is",
        options: ["ndarray", "dict", "Series", "DataFrame"],
        correctAnswer: "ndarray",
        explanation: "The correct answer is ndarray"
    },
    {
        id: 200,
        question: "np.argsort([30,10,20]) is",
        options: ["[0 1 2]", "[10 20 30]", "[1 2 0]", "[2 1 0]"],
        correctAnswer: "[1 2 0]",
        explanation: "The correct answer is [1 2 0]"
    },
    {
        id: 136,
        question: "np.outer([1,2],[3,4]) gives",
        options: ["[11]", "[3 8]", "[[4 3] [8 6]]", "[[3 4] [6 8]]"],
        correctAnswer: "[[3 4] [6 8]]",
        explanation: "The correct answer is [[3 4] [6 8]]"
    },
    {
        id: 233,
        question: "np.linspace(0, 1, 3) is",
        options: ["[0.3 0.6 1]", "[0. 0.5 1. ]", "[0 1 2]", "[0 0.25 0.5]"],
        correctAnswer: "[0. 0.5 1. ]",
        explanation: "The correct answer is [0. 0.5 1. ]"
    },
    {
        id: 147,
        question: "np.random.choice(['A','B','C','D'], size=2) does",
        options: ["Deletes items", "Randomly samples 2 items", "Sorts the items", "Returns all items"],
        correctAnswer: "Randomly samples 2 items",
        explanation: "The correct answer is Randomly samples 2 items"
    },
    {
        id: 285,
        question: "np.arange(6).reshape(2,3).T.shape is",
        options: ["(6,)", "(1, 6)", "(2, 3)", "(3, 2)"],
        correctAnswer: "(3, 2)",
        explanation: "The correct answer is (3, 2)"
    },
    {
        id: 250,
        question: "np.max(a, axis=0) for [[1,5],[7,2]] is",
        options: ["[7 2]", "[1 2]", "[5 7]", "[7 5]"],
        correctAnswer: "[7 5]",
        explanation: "The correct answer is [7 5]"
    },
    {
        id: 80,
        question: "flatten() returns",
        options: ["A 1D copy", "A list of shapes", "A scalar", "A 2D view"],
        correctAnswer: "A 1D copy",
        explanation: "The correct answer is A 1D copy"
    },
    {
        id: 152,
        question: "np.random.randint(1000, 5001, 10) gives 10 integers between",
        options: ["0 and 1000", "1001 and 5000", "1000 and 5001 inclusive", "1000 and 5000"],
        correctAnswer: "1000 and 5000",
        explanation: "The correct answer is 1000 and 5000"
    },
    {
        id: 112,
        question: "np.linalg.inv requires",
        options: ["A string", "Zero determinant", "1D array", "Non-zero determinant"],
        correctAnswer: "Non-zero determinant",
        explanation: "The correct answer is Non-zero determinant"
    },
    {
        id: 30,
        question: "np.arange(0, 20+1, 2) creates",
        options: ["Even numbers from 0 to 20", "Odd numbers from 0 to 20", "Numbers from 0 to 19", "Only 0 and 20"],
        correctAnswer: "Even numbers from 0 to 20",
        explanation: "The correct answer is Even numbers from 0 to 20"
    },
    {
        id: 297,
        question: "np.ones((4,2)).size is",
        options: ["2", "4", "8", "6"],
        correctAnswer: "8",
        explanation: "The correct answer is 8"
    },
    {
        id: 278,
        question: "np.mod(7, 3) is",
        options: ["0", "3", "1", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 32,
        question: "np.eye(3) main diagonal contains",
        options: ["1s", "Random values", "0s", "2s"],
        correctAnswer: "1s",
        explanation: "The correct answer is 1s"
    },
    {
        id: 161,
        question: "np.random.permutation(5) returns",
        options: ["A sorted array", "A shuffled array of 0 to 4", "A single number", "Random floats"],
        correctAnswer: "A shuffled array of 0 to 4",
        explanation: "The correct answer is A shuffled array of 0 to 4"
    },
    {
        id: 245,
        question: "np.delete([1,2,3], 0) is",
        options: ["[1 3]", "[2 3]", "[3]", "[1 2]"],
        correctAnswer: "[2 3]",
        explanation: "The correct answer is [2 3]"
    },
    {
        id: 258,
        question: "np.dot for 2D arrays performs",
        options: ["Element-wise addition", "Sorting", "Transpose", "Matrix multiplication"],
        correctAnswer: "Matrix multiplication",
        explanation: "The correct answer is Matrix multiplication"
    },
    {
        id: 272,
        question: "Which function counts nonzero elements?",
        options: ["np.nonzero_sum", "np.zerocount", "np.nzcount_all", "np.count_nonzero"],
        correctAnswer: "np.count_nonzero",
        explanation: "The correct answer is np.count_nonzero"
    },
    {
        id: 81,
        question: "np.array([[1,2],[3,4]]).flatten() is",
        options: ["[1 3 2 4]", "[1 2 3 4]", "[4 3 2 1]", "[[1 2 3 4]]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 261,
        question: "Shapes (2,3) and (2,) are broadcast-compatible?",
        options: ["No", "Only if sorted", "Only if 1D", "Yes"],
        correctAnswer: "No",
        explanation: "The correct answer is No"
    },
    {
        id: 42,
        question: "a[0:2,:] for a 3x3 array returns",
        options: ["First two rows, all columns", "First two columns, all rows", "Last two rows", "First two elements"],
        correctAnswer: "First two rows, all columns",
        explanation: "The correct answer is First two rows, all columns"
    },
    {
        id: 96,
        question: "Matrix addition A + B is",
        options: ["Row-by-column", "Element-wise", "Not possible", "Determinant"],
        correctAnswer: "Element-wise",
        explanation: "The correct answer is Element-wise"
    },
  ],
  set6: [
    {
        id: 36,
        question: "Slice syntax is",
        options: ["array{start:stop}", "array[start:stop:step]", "array(start,stop,step)", "array<start,stop>"],
        correctAnswer: "array[start:stop:step]",
        explanation: "The correct answer is array[start:stop:step]"
    },
    {
        id: 35,
        question: "a[1:4] for np.array([10,20,30,40,50]) is",
        options: ["[10 20 30 40]", "[20 30 40 50]", "[20 30 40]", "[30 40]"],
        correctAnswer: "[20 30 40]",
        explanation: "The correct answer is [20 30 40]"
    },
    {
        id: 121,
        question: "Eigenvalues of [[2,0],[0,3]] are",
        options: ["2 and 2", "2 and 3", "1 and 6", "0 and 5"],
        correctAnswer: "2 and 3",
        explanation: "The correct answer is 2 and 3"
    },
    {
        id: 207,
        question: "np.round(2.567, 2) is",
        options: ["2.6", "3", "2.56", "2.57"],
        correctAnswer: "2.57",
        explanation: "The correct answer is 2.57"
    },
    {
        id: 62,
        question: "axis=0 gives",
        options: ["Row-wise results", "Column-wise results", "Whole array", "Diagonal"],
        correctAnswer: "Column-wise results",
        explanation: "The correct answer is Column-wise results"
    },
    {
        id: 292,
        question: "np.ones_like(a) creates",
        options: ["Ones with the same shape as a", "A scalar", "Identity", "Zeros of same shape"],
        correctAnswer: "Ones with the same shape as a",
        explanation: "The correct answer is Ones with the same shape as a"
    },
    {
        id: 127,
        question: "Identity matrix times A gives",
        options: ["Identity", "Inverse of A", "A", "0"],
        correctAnswer: "A",
        explanation: "The correct answer is A"
    },
    {
        id: 297,
        question: "np.ones((4,2)).size is",
        options: ["2", "4", "8", "6"],
        correctAnswer: "8",
        explanation: "The correct answer is 8"
    },
    {
        id: 21,
        question: "np.ones((2,3)) creates",
        options: ["A 2x3 array of zeros", "A 3x2 array of ones", "A 2x3 array of 1.0", "An empty array"],
        correctAnswer: "A 2x3 array of 1.0",
        explanation: "The correct answer is A 2x3 array of 1.0"
    },
    {
        id: 42,
        question: "a[0:2,:] for a 3x3 array returns",
        options: ["First two rows, all columns", "First two columns, all rows", "Last two rows", "First two elements"],
        correctAnswer: "First two rows, all columns",
        explanation: "The correct answer is First two rows, all columns"
    },
    {
        id: 215,
        question: "A NumPy array holds elements of",
        options: ["Only strings", "Only functions", "The same data type", "Any mixed types freely"],
        correctAnswer: "The same data type",
        explanation: "The correct answer is The same data type"
    },
    {
        id: 290,
        question: "np.empty((2,2)) creates",
        options: ["A random array", "An uninitialized 2x2 array", "An identity matrix", "A zeros array"],
        correctAnswer: "An uninitialized 2x2 array",
        explanation: "The correct answer is An uninitialized 2x2 array"
    },
    {
        id: 268,
        question: "Sum divided by N equals",
        options: ["Std", "Variance", "Mean", "Median"],
        correctAnswer: "Mean",
        explanation: "The correct answer is Mean"
    },
    {
        id: 162,
        question: "np.sort returns",
        options: ["A sorted copy", "A list of tuples", "Sorts in place only", "The index only"],
        correctAnswer: "A sorted copy",
        explanation: "The correct answer is A sorted copy"
    },
    {
        id: 134,
        question: "np.trace([[1,2],[3,4]]) is",
        options: ["10", "5", "2", "4"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 105,
        question: "np.dot([2,3],[4,5]) is",
        options: ["10", "22", "45", "23"],
        correctAnswer: "23",
        explanation: "The correct answer is 23"
    },
    {
        id: 161,
        question: "np.random.permutation(5) returns",
        options: ["A sorted array", "A shuffled array of 0 to 4", "A single number", "Random floats"],
        correctAnswer: "A shuffled array of 0 to 4",
        explanation: "The correct answer is A shuffled array of 0 to 4"
    },
    {
        id: 123,
        question: "Rank measures",
        options: ["Number of independent dimensions", "Sum of values", "Number of zeros", "Number of rows only"],
        correctAnswer: "Number of independent dimensions",
        explanation: "The correct answer is Number of independent dimensions"
    },
    {
        id: 136,
        question: "np.outer([1,2],[3,4]) gives",
        options: ["[11]", "[3 8]", "[[4 3] [8 6]]", "[[3 4] [6 8]]"],
        correctAnswer: "[[3 4] [6 8]]",
        explanation: "The correct answer is [[3 4] [6 8]]"
    },
    {
        id: 203,
        question: "Boolean indexing selects elements",
        options: ["At random", "Where the condition is True", "Where the condition is False", "By position only"],
        correctAnswer: "Where the condition is True",
        explanation: "The correct answer is Where the condition is True"
    },
    {
        id: 68,
        question: "np.array([1,2,3]) ** 2 is",
        options: ["[3 6 9]", "[2 4 6]", "[1 4 9]", "[1 2 3]"],
        correctAnswer: "[1 4 9]",
        explanation: "The correct answer is [1 4 9]"
    },
    {
        id: 154,
        question: "Random numbers are useful for",
        options: ["Simulations, sampling and testing", "Only drawing", "Only printing", "Only file storage"],
        correctAnswer: "Simulations, sampling and testing",
        explanation: "The correct answer is Simulations, sampling and testing"
    },
    {
        id: 235,
        question: "np.arange(2, 10, 3) is",
        options: ["[2 5 8 11]", "[3 6 9]", "[2 5 8]", "[2 4 6 8]"],
        correctAnswer: "[2 5 8]",
        explanation: "The correct answer is [2 5 8]"
    },
    {
        id: 38,
        question: "a[0:6:2] for np.array([10,20,30,40,50,60]) is",
        options: ["[10 20 30]", "[10 30 50]", "[10 40]", "[20 40 60]"],
        correctAnswer: "[10 30 50]",
        explanation: "The correct answer is [10 30 50]"
    },
    {
        id: 5,
        question: "Command to install NumPy",
        options: ["python numpy --get", "get numpy", "install numpy.exe", "pip install numpy"],
        correctAnswer: "pip install numpy",
        explanation: "The correct answer is pip install numpy"
    },
    {
        id: 289,
        question: "np.arange(6).reshape(2,3)[0,:] is",
        options: ["[3 4 5]", "[0 1 2]", "[0 3]", "[0 1]"],
        correctAnswer: "[0 1 2]",
        explanation: "The correct answer is [0 1 2]"
    },
    {
        id: 52,
        question: "np.min(np.array([10,20,30,40,50])) is",
        options: ["30", "50", "0", "10"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 276,
        question: "np.maximum([1,5],[3,2]) is",
        options: ["[5]", "[1 2]", "[3 2]", "[3 5]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 110,
        question: "np.linalg.det of identity matrix is",
        options: ["-1.0", "0.0", "1.0", "n"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 260,
        question: "Shapes (2,3) and (3,) are broadcast-compatible?",
        options: ["Yes", "Only for addition", "Only for @", "No"],
        correctAnswer: "Yes",
        explanation: "The correct answer is Yes"
    },
    {
        id: 179,
        question: "Data handling in NumPy includes",
        options: ["Only plotting", "Only web design", "Sorting, unique values, save and load", "Only SQL joins"],
        correctAnswer: "Sorting, unique values, save and load",
        explanation: "The correct answer is Sorting, unique values, save and load"
    },
    {
        id: 126,
        question: "Which function creates an identity matrix?",
        options: ["np.eye", "np.identity_only_no", "np.id", "np.one_diag"],
        correctAnswer: "np.eye",
        explanation: "The correct answer is np.eye"
    },
    {
        id: 190,
        question: "For the sales data, sales.ndim is",
        options: ["0", "1", "10", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 146,
        question: "Without a seed, np.random.rand(3) gives",
        options: ["Zeros", "Errors", "Same values every time", "Different values across runs"],
        correctAnswer: "Different values across runs",
        explanation: "The correct answer is Different values across runs"
    },
    {
        id: 81,
        question: "np.array([[1,2],[3,4]]).flatten() is",
        options: ["[1 3 2 4]", "[1 2 3 4]", "[4 3 2 1]", "[[1 2 3 4]]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 225,
        question: "np.ones((2,2)) sum is",
        options: ["1.0", "2.0", "0.0", "4.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 279,
        question: "np.power(2, 3) is",
        options: ["8", "5", "9", "6"],
        correctAnswer: "8",
        explanation: "The correct answer is 8"
    },
    {
        id: 155,
        question: "np.random.seed(10) followed by randint gives",
        options: ["A different sequence each time", "No output", "The same sequence each time", "An error"],
        correctAnswer: "The same sequence each time",
        explanation: "The correct answer is The same sequence each time"
    },
    {
        id: 271,
        question: "Which module does linear algebra?",
        options: ["np.linalg", "np.algebra", "np.lin", "np.matrixmod"],
        correctAnswer: "np.linalg",
        explanation: "The correct answer is np.linalg"
    },
    {
        id: 284,
        question: "np.arange(6).reshape(2,3)[1,2] is",
        options: ["2", "3", "4", "5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 54,
        question: "np.std(np.array([10,20,30,40,50])) is approximately",
        options: ["20.0", "14.14", "10.0", "7.07"],
        correctAnswer: "14.14",
        explanation: "The correct answer is 14.14"
    },
    {
        id: 69,
        question: "np.array([1,2,3]) - 1 is",
        options: ["[0 1 2]", "[2 3 4]", "[-1 -2 -3]", "[1 2 3]"],
        correctAnswer: "[0 1 2]",
        explanation: "The correct answer is [0 1 2]"
    },
    {
        id: 60,
        question: "np.sum(a, axis=0) for np.array([[10,20,30],[40,50,60]]) is",
        options: ["[60 150]", "[210]", "[10 40]", "[50 70 90]"],
        correctAnswer: "[50 70 90]",
        explanation: "The correct answer is [50 70 90]"
    },
    {
        id: 55,
        question: "Mean formula is",
        options: ["N / Σx", "Σx / N", "Σx × N", "Σx²"],
        correctAnswer: "Σx / N",
        explanation: "The correct answer is Σx / N"
    },
    {
        id: 80,
        question: "flatten() returns",
        options: ["A 1D copy", "A list of shapes", "A scalar", "A 2D view"],
        correctAnswer: "A 1D copy",
        explanation: "The correct answer is A 1D copy"
    },
    {
        id: 140,
        question: "np.random.rand(5) returns",
        options: ["A 5x5 matrix", "5 random floats", "5 random integers", "One float"],
        correctAnswer: "5 random floats",
        explanation: "The correct answer is 5 random floats"
    },
    {
        id: 145,
        question: "Why use random.seed()?",
        options: ["To sort data", "To save arrays", "To get the same random sequence every run", "To speed up code"],
        correctAnswer: "To get the same random sequence every run",
        explanation: "The correct answer is To get the same random sequence every run"
    },
    {
        id: 108,
        question: "np.linalg.det([[1,2],[3,4]]) is",
        options: ["10.0", "-10.0", "2.0", "-2.0"],
        correctAnswer: "-2.0",
        explanation: "The correct answer is -2.0"
    },
    {
        id: 176,
        question: "np.loadtxt('numbers.txt') usually loads data as",
        options: ["Booleans", "Integers always", "Floats", "Strings"],
        correctAnswer: "Floats",
        explanation: "The correct answer is Floats"
    },
    {
        id: 259,
        question: "Which broadcasts correctly?",
        options: ["Shape (2,) with (3,)", "Shape (3,) with (4,)", "Shape (2,3) with (4,5)", "Shape (3,) with scalar"],
        correctAnswer: "Shape (3,) with scalar",
        explanation: "The correct answer is Shape (3,) with scalar"
    },
  ],
  set7: [
    {
        id: 251,
        question: "np.max(a, axis=1) for [[1,5],[7,2]] is",
        options: ["[7 5]", "[1 2]", "[7]", "[5 7]"],
        correctAnswer: "[5 7]",
        explanation: "The correct answer is [5 7]"
    },
    {
        id: 129,
        question: "Matrix multiplication of 2x3 and 2x3 is",
        options: ["Invalid (inner dimensions mismatch)", "2x3", "2x2", "3x3"],
        correctAnswer: "Invalid (inner dimensions mismatch)",
        explanation: "The correct answer is Invalid (inner dimensions mismatch)"
    },
    {
        id: 27,
        question: "linspace() the endpoint is",
        options: ["Ignored", "Excluded by default", "Doubled", "Included by default"],
        correctAnswer: "Included by default",
        explanation: "The correct answer is Included by default"
    },
    {
        id: 48,
        question: "Negative index -1 refers to",
        options: ["Second element", "Last element", "First element", "Invalid index"],
        correctAnswer: "Last element",
        explanation: "The correct answer is Last element"
    },
    {
        id: 217,
        question: "np.array([1, 2, 3]).dtype is typically",
        options: ["bool", "str", "int64", "float64"],
        correctAnswer: "int64",
        explanation: "The correct answer is int64"
    },
    {
        id: 142,
        question: "In randint(low, high), the high value is",
        options: ["Excluded", "Ignored", "Included", "Doubled"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 23,
        question: "np.arange(1, 11, 2) gives",
        options: ["[1 3 5 7 9]", "[1 3 5 7 9 11]", "[1 2 3 4 5]", "[2 4 6 8 10]"],
        correctAnswer: "[1 3 5 7 9]",
        explanation: "The correct answer is [1 3 5 7 9]"
    },
    {
        id: 2,
        question: "The main data structure of NumPy is",
        options: ["ndarray", "dict", "Series", "DataFrame"],
        correctAnswer: "ndarray",
        explanation: "The correct answer is ndarray"
    },
    {
        id: 171,
        question: "np.load('numbers.npy') does",
        options: ["Sorts array", "Loads an array from file", "Saves array", "Prints file name"],
        correctAnswer: "Loads an array from file",
        explanation: "The correct answer is Loads an array from file"
    },
    {
        id: 67,
        question: "A scalar in array arithmetic is",
        options: ["Ignored", "Added only to first element", "Broadcast to every element", "Converted to string"],
        correctAnswer: "Broadcast to every element",
        explanation: "The correct answer is Broadcast to every element"
    },
    {
        id: 135,
        question: "np.diag([1,2,3]) creates",
        options: ["A 3x1 matrix", "A 3x3 diagonal matrix", "A 1D array", "A scalar"],
        correctAnswer: "A 3x3 diagonal matrix",
        explanation: "The correct answer is A 3x3 diagonal matrix"
    },
    {
        id: 83,
        question: "np.hstack stacks arrays",
        options: ["One above another", "Diagonally", "Horizontally (side by side)", "Randomly"],
        correctAnswer: "Horizontally (side by side)",
        explanation: "The correct answer is Horizontally (side by side)"
    },
    {
        id: 227,
        question: "np.arange(5).sum() is",
        options: ["4", "10", "5", "15"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 283,
        question: "np.floor_divide(7, 2) is",
        options: ["3", "3.5", "2", "4"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 219,
        question: "np.array([1,2,3], dtype=float) gives",
        options: ["[1. 2. 3.]", "[1 2 3]", "['1' '2' '3']", "Error"],
        correctAnswer: "[1. 2. 3.]",
        explanation: "The correct answer is [1. 2. 3.]"
    },
    {
        id: 288,
        question: "np.arange(6).reshape(2,3)[:,1] is",
        options: ["[3 4 5]", "[1 4]", "[2 5]", "[0 1 2]"],
        correctAnswer: "[1 4]",
        explanation: "The correct answer is [1 4]"
    },
    {
        id: 5,
        question: "Command to install NumPy",
        options: ["python numpy --get", "get numpy", "install numpy.exe", "pip install numpy"],
        correctAnswer: "pip install numpy",
        explanation: "The correct answer is pip install numpy"
    },
    {
        id: 58,
        question: "np.var([1,2,3,4,5]) equals",
        options: ["2.5", "2.0", "1.0", "3.0"],
        correctAnswer: "2.0",
        explanation: "The correct answer is 2.0"
    },
    {
        id: 39,
        question: "a[::-1] for np.array([10,20,30,40,50]) is",
        options: ["[50]", "[10 20 30 40 50]", "Error", "[50 40 30 20 10]"],
        correctAnswer: "[50 40 30 20 10]",
        explanation: "The correct answer is [50 40 30 20 10]"
    },
    {
        id: 77,
        question: "reshape(-1) means",
        options: ["Delete elements", "Raise an error", "Reverse the array", "Flatten to 1D by inferring size"],
        correctAnswer: "Flatten to 1D by inferring size",
        explanation: "The correct answer is Flatten to 1D by inferring size"
    },
    {
        id: 280,
        question: "np.sqrt(16) is",
        options: ["256", "8.0", "4.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 19,
        question: "np.array([10,20,30,40,50]).ndim is",
        options: ["0", "5", "1", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 190,
        question: "For the sales data, sales.ndim is",
        options: ["0", "1", "10", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 76,
        question: "np.arange(1,7).reshape(4,2) results in",
        options: ["[[1 2] [3 4] [5 6] [0 0]]", "ValueError", "[[1 2] [3 4]]", "A 4x2 array with NaN"],
        correctAnswer: "ValueError",
        explanation: "The correct answer is ValueError"
    },
    {
        id: 221,
        question: "Which function checks the NumPy version?",
        options: ["np.version()", "np.__version__", "np.release", "np.ver"],
        correctAnswer: "np.__version__",
        explanation: "The correct answer is np.__version__"
    },
    {
        id: 66,
        question: "np.array([1000,2000,3000]) * 0.10 is",
        options: ["[100. 200. 300.]", "[1000 2000 3000]", "[10 20 30]", "[0.1 0.2 0.3]"],
        correctAnswer: "[100. 200. 300.]",
        explanation: "The correct answer is [100. 200. 300.]"
    },
    {
        id: 22,
        question: "np.full((2,3), 7) creates",
        options: ["A 2x3 array filled with 7", "A 3x2 array filled with 7", "A 1D array of 7", "An array of 2 and 3"],
        correctAnswer: "A 2x3 array filled with 7",
        explanation: "The correct answer is A 2x3 array filled with 7"
    },
    {
        id: 158,
        question: "np.random.random_sample() returns floats in",
        options: ["[0, 1)", "(-inf, inf)", "[1, 2]", "[0, 10)"],
        correctAnswer: "[0, 1)",
        explanation: "The correct answer is [0, 1)"
    },
    {
        id: 187,
        question: "For the sales data, sales.reshape(2,5) has shape",
        options: ["(1, 10)", "(5, 2)", "(2, 5)", "(10,)"],
        correctAnswer: "(2, 5)",
        explanation: "The correct answer is (2, 5)"
    },
    {
        id: 21,
        question: "np.ones((2,3)) creates",
        options: ["A 2x3 array of zeros", "A 3x2 array of ones", "A 2x3 array of 1.0", "An empty array"],
        correctAnswer: "A 2x3 array of 1.0",
        explanation: "The correct answer is A 2x3 array of 1.0"
    },
    {
        id: 184,
        question: "For the sales data, np.max is",
        options: ["2800", "2500", "3500", "3000"],
        correctAnswer: "3000",
        explanation: "The correct answer is 3000"
    },
    {
        id: 108,
        question: "np.linalg.det([[1,2],[3,4]]) is",
        options: ["10.0", "-10.0", "2.0", "-2.0"],
        correctAnswer: "-2.0",
        explanation: "The correct answer is -2.0"
    },
    {
        id: 128,
        question: "Matrix multiplication of 2x3 and 3x2 gives shape",
        options: ["(2, 3)", "(2, 2)", "(3, 2)", "(3, 3)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 53,
        question: "np.max(np.array([10,20,30,40,50])) is",
        options: ["50", "10", "150", "30"],
        correctAnswer: "50",
        explanation: "The correct answer is 50"
    },
    {
        id: 182,
        question: "For the sales data, np.sum is",
        options: ["19700", "19000", "20700", "18700"],
        correctAnswer: "19700",
        explanation: "The correct answer is 19700"
    },
    {
        id: 287,
        question: "np.arange(6).reshape(2,3).sum(axis=1) is",
        options: ["[3 5 7]", "[0 1 2]", "[ 3 12]", "[15]"],
        correctAnswer: "[ 3 12]",
        explanation: "The correct answer is [ 3 12]"
    },
    {
        id: 209,
        question: "np.ceil(2.1) is",
        options: ["3.0", "2.1", "2", "2.0"],
        correctAnswer: "3.0",
        explanation: "The correct answer is 3.0"
    },
    {
        id: 80,
        question: "flatten() returns",
        options: ["A 1D copy", "A list of shapes", "A scalar", "A 2D view"],
        correctAnswer: "A 1D copy",
        explanation: "The correct answer is A 1D copy"
    },
    {
        id: 122,
        question: "Eigenvalues of a diagonal matrix are",
        options: ["Its diagonal entries", "Always zero", "Always one", "Its determinant"],
        correctAnswer: "Its diagonal entries",
        explanation: "The correct answer is Its diagonal entries"
    },
    {
        id: 84,
        question: "np.vstack((np.array([1,2,3]), np.array([4,5,6]))) has shape",
        options: ["(6,)", "(1, 6)", "(3, 2)", "(2, 3)"],
        correctAnswer: "(2, 3)",
        explanation: "The correct answer is (2, 3)"
    },
    {
        id: 91,
        question: "Which function splits an array into parts?",
        options: ["np.cut", "np.divide_parts", "np.partition_all", "np.split"],
        correctAnswer: "np.split",
        explanation: "The correct answer is np.split"
    },
    {
        id: 212,
        question: "np.log(1) is",
        options: ["Undefined", "-1.0", "0.0", "1.0"],
        correctAnswer: "0.0",
        explanation: "The correct answer is 0.0"
    },
    {
        id: 13,
        question: "Which attribute gives the length of each dimension?",
        options: ["shape", "ndim", "size", "dtype"],
        correctAnswer: "shape",
        explanation: "The correct answer is shape"
    },
    {
        id: 92,
        question: "np.split(np.arange(6), 3) returns",
        options: ["2 arrays of 3 elements", "6 arrays of 1", "3 arrays of 2 elements", "1 array of 6"],
        correctAnswer: "3 arrays of 2 elements",
        explanation: "The correct answer is 3 arrays of 2 elements"
    },
    {
        id: 211,
        question: "np.exp(0) is",
        options: ["1.0", "0.0", "Error", "2.718"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 137,
        question: "np.linalg.norm([3,4]) is",
        options: ["5.0", "25.0", "7.0", "1.0"],
        correctAnswer: "5.0",
        explanation: "The correct answer is 5.0"
    },
    {
        id: 82,
        question: "np.vstack stacks arrays",
        options: ["Diagonally", "Randomly", "Side by side", "Vertically (one above another)"],
        correctAnswer: "Vertically (one above another)",
        explanation: "The correct answer is Vertically (one above another)"
    },
    {
        id: 56,
        question: "Variance formula (population) is",
        options: ["√Σx", "Σ(x−µ)² / N", "Σx² × N", "Σ(x−µ) / N"],
        correctAnswer: "Σ(x−µ)² / N",
        explanation: "The correct answer is Σ(x−µ)² / N"
    },
    {
        id: 196,
        question: "np.median([1,3,5,7]) is",
        options: ["4.0", "5.0", "3.0", "16"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 20,
        question: "np.zeros((2,3)) creates",
        options: ["A 2x3 array of ones", "A 2x3 array of 0.0", "A 3x2 array of zeros", "A 1D array"],
        correctAnswer: "A 2x3 array of 0.0",
        explanation: "The correct answer is A 2x3 array of 0.0"
    },
  ],
  set8: [
    {
        id: 241,
        question: "Changing a slice view of a NumPy array",
        options: ["Can change the original array", "Raises error", "Never changes the original", "Deletes the original"],
        correctAnswer: "Can change the original array",
        explanation: "The correct answer is Can change the original array"
    },
    {
        id: 114,
        question: "A @ inv(A) gives",
        options: ["A itself", "Zero matrix", "Determinant", "Identity matrix (approximately)"],
        correctAnswer: "Identity matrix (approximately)",
        explanation: "The correct answer is Identity matrix (approximately)"
    },
    {
        id: 103,
        question: "np.dot([1,2,3],[4,5,6]) is",
        options: ["6", "15", "21", "32"],
        correctAnswer: "32",
        explanation: "The correct answer is 32"
    },
    {
        id: 236,
        question: "np.arange(5, 0, -1) is",
        options: ["[1 2 3 4 5]", "[4 3 2 1 0]", "[5 4 3 2 1]", "[5 4 3 2 1 0]"],
        correctAnswer: "[5 4 3 2 1]",
        explanation: "The correct answer is [5 4 3 2 1]"
    },
    {
        id: 180,
        question: "np.argmax(np.array([1200,1500,1800,1100,2500,3000,2200,1700,1900,2800])) is",
        options: ["4", "5", "6", "3000"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 157,
        question: "Which creates a 2x3 array of random floats?",
        options: ["np.random.rand(3,2,1)", "np.random.rand(2,3)", "np.random.random(6,1)", "np.random.rand([6])"],
        correctAnswer: "np.random.rand(2,3)",
        explanation: "The correct answer is np.random.rand(2,3)"
    },
    {
        id: 117,
        question: "Solving x+y=10 and x−y=2 gives",
        options: ["x=7, y=3", "x=6, y=4", "x=5, y=5", "x=4, y=6"],
        correctAnswer: "x=6, y=4",
        explanation: "The correct answer is x=6, y=4"
    },
    {
        id: 115,
        question: "np.linalg.solve(A, B) solves",
        options: ["A x = B", "A x B = 0", "A + x = B", "x = A.T"],
        correctAnswer: "A x = B",
        explanation: "The correct answer is A x = B"
    },
    {
        id: 13,
        question: "Which attribute gives the length of each dimension?",
        options: ["shape", "ndim", "size", "dtype"],
        correctAnswer: "shape",
        explanation: "The correct answer is shape"
    },
    {
        id: 99,
        question: "A @ B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[18 20] [40 50]]", "[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]"],
        correctAnswer: "[[19 22] [43 50]]",
        explanation: "The correct answer is [[19 22] [43 50]]"
    },
    {
        id: 205,
        question: "np.all([1,1,0]) is",
        options: ["False", "True", "0", "1"],
        correctAnswer: "False",
        explanation: "The correct answer is False"
    },
    {
        id: 169,
        question: "np.unique([10,20,10,30,20,10], return_counts=True) counts are",
        options: ["[6]", "[3 2 1]", "[1 2 3]", "[10 20 30]"],
        correctAnswer: "[3 2 1]",
        explanation: "The correct answer is [3 2 1]"
    },
    {
        id: 143,
        question: "np.random.randint(1, 10, size=(3,3)) returns",
        options: ["A 9x9 matrix", "A 3x3 matrix of integers 1 to 9", "A 1D array", "A 3x3 matrix of floats"],
        correctAnswer: "A 3x3 matrix of integers 1 to 9",
        explanation: "The correct answer is A 3x3 matrix of integers 1 to 9"
    },
    {
        id: 36,
        question: "Slice syntax is",
        options: ["array{start:stop}", "array[start:stop:step]", "array(start,stop,step)", "array<start,stop>"],
        correctAnswer: "array[start:stop:step]",
        explanation: "The correct answer is array[start:stop:step]"
    },
    {
        id: 261,
        question: "Shapes (2,3) and (2,) are broadcast-compatible?",
        options: ["No", "Only if sorted", "Only if 1D", "Yes"],
        correctAnswer: "No",
        explanation: "The correct answer is No"
    },
    {
        id: 275,
        question: "np.diff([1,4,9]) is",
        options: ["[3 5]", "[5 3]", "[8]", "[1 4 9]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 170,
        question: "np.save('numbers.npy', a) does",
        options: ["Saves array to .npy file", "Deletes array", "Prints array", "Loads array"],
        correctAnswer: "Saves array to .npy file",
        explanation: "The correct answer is Saves array to .npy file"
    },
    {
        id: 15,
        question: "Which attribute gives the data type?",
        options: ["itemtype", "kind", "type_of", "dtype"],
        correctAnswer: "dtype",
        explanation: "The correct answer is dtype"
    },
    {
        id: 60,
        question: "np.sum(a, axis=0) for np.array([[10,20,30],[40,50,60]]) is",
        options: ["[60 150]", "[210]", "[10 40]", "[50 70 90]"],
        correctAnswer: "[50 70 90]",
        explanation: "The correct answer is [50 70 90]"
    },
    {
        id: 134,
        question: "np.trace([[1,2],[3,4]]) is",
        options: ["10", "5", "2", "4"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 92,
        question: "np.split(np.arange(6), 3) returns",
        options: ["2 arrays of 3 elements", "6 arrays of 1", "3 arrays of 2 elements", "1 array of 6"],
        correctAnswer: "3 arrays of 2 elements",
        explanation: "The correct answer is 3 arrays of 2 elements"
    },
    {
        id: 298,
        question: "np.full((2,3), 25).max() is",
        options: ["25", "0", "3", "2"],
        correctAnswer: "25",
        explanation: "The correct answer is 25"
    },
    {
        id: 136,
        question: "np.outer([1,2],[3,4]) gives",
        options: ["[11]", "[3 8]", "[[4 3] [8 6]]", "[[3 4] [6 8]]"],
        correctAnswer: "[[3 4] [6 8]]",
        explanation: "The correct answer is [[3 4] [6 8]]"
    },
    {
        id: 20,
        question: "np.zeros((2,3)) creates",
        options: ["A 2x3 array of ones", "A 2x3 array of 0.0", "A 3x2 array of zeros", "A 1D array"],
        correctAnswer: "A 2x3 array of 0.0",
        explanation: "The correct answer is A 2x3 array of 0.0"
    },
    {
        id: 56,
        question: "Variance formula (population) is",
        options: ["√Σx", "Σ(x−µ)² / N", "Σx² × N", "Σ(x−µ) / N"],
        correctAnswer: "Σ(x−µ)² / N",
        explanation: "The correct answer is Σ(x−µ)² / N"
    },
    {
        id: 223,
        question: "len(np.array([[1,2,3],[4,5,6]])) is",
        options: ["6", "2", "1", "3"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 177,
        question: "Which preserves the array efficiently in binary?",
        options: [".png", ".txt", ".npy", ".docx"],
        correctAnswer: ".npy",
        explanation: "The correct answer is .npy"
    },
    {
        id: 161,
        question: "np.random.permutation(5) returns",
        options: ["A sorted array", "A shuffled array of 0 to 4", "A single number", "Random floats"],
        correctAnswer: "A shuffled array of 0 to 4",
        explanation: "The correct answer is A shuffled array of 0 to 4"
    },
    {
        id: 224,
        question: "np.zeros(3) gives",
        options: ["[1. 1. 1.]", "[0]", "[0 0 0]", "[0. 0. 0.]"],
        correctAnswer: "[0. 0. 0.]",
        explanation: "The correct answer is [0. 0. 0.]"
    },
    {
        id: 262,
        question: "np.array([[1,2,3],[4,5,6]]) + np.array([10,20,30]) gives",
        options: ["Error", "[[11 22 33] [14 25 36]]", "[[10 20 30] [10 20 30]]", "[[11 12 13] [24 25 26]]"],
        correctAnswer: "[[11 22 33] [14 25 36]]",
        explanation: "The correct answer is [[11 22 33] [14 25 36]]"
    },
    {
        id: 198,
        question: "np.prod([1,2,3,4]) is",
        options: ["24", "10", "4", "12"],
        correctAnswer: "24",
        explanation: "The correct answer is 24"
    },
    {
        id: 296,
        question: "np.zeros((3,4)).shape is",
        options: ["(4, 3)", "(3, 4)", "(12,)", "(3,)"],
        correctAnswer: "(3, 4)",
        explanation: "The correct answer is (3, 4)"
    },
    {
        id: 98,
        question: "A * B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]", "[[26 30] [26 30]]"],
        correctAnswer: "[[5 12] [21 32]]",
        explanation: "The correct answer is [[5 12] [21 32]]"
    },
    {
        id: 131,
        question: "Is matrix multiplication commutative in general?",
        options: ["Only for 1D", "Only for 2x2", "Yes always", "No"],
        correctAnswer: "No",
        explanation: "The correct answer is No"
    },
    {
        id: 23,
        question: "np.arange(1, 11, 2) gives",
        options: ["[1 3 5 7 9]", "[1 3 5 7 9 11]", "[1 2 3 4 5]", "[2 4 6 8 10]"],
        correctAnswer: "[1 3 5 7 9]",
        explanation: "The correct answer is [1 3 5 7 9]"
    },
    {
        id: 1,
        question: "NumPy stands for",
        options: ["New Python", "Numeric Print", "Number Pyramid", "Numerical Python"],
        correctAnswer: "Numerical Python",
        explanation: "The correct answer is Numerical Python"
    },
    {
        id: 267,
        question: "Mean of [70,80,90,60] is",
        options: ["70.0", "75.0", "80.0", "300"],
        correctAnswer: "75.0",
        explanation: "The correct answer is 75.0"
    },
    {
        id: 276,
        question: "np.maximum([1,5],[3,2]) is",
        options: ["[5]", "[1 2]", "[3 2]", "[3 5]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 101,
        question: "The @ operator performs",
        options: ["Element-wise multiplication", "Matrix multiplication", "Subtraction", "Addition"],
        correctAnswer: "Matrix multiplication",
        explanation: "The correct answer is Matrix multiplication"
    },
    {
        id: 187,
        question: "For the sales data, sales.reshape(2,5) has shape",
        options: ["(1, 10)", "(5, 2)", "(2, 5)", "(10,)"],
        correctAnswer: "(2, 5)",
        explanation: "The correct answer is (2, 5)"
    },
    {
        id: 221,
        question: "Which function checks the NumPy version?",
        options: ["np.version()", "np.__version__", "np.release", "np.ver"],
        correctAnswer: "np.__version__",
        explanation: "The correct answer is np.__version__"
    },
    {
        id: 64,
        question: "Broadcasting allows NumPy to",
        options: ["Delete arrays", "Combine compatible shapes", "Save arrays", "Sort arrays"],
        correctAnswer: "Combine compatible shapes",
        explanation: "The correct answer is Combine compatible shapes"
    },
    {
        id: 154,
        question: "Random numbers are useful for",
        options: ["Simulations, sampling and testing", "Only drawing", "Only printing", "Only file storage"],
        correctAnswer: "Simulations, sampling and testing",
        explanation: "The correct answer is Simulations, sampling and testing"
    },
    {
        id: 260,
        question: "Shapes (2,3) and (3,) are broadcast-compatible?",
        options: ["Yes", "Only for addition", "Only for @", "No"],
        correctAnswer: "Yes",
        explanation: "The correct answer is Yes"
    },
    {
        id: 159,
        question: "np.random.uniform(5, 10) returns a float between",
        options: ["5 and 10", "10 and 100", "0 and 1", "1 and 5"],
        correctAnswer: "5 and 10",
        explanation: "The correct answer is 5 and 10"
    },
    {
        id: 210,
        question: "np.abs(-5) is",
        options: ["5", "25", "0", "-5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 168,
        question: "np.unique(a, return_counts=True) returns",
        options: ["Index only", "Only counts", "Unique values and their counts", "Only values"],
        correctAnswer: "Unique values and their counts",
        explanation: "The correct answer is Unique values and their counts"
    },
    {
        id: 207,
        question: "np.round(2.567, 2) is",
        options: ["2.6", "3", "2.56", "2.57"],
        correctAnswer: "2.57",
        explanation: "The correct answer is 2.57"
    },
    {
        id: 152,
        question: "np.random.randint(1000, 5001, 10) gives 10 integers between",
        options: ["0 and 1000", "1001 and 5000", "1000 and 5001 inclusive", "1000 and 5000"],
        correctAnswer: "1000 and 5000",
        explanation: "The correct answer is 1000 and 5000"
    },
    {
        id: 284,
        question: "np.arange(6).reshape(2,3)[1,2] is",
        options: ["2", "3", "4", "5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
  ],
  set9: [
    {
        id: 66,
        question: "np.array([1000,2000,3000]) * 0.10 is",
        options: ["[100. 200. 300.]", "[1000 2000 3000]", "[10 20 30]", "[0.1 0.2 0.3]"],
        correctAnswer: "[100. 200. 300.]",
        explanation: "The correct answer is [100. 200. 300.]"
    },
    {
        id: 99,
        question: "A @ B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[18 20] [40 50]]", "[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]"],
        correctAnswer: "[[19 22] [43 50]]",
        explanation: "The correct answer is [[19 22] [43 50]]"
    },
    {
        id: 216,
        question: "np.array([1, 2.5, 3]).dtype is",
        options: ["bool", "int64", "float64", "object"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
    {
        id: 195,
        question: "np.var computes",
        options: ["Mean", "Median", "Variance", "Rank"],
        correctAnswer: "Variance",
        explanation: "The correct answer is Variance"
    },
    {
        id: 90,
        question: "Which function joins arrays along an existing axis?",
        options: ["np.join_axis", "np.merge", "np.concatenate", "np.glue"],
        correctAnswer: "np.concatenate",
        explanation: "The correct answer is np.concatenate"
    },
    {
        id: 292,
        question: "np.ones_like(a) creates",
        options: ["Ones with the same shape as a", "A scalar", "Identity", "Zeros of same shape"],
        correctAnswer: "Ones with the same shape as a",
        explanation: "The correct answer is Ones with the same shape as a"
    },
    {
        id: 155,
        question: "np.random.seed(10) followed by randint gives",
        options: ["A different sequence each time", "No output", "The same sequence each time", "An error"],
        correctAnswer: "The same sequence each time",
        explanation: "The correct answer is The same sequence each time"
    },
    {
        id: 208,
        question: "np.floor(2.9) is",
        options: ["2.9", "2.0", "3", "3.0"],
        correctAnswer: "2.0",
        explanation: "The correct answer is 2.0"
    },
    {
        id: 281,
        question: "np.square([1,2,3]) is",
        options: ["[3 6 9]", "[1 2 3]", "[1 4 9]", "[2 4 6]"],
        correctAnswer: "[1 4 9]",
        explanation: "The correct answer is [1 4 9]"
    },
    {
        id: 1,
        question: "NumPy stands for",
        options: ["New Python", "Numeric Print", "Number Pyramid", "Numerical Python"],
        correctAnswer: "Numerical Python",
        explanation: "The correct answer is Numerical Python"
    },
    {
        id: 156,
        question: "Which creates 3 random floats?",
        options: ["np.random.one(3)", "np.random.float(3)", "np.random.rand[3]", "np.random.rand(3)"],
        correctAnswer: "np.random.rand(3)",
        explanation: "The correct answer is np.random.rand(3)"
    },
    {
        id: 147,
        question: "np.random.choice(['A','B','C','D'], size=2) does",
        options: ["Deletes items", "Randomly samples 2 items", "Sorts the items", "Returns all items"],
        correctAnswer: "Randomly samples 2 items",
        explanation: "The correct answer is Randomly samples 2 items"
    },
    {
        id: 108,
        question: "np.linalg.det([[1,2],[3,4]]) is",
        options: ["10.0", "-10.0", "2.0", "-2.0"],
        correctAnswer: "-2.0",
        explanation: "The correct answer is -2.0"
    },
    {
        id: 221,
        question: "Which function checks the NumPy version?",
        options: ["np.version()", "np.__version__", "np.release", "np.ver"],
        correctAnswer: "np.__version__",
        explanation: "The correct answer is np.__version__"
    },
    {
        id: 297,
        question: "np.ones((4,2)).size is",
        options: ["2", "4", "8", "6"],
        correctAnswer: "8",
        explanation: "The correct answer is 8"
    },
    {
        id: 165,
        question: "To sort in descending order, we sort then",
        options: ["Reverse using [::-1]", "Use np.big", "Add minus", "Transpose"],
        correctAnswer: "Reverse using [::-1]",
        explanation: "The correct answer is Reverse using [::-1]"
    },
    {
        id: 239,
        question: "a.copy() returns",
        options: ["A reference", "A view", "An independent copy", "A list"],
        correctAnswer: "An independent copy",
        explanation: "The correct answer is An independent copy"
    },
    {
        id: 227,
        question: "np.arange(5).sum() is",
        options: ["4", "10", "5", "15"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 110,
        question: "np.linalg.det of identity matrix is",
        options: ["-1.0", "0.0", "1.0", "n"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 262,
        question: "np.array([[1,2,3],[4,5,6]]) + np.array([10,20,30]) gives",
        options: ["Error", "[[11 22 33] [14 25 36]]", "[[10 20 30] [10 20 30]]", "[[11 12 13] [24 25 26]]"],
        correctAnswer: "[[11 22 33] [14 25 36]]",
        explanation: "The correct answer is [[11 22 33] [14 25 36]]"
    },
    {
        id: 243,
        question: "np.concatenate(([1,2],[3,4])) is",
        options: ["[1 2 3 4]", "[4 6]", "[[1 2] [3 4]]", "[1 2]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 87,
        question: "Transpose of a 2x3 array has shape",
        options: ["(1, 6)", "(3, 2)", "(2, 3)", "(6,)"],
        correctAnswer: "(3, 2)",
        explanation: "The correct answer is (3, 2)"
    },
    {
        id: 44,
        question: "a[:, 0] for np.array([[1,2],[3,4]]) is",
        options: ["[1 2]", "[1 3]", "[2 4]", "[3 4]"],
        correctAnswer: "[1 3]",
        explanation: "The correct answer is [1 3]"
    },
    {
        id: 146,
        question: "Without a seed, np.random.rand(3) gives",
        options: ["Zeros", "Errors", "Same values every time", "Different values across runs"],
        correctAnswer: "Different values across runs",
        explanation: "The correct answer is Different values across runs"
    },
    {
        id: 264,
        question: "Broadcasting makes code",
        options: ["Longer", "Unusable", "Shorter without explicit loops", "Sequential only"],
        correctAnswer: "Shorter without explicit loops",
        explanation: "The correct answer is Shorter without explicit loops"
    },
    {
        id: 172,
        question: ".npy format stores",
        options: ["A single array", "Many arrays always", "Only images", "Only text"],
        correctAnswer: "A single array",
        explanation: "The correct answer is A single array"
    },
    {
        id: 48,
        question: "Negative index -1 refers to",
        options: ["Second element", "Last element", "First element", "Invalid index"],
        correctAnswer: "Last element",
        explanation: "The correct answer is Last element"
    },
    {
        id: 121,
        question: "Eigenvalues of [[2,0],[0,3]] are",
        options: ["2 and 2", "2 and 3", "1 and 6", "0 and 5"],
        correctAnswer: "2 and 3",
        explanation: "The correct answer is 2 and 3"
    },
    {
        id: 159,
        question: "np.random.uniform(5, 10) returns a float between",
        options: ["5 and 10", "10 and 100", "0 and 1", "1 and 5"],
        correctAnswer: "5 and 10",
        explanation: "The correct answer is 5 and 10"
    },
    {
        id: 116,
        question: "Solving x+y=5 and 2x+y=8 gives",
        options: ["x=2, y=3", "x=4, y=1", "x=3, y=2", "x=5, y=0"],
        correctAnswer: "x=3, y=2",
        explanation: "The correct answer is x=3, y=2"
    },
    {
        id: 102,
        question: "Matrix multiplication formula is",
        options: ["C_ij = Σ A_ik B_kj", "C_ij = A_ji", "C_ij = A_ij × B_ij", "C_ij = A_ij + B_ij"],
        correctAnswer: "C_ij = Σ A_ik B_kj",
        explanation: "The correct answer is C_ij = Σ A_ik B_kj"
    },
    {
        id: 76,
        question: "np.arange(1,7).reshape(4,2) results in",
        options: ["[[1 2] [3 4] [5 6] [0 0]]", "ValueError", "[[1 2] [3 4]]", "A 4x2 array with NaN"],
        correctAnswer: "ValueError",
        explanation: "The correct answer is ValueError"
    },
    {
        id: 13,
        question: "Which attribute gives the length of each dimension?",
        options: ["shape", "ndim", "size", "dtype"],
        correctAnswer: "shape",
        explanation: "The correct answer is shape"
    },
    {
        id: 24,
        question: "np.arange(0, 5) gives",
        options: ["[0 1 2 3 4]", "[0 1 2 3 4 5]", "[0 5]", "[1 2 3 4 5]"],
        correctAnswer: "[0 1 2 3 4]",
        explanation: "The correct answer is [0 1 2 3 4]"
    },
    {
        id: 126,
        question: "Which function creates an identity matrix?",
        options: ["np.eye", "np.identity_only_no", "np.id", "np.one_diag"],
        correctAnswer: "np.eye",
        explanation: "The correct answer is np.eye"
    },
    {
        id: 244,
        question: "np.append([1,2],[3]) is",
        options: ["[[1 2] [3]]", "[1 2]", "[1 2 3]", "Error"],
        correctAnswer: "[1 2 3]",
        explanation: "The correct answer is [1 2 3]"
    },
    {
        id: 38,
        question: "a[0:6:2] for np.array([10,20,30,40,50,60]) is",
        options: ["[10 20 30]", "[10 30 50]", "[10 40]", "[20 40 60]"],
        correctAnswer: "[10 30 50]",
        explanation: "The correct answer is [10 30 50]"
    },
    {
        id: 234,
        question: "np.linspace(1, 5, 5) is",
        options: ["[1. 2. 3. 4. 5.]", "[1 5]", "[1 2 3 4]", "[0. 1. 2. 3. 4.]"],
        correctAnswer: "[1. 2. 3. 4. 5.]",
        explanation: "The correct answer is [1. 2. 3. 4. 5.]"
    },
    {
        id: 213,
        question: "np.pi is approximately",
        options: ["1.61803", "1.41421", "3.14159", "2.71828"],
        correctAnswer: "3.14159",
        explanation: "The correct answer is 3.14159"
    },
    {
        id: 295,
        question: "np.arange(1, 6).max() - np.arange(1, 6).min() is",
        options: ["5", "4", "6", "1"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 100,
        question: "The * operator on NumPy arrays performs",
        options: ["Cross product", "Dot product", "Matrix multiplication", "Element-wise multiplication"],
        correctAnswer: "Element-wise multiplication",
        explanation: "The correct answer is Element-wise multiplication"
    },
    {
        id: 197,
        question: "np.cumsum([1,2,3]) is",
        options: ["[1 2 3]", "[6]", "[1 3 6]", "[3 2 1]"],
        correctAnswer: "[1 3 6]",
        explanation: "The correct answer is [1 3 6]"
    },
    {
        id: 254,
        question: "np.sum([[1,2],[3,4]]) is",
        options: ["3", "10", "7", "4"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 205,
        question: "np.all([1,1,0]) is",
        options: ["False", "True", "0", "1"],
        correctAnswer: "False",
        explanation: "The correct answer is False"
    },
    {
        id: 125,
        question: "Which module provides linear algebra in NumPy?",
        options: ["np.linalg", "np.mat_tools", "np.algebra", "np.linear"],
        correctAnswer: "np.linalg",
        explanation: "The correct answer is np.linalg"
    },
    {
        id: 3,
        question: "ndarray stands for",
        options: ["N-dimensional array", "Next data array", "Numeric data array", "Node array"],
        correctAnswer: "N-dimensional array",
        explanation: "The correct answer is N-dimensional array"
    },
    {
        id: 55,
        question: "Mean formula is",
        options: ["N / Σx", "Σx / N", "Σx × N", "Σx²"],
        correctAnswer: "Σx / N",
        explanation: "The correct answer is Σx / N"
    },
    {
        id: 218,
        question: "np.array(['a','b']).dtype kind is",
        options: ["Boolean", "String (Unicode)", "Float", "Integer"],
        correctAnswer: "String (Unicode)",
        explanation: "The correct answer is String (Unicode)"
    },
    {
        id: 113,
        question: "np.linalg.inv([[1,2],[3,4]]) is",
        options: ["[[4 -2] [-3 1]]", "[[0.5 0.25] [0.33 0.25]]", "[[-2. 1.] [1.5 -0.5]]", "[[1 3] [2 4]]"],
        correctAnswer: "[[-2. 1.] [1.5 -0.5]]",
        explanation: "The correct answer is [[-2. 1.] [1.5 -0.5]]"
    },
    {
        id: 91,
        question: "Which function splits an array into parts?",
        options: ["np.cut", "np.divide_parts", "np.partition_all", "np.split"],
        correctAnswer: "np.split",
        explanation: "The correct answer is np.split"
    },
  ],
  set10: [
    {
        id: 266,
        question: "Std of [10,20,30,40,50] is the square root of",
        options: ["200", "100", "50", "150"],
        correctAnswer: "200",
        explanation: "The correct answer is 200"
    },
    {
        id: 238,
        question: "Basic slicing in NumPy usually returns",
        options: ["A deep copy", "A list", "A string", "A view"],
        correctAnswer: "A view",
        explanation: "The correct answer is A view"
    },
    {
        id: 26,
        question: "arange() the stop value is",
        options: ["Ignored", "Excluded", "Included", "Doubled"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 286,
        question: "np.arange(6).reshape(2,3).sum(axis=0) is",
        options: ["[0 3]", "[3 5 7]", "[15]", "[ 3 12]"],
        correctAnswer: "[3 5 7]",
        explanation: "The correct answer is [3 5 7]"
    },
    {
        id: 128,
        question: "Matrix multiplication of 2x3 and 3x2 gives shape",
        options: ["(2, 3)", "(2, 2)", "(3, 2)", "(3, 3)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 63,
        question: "axis=1 gives",
        options: ["Column-wise results", "Row-wise results", "Whole array", "Diagonal"],
        correctAnswer: "Row-wise results",
        explanation: "The correct answer is Row-wise results"
    },
    {
        id: 234,
        question: "np.linspace(1, 5, 5) is",
        options: ["[1. 2. 3. 4. 5.]", "[1 5]", "[1 2 3 4]", "[0. 1. 2. 3. 4.]"],
        correctAnswer: "[1. 2. 3. 4. 5.]",
        explanation: "The correct answer is [1. 2. 3. 4. 5.]"
    },
    {
        id: 69,
        question: "np.array([1,2,3]) - 1 is",
        options: ["[0 1 2]", "[2 3 4]", "[-1 -2 -3]", "[1 2 3]"],
        correctAnswer: "[0 1 2]",
        explanation: "The correct answer is [0 1 2]"
    },
    {
        id: 272,
        question: "Which function counts nonzero elements?",
        options: ["np.nonzero_sum", "np.zerocount", "np.nzcount_all", "np.count_nonzero"],
        correctAnswer: "np.count_nonzero",
        explanation: "The correct answer is np.count_nonzero"
    },
    {
        id: 287,
        question: "np.arange(6).reshape(2,3).sum(axis=1) is",
        options: ["[3 5 7]", "[0 1 2]", "[ 3 12]", "[15]"],
        correctAnswer: "[ 3 12]",
        explanation: "The correct answer is [ 3 12]"
    },
    {
        id: 163,
        question: "np.sort(np.array([50,10,40,20,30])) is",
        options: ["[50 40 30 20 10]", "[10 50 20 40 30]", "[10 20 30 40 50]", "[30 20 10 40 50]"],
        correctAnswer: "[10 20 30 40 50]",
        explanation: "The correct answer is [10 20 30 40 50]"
    },
    {
        id: 227,
        question: "np.arange(5).sum() is",
        options: ["4", "10", "5", "15"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 259,
        question: "Which broadcasts correctly?",
        options: ["Shape (2,) with (3,)", "Shape (3,) with (4,)", "Shape (2,3) with (4,5)", "Shape (3,) with scalar"],
        correctAnswer: "Shape (3,) with scalar",
        explanation: "The correct answer is Shape (3,) with scalar"
    },
    {
        id: 219,
        question: "np.array([1,2,3], dtype=float) gives",
        options: ["[1. 2. 3.]", "[1 2 3]", "['1' '2' '3']", "Error"],
        correctAnswer: "[1. 2. 3.]",
        explanation: "The correct answer is [1. 2. 3.]"
    },
    {
        id: 281,
        question: "np.square([1,2,3]) is",
        options: ["[3 6 9]", "[1 2 3]", "[1 4 9]", "[2 4 6]"],
        correctAnswer: "[1 4 9]",
        explanation: "The correct answer is [1 4 9]"
    },
    {
        id: 229,
        question: "np.arange(10)[-3:] is",
        options: ["[9 8 7]", "[3 4 5]", "[7 8 9]", "[0 1 2]"],
        correctAnswer: "[7 8 9]",
        explanation: "The correct answer is [7 8 9]"
    },
    {
        id: 82,
        question: "np.vstack stacks arrays",
        options: ["Diagonally", "Randomly", "Side by side", "Vertically (one above another)"],
        correctAnswer: "Vertically (one above another)",
        explanation: "The correct answer is Vertically (one above another)"
    },
    {
        id: 244,
        question: "np.append([1,2],[3]) is",
        options: ["[[1 2] [3]]", "[1 2]", "[1 2 3]", "Error"],
        correctAnswer: "[1 2 3]",
        explanation: "The correct answer is [1 2 3]"
    },
    {
        id: 231,
        question: "np.arange(10)[2:5] is",
        options: ["[3 4 5]", "[2 3 4]", "[2 5]", "[2 3 4 5]"],
        correctAnswer: "[2 3 4]",
        explanation: "The correct answer is [2 3 4]"
    },
    {
        id: 133,
        question: "Determinant of [[5,2],[1,3]] is",
        options: ["17", "11", "15", "13"],
        correctAnswer: "13",
        explanation: "The correct answer is 13"
    },
    {
        id: 127,
        question: "Identity matrix times A gives",
        options: ["Identity", "Inverse of A", "A", "0"],
        correctAnswer: "A",
        explanation: "The correct answer is A"
    },
    {
        id: 142,
        question: "In randint(low, high), the high value is",
        options: ["Excluded", "Ignored", "Included", "Doubled"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 267,
        question: "Mean of [70,80,90,60] is",
        options: ["70.0", "75.0", "80.0", "300"],
        correctAnswer: "75.0",
        explanation: "The correct answer is 75.0"
    },
    {
        id: 249,
        question: "np.ravel flattens to",
        options: ["1D", "3D", "2D", "Scalar"],
        correctAnswer: "1D",
        explanation: "The correct answer is 1D"
    },
    {
        id: 123,
        question: "Rank measures",
        options: ["Number of independent dimensions", "Sum of values", "Number of zeros", "Number of rows only"],
        correctAnswer: "Number of independent dimensions",
        explanation: "The correct answer is Number of independent dimensions"
    },
    {
        id: 141,
        question: "np.random.randint(1, 100, 5) generates numbers from",
        options: ["1 to 100", "0 to 99", "1 to 99", "2 to 100"],
        correctAnswer: "1 to 99",
        explanation: "The correct answer is 1 to 99"
    },
    {
        id: 226,
        question: "np.full((2,2), 5).sum() is",
        options: ["25", "20", "10", "5"],
        correctAnswer: "20",
        explanation: "The correct answer is 20"
    },
    {
        id: 40,
        question: "2D indexing syntax is",
        options: ["array[column, row]", "array.row.column", "array(row)(column)", "array[row, column]"],
        correctAnswer: "array[row, column]",
        explanation: "The correct answer is array[row, column]"
    },
    {
        id: 147,
        question: "np.random.choice(['A','B','C','D'], size=2) does",
        options: ["Deletes items", "Randomly samples 2 items", "Sorts the items", "Returns all items"],
        correctAnswer: "Randomly samples 2 items",
        explanation: "The correct answer is Randomly samples 2 items"
    },
    {
        id: 121,
        question: "Eigenvalues of [[2,0],[0,3]] are",
        options: ["2 and 2", "2 and 3", "1 and 6", "0 and 5"],
        correctAnswer: "2 and 3",
        explanation: "The correct answer is 2 and 3"
    },
    {
        id: 140,
        question: "np.random.rand(5) returns",
        options: ["A 5x5 matrix", "5 random floats", "5 random integers", "One float"],
        correctAnswer: "5 random floats",
        explanation: "The correct answer is 5 random floats"
    },
    {
        id: 172,
        question: ".npy format stores",
        options: ["A single array", "Many arrays always", "Only images", "Only text"],
        correctAnswer: "A single array",
        explanation: "The correct answer is A single array"
    },
    {
        id: 164,
        question: "np.sort(a)[::-1] gives",
        options: ["Ascending order", "Descending order", "Original order", "Random order"],
        correctAnswer: "Descending order",
        explanation: "The correct answer is Descending order"
    },
    {
        id: 277,
        question: "np.minimum([1,5],[3,2]) is",
        options: ["[3 5]", "[1]", "[1 2]", "[5 3]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 42,
        question: "a[0:2,:] for a 3x3 array returns",
        options: ["First two rows, all columns", "First two columns, all rows", "Last two rows", "First two elements"],
        correctAnswer: "First two rows, all columns",
        explanation: "The correct answer is First two rows, all columns"
    },
    {
        id: 71,
        question: "np.array([1,2,3]) == 2 gives",
        options: ["[1 2 3]", "True", "[False True False]", "[False False False]"],
        correctAnswer: "[False True False]",
        explanation: "The correct answer is [False True False]"
    },
    {
        id: 78,
        question: "np.arange(12).reshape(3,-1) has shape",
        options: ["(4, 3)", "(3, 4)", "(3, 3)", "(12, 1)"],
        correctAnswer: "(3, 4)",
        explanation: "The correct answer is (3, 4)"
    },
    {
        id: 119,
        question: "np.linalg.matrix_rank([[1,2],[2,4]]) is",
        options: ["2", "4", "0", "1"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 197,
        question: "np.cumsum([1,2,3]) is",
        options: ["[1 2 3]", "[6]", "[1 3 6]", "[3 2 1]"],
        correctAnswer: "[1 3 6]",
        explanation: "The correct answer is [1 3 6]"
    },
    {
        id: 79,
        question: "np.arange(12).reshape(-1,2) has shape",
        options: ["(2, 2)", "(2, 6)", "(12,)", "(6, 2)"],
        correctAnswer: "(6, 2)",
        explanation: "The correct answer is (6, 2)"
    },
    {
        id: 110,
        question: "np.linalg.det of identity matrix is",
        options: ["-1.0", "0.0", "1.0", "n"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 33,
        question: "a[0] for np.array([10,20,30,40,50]) is",
        options: ["0", "50", "20", "10"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 213,
        question: "np.pi is approximately",
        options: ["1.61803", "1.41421", "3.14159", "2.71828"],
        correctAnswer: "3.14159",
        explanation: "The correct answer is 3.14159"
    },
    {
        id: 209,
        question: "np.ceil(2.1) is",
        options: ["3.0", "2.1", "2", "2.0"],
        correctAnswer: "3.0",
        explanation: "The correct answer is 3.0"
    },
    {
        id: 170,
        question: "np.save('numbers.npy', a) does",
        options: ["Saves array to .npy file", "Deletes array", "Prints array", "Loads array"],
        correctAnswer: "Saves array to .npy file",
        explanation: "The correct answer is Saves array to .npy file"
    },
    {
        id: 278,
        question: "np.mod(7, 3) is",
        options: ["0", "3", "1", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 239,
        question: "a.copy() returns",
        options: ["A reference", "A view", "An independent copy", "A list"],
        correctAnswer: "An independent copy",
        explanation: "The correct answer is An independent copy"
    },
    {
        id: 32,
        question: "np.eye(3) main diagonal contains",
        options: ["1s", "Random values", "0s", "2s"],
        correctAnswer: "1s",
        explanation: "The correct answer is 1s"
    },
    {
        id: 106,
        question: "Transpose of A = [[1,2,3],[4,5,6]] is",
        options: ["[[1 2 3] [4 5 6]]", "[[6 5 4] [3 2 1]]", "[[1 3] [2 4]]", "[[1 4] [2 5] [3 6]]"],
        correctAnswer: "[[1 4] [2 5] [3 6]]",
        explanation: "The correct answer is [[1 4] [2 5] [3 6]]"
    },
    {
        id: 216,
        question: "np.array([1, 2.5, 3]).dtype is",
        options: ["bool", "int64", "float64", "object"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
  ],
  set11: [
    {
        id: 200,
        question: "np.argsort([30,10,20]) is",
        options: ["[0 1 2]", "[10 20 30]", "[1 2 0]", "[2 1 0]"],
        correctAnswer: "[1 2 0]",
        explanation: "The correct answer is [1 2 0]"
    },
    {
        id: 11,
        question: "np.array([70,80,90,60]).mean() gives",
        options: ["300", "75.0", "70.0", "80.0"],
        correctAnswer: "75.0",
        explanation: "The correct answer is 75.0"
    },
    {
        id: 295,
        question: "np.arange(1, 6).max() - np.arange(1, 6).min() is",
        options: ["5", "4", "6", "1"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 195,
        question: "np.var computes",
        options: ["Mean", "Median", "Variance", "Rank"],
        correctAnswer: "Variance",
        explanation: "The correct answer is Variance"
    },
    {
        id: 245,
        question: "np.delete([1,2,3], 0) is",
        options: ["[1 3]", "[2 3]", "[3]", "[1 2]"],
        correctAnswer: "[2 3]",
        explanation: "The correct answer is [2 3]"
    },
    {
        id: 4,
        question: "The standard NumPy import is",
        options: ["using numpy", "include numpy", "import numpy as np", "import np as numpy"],
        correctAnswer: "import numpy as np",
        explanation: "The correct answer is import numpy as np"
    },
    {
        id: 181,
        question: "np.argmin(np.array([1200,1500,1800,1100,2500,3000,2200,1700,1900,2800])) is",
        options: ["4", "3", "1100", "0"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 153,
        question: "Random numbers produced by NumPy are called",
        options: ["True random", "Cryptographic only", "Pseudo-random", "Fixed"],
        correctAnswer: "Pseudo-random",
        explanation: "The correct answer is Pseudo-random"
    },
    {
        id: 215,
        question: "A NumPy array holds elements of",
        options: ["Only strings", "Only functions", "The same data type", "Any mixed types freely"],
        correctAnswer: "The same data type",
        explanation: "The correct answer is The same data type"
    },
    {
        id: 276,
        question: "np.maximum([1,5],[3,2]) is",
        options: ["[5]", "[1 2]", "[3 2]", "[3 5]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 280,
        question: "np.sqrt(16) is",
        options: ["256", "8.0", "4.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 113,
        question: "np.linalg.inv([[1,2],[3,4]]) is",
        options: ["[[4 -2] [-3 1]]", "[[0.5 0.25] [0.33 0.25]]", "[[-2. 1.] [1.5 -0.5]]", "[[1 3] [2 4]]"],
        correctAnswer: "[[-2. 1.] [1.5 -0.5]]",
        explanation: "The correct answer is [[-2. 1.] [1.5 -0.5]]"
    },
    {
        id: 250,
        question: "np.max(a, axis=0) for [[1,5],[7,2]] is",
        options: ["[7 2]", "[1 2]", "[5 7]", "[7 5]"],
        correctAnswer: "[7 5]",
        explanation: "The correct answer is [7 5]"
    },
    {
        id: 140,
        question: "np.random.rand(5) returns",
        options: ["A 5x5 matrix", "5 random floats", "5 random integers", "One float"],
        correctAnswer: "5 random floats",
        explanation: "The correct answer is 5 random floats"
    },
    {
        id: 224,
        question: "np.zeros(3) gives",
        options: ["[1. 1. 1.]", "[0]", "[0 0 0]", "[0. 0. 0.]"],
        correctAnswer: "[0. 0. 0.]",
        explanation: "The correct answer is [0. 0. 0.]"
    },
    {
        id: 249,
        question: "np.ravel flattens to",
        options: ["1D", "3D", "2D", "Scalar"],
        correctAnswer: "1D",
        explanation: "The correct answer is 1D"
    },
    {
        id: 15,
        question: "Which attribute gives the data type?",
        options: ["itemtype", "kind", "type_of", "dtype"],
        correctAnswer: "dtype",
        explanation: "The correct answer is dtype"
    },
    {
        id: 173,
        question: "np.savez('data.npz', first=a, second=b) saves",
        options: ["A CSV", "Only one array", "Multiple named arrays in one file", "A text file"],
        correctAnswer: "Multiple named arrays in one file",
        explanation: "The correct answer is Multiple named arrays in one file"
    },
    {
        id: 208,
        question: "np.floor(2.9) is",
        options: ["2.9", "2.0", "3", "3.0"],
        correctAnswer: "2.0",
        explanation: "The correct answer is 2.0"
    },
    {
        id: 85,
        question: "np.hstack((np.array([1,2,3]), np.array([4,5,6]))) gives",
        options: ["Error", "[[1 2 3] [4 5 6]]", "[5 7 9]", "[1 2 3 4 5 6]"],
        correctAnswer: "[1 2 3 4 5 6]",
        explanation: "The correct answer is [1 2 3 4 5 6]"
    },
    {
        id: 240,
        question: "flatten() returns a",
        options: ["View always", "List of lists", "Scalar", "Copy"],
        correctAnswer: "Copy",
        explanation: "The correct answer is Copy"
    },
    {
        id: 66,
        question: "np.array([1000,2000,3000]) * 0.10 is",
        options: ["[100. 200. 300.]", "[1000 2000 3000]", "[10 20 30]", "[0.1 0.2 0.3]"],
        correctAnswer: "[100. 200. 300.]",
        explanation: "The correct answer is [100. 200. 300.]"
    },
    {
        id: 274,
        question: "np.clip([1,5,10], 2, 8) is",
        options: ["[1 5 10]", "[2 5 8]", "[2 5 10]", "[1 5 8]"],
        correctAnswer: "[2 5 8]",
        explanation: "The correct answer is [2 5 8]"
    },
    {
        id: 14,
        question: "Which attribute gives total number of elements?",
        options: ["len_all", "ndim", "shape", "size"],
        correctAnswer: "size",
        explanation: "The correct answer is size"
    },
    {
        id: 202,
        question: "np.array([1,5,3])[np.array([1,5,3]) > 2] is",
        options: ["[5 3]", "[1]", "[1 2]", "[True True]"],
        correctAnswer: "[5 3]",
        explanation: "The correct answer is [5 3]"
    },
    {
        id: 289,
        question: "np.arange(6).reshape(2,3)[0,:] is",
        options: ["[3 4 5]", "[0 1 2]", "[0 3]", "[0 1]"],
        correctAnswer: "[0 1 2]",
        explanation: "The correct answer is [0 1 2]"
    },
    {
        id: 43,
        question: "In a[:, 1], the : means",
        options: ["Nothing", "Last row", "All rows", "All columns"],
        correctAnswer: "All rows",
        explanation: "The correct answer is All rows"
    },
    {
        id: 220,
        question: "a.astype(int) on [1.7, 2.2] gives",
        options: ["[1.7 2.2]", "[2 3]", "[2 2]", "[1 2]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 70,
        question: "np.array([2,4,6]) / 2 is",
        options: ["[1. 2. 3.]", "[4 8 12]", "[1 2 3 4]", "[0.5 1 1.5]"],
        correctAnswer: "[1. 2. 3.]",
        explanation: "The correct answer is [1. 2. 3.]"
    },
    {
        id: 237,
        question: "A view shares memory with the original; a copy",
        options: ["Shares memory", "Has its own memory", "Is not an array", "Is always slower to create"],
        correctAnswer: "Has its own memory",
        explanation: "The correct answer is Has its own memory"
    },
    {
        id: 94,
        question: "np.expand_dims(np.array([1,2,3]), axis=0).shape is",
        options: ["(1, 1, 3)", "(3,)", "(3, 1)", "(1, 3)"],
        correctAnswer: "(1, 3)",
        explanation: "The correct answer is (1, 3)"
    },
    {
        id: 26,
        question: "arange() the stop value is",
        options: ["Ignored", "Excluded", "Included", "Doubled"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 134,
        question: "np.trace([[1,2],[3,4]]) is",
        options: ["10", "5", "2", "4"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 168,
        question: "np.unique(a, return_counts=True) returns",
        options: ["Index only", "Only counts", "Unique values and their counts", "Only values"],
        correctAnswer: "Unique values and their counts",
        explanation: "The correct answer is Unique values and their counts"
    },
    {
        id: 109,
        question: "np.linalg.det([[2,0],[0,3]]) is",
        options: ["6.0", "1.0", "5.0", "0.0"],
        correctAnswer: "6.0",
        explanation: "The correct answer is 6.0"
    },
    {
        id: 233,
        question: "np.linspace(0, 1, 3) is",
        options: ["[0.3 0.6 1]", "[0. 0.5 1. ]", "[0 1 2]", "[0 0.25 0.5]"],
        correctAnswer: "[0. 0.5 1. ]",
        explanation: "The correct answer is [0. 0.5 1. ]"
    },
    {
        id: 143,
        question: "np.random.randint(1, 10, size=(3,3)) returns",
        options: ["A 9x9 matrix", "A 3x3 matrix of integers 1 to 9", "A 1D array", "A 3x3 matrix of floats"],
        correctAnswer: "A 3x3 matrix of integers 1 to 9",
        explanation: "The correct answer is A 3x3 matrix of integers 1 to 9"
    },
    {
        id: 216,
        question: "np.array([1, 2.5, 3]).dtype is",
        options: ["bool", "int64", "float64", "object"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
    {
        id: 130,
        question: "Matrix multiplication of 3x4 and 4x5 gives shape",
        options: ["(4, 4)", "(5, 3)", "(3, 4)", "(3, 5)"],
        correctAnswer: "(3, 5)",
        explanation: "The correct answer is (3, 5)"
    },
    {
        id: 42,
        question: "a[0:2,:] for a 3x3 array returns",
        options: ["First two rows, all columns", "First two columns, all rows", "Last two rows", "First two elements"],
        correctAnswer: "First two rows, all columns",
        explanation: "The correct answer is First two rows, all columns"
    },
    {
        id: 241,
        question: "Changing a slice view of a NumPy array",
        options: ["Can change the original array", "Raises error", "Never changes the original", "Deletes the original"],
        correctAnswer: "Can change the original array",
        explanation: "The correct answer is Can change the original array"
    },
    {
        id: 10,
        question: "np.sqrt(np.array([1,4,9,16])) gives",
        options: ["[1 2 3 4 5]", "[1 4 9 16]", "[1. 2. 3. 4.]", "[2 4 6 8]"],
        correctAnswer: "[1. 2. 3. 4.]",
        explanation: "The correct answer is [1. 2. 3. 4.]"
    },
    {
        id: 277,
        question: "np.minimum([1,5],[3,2]) is",
        options: ["[3 5]", "[1]", "[1 2]", "[5 3]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 27,
        question: "linspace() the endpoint is",
        options: ["Ignored", "Excluded by default", "Doubled", "Included by default"],
        correctAnswer: "Included by default",
        explanation: "The correct answer is Included by default"
    },
    {
        id: 180,
        question: "np.argmax(np.array([1200,1500,1800,1100,2500,3000,2200,1700,1900,2800])) is",
        options: ["4", "5", "6", "3000"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 115,
        question: "np.linalg.solve(A, B) solves",
        options: ["A x = B", "A x B = 0", "A + x = B", "x = A.T"],
        correctAnswer: "A x = B",
        explanation: "The correct answer is A x = B"
    },
    {
        id: 36,
        question: "Slice syntax is",
        options: ["array{start:stop}", "array[start:stop:step]", "array(start,stop,step)", "array<start,stop>"],
        correctAnswer: "array[start:stop:step]",
        explanation: "The correct answer is array[start:stop:step]"
    },
    {
        id: 21,
        question: "np.ones((2,3)) creates",
        options: ["A 2x3 array of zeros", "A 3x2 array of ones", "A 2x3 array of 1.0", "An empty array"],
        correctAnswer: "A 2x3 array of 1.0",
        explanation: "The correct answer is A 2x3 array of 1.0"
    },
    {
        id: 16,
        question: "np.array([[1,2,3],[4,5,6]]).shape is",
        options: ["(2, 3)", "(3, 2)", "(6,)", "(2, 2)"],
        correctAnswer: "(2, 3)",
        explanation: "The correct answer is (2, 3)"
    },
    {
        id: 127,
        question: "Identity matrix times A gives",
        options: ["Identity", "Inverse of A", "A", "0"],
        correctAnswer: "A",
        explanation: "The correct answer is A"
    },
  ],
  set12: [
    {
        id: 103,
        question: "np.dot([1,2,3],[4,5,6]) is",
        options: ["6", "15", "21", "32"],
        correctAnswer: "32",
        explanation: "The correct answer is 32"
    },
    {
        id: 11,
        question: "np.array([70,80,90,60]).mean() gives",
        options: ["300", "75.0", "70.0", "80.0"],
        correctAnswer: "75.0",
        explanation: "The correct answer is 75.0"
    },
    {
        id: 79,
        question: "np.arange(12).reshape(-1,2) has shape",
        options: ["(2, 2)", "(2, 6)", "(12,)", "(6, 2)"],
        correctAnswer: "(6, 2)",
        explanation: "The correct answer is (6, 2)"
    },
    {
        id: 123,
        question: "Rank measures",
        options: ["Number of independent dimensions", "Sum of values", "Number of zeros", "Number of rows only"],
        correctAnswer: "Number of independent dimensions",
        explanation: "The correct answer is Number of independent dimensions"
    },
    {
        id: 65,
        question: "np.array([100,200,300]) + 10 is",
        options: ["Error", "[10 10 10]", "[110 210 310]", "[100 200 300 10]"],
        correctAnswer: "[110 210 310]",
        explanation: "The correct answer is [110 210 310]"
    },
    {
        id: 243,
        question: "np.concatenate(([1,2],[3,4])) is",
        options: ["[1 2 3 4]", "[4 6]", "[[1 2] [3 4]]", "[1 2]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 59,
        question: "np.std([2,2,2,2]) equals",
        options: ["4.0", "2.0", "1.0", "0.0"],
        correctAnswer: "0.0",
        explanation: "The correct answer is 0.0"
    },
    {
        id: 289,
        question: "np.arange(6).reshape(2,3)[0,:] is",
        options: ["[3 4 5]", "[0 1 2]", "[0 3]", "[0 1]"],
        correctAnswer: "[0 1 2]",
        explanation: "The correct answer is [0 1 2]"
    },
    {
        id: 112,
        question: "np.linalg.inv requires",
        options: ["A string", "Zero determinant", "1D array", "Non-zero determinant"],
        correctAnswer: "Non-zero determinant",
        explanation: "The correct answer is Non-zero determinant"
    },
    {
        id: 239,
        question: "a.copy() returns",
        options: ["A reference", "A view", "An independent copy", "A list"],
        correctAnswer: "An independent copy",
        explanation: "The correct answer is An independent copy"
    },
    {
        id: 132,
        question: "Determinant of [[3,1],[2,4]] is",
        options: ["14", "2", "10", "12"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 189,
        question: "For the sales data, sales.size is",
        options: ["18700", "10", "2", "5"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 86,
        question: "hstack of [[1],[2]] and [[3],[4]] gives",
        options: ["[[1] [2] [3] [4]]", "[[1 3] [2 4]]", "[[4 3] [2 1]]", "[1 2 3 4]"],
        correctAnswer: "[[1 3] [2 4]]",
        explanation: "The correct answer is [[1 3] [2 4]]"
    },
    {
        id: 84,
        question: "np.vstack((np.array([1,2,3]), np.array([4,5,6]))) has shape",
        options: ["(6,)", "(1, 6)", "(3, 2)", "(2, 3)"],
        correctAnswer: "(2, 3)",
        explanation: "The correct answer is (2, 3)"
    },
    {
        id: 160,
        question: "np.random.normal(0, 1, 5) returns",
        options: ["5 ones", "5 values from a normal distribution", "5 zeros", "5 integers"],
        correctAnswer: "5 values from a normal distribution",
        explanation: "The correct answer is 5 values from a normal distribution"
    },
    {
        id: 56,
        question: "Variance formula (population) is",
        options: ["√Σx", "Σ(x−µ)² / N", "Σx² × N", "Σ(x−µ) / N"],
        correctAnswer: "Σ(x−µ)² / N",
        explanation: "The correct answer is Σ(x−µ)² / N"
    },
    {
        id: 297,
        question: "np.ones((4,2)).size is",
        options: ["2", "4", "8", "6"],
        correctAnswer: "8",
        explanation: "The correct answer is 8"
    },
    {
        id: 14,
        question: "Which attribute gives total number of elements?",
        options: ["len_all", "ndim", "shape", "size"],
        correctAnswer: "size",
        explanation: "The correct answer is size"
    },
    {
        id: 295,
        question: "np.arange(1, 6).max() - np.arange(1, 6).min() is",
        options: ["5", "4", "6", "1"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 193,
        question: "For the sales data, sorted descending first element is",
        options: ["3000", "1100", "2800", "2500"],
        correctAnswer: "3000",
        explanation: "The correct answer is 3000"
    },
    {
        id: 204,
        question: "np.any([0,0,1]) is",
        options: ["False", "0", "1", "True"],
        correctAnswer: "True",
        explanation: "The correct answer is True"
    },
    {
        id: 102,
        question: "Matrix multiplication formula is",
        options: ["C_ij = Σ A_ik B_kj", "C_ij = A_ji", "C_ij = A_ij × B_ij", "C_ij = A_ij + B_ij"],
        correctAnswer: "C_ij = Σ A_ik B_kj",
        explanation: "The correct answer is C_ij = Σ A_ik B_kj"
    },
    {
        id: 39,
        question: "a[::-1] for np.array([10,20,30,40,50]) is",
        options: ["[50]", "[10 20 30 40 50]", "Error", "[50 40 30 20 10]"],
        correctAnswer: "[50 40 30 20 10]",
        explanation: "The correct answer is [50 40 30 20 10]"
    },
    {
        id: 125,
        question: "Which module provides linear algebra in NumPy?",
        options: ["np.linalg", "np.mat_tools", "np.algebra", "np.linear"],
        correctAnswer: "np.linalg",
        explanation: "The correct answer is np.linalg"
    },
    {
        id: 53,
        question: "np.max(np.array([10,20,30,40,50])) is",
        options: ["50", "10", "150", "30"],
        correctAnswer: "50",
        explanation: "The correct answer is 50"
    },
    {
        id: 155,
        question: "np.random.seed(10) followed by randint gives",
        options: ["A different sequence each time", "No output", "The same sequence each time", "An error"],
        correctAnswer: "The same sequence each time",
        explanation: "The correct answer is The same sequence each time"
    },
    {
        id: 62,
        question: "axis=0 gives",
        options: ["Row-wise results", "Column-wise results", "Whole array", "Diagonal"],
        correctAnswer: "Column-wise results",
        explanation: "The correct answer is Column-wise results"
    },
    {
        id: 290,
        question: "np.empty((2,2)) creates",
        options: ["A random array", "An uninitialized 2x2 array", "An identity matrix", "A zeros array"],
        correctAnswer: "An uninitialized 2x2 array",
        explanation: "The correct answer is An uninitialized 2x2 array"
    },
    {
        id: 22,
        question: "np.full((2,3), 7) creates",
        options: ["A 2x3 array filled with 7", "A 3x2 array filled with 7", "A 1D array of 7", "An array of 2 and 3"],
        correctAnswer: "A 2x3 array filled with 7",
        explanation: "The correct answer is A 2x3 array filled with 7"
    },
    {
        id: 178,
        question: "Difference between .npy and text storage: .npy is",
        options: ["Binary and efficient; text is human-readable", "The same", "Human-readable; text is binary", "Only for strings"],
        correctAnswer: "Binary and efficient; text is human-readable",
        explanation: "The correct answer is Binary and efficient; text is human-readable"
    },
    {
        id: 273,
        question: "np.count_nonzero([0,1,2,0]) is",
        options: ["1", "4", "3", "2"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 220,
        question: "a.astype(int) on [1.7, 2.2] gives",
        options: ["[1.7 2.2]", "[2 3]", "[2 2]", "[1 2]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 190,
        question: "For the sales data, sales.ndim is",
        options: ["0", "1", "10", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 36,
        question: "Slice syntax is",
        options: ["array{start:stop}", "array[start:stop:step]", "array(start,stop,step)", "array<start,stop>"],
        correctAnswer: "array[start:stop:step]",
        explanation: "The correct answer is array[start:stop:step]"
    },
    {
        id: 260,
        question: "Shapes (2,3) and (3,) are broadcast-compatible?",
        options: ["Yes", "Only for addition", "Only for @", "No"],
        correctAnswer: "Yes",
        explanation: "The correct answer is Yes"
    },
    {
        id: 175,
        question: "np.savetxt('numbers.txt', a) saves",
        options: ["Nothing", "A binary .npy file", "A human-readable text file", "A CSV with header only"],
        correctAnswer: "A human-readable text file",
        explanation: "The correct answer is A human-readable text file"
    },
    {
        id: 7,
        question: "NumPy array operations are generally",
        options: ["Random", "Row-only", "Element-wise", "Column-only"],
        correctAnswer: "Element-wise",
        explanation: "The correct answer is Element-wise"
    },
    {
        id: 216,
        question: "np.array([1, 2.5, 3]).dtype is",
        options: ["bool", "int64", "float64", "object"],
        correctAnswer: "float64",
        explanation: "The correct answer is float64"
    },
    {
        id: 251,
        question: "np.max(a, axis=1) for [[1,5],[7,2]] is",
        options: ["[7 5]", "[1 2]", "[7]", "[5 7]"],
        correctAnswer: "[5 7]",
        explanation: "The correct answer is [5 7]"
    },
    {
        id: 55,
        question: "Mean formula is",
        options: ["N / Σx", "Σx / N", "Σx × N", "Σx²"],
        correctAnswer: "Σx / N",
        explanation: "The correct answer is Σx / N"
    },
    {
        id: 222,
        question: "Converting a Python list to an array uses",
        options: ["np.array()", "np.list()", "np.convert()", "np.make()"],
        correctAnswer: "np.array()",
        explanation: "The correct answer is np.array()"
    },
    {
        id: 186,
        question: "For the sales data, sales + 500 on first element gives",
        options: ["2000", "1700", "1500", "1200"],
        correctAnswer: "1700",
        explanation: "The correct answer is 1700"
    },
    {
        id: 236,
        question: "np.arange(5, 0, -1) is",
        options: ["[1 2 3 4 5]", "[4 3 2 1 0]", "[5 4 3 2 1]", "[5 4 3 2 1 0]"],
        correctAnswer: "[5 4 3 2 1]",
        explanation: "The correct answer is [5 4 3 2 1]"
    },
    {
        id: 223,
        question: "len(np.array([[1,2,3],[4,5,6]])) is",
        options: ["6", "2", "1", "3"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 91,
        question: "Which function splits an array into parts?",
        options: ["np.cut", "np.divide_parts", "np.partition_all", "np.split"],
        correctAnswer: "np.split",
        explanation: "The correct answer is np.split"
    },
    {
        id: 268,
        question: "Sum divided by N equals",
        options: ["Std", "Variance", "Mean", "Median"],
        correctAnswer: "Mean",
        explanation: "The correct answer is Mean"
    },
    {
        id: 139,
        question: "np.random.rand() generates a value in",
        options: ["[0, 1)", "(-1, 1)", "[1, 100]", "[0, 10)"],
        correctAnswer: "[0, 1)",
        explanation: "The correct answer is [0, 1)"
    },
    {
        id: 276,
        question: "np.maximum([1,5],[3,2]) is",
        options: ["[5]", "[1 2]", "[3 2]", "[3 5]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 248,
        question: "np.tile([1,2], 2) is",
        options: ["[1 1 2 2]", "[1 2 1 2]", "[1 2]", "[2 1 2 1]"],
        correctAnswer: "[1 2 1 2]",
        explanation: "The correct answer is [1 2 1 2]"
    },
    {
        id: 224,
        question: "np.zeros(3) gives",
        options: ["[1. 1. 1.]", "[0]", "[0 0 0]", "[0. 0. 0.]"],
        correctAnswer: "[0. 0. 0.]",
        explanation: "The correct answer is [0. 0. 0.]"
    },
  ],
  set13: [
    {
        id: 138,
        question: "np.cross([1,0,0],[0,1,0]) is",
        options: ["[1 1 0]", "[1 0 0]", "[0 0 1]", "[0 0 0]"],
        correctAnswer: "[0 0 1]",
        explanation: "The correct answer is [0 0 1]"
    },
    {
        id: 166,
        question: "np.unique([10,20,10,30,20,40]) is",
        options: ["[10 10 20 20]", "[40 30 20 10]", "[10 20 10 30 20 40]", "[10 20 30 40]"],
        correctAnswer: "[10 20 30 40]",
        explanation: "The correct answer is [10 20 30 40]"
    },
    {
        id: 126,
        question: "Which function creates an identity matrix?",
        options: ["np.eye", "np.identity_only_no", "np.id", "np.one_diag"],
        correctAnswer: "np.eye",
        explanation: "The correct answer is np.eye"
    },
    {
        id: 45,
        question: "a[1] for np.array([[1,2],[3,4]]) is",
        options: ["[1 2]", "[3 4]", "3", "[2 4]"],
        correctAnswer: "[3 4]",
        explanation: "The correct answer is [3 4]"
    },
    {
        id: 143,
        question: "np.random.randint(1, 10, size=(3,3)) returns",
        options: ["A 9x9 matrix", "A 3x3 matrix of integers 1 to 9", "A 1D array", "A 3x3 matrix of floats"],
        correctAnswer: "A 3x3 matrix of integers 1 to 9",
        explanation: "The correct answer is A 3x3 matrix of integers 1 to 9"
    },
    {
        id: 231,
        question: "np.arange(10)[2:5] is",
        options: ["[3 4 5]", "[2 3 4]", "[2 5]", "[2 3 4 5]"],
        correctAnswer: "[2 3 4]",
        explanation: "The correct answer is [2 3 4]"
    },
    {
        id: 125,
        question: "Which module provides linear algebra in NumPy?",
        options: ["np.linalg", "np.mat_tools", "np.algebra", "np.linear"],
        correctAnswer: "np.linalg",
        explanation: "The correct answer is np.linalg"
    },
    {
        id: 238,
        question: "Basic slicing in NumPy usually returns",
        options: ["A deep copy", "A list", "A string", "A view"],
        correctAnswer: "A view",
        explanation: "The correct answer is A view"
    },
    {
        id: 292,
        question: "np.ones_like(a) creates",
        options: ["Ones with the same shape as a", "A scalar", "Identity", "Zeros of same shape"],
        correctAnswer: "Ones with the same shape as a",
        explanation: "The correct answer is Ones with the same shape as a"
    },
    {
        id: 195,
        question: "np.var computes",
        options: ["Mean", "Median", "Variance", "Rank"],
        correctAnswer: "Variance",
        explanation: "The correct answer is Variance"
    },
    {
        id: 173,
        question: "np.savez('data.npz', first=a, second=b) saves",
        options: ["A CSV", "Only one array", "Multiple named arrays in one file", "A text file"],
        correctAnswer: "Multiple named arrays in one file",
        explanation: "The correct answer is Multiple named arrays in one file"
    },
    {
        id: 15,
        question: "Which attribute gives the data type?",
        options: ["itemtype", "kind", "type_of", "dtype"],
        correctAnswer: "dtype",
        explanation: "The correct answer is dtype"
    },
    {
        id: 254,
        question: "np.sum([[1,2],[3,4]]) is",
        options: ["3", "10", "7", "4"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 167,
        question: "np.unique returns values in",
        options: ["Reverse order", "Sorted order", "Original order", "Random order"],
        correctAnswer: "Sorted order",
        explanation: "The correct answer is Sorted order"
    },
    {
        id: 94,
        question: "np.expand_dims(np.array([1,2,3]), axis=0).shape is",
        options: ["(1, 1, 3)", "(3,)", "(3, 1)", "(1, 3)"],
        correctAnswer: "(1, 3)",
        explanation: "The correct answer is (1, 3)"
    },
    {
        id: 250,
        question: "np.max(a, axis=0) for [[1,5],[7,2]] is",
        options: ["[7 2]", "[1 2]", "[5 7]", "[7 5]"],
        correctAnswer: "[7 5]",
        explanation: "The correct answer is [7 5]"
    },
    {
        id: 109,
        question: "np.linalg.det([[2,0],[0,3]]) is",
        options: ["6.0", "1.0", "5.0", "0.0"],
        correctAnswer: "6.0",
        explanation: "The correct answer is 6.0"
    },
    {
        id: 182,
        question: "For the sales data, np.sum is",
        options: ["19700", "19000", "20700", "18700"],
        correctAnswer: "19700",
        explanation: "The correct answer is 19700"
    },
    {
        id: 133,
        question: "Determinant of [[5,2],[1,3]] is",
        options: ["17", "11", "15", "13"],
        correctAnswer: "13",
        explanation: "The correct answer is 13"
    },
    {
        id: 175,
        question: "np.savetxt('numbers.txt', a) saves",
        options: ["Nothing", "A binary .npy file", "A human-readable text file", "A CSV with header only"],
        correctAnswer: "A human-readable text file",
        explanation: "The correct answer is A human-readable text file"
    },
    {
        id: 144,
        question: "np.random.seed(n) makes random output",
        options: ["Slower", "Reproducible", "Sorted", "More random"],
        correctAnswer: "Reproducible",
        explanation: "The correct answer is Reproducible"
    },
    {
        id: 142,
        question: "In randint(low, high), the high value is",
        options: ["Excluded", "Ignored", "Included", "Doubled"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 285,
        question: "np.arange(6).reshape(2,3).T.shape is",
        options: ["(6,)", "(1, 6)", "(2, 3)", "(3, 2)"],
        correctAnswer: "(3, 2)",
        explanation: "The correct answer is (3, 2)"
    },
    {
        id: 6,
        question: "NumPy uses which indexing?",
        options: ["Two-based", "One-based", "Zero-based", "Letter-based"],
        correctAnswer: "Zero-based",
        explanation: "The correct answer is Zero-based"
    },
    {
        id: 265,
        question: "Variance of [10,20,30,40,50] is",
        options: ["100.0", "14.14", "200.0", "50.0"],
        correctAnswer: "200.0",
        explanation: "The correct answer is 200.0"
    },
    {
        id: 98,
        question: "A * B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]", "[[26 30] [26 30]]"],
        correctAnswer: "[[5 12] [21 32]]",
        explanation: "The correct answer is [[5 12] [21 32]]"
    },
    {
        id: 44,
        question: "a[:, 0] for np.array([[1,2],[3,4]]) is",
        options: ["[1 2]", "[1 3]", "[2 4]", "[3 4]"],
        correctAnswer: "[1 3]",
        explanation: "The correct answer is [1 3]"
    },
    {
        id: 124,
        question: "Linear algebra is important in",
        options: ["Only typing", "Only painting", "Machine learning, PCA, optimization", "Only cooking"],
        correctAnswer: "Machine learning, PCA, optimization",
        explanation: "The correct answer is Machine learning, PCA, optimization"
    },
    {
        id: 209,
        question: "np.ceil(2.1) is",
        options: ["3.0", "2.1", "2", "2.0"],
        correctAnswer: "3.0",
        explanation: "The correct answer is 3.0"
    },
    {
        id: 251,
        question: "np.max(a, axis=1) for [[1,5],[7,2]] is",
        options: ["[7 5]", "[1 2]", "[7]", "[5 7]"],
        correctAnswer: "[5 7]",
        explanation: "The correct answer is [5 7]"
    },
    {
        id: 244,
        question: "np.append([1,2],[3]) is",
        options: ["[[1 2] [3]]", "[1 2]", "[1 2 3]", "Error"],
        correctAnswer: "[1 2 3]",
        explanation: "The correct answer is [1 2 3]"
    },
    {
        id: 252,
        question: "np.mean(a, axis=0) for [[2,4],[6,8]] is",
        options: ["[2. 8.]", "[3. 7.]", "[5.]", "[4. 6.]"],
        correctAnswer: "[4. 6.]",
        explanation: "The correct answer is [4. 6.]"
    },
    {
        id: 230,
        question: "np.arange(10)[:3] is",
        options: ["[0 1 2]", "[7 8 9]", "[1 2 3]", "[0 1 2 3]"],
        correctAnswer: "[0 1 2]",
        explanation: "The correct answer is [0 1 2]"
    },
    {
        id: 9,
        question: "Output of np.array([10,20,30]) + np.array([1,2,3]) is",
        options: ["[10 20 30 1 2 3]", "[11 22 33]", "Error", "[60 6]"],
        correctAnswer: "[11 22 33]",
        explanation: "The correct answer is [11 22 33]"
    },
    {
        id: 48,
        question: "Negative index -1 refers to",
        options: ["Second element", "Last element", "First element", "Invalid index"],
        correctAnswer: "Last element",
        explanation: "The correct answer is Last element"
    },
    {
        id: 151,
        question: "np.random.shuffle returns",
        options: ["None", "A copy", "The shuffled array", "A list"],
        correctAnswer: "None",
        explanation: "The correct answer is None"
    },
    {
        id: 114,
        question: "A @ inv(A) gives",
        options: ["A itself", "Zero matrix", "Determinant", "Identity matrix (approximately)"],
        correctAnswer: "Identity matrix (approximately)",
        explanation: "The correct answer is Identity matrix (approximately)"
    },
    {
        id: 208,
        question: "np.floor(2.9) is",
        options: ["2.9", "2.0", "3", "3.0"],
        correctAnswer: "2.0",
        explanation: "The correct answer is 2.0"
    },
    {
        id: 157,
        question: "Which creates a 2x3 array of random floats?",
        options: ["np.random.rand(3,2,1)", "np.random.rand(2,3)", "np.random.random(6,1)", "np.random.rand([6])"],
        correctAnswer: "np.random.rand(2,3)",
        explanation: "The correct answer is np.random.rand(2,3)"
    },
    {
        id: 298,
        question: "np.full((2,3), 25).max() is",
        options: ["25", "0", "3", "2"],
        correctAnswer: "25",
        explanation: "The correct answer is 25"
    },
    {
        id: 189,
        question: "For the sales data, sales.size is",
        options: ["18700", "10", "2", "5"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 243,
        question: "np.concatenate(([1,2],[3,4])) is",
        options: ["[1 2 3 4]", "[4 6]", "[[1 2] [3 4]]", "[1 2]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 284,
        question: "np.arange(6).reshape(2,3)[1,2] is",
        options: ["2", "3", "4", "5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 272,
        question: "Which function counts nonzero elements?",
        options: ["np.nonzero_sum", "np.zerocount", "np.nzcount_all", "np.count_nonzero"],
        correctAnswer: "np.count_nonzero",
        explanation: "The correct answer is np.count_nonzero"
    },
    {
        id: 177,
        question: "Which preserves the array efficiently in binary?",
        options: [".png", ".txt", ".npy", ".docx"],
        correctAnswer: ".npy",
        explanation: "The correct answer is .npy"
    },
    {
        id: 218,
        question: "np.array(['a','b']).dtype kind is",
        options: ["Boolean", "String (Unicode)", "Float", "Integer"],
        correctAnswer: "String (Unicode)",
        explanation: "The correct answer is String (Unicode)"
    },
    {
        id: 282,
        question: "np.reciprocal([2.0, 4.0]) is",
        options: ["[-2 -4]", "[0.2 0.4]", "[2 4]", "[0.5 0.25]"],
        correctAnswer: "[0.5 0.25]",
        explanation: "The correct answer is [0.5 0.25]"
    },
    {
        id: 170,
        question: "np.save('numbers.npy', a) does",
        options: ["Saves array to .npy file", "Deletes array", "Prints array", "Loads array"],
        correctAnswer: "Saves array to .npy file",
        explanation: "The correct answer is Saves array to .npy file"
    },
    {
        id: 181,
        question: "np.argmin(np.array([1200,1500,1800,1100,2500,3000,2200,1700,1900,2800])) is",
        options: ["4", "3", "1100", "0"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 233,
        question: "np.linspace(0, 1, 3) is",
        options: ["[0.3 0.6 1]", "[0. 0.5 1. ]", "[0 1 2]", "[0 0.25 0.5]"],
        correctAnswer: "[0. 0.5 1. ]",
        explanation: "The correct answer is [0. 0.5 1. ]"
    },
  ],
  set14: [
    {
        id: 139,
        question: "np.random.rand() generates a value in",
        options: ["[0, 1)", "(-1, 1)", "[1, 100]", "[0, 10)"],
        correctAnswer: "[0, 1)",
        explanation: "The correct answer is [0, 1)"
    },
    {
        id: 157,
        question: "Which creates a 2x3 array of random floats?",
        options: ["np.random.rand(3,2,1)", "np.random.rand(2,3)", "np.random.random(6,1)", "np.random.rand([6])"],
        correctAnswer: "np.random.rand(2,3)",
        explanation: "The correct answer is np.random.rand(2,3)"
    },
    {
        id: 129,
        question: "Matrix multiplication of 2x3 and 2x3 is",
        options: ["Invalid (inner dimensions mismatch)", "2x3", "2x2", "3x3"],
        correctAnswer: "Invalid (inner dimensions mismatch)",
        explanation: "The correct answer is Invalid (inner dimensions mismatch)"
    },
    {
        id: 119,
        question: "np.linalg.matrix_rank([[1,2],[2,4]]) is",
        options: ["2", "4", "0", "1"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 62,
        question: "axis=0 gives",
        options: ["Row-wise results", "Column-wise results", "Whole array", "Diagonal"],
        correctAnswer: "Column-wise results",
        explanation: "The correct answer is Column-wise results"
    },
    {
        id: 99,
        question: "A @ B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[18 20] [40 50]]", "[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]"],
        correctAnswer: "[[19 22] [43 50]]",
        explanation: "The correct answer is [[19 22] [43 50]]"
    },
    {
        id: 162,
        question: "np.sort returns",
        options: ["A sorted copy", "A list of tuples", "Sorts in place only", "The index only"],
        correctAnswer: "A sorted copy",
        explanation: "The correct answer is A sorted copy"
    },
    {
        id: 275,
        question: "np.diff([1,4,9]) is",
        options: ["[3 5]", "[5 3]", "[8]", "[1 4 9]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 95,
        question: "np.squeeze removes",
        options: ["Axes of length 1", "NaNs", "Duplicates", "All zeros"],
        correctAnswer: "Axes of length 1",
        explanation: "The correct answer is Axes of length 1"
    },
    {
        id: 111,
        question: "A matrix with determinant 0 is",
        options: ["Diagonal only", "Identity", "Singular (no inverse)", "Invertible"],
        correctAnswer: "Singular (no inverse)",
        explanation: "The correct answer is Singular (no inverse)"
    },
    {
        id: 248,
        question: "np.tile([1,2], 2) is",
        options: ["[1 1 2 2]", "[1 2 1 2]", "[1 2]", "[2 1 2 1]"],
        correctAnswer: "[1 2 1 2]",
        explanation: "The correct answer is [1 2 1 2]"
    },
    {
        id: 142,
        question: "In randint(low, high), the high value is",
        options: ["Excluded", "Ignored", "Included", "Doubled"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 269,
        question: "Which is NOT a NumPy feature?",
        options: ["Sorting", "Linear algebra", "Random numbers", "Building web servers natively"],
        correctAnswer: "Building web servers natively",
        explanation: "The correct answer is Building web servers natively"
    },
    {
        id: 145,
        question: "Why use random.seed()?",
        options: ["To sort data", "To save arrays", "To get the same random sequence every run", "To speed up code"],
        correctAnswer: "To get the same random sequence every run",
        explanation: "The correct answer is To get the same random sequence every run"
    },
    {
        id: 52,
        question: "np.min(np.array([10,20,30,40,50])) is",
        options: ["30", "50", "0", "10"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 100,
        question: "The * operator on NumPy arrays performs",
        options: ["Cross product", "Dot product", "Matrix multiplication", "Element-wise multiplication"],
        correctAnswer: "Element-wise multiplication",
        explanation: "The correct answer is Element-wise multiplication"
    },
    {
        id: 152,
        question: "np.random.randint(1000, 5001, 10) gives 10 integers between",
        options: ["0 and 1000", "1001 and 5000", "1000 and 5001 inclusive", "1000 and 5000"],
        correctAnswer: "1000 and 5000",
        explanation: "The correct answer is 1000 and 5000"
    },
    {
        id: 117,
        question: "Solving x+y=10 and x−y=2 gives",
        options: ["x=7, y=3", "x=6, y=4", "x=5, y=5", "x=4, y=6"],
        correctAnswer: "x=6, y=4",
        explanation: "The correct answer is x=6, y=4"
    },
    {
        id: 185,
        question: "For the sales data, np.min is",
        options: ["1000", "1200", "1100", "1500"],
        correctAnswer: "1100",
        explanation: "The correct answer is 1100"
    },
    {
        id: 92,
        question: "np.split(np.arange(6), 3) returns",
        options: ["2 arrays of 3 elements", "6 arrays of 1", "3 arrays of 2 elements", "1 array of 6"],
        correctAnswer: "3 arrays of 2 elements",
        explanation: "The correct answer is 3 arrays of 2 elements"
    },
    {
        id: 155,
        question: "np.random.seed(10) followed by randint gives",
        options: ["A different sequence each time", "No output", "The same sequence each time", "An error"],
        correctAnswer: "The same sequence each time",
        explanation: "The correct answer is The same sequence each time"
    },
    {
        id: 8,
        question: "Output of [10,20,30] + [1,2,3] for Python lists is",
        options: ["[10, 20, 30, 1, 2, 3]", "[33]", "[11, 22, 33]", "Error"],
        correctAnswer: "[10, 20, 30, 1, 2, 3]",
        explanation: "The correct answer is [10, 20, 30, 1, 2, 3]"
    },
    {
        id: 274,
        question: "np.clip([1,5,10], 2, 8) is",
        options: ["[1 5 10]", "[2 5 8]", "[2 5 10]", "[1 5 8]"],
        correctAnswer: "[2 5 8]",
        explanation: "The correct answer is [2 5 8]"
    },
    {
        id: 65,
        question: "np.array([100,200,300]) + 10 is",
        options: ["Error", "[10 10 10]", "[110 210 310]", "[100 200 300 10]"],
        correctAnswer: "[110 210 310]",
        explanation: "The correct answer is [110 210 310]"
    },
    {
        id: 141,
        question: "np.random.randint(1, 100, 5) generates numbers from",
        options: ["1 to 100", "0 to 99", "1 to 99", "2 to 100"],
        correctAnswer: "1 to 99",
        explanation: "The correct answer is 1 to 99"
    },
    {
        id: 24,
        question: "np.arange(0, 5) gives",
        options: ["[0 1 2 3 4]", "[0 1 2 3 4 5]", "[0 5]", "[1 2 3 4 5]"],
        correctAnswer: "[0 1 2 3 4]",
        explanation: "The correct answer is [0 1 2 3 4]"
    },
    {
        id: 28,
        question: "arange(start, stop, step) uses step as",
        options: ["Last value", "Gap between values", "Number of values", "First value"],
        correctAnswer: "Gap between values",
        explanation: "The correct answer is Gap between values"
    },
    {
        id: 284,
        question: "np.arange(6).reshape(2,3)[1,2] is",
        options: ["2", "3", "4", "5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 150,
        question: "np.random.shuffle(a) shuffles",
        options: ["Returns a new array and keeps a", "Only 2D", "In place", "Only strings"],
        correctAnswer: "In place",
        explanation: "The correct answer is In place"
    },
    {
        id: 252,
        question: "np.mean(a, axis=0) for [[2,4],[6,8]] is",
        options: ["[2. 8.]", "[3. 7.]", "[5.]", "[4. 6.]"],
        correctAnswer: "[4. 6.]",
        explanation: "The correct answer is [4. 6.]"
    },
    {
        id: 53,
        question: "np.max(np.array([10,20,30,40,50])) is",
        options: ["50", "10", "150", "30"],
        correctAnswer: "50",
        explanation: "The correct answer is 50"
    },
    {
        id: 7,
        question: "NumPy array operations are generally",
        options: ["Random", "Row-only", "Element-wise", "Column-only"],
        correctAnswer: "Element-wise",
        explanation: "The correct answer is Element-wise"
    },
    {
        id: 294,
        question: "np.arange(1, 6).mean() is",
        options: ["15", "2.5", "5", "3.0"],
        correctAnswer: "3.0",
        explanation: "The correct answer is 3.0"
    },
    {
        id: 146,
        question: "Without a seed, np.random.rand(3) gives",
        options: ["Zeros", "Errors", "Same values every time", "Different values across runs"],
        correctAnswer: "Different values across runs",
        explanation: "The correct answer is Different values across runs"
    },
    {
        id: 241,
        question: "Changing a slice view of a NumPy array",
        options: ["Can change the original array", "Raises error", "Never changes the original", "Deletes the original"],
        correctAnswer: "Can change the original array",
        explanation: "The correct answer is Can change the original array"
    },
    {
        id: 246,
        question: "np.insert([1,3], 1, 2) is",
        options: ["[1 2 3]", "[1 2]", "[1 3 2]", "[2 1 3]"],
        correctAnswer: "[1 2 3]",
        explanation: "The correct answer is [1 2 3]"
    },
    {
        id: 226,
        question: "np.full((2,2), 5).sum() is",
        options: ["25", "20", "10", "5"],
        correctAnswer: "20",
        explanation: "The correct answer is 20"
    },
    {
        id: 175,
        question: "np.savetxt('numbers.txt', a) saves",
        options: ["Nothing", "A binary .npy file", "A human-readable text file", "A CSV with header only"],
        correctAnswer: "A human-readable text file",
        explanation: "The correct answer is A human-readable text file"
    },
    {
        id: 27,
        question: "linspace() the endpoint is",
        options: ["Ignored", "Excluded by default", "Doubled", "Included by default"],
        correctAnswer: "Included by default",
        explanation: "The correct answer is Included by default"
    },
    {
        id: 130,
        question: "Matrix multiplication of 3x4 and 4x5 gives shape",
        options: ["(4, 4)", "(5, 3)", "(3, 4)", "(3, 5)"],
        correctAnswer: "(3, 5)",
        explanation: "The correct answer is (3, 5)"
    },
    {
        id: 245,
        question: "np.delete([1,2,3], 0) is",
        options: ["[1 3]", "[2 3]", "[3]", "[1 2]"],
        correctAnswer: "[2 3]",
        explanation: "The correct answer is [2 3]"
    },
    {
        id: 59,
        question: "np.std([2,2,2,2]) equals",
        options: ["4.0", "2.0", "1.0", "0.0"],
        correctAnswer: "0.0",
        explanation: "The correct answer is 0.0"
    },
    {
        id: 34,
        question: "a[-1] for np.array([10,20,30,40,50]) is",
        options: ["40", "10", "50", "Error"],
        correctAnswer: "50",
        explanation: "The correct answer is 50"
    },
    {
        id: 206,
        question: "np.isnan(np.nan) is",
        options: ["False", "0", "NaN", "True"],
        correctAnswer: "True",
        explanation: "The correct answer is True"
    },
    {
        id: 38,
        question: "a[0:6:2] for np.array([10,20,30,40,50,60]) is",
        options: ["[10 20 30]", "[10 30 50]", "[10 40]", "[20 40 60]"],
        correctAnswer: "[10 30 50]",
        explanation: "The correct answer is [10 30 50]"
    },
    {
        id: 296,
        question: "np.zeros((3,4)).shape is",
        options: ["(4, 3)", "(3, 4)", "(12,)", "(3,)"],
        correctAnswer: "(3, 4)",
        explanation: "The correct answer is (3, 4)"
    },
    {
        id: 78,
        question: "np.arange(12).reshape(3,-1) has shape",
        options: ["(4, 3)", "(3, 4)", "(3, 3)", "(12, 1)"],
        correctAnswer: "(3, 4)",
        explanation: "The correct answer is (3, 4)"
    },
    {
        id: 77,
        question: "reshape(-1) means",
        options: ["Delete elements", "Raise an error", "Reverse the array", "Flatten to 1D by inferring size"],
        correctAnswer: "Flatten to 1D by inferring size",
        explanation: "The correct answer is Flatten to 1D by inferring size"
    },
    {
        id: 289,
        question: "np.arange(6).reshape(2,3)[0,:] is",
        options: ["[3 4 5]", "[0 1 2]", "[0 3]", "[0 1]"],
        correctAnswer: "[0 1 2]",
        explanation: "The correct answer is [0 1 2]"
    },
    {
        id: 156,
        question: "Which creates 3 random floats?",
        options: ["np.random.one(3)", "np.random.float(3)", "np.random.rand[3]", "np.random.rand(3)"],
        correctAnswer: "np.random.rand(3)",
        explanation: "The correct answer is np.random.rand(3)"
    },
  ],
  set15: [
    {
        id: 44,
        question: "a[:, 0] for np.array([[1,2],[3,4]]) is",
        options: ["[1 2]", "[1 3]", "[2 4]", "[3 4]"],
        correctAnswer: "[1 3]",
        explanation: "The correct answer is [1 3]"
    },
    {
        id: 128,
        question: "Matrix multiplication of 2x3 and 3x2 gives shape",
        options: ["(2, 3)", "(2, 2)", "(3, 2)", "(3, 3)"],
        correctAnswer: "(2, 2)",
        explanation: "The correct answer is (2, 2)"
    },
    {
        id: 61,
        question: "np.sum(a, axis=1) for np.array([[10,20,30],[40,50,60]]) is",
        options: ["[50 70 90]", "[30 60]", "[210]", "[ 60 150]"],
        correctAnswer: "[ 60 150]",
        explanation: "The correct answer is [ 60 150]"
    },
    {
        id: 286,
        question: "np.arange(6).reshape(2,3).sum(axis=0) is",
        options: ["[0 3]", "[3 5 7]", "[15]", "[ 3 12]"],
        correctAnswer: "[3 5 7]",
        explanation: "The correct answer is [3 5 7]"
    },
    {
        id: 214,
        question: "Which is faster for numerical work on large data?",
        options: ["Dictionaries", "Strings", "Python lists with loops", "NumPy arrays"],
        correctAnswer: "NumPy arrays",
        explanation: "The correct answer is NumPy arrays"
    },
    {
        id: 116,
        question: "Solving x+y=5 and 2x+y=8 gives",
        options: ["x=2, y=3", "x=4, y=1", "x=3, y=2", "x=5, y=0"],
        correctAnswer: "x=3, y=2",
        explanation: "The correct answer is x=3, y=2"
    },
    {
        id: 268,
        question: "Sum divided by N equals",
        options: ["Std", "Variance", "Mean", "Median"],
        correctAnswer: "Mean",
        explanation: "The correct answer is Mean"
    },
    {
        id: 195,
        question: "np.var computes",
        options: ["Mean", "Median", "Variance", "Rank"],
        correctAnswer: "Variance",
        explanation: "The correct answer is Variance"
    },
    {
        id: 231,
        question: "np.arange(10)[2:5] is",
        options: ["[3 4 5]", "[2 3 4]", "[2 5]", "[2 3 4 5]"],
        correctAnswer: "[2 3 4]",
        explanation: "The correct answer is [2 3 4]"
    },
    {
        id: 227,
        question: "np.arange(5).sum() is",
        options: ["4", "10", "5", "15"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 153,
        question: "Random numbers produced by NumPy are called",
        options: ["True random", "Cryptographic only", "Pseudo-random", "Fixed"],
        correctAnswer: "Pseudo-random",
        explanation: "The correct answer is Pseudo-random"
    },
    {
        id: 220,
        question: "a.astype(int) on [1.7, 2.2] gives",
        options: ["[1.7 2.2]", "[2 3]", "[2 2]", "[1 2]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 157,
        question: "Which creates a 2x3 array of random floats?",
        options: ["np.random.rand(3,2,1)", "np.random.rand(2,3)", "np.random.random(6,1)", "np.random.rand([6])"],
        correctAnswer: "np.random.rand(2,3)",
        explanation: "The correct answer is np.random.rand(2,3)"
    },
    {
        id: 292,
        question: "np.ones_like(a) creates",
        options: ["Ones with the same shape as a", "A scalar", "Identity", "Zeros of same shape"],
        correctAnswer: "Ones with the same shape as a",
        explanation: "The correct answer is Ones with the same shape as a"
    },
    {
        id: 31,
        question: "np.eye(3) creates",
        options: ["3x3 matrix of ones", "3x3 identity matrix", "3x3 zeros", "3 random numbers"],
        correctAnswer: "3x3 identity matrix",
        explanation: "The correct answer is 3x3 identity matrix"
    },
    {
        id: 51,
        question: "np.mean(np.array([10,20,30,40,50])) is",
        options: ["50", "10", "150", "30.0"],
        correctAnswer: "30.0",
        explanation: "The correct answer is 30.0"
    },
    {
        id: 107,
        question: "2x2 determinant for [[a,b],[c,d]] is",
        options: ["ad − bc", "ac − bd", "ad + bc", "ab − cd"],
        correctAnswer: "ad − bc",
        explanation: "The correct answer is ad − bc"
    },
    {
        id: 109,
        question: "np.linalg.det([[2,0],[0,3]]) is",
        options: ["6.0", "1.0", "5.0", "0.0"],
        correctAnswer: "6.0",
        explanation: "The correct answer is 6.0"
    },
    {
        id: 136,
        question: "np.outer([1,2],[3,4]) gives",
        options: ["[11]", "[3 8]", "[[4 3] [8 6]]", "[[3 4] [6 8]]"],
        correctAnswer: "[[3 4] [6 8]]",
        explanation: "The correct answer is [[3 4] [6 8]]"
    },
    {
        id: 42,
        question: "a[0:2,:] for a 3x3 array returns",
        options: ["First two rows, all columns", "First two columns, all rows", "Last two rows", "First two elements"],
        correctAnswer: "First two rows, all columns",
        explanation: "The correct answer is First two rows, all columns"
    },
    {
        id: 81,
        question: "np.array([[1,2],[3,4]]).flatten() is",
        options: ["[1 3 2 4]", "[1 2 3 4]", "[4 3 2 1]", "[[1 2 3 4]]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 123,
        question: "Rank measures",
        options: ["Number of independent dimensions", "Sum of values", "Number of zeros", "Number of rows only"],
        correctAnswer: "Number of independent dimensions",
        explanation: "The correct answer is Number of independent dimensions"
    },
    {
        id: 89,
        question: "Transpose of [[1,2,3],[4,5,6]] is",
        options: ["[[3 2 1] [6 5 4]]", "[[1 2 3] [4 5 6]]", "[[6 5 4] [3 2 1]]", "[[1 4] [2 5] [3 6]]"],
        correctAnswer: "[[1 4] [2 5] [3 6]]",
        explanation: "The correct answer is [[1 4] [2 5] [3 6]]"
    },
    {
        id: 283,
        question: "np.floor_divide(7, 2) is",
        options: ["3", "3.5", "2", "4"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 39,
        question: "a[::-1] for np.array([10,20,30,40,50]) is",
        options: ["[50]", "[10 20 30 40 50]", "Error", "[50 40 30 20 10]"],
        correctAnswer: "[50 40 30 20 10]",
        explanation: "The correct answer is [50 40 30 20 10]"
    },
    {
        id: 2,
        question: "The main data structure of NumPy is",
        options: ["ndarray", "dict", "Series", "DataFrame"],
        correctAnswer: "ndarray",
        explanation: "The correct answer is ndarray"
    },
    {
        id: 210,
        question: "np.abs(-5) is",
        options: ["5", "25", "0", "-5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 241,
        question: "Changing a slice view of a NumPy array",
        options: ["Can change the original array", "Raises error", "Never changes the original", "Deletes the original"],
        correctAnswer: "Can change the original array",
        explanation: "The correct answer is Can change the original array"
    },
    {
        id: 150,
        question: "np.random.shuffle(a) shuffles",
        options: ["Returns a new array and keeps a", "Only 2D", "In place", "Only strings"],
        correctAnswer: "In place",
        explanation: "The correct answer is In place"
    },
    {
        id: 17,
        question: "np.array([[1,2,3],[4,5,6]]).ndim is",
        options: ["2", "1", "3", "6"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 119,
        question: "np.linalg.matrix_rank([[1,2],[2,4]]) is",
        options: ["2", "4", "0", "1"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 148,
        question: "np.random.randn(5) draws from",
        options: ["Poisson", "Standard normal distribution", "Binomial", "Uniform on [0,1)"],
        correctAnswer: "Standard normal distribution",
        explanation: "The correct answer is Standard normal distribution"
    },
    {
        id: 145,
        question: "Why use random.seed()?",
        options: ["To sort data", "To save arrays", "To get the same random sequence every run", "To speed up code"],
        correctAnswer: "To get the same random sequence every run",
        explanation: "The correct answer is To get the same random sequence every run"
    },
    {
        id: 233,
        question: "np.linspace(0, 1, 3) is",
        options: ["[0.3 0.6 1]", "[0. 0.5 1. ]", "[0 1 2]", "[0 0.25 0.5]"],
        correctAnswer: "[0. 0.5 1. ]",
        explanation: "The correct answer is [0. 0.5 1. ]"
    },
    {
        id: 37,
        question: "In slicing, stop is",
        options: ["Excluded", "Doubled", "Optional always error", "Included"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 120,
        question: "np.linalg.eig returns",
        options: ["Only rank", "Eigenvalues and eigenvectors", "Only inverse", "Only determinant"],
        correctAnswer: "Eigenvalues and eigenvectors",
        explanation: "The correct answer is Eigenvalues and eigenvectors"
    },
    {
        id: 102,
        question: "Matrix multiplication formula is",
        options: ["C_ij = Σ A_ik B_kj", "C_ij = A_ji", "C_ij = A_ij × B_ij", "C_ij = A_ij + B_ij"],
        correctAnswer: "C_ij = Σ A_ik B_kj",
        explanation: "The correct answer is C_ij = Σ A_ik B_kj"
    },
    {
        id: 218,
        question: "np.array(['a','b']).dtype kind is",
        options: ["Boolean", "String (Unicode)", "Float", "Integer"],
        correctAnswer: "String (Unicode)",
        explanation: "The correct answer is String (Unicode)"
    },
    {
        id: 59,
        question: "np.std([2,2,2,2]) equals",
        options: ["4.0", "2.0", "1.0", "0.0"],
        correctAnswer: "0.0",
        explanation: "The correct answer is 0.0"
    },
    {
        id: 279,
        question: "np.power(2, 3) is",
        options: ["8", "5", "9", "6"],
        correctAnswer: "8",
        explanation: "The correct answer is 8"
    },
    {
        id: 77,
        question: "reshape(-1) means",
        options: ["Delete elements", "Raise an error", "Reverse the array", "Flatten to 1D by inferring size"],
        correctAnswer: "Flatten to 1D by inferring size",
        explanation: "The correct answer is Flatten to 1D by inferring size"
    },
    {
        id: 137,
        question: "np.linalg.norm([3,4]) is",
        options: ["5.0", "25.0", "7.0", "1.0"],
        correctAnswer: "5.0",
        explanation: "The correct answer is 5.0"
    },
    {
        id: 73,
        question: "A reshape is valid only if",
        options: ["Rows equal columns", "Array is sorted", "Total elements remain the same", "Array is 1D"],
        correctAnswer: "Total elements remain the same",
        explanation: "The correct answer is Total elements remain the same"
    },
    {
        id: 85,
        question: "np.hstack((np.array([1,2,3]), np.array([4,5,6]))) gives",
        options: ["Error", "[[1 2 3] [4 5 6]]", "[5 7 9]", "[1 2 3 4 5 6]"],
        correctAnswer: "[1 2 3 4 5 6]",
        explanation: "The correct answer is [1 2 3 4 5 6]"
    },
    {
        id: 158,
        question: "np.random.random_sample() returns floats in",
        options: ["[0, 1)", "(-inf, inf)", "[1, 2]", "[0, 10)"],
        correctAnswer: "[0, 1)",
        explanation: "The correct answer is [0, 1)"
    },
    {
        id: 225,
        question: "np.ones((2,2)) sum is",
        options: ["1.0", "2.0", "0.0", "4.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 64,
        question: "Broadcasting allows NumPy to",
        options: ["Delete arrays", "Combine compatible shapes", "Save arrays", "Sort arrays"],
        correctAnswer: "Combine compatible shapes",
        explanation: "The correct answer is Combine compatible shapes"
    },
    {
        id: 240,
        question: "flatten() returns a",
        options: ["View always", "List of lists", "Scalar", "Copy"],
        correctAnswer: "Copy",
        explanation: "The correct answer is Copy"
    },
    {
        id: 156,
        question: "Which creates 3 random floats?",
        options: ["np.random.one(3)", "np.random.float(3)", "np.random.rand[3]", "np.random.rand(3)"],
        correctAnswer: "np.random.rand(3)",
        explanation: "The correct answer is np.random.rand(3)"
    },
    {
        id: 207,
        question: "np.round(2.567, 2) is",
        options: ["2.6", "3", "2.56", "2.57"],
        correctAnswer: "2.57",
        explanation: "The correct answer is 2.57"
    },
  ],
  set16: [
    {
        id: 140,
        question: "np.random.rand(5) returns",
        options: ["A 5x5 matrix", "5 random floats", "5 random integers", "One float"],
        correctAnswer: "5 random floats",
        explanation: "The correct answer is 5 random floats"
    },
    {
        id: 257,
        question: "np.matmul is equivalent to",
        options: ["np.add", "The * operator", "np.sort", "The @ operator"],
        correctAnswer: "The @ operator",
        explanation: "The correct answer is The @ operator"
    },
    {
        id: 277,
        question: "np.minimum([1,5],[3,2]) is",
        options: ["[3 5]", "[1]", "[1 2]", "[5 3]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 253,
        question: "np.mean(a, axis=1) for [[2,4],[6,8]] is",
        options: ["[2. 6.]", "[5.]", "[4. 6.]", "[3. 7.]"],
        correctAnswer: "[3. 7.]",
        explanation: "The correct answer is [3. 7.]"
    },
    {
        id: 225,
        question: "np.ones((2,2)) sum is",
        options: ["1.0", "2.0", "0.0", "4.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 42,
        question: "a[0:2,:] for a 3x3 array returns",
        options: ["First two rows, all columns", "First two columns, all rows", "Last two rows", "First two elements"],
        correctAnswer: "First two rows, all columns",
        explanation: "The correct answer is First two rows, all columns"
    },
    {
        id: 21,
        question: "np.ones((2,3)) creates",
        options: ["A 2x3 array of zeros", "A 3x2 array of ones", "A 2x3 array of 1.0", "An empty array"],
        correctAnswer: "A 2x3 array of 1.0",
        explanation: "The correct answer is A 2x3 array of 1.0"
    },
    {
        id: 222,
        question: "Converting a Python list to an array uses",
        options: ["np.array()", "np.list()", "np.convert()", "np.make()"],
        correctAnswer: "np.array()",
        explanation: "The correct answer is np.array()"
    },
    {
        id: 166,
        question: "np.unique([10,20,10,30,20,40]) is",
        options: ["[10 10 20 20]", "[40 30 20 10]", "[10 20 10 30 20 40]", "[10 20 30 40]"],
        correctAnswer: "[10 20 30 40]",
        explanation: "The correct answer is [10 20 30 40]"
    },
    {
        id: 129,
        question: "Matrix multiplication of 2x3 and 2x3 is",
        options: ["Invalid (inner dimensions mismatch)", "2x3", "2x2", "3x3"],
        correctAnswer: "Invalid (inner dimensions mismatch)",
        explanation: "The correct answer is Invalid (inner dimensions mismatch)"
    },
    {
        id: 14,
        question: "Which attribute gives total number of elements?",
        options: ["len_all", "ndim", "shape", "size"],
        correctAnswer: "size",
        explanation: "The correct answer is size"
    },
    {
        id: 47,
        question: "a[-1,-1] for np.array([[1,2],[3,4]]) is",
        options: ["2", "3", "4", "1"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 118,
        question: "np.linalg.matrix_rank([[2,0],[0,3]]) is",
        options: ["2", "3", "1", "0"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 295,
        question: "np.arange(1, 6).max() - np.arange(1, 6).min() is",
        options: ["5", "4", "6", "1"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 11,
        question: "np.array([70,80,90,60]).mean() gives",
        options: ["300", "75.0", "70.0", "80.0"],
        correctAnswer: "75.0",
        explanation: "The correct answer is 75.0"
    },
    {
        id: 138,
        question: "np.cross([1,0,0],[0,1,0]) is",
        options: ["[1 1 0]", "[1 0 0]", "[0 0 1]", "[0 0 0]"],
        correctAnswer: "[0 0 1]",
        explanation: "The correct answer is [0 0 1]"
    },
    {
        id: 296,
        question: "np.zeros((3,4)).shape is",
        options: ["(4, 3)", "(3, 4)", "(12,)", "(3,)"],
        correctAnswer: "(3, 4)",
        explanation: "The correct answer is (3, 4)"
    },
    {
        id: 90,
        question: "Which function joins arrays along an existing axis?",
        options: ["np.join_axis", "np.merge", "np.concatenate", "np.glue"],
        correctAnswer: "np.concatenate",
        explanation: "The correct answer is np.concatenate"
    },
    {
        id: 241,
        question: "Changing a slice view of a NumPy array",
        options: ["Can change the original array", "Raises error", "Never changes the original", "Deletes the original"],
        correctAnswer: "Can change the original array",
        explanation: "The correct answer is Can change the original array"
    },
    {
        id: 266,
        question: "Std of [10,20,30,40,50] is the square root of",
        options: ["200", "100", "50", "150"],
        correctAnswer: "200",
        explanation: "The correct answer is 200"
    },
    {
        id: 227,
        question: "np.arange(5).sum() is",
        options: ["4", "10", "5", "15"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 143,
        question: "np.random.randint(1, 10, size=(3,3)) returns",
        options: ["A 9x9 matrix", "A 3x3 matrix of integers 1 to 9", "A 1D array", "A 3x3 matrix of floats"],
        correctAnswer: "A 3x3 matrix of integers 1 to 9",
        explanation: "The correct answer is A 3x3 matrix of integers 1 to 9"
    },
    {
        id: 93,
        question: "Which method adds a new axis?",
        options: ["np.newaxis", "np.expand_all", "np.addaxis", "np.dimplus"],
        correctAnswer: "np.newaxis",
        explanation: "The correct answer is np.newaxis"
    },
    {
        id: 224,
        question: "np.zeros(3) gives",
        options: ["[1. 1. 1.]", "[0]", "[0 0 0]", "[0. 0. 0.]"],
        correctAnswer: "[0. 0. 0.]",
        explanation: "The correct answer is [0. 0. 0.]"
    },
    {
        id: 252,
        question: "np.mean(a, axis=0) for [[2,4],[6,8]] is",
        options: ["[2. 8.]", "[3. 7.]", "[5.]", "[4. 6.]"],
        correctAnswer: "[4. 6.]",
        explanation: "The correct answer is [4. 6.]"
    },
    {
        id: 179,
        question: "Data handling in NumPy includes",
        options: ["Only plotting", "Only web design", "Sorting, unique values, save and load", "Only SQL joins"],
        correctAnswer: "Sorting, unique values, save and load",
        explanation: "The correct answer is Sorting, unique values, save and load"
    },
    {
        id: 210,
        question: "np.abs(-5) is",
        options: ["5", "25", "0", "-5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 171,
        question: "np.load('numbers.npy') does",
        options: ["Sorts array", "Loads an array from file", "Saves array", "Prints file name"],
        correctAnswer: "Loads an array from file",
        explanation: "The correct answer is Loads an array from file"
    },
    {
        id: 165,
        question: "To sort in descending order, we sort then",
        options: ["Reverse using [::-1]", "Use np.big", "Add minus", "Transpose"],
        correctAnswer: "Reverse using [::-1]",
        explanation: "The correct answer is Reverse using [::-1]"
    },
    {
        id: 54,
        question: "np.std(np.array([10,20,30,40,50])) is approximately",
        options: ["20.0", "14.14", "10.0", "7.07"],
        correctAnswer: "14.14",
        explanation: "The correct answer is 14.14"
    },
    {
        id: 83,
        question: "np.hstack stacks arrays",
        options: ["One above another", "Diagonally", "Horizontally (side by side)", "Randomly"],
        correctAnswer: "Horizontally (side by side)",
        explanation: "The correct answer is Horizontally (side by side)"
    },
    {
        id: 169,
        question: "np.unique([10,20,10,30,20,10], return_counts=True) counts are",
        options: ["[6]", "[3 2 1]", "[1 2 3]", "[10 20 30]"],
        correctAnswer: "[3 2 1]",
        explanation: "The correct answer is [3 2 1]"
    },
    {
        id: 211,
        question: "np.exp(0) is",
        options: ["1.0", "0.0", "Error", "2.718"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 254,
        question: "np.sum([[1,2],[3,4]]) is",
        options: ["3", "10", "7", "4"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 148,
        question: "np.random.randn(5) draws from",
        options: ["Poisson", "Standard normal distribution", "Binomial", "Uniform on [0,1)"],
        correctAnswer: "Standard normal distribution",
        explanation: "The correct answer is Standard normal distribution"
    },
    {
        id: 206,
        question: "np.isnan(np.nan) is",
        options: ["False", "0", "NaN", "True"],
        correctAnswer: "True",
        explanation: "The correct answer is True"
    },
    {
        id: 282,
        question: "np.reciprocal([2.0, 4.0]) is",
        options: ["[-2 -4]", "[0.2 0.4]", "[2 4]", "[0.5 0.25]"],
        correctAnswer: "[0.5 0.25]",
        explanation: "The correct answer is [0.5 0.25]"
    },
    {
        id: 19,
        question: "np.array([10,20,30,40,50]).ndim is",
        options: ["0", "5", "1", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 233,
        question: "np.linspace(0, 1, 3) is",
        options: ["[0.3 0.6 1]", "[0. 0.5 1. ]", "[0 1 2]", "[0 0.25 0.5]"],
        correctAnswer: "[0. 0.5 1. ]",
        explanation: "The correct answer is [0. 0.5 1. ]"
    },
    {
        id: 46,
        question: "a[1,1] for np.array([[1,2],[3,4]]) is",
        options: ["1", "3", "4", "2"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 162,
        question: "np.sort returns",
        options: ["A sorted copy", "A list of tuples", "Sorts in place only", "The index only"],
        correctAnswer: "A sorted copy",
        explanation: "The correct answer is A sorted copy"
    },
    {
        id: 130,
        question: "Matrix multiplication of 3x4 and 4x5 gives shape",
        options: ["(4, 4)", "(5, 3)", "(3, 4)", "(3, 5)"],
        correctAnswer: "(3, 5)",
        explanation: "The correct answer is (3, 5)"
    },
    {
        id: 60,
        question: "np.sum(a, axis=0) for np.array([[10,20,30],[40,50,60]]) is",
        options: ["[60 150]", "[210]", "[10 40]", "[50 70 90]"],
        correctAnswer: "[50 70 90]",
        explanation: "The correct answer is [50 70 90]"
    },
    {
        id: 207,
        question: "np.round(2.567, 2) is",
        options: ["2.6", "3", "2.56", "2.57"],
        correctAnswer: "2.57",
        explanation: "The correct answer is 2.57"
    },
    {
        id: 264,
        question: "Broadcasting makes code",
        options: ["Longer", "Unusable", "Shorter without explicit loops", "Sequential only"],
        correctAnswer: "Shorter without explicit loops",
        explanation: "The correct answer is Shorter without explicit loops"
    },
    {
        id: 1,
        question: "NumPy stands for",
        options: ["New Python", "Numeric Print", "Number Pyramid", "Numerical Python"],
        correctAnswer: "Numerical Python",
        explanation: "The correct answer is Numerical Python"
    },
    {
        id: 278,
        question: "np.mod(7, 3) is",
        options: ["0", "3", "1", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 237,
        question: "A view shares memory with the original; a copy",
        options: ["Shares memory", "Has its own memory", "Is not an array", "Is always slower to create"],
        correctAnswer: "Has its own memory",
        explanation: "The correct answer is Has its own memory"
    },
    {
        id: 212,
        question: "np.log(1) is",
        options: ["Undefined", "-1.0", "0.0", "1.0"],
        correctAnswer: "0.0",
        explanation: "The correct answer is 0.0"
    },
    {
        id: 28,
        question: "arange(start, stop, step) uses step as",
        options: ["Last value", "Gap between values", "Number of values", "First value"],
        correctAnswer: "Gap between values",
        explanation: "The correct answer is Gap between values"
    },
  ],
  set17: [
    {
        id: 97,
        question: "A + B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[6 8] [10 12]]", "[[5 12] [21 32]]", "[[1 2 5 6] [3 4 7 8]]", "[[19 22] [43 50]]"],
        correctAnswer: "[[6 8] [10 12]]",
        explanation: "The correct answer is [[6 8] [10 12]]"
    },
    {
        id: 266,
        question: "Std of [10,20,30,40,50] is the square root of",
        options: ["200", "100", "50", "150"],
        correctAnswer: "200",
        explanation: "The correct answer is 200"
    },
    {
        id: 186,
        question: "For the sales data, sales + 500 on first element gives",
        options: ["2000", "1700", "1500", "1200"],
        correctAnswer: "1700",
        explanation: "The correct answer is 1700"
    },
    {
        id: 256,
        question: "Which is a correct statement about * and @ for matrices?",
        options: ["Both are the same", "* is matrix multiplication, @ is element-wise", "Both are invalid", "* is element-wise, @ is matrix multiplication"],
        correctAnswer: "* is element-wise, @ is matrix multiplication",
        explanation: "The correct answer is * is element-wise, @ is matrix multiplication"
    },
    {
        id: 227,
        question: "np.arange(5).sum() is",
        options: ["4", "10", "5", "15"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 27,
        question: "linspace() the endpoint is",
        options: ["Ignored", "Excluded by default", "Doubled", "Included by default"],
        correctAnswer: "Included by default",
        explanation: "The correct answer is Included by default"
    },
    {
        id: 105,
        question: "np.dot([2,3],[4,5]) is",
        options: ["10", "22", "45", "23"],
        correctAnswer: "23",
        explanation: "The correct answer is 23"
    },
    {
        id: 137,
        question: "np.linalg.norm([3,4]) is",
        options: ["5.0", "25.0", "7.0", "1.0"],
        correctAnswer: "5.0",
        explanation: "The correct answer is 5.0"
    },
    {
        id: 282,
        question: "np.reciprocal([2.0, 4.0]) is",
        options: ["[-2 -4]", "[0.2 0.4]", "[2 4]", "[0.5 0.25]"],
        correctAnswer: "[0.5 0.25]",
        explanation: "The correct answer is [0.5 0.25]"
    },
    {
        id: 68,
        question: "np.array([1,2,3]) ** 2 is",
        options: ["[3 6 9]", "[2 4 6]", "[1 4 9]", "[1 2 3]"],
        correctAnswer: "[1 4 9]",
        explanation: "The correct answer is [1 4 9]"
    },
    {
        id: 148,
        question: "np.random.randn(5) draws from",
        options: ["Poisson", "Standard normal distribution", "Binomial", "Uniform on [0,1)"],
        correctAnswer: "Standard normal distribution",
        explanation: "The correct answer is Standard normal distribution"
    },
    {
        id: 225,
        question: "np.ones((2,2)) sum is",
        options: ["1.0", "2.0", "0.0", "4.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 249,
        question: "np.ravel flattens to",
        options: ["1D", "3D", "2D", "Scalar"],
        correctAnswer: "1D",
        explanation: "The correct answer is 1D"
    },
    {
        id: 63,
        question: "axis=1 gives",
        options: ["Column-wise results", "Row-wise results", "Whole array", "Diagonal"],
        correctAnswer: "Row-wise results",
        explanation: "The correct answer is Row-wise results"
    },
    {
        id: 15,
        question: "Which attribute gives the data type?",
        options: ["itemtype", "kind", "type_of", "dtype"],
        correctAnswer: "dtype",
        explanation: "The correct answer is dtype"
    },
    {
        id: 123,
        question: "Rank measures",
        options: ["Number of independent dimensions", "Sum of values", "Number of zeros", "Number of rows only"],
        correctAnswer: "Number of independent dimensions",
        explanation: "The correct answer is Number of independent dimensions"
    },
    {
        id: 82,
        question: "np.vstack stacks arrays",
        options: ["Diagonally", "Randomly", "Side by side", "Vertically (one above another)"],
        correctAnswer: "Vertically (one above another)",
        explanation: "The correct answer is Vertically (one above another)"
    },
    {
        id: 160,
        question: "np.random.normal(0, 1, 5) returns",
        options: ["5 ones", "5 values from a normal distribution", "5 zeros", "5 integers"],
        correctAnswer: "5 values from a normal distribution",
        explanation: "The correct answer is 5 values from a normal distribution"
    },
    {
        id: 283,
        question: "np.floor_divide(7, 2) is",
        options: ["3", "3.5", "2", "4"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 8,
        question: "Output of [10,20,30] + [1,2,3] for Python lists is",
        options: ["[10, 20, 30, 1, 2, 3]", "[33]", "[11, 22, 33]", "Error"],
        correctAnswer: "[10, 20, 30, 1, 2, 3]",
        explanation: "The correct answer is [10, 20, 30, 1, 2, 3]"
    },
    {
        id: 209,
        question: "np.ceil(2.1) is",
        options: ["3.0", "2.1", "2", "2.0"],
        correctAnswer: "3.0",
        explanation: "The correct answer is 3.0"
    },
    {
        id: 48,
        question: "Negative index -1 refers to",
        options: ["Second element", "Last element", "First element", "Invalid index"],
        correctAnswer: "Last element",
        explanation: "The correct answer is Last element"
    },
    {
        id: 116,
        question: "Solving x+y=5 and 2x+y=8 gives",
        options: ["x=2, y=3", "x=4, y=1", "x=3, y=2", "x=5, y=0"],
        correctAnswer: "x=3, y=2",
        explanation: "The correct answer is x=3, y=2"
    },
    {
        id: 59,
        question: "np.std([2,2,2,2]) equals",
        options: ["4.0", "2.0", "1.0", "0.0"],
        correctAnswer: "0.0",
        explanation: "The correct answer is 0.0"
    },
    {
        id: 237,
        question: "A view shares memory with the original; a copy",
        options: ["Shares memory", "Has its own memory", "Is not an array", "Is always slower to create"],
        correctAnswer: "Has its own memory",
        explanation: "The correct answer is Has its own memory"
    },
    {
        id: 61,
        question: "np.sum(a, axis=1) for np.array([[10,20,30],[40,50,60]]) is",
        options: ["[50 70 90]", "[30 60]", "[210]", "[ 60 150]"],
        correctAnswer: "[ 60 150]",
        explanation: "The correct answer is [ 60 150]"
    },
    {
        id: 79,
        question: "np.arange(12).reshape(-1,2) has shape",
        options: ["(2, 2)", "(2, 6)", "(12,)", "(6, 2)"],
        correctAnswer: "(6, 2)",
        explanation: "The correct answer is (6, 2)"
    },
    {
        id: 150,
        question: "np.random.shuffle(a) shuffles",
        options: ["Returns a new array and keeps a", "Only 2D", "In place", "Only strings"],
        correctAnswer: "In place",
        explanation: "The correct answer is In place"
    },
    {
        id: 261,
        question: "Shapes (2,3) and (2,) are broadcast-compatible?",
        options: ["No", "Only if sorted", "Only if 1D", "Yes"],
        correctAnswer: "No",
        explanation: "The correct answer is No"
    },
    {
        id: 140,
        question: "np.random.rand(5) returns",
        options: ["A 5x5 matrix", "5 random floats", "5 random integers", "One float"],
        correctAnswer: "5 random floats",
        explanation: "The correct answer is 5 random floats"
    },
    {
        id: 213,
        question: "np.pi is approximately",
        options: ["1.61803", "1.41421", "3.14159", "2.71828"],
        correctAnswer: "3.14159",
        explanation: "The correct answer is 3.14159"
    },
    {
        id: 248,
        question: "np.tile([1,2], 2) is",
        options: ["[1 1 2 2]", "[1 2 1 2]", "[1 2]", "[2 1 2 1]"],
        correctAnswer: "[1 2 1 2]",
        explanation: "The correct answer is [1 2 1 2]"
    },
    {
        id: 242,
        question: "np.array_equal([1,2],[1,2]) is",
        options: ["None", "False", "True", "Error"],
        correctAnswer: "True",
        explanation: "The correct answer is True"
    },
    {
        id: 125,
        question: "Which module provides linear algebra in NumPy?",
        options: ["np.linalg", "np.mat_tools", "np.algebra", "np.linear"],
        correctAnswer: "np.linalg",
        explanation: "The correct answer is np.linalg"
    },
    {
        id: 234,
        question: "np.linspace(1, 5, 5) is",
        options: ["[1. 2. 3. 4. 5.]", "[1 5]", "[1 2 3 4]", "[0. 1. 2. 3. 4.]"],
        correctAnswer: "[1. 2. 3. 4. 5.]",
        explanation: "The correct answer is [1. 2. 3. 4. 5.]"
    },
    {
        id: 75,
        question: "np.arange(1,7).reshape(3,2) gives",
        options: ["[[1 2] [3 4] [5 6]]", "[[1 2 3] [4 5 6]]", "[[1 3 5] [2 4 6]]", "Error"],
        correctAnswer: "[[1 2] [3 4] [5 6]]",
        explanation: "The correct answer is [[1 2] [3 4] [5 6]]"
    },
    {
        id: 197,
        question: "np.cumsum([1,2,3]) is",
        options: ["[1 2 3]", "[6]", "[1 3 6]", "[3 2 1]"],
        correctAnswer: "[1 3 6]",
        explanation: "The correct answer is [1 3 6]"
    },
    {
        id: 98,
        question: "A * B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]", "[[26 30] [26 30]]"],
        correctAnswer: "[[5 12] [21 32]]",
        explanation: "The correct answer is [[5 12] [21 32]]"
    },
    {
        id: 70,
        question: "np.array([2,4,6]) / 2 is",
        options: ["[1. 2. 3.]", "[4 8 12]", "[1 2 3 4]", "[0.5 1 1.5]"],
        correctAnswer: "[1. 2. 3.]",
        explanation: "The correct answer is [1. 2. 3.]"
    },
    {
        id: 36,
        question: "Slice syntax is",
        options: ["array{start:stop}", "array[start:stop:step]", "array(start,stop,step)", "array<start,stop>"],
        correctAnswer: "array[start:stop:step]",
        explanation: "The correct answer is array[start:stop:step]"
    },
    {
        id: 142,
        question: "In randint(low, high), the high value is",
        options: ["Excluded", "Ignored", "Included", "Doubled"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 175,
        question: "np.savetxt('numbers.txt', a) saves",
        options: ["Nothing", "A binary .npy file", "A human-readable text file", "A CSV with header only"],
        correctAnswer: "A human-readable text file",
        explanation: "The correct answer is A human-readable text file"
    },
    {
        id: 260,
        question: "Shapes (2,3) and (3,) are broadcast-compatible?",
        options: ["Yes", "Only for addition", "Only for @", "No"],
        correctAnswer: "Yes",
        explanation: "The correct answer is Yes"
    },
    {
        id: 2,
        question: "The main data structure of NumPy is",
        options: ["ndarray", "dict", "Series", "DataFrame"],
        correctAnswer: "ndarray",
        explanation: "The correct answer is ndarray"
    },
    {
        id: 145,
        question: "Why use random.seed()?",
        options: ["To sort data", "To save arrays", "To get the same random sequence every run", "To speed up code"],
        correctAnswer: "To get the same random sequence every run",
        explanation: "The correct answer is To get the same random sequence every run"
    },
    {
        id: 153,
        question: "Random numbers produced by NumPy are called",
        options: ["True random", "Cryptographic only", "Pseudo-random", "Fixed"],
        correctAnswer: "Pseudo-random",
        explanation: "The correct answer is Pseudo-random"
    },
    {
        id: 297,
        question: "np.ones((4,2)).size is",
        options: ["2", "4", "8", "6"],
        correctAnswer: "8",
        explanation: "The correct answer is 8"
    },
    {
        id: 251,
        question: "np.max(a, axis=1) for [[1,5],[7,2]] is",
        options: ["[7 5]", "[1 2]", "[7]", "[5 7]"],
        correctAnswer: "[5 7]",
        explanation: "The correct answer is [5 7]"
    },
    {
        id: 77,
        question: "reshape(-1) means",
        options: ["Delete elements", "Raise an error", "Reverse the array", "Flatten to 1D by inferring size"],
        correctAnswer: "Flatten to 1D by inferring size",
        explanation: "The correct answer is Flatten to 1D by inferring size"
    },
    {
        id: 229,
        question: "np.arange(10)[-3:] is",
        options: ["[9 8 7]", "[3 4 5]", "[7 8 9]", "[0 1 2]"],
        correctAnswer: "[7 8 9]",
        explanation: "The correct answer is [7 8 9]"
    },
  ],
  set18: [
    {
        id: 276,
        question: "np.maximum([1,5],[3,2]) is",
        options: ["[5]", "[1 2]", "[3 2]", "[3 5]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 248,
        question: "np.tile([1,2], 2) is",
        options: ["[1 1 2 2]", "[1 2 1 2]", "[1 2]", "[2 1 2 1]"],
        correctAnswer: "[1 2 1 2]",
        explanation: "The correct answer is [1 2 1 2]"
    },
    {
        id: 177,
        question: "Which preserves the array efficiently in binary?",
        options: [".png", ".txt", ".npy", ".docx"],
        correctAnswer: ".npy",
        explanation: "The correct answer is .npy"
    },
    {
        id: 171,
        question: "np.load('numbers.npy') does",
        options: ["Sorts array", "Loads an array from file", "Saves array", "Prints file name"],
        correctAnswer: "Loads an array from file",
        explanation: "The correct answer is Loads an array from file"
    },
    {
        id: 283,
        question: "np.floor_divide(7, 2) is",
        options: ["3", "3.5", "2", "4"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 279,
        question: "np.power(2, 3) is",
        options: ["8", "5", "9", "6"],
        correctAnswer: "8",
        explanation: "The correct answer is 8"
    },
    {
        id: 194,
        question: "For the sales data, adding bonus 500 uses",
        options: ["Concatenation", "Broadcasting", "Looping only", "Transpose"],
        correctAnswer: "Broadcasting",
        explanation: "The correct answer is Broadcasting"
    },
    {
        id: 234,
        question: "np.linspace(1, 5, 5) is",
        options: ["[1. 2. 3. 4. 5.]", "[1 5]", "[1 2 3 4]", "[0. 1. 2. 3. 4.]"],
        correctAnswer: "[1. 2. 3. 4. 5.]",
        explanation: "The correct answer is [1. 2. 3. 4. 5.]"
    },
    {
        id: 165,
        question: "To sort in descending order, we sort then",
        options: ["Reverse using [::-1]", "Use np.big", "Add minus", "Transpose"],
        correctAnswer: "Reverse using [::-1]",
        explanation: "The correct answer is Reverse using [::-1]"
    },
    {
        id: 97,
        question: "A + B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[6 8] [10 12]]", "[[5 12] [21 32]]", "[[1 2 5 6] [3 4 7 8]]", "[[19 22] [43 50]]"],
        correctAnswer: "[[6 8] [10 12]]",
        explanation: "The correct answer is [[6 8] [10 12]]"
    },
    {
        id: 123,
        question: "Rank measures",
        options: ["Number of independent dimensions", "Sum of values", "Number of zeros", "Number of rows only"],
        correctAnswer: "Number of independent dimensions",
        explanation: "The correct answer is Number of independent dimensions"
    },
    {
        id: 293,
        question: "Which is the best one-line definition of NumPy?",
        options: ["A plotting tool", "A database engine", "Python library for numerical computing built around the ndarray", "A web framework"],
        correctAnswer: "Python library for numerical computing built around the ndarray",
        explanation: "The correct answer is Python library for numerical computing built around the ndarray"
    },
    {
        id: 197,
        question: "np.cumsum([1,2,3]) is",
        options: ["[1 2 3]", "[6]", "[1 3 6]", "[3 2 1]"],
        correctAnswer: "[1 3 6]",
        explanation: "The correct answer is [1 3 6]"
    },
    {
        id: 120,
        question: "np.linalg.eig returns",
        options: ["Only rank", "Eigenvalues and eigenvectors", "Only inverse", "Only determinant"],
        correctAnswer: "Eigenvalues and eigenvectors",
        explanation: "The correct answer is Eigenvalues and eigenvectors"
    },
    {
        id: 211,
        question: "np.exp(0) is",
        options: ["1.0", "0.0", "Error", "2.718"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 23,
        question: "np.arange(1, 11, 2) gives",
        options: ["[1 3 5 7 9]", "[1 3 5 7 9 11]", "[1 2 3 4 5]", "[2 4 6 8 10]"],
        correctAnswer: "[1 3 5 7 9]",
        explanation: "The correct answer is [1 3 5 7 9]"
    },
    {
        id: 163,
        question: "np.sort(np.array([50,10,40,20,30])) is",
        options: ["[50 40 30 20 10]", "[10 50 20 40 30]", "[10 20 30 40 50]", "[30 20 10 40 50]"],
        correctAnswer: "[10 20 30 40 50]",
        explanation: "The correct answer is [10 20 30 40 50]"
    },
    {
        id: 243,
        question: "np.concatenate(([1,2],[3,4])) is",
        options: ["[1 2 3 4]", "[4 6]", "[[1 2] [3 4]]", "[1 2]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 196,
        question: "np.median([1,3,5,7]) is",
        options: ["4.0", "5.0", "3.0", "16"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 198,
        question: "np.prod([1,2,3,4]) is",
        options: ["24", "10", "4", "12"],
        correctAnswer: "24",
        explanation: "The correct answer is 24"
    },
    {
        id: 78,
        question: "np.arange(12).reshape(3,-1) has shape",
        options: ["(4, 3)", "(3, 4)", "(3, 3)", "(12, 1)"],
        correctAnswer: "(3, 4)",
        explanation: "The correct answer is (3, 4)"
    },
    {
        id: 254,
        question: "np.sum([[1,2],[3,4]]) is",
        options: ["3", "10", "7", "4"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 19,
        question: "np.array([10,20,30,40,50]).ndim is",
        options: ["0", "5", "1", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 65,
        question: "np.array([100,200,300]) + 10 is",
        options: ["Error", "[10 10 10]", "[110 210 310]", "[100 200 300 10]"],
        correctAnswer: "[110 210 310]",
        explanation: "The correct answer is [110 210 310]"
    },
    {
        id: 258,
        question: "np.dot for 2D arrays performs",
        options: ["Element-wise addition", "Sorting", "Transpose", "Matrix multiplication"],
        correctAnswer: "Matrix multiplication",
        explanation: "The correct answer is Matrix multiplication"
    },
    {
        id: 170,
        question: "np.save('numbers.npy', a) does",
        options: ["Saves array to .npy file", "Deletes array", "Prints array", "Loads array"],
        correctAnswer: "Saves array to .npy file",
        explanation: "The correct answer is Saves array to .npy file"
    },
    {
        id: 52,
        question: "np.min(np.array([10,20,30,40,50])) is",
        options: ["30", "50", "0", "10"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 226,
        question: "np.full((2,2), 5).sum() is",
        options: ["25", "20", "10", "5"],
        correctAnswer: "20",
        explanation: "The correct answer is 20"
    },
    {
        id: 270,
        question: "Which module generates random numbers?",
        options: ["np.chance", "np.random", "np.dice", "np.rand_module"],
        correctAnswer: "np.random",
        explanation: "The correct answer is np.random"
    },
    {
        id: 8,
        question: "Output of [10,20,30] + [1,2,3] for Python lists is",
        options: ["[10, 20, 30, 1, 2, 3]", "[33]", "[11, 22, 33]", "Error"],
        correctAnswer: "[10, 20, 30, 1, 2, 3]",
        explanation: "The correct answer is [10, 20, 30, 1, 2, 3]"
    },
    {
        id: 74,
        question: "np.arange(1,7).reshape(2,3) gives",
        options: ["Error", "[1 2 3 4 5 6]", "[[1 2 3] [4 5 6]]", "[[1 2] [3 4] [5 6]]"],
        correctAnswer: "[[1 2 3] [4 5 6]]",
        explanation: "The correct answer is [[1 2 3] [4 5 6]]"
    },
    {
        id: 210,
        question: "np.abs(-5) is",
        options: ["5", "25", "0", "-5"],
        correctAnswer: "5",
        explanation: "The correct answer is 5"
    },
    {
        id: 80,
        question: "flatten() returns",
        options: ["A 1D copy", "A list of shapes", "A scalar", "A 2D view"],
        correctAnswer: "A 1D copy",
        explanation: "The correct answer is A 1D copy"
    },
    {
        id: 39,
        question: "a[::-1] for np.array([10,20,30,40,50]) is",
        options: ["[50]", "[10 20 30 40 50]", "Error", "[50 40 30 20 10]"],
        correctAnswer: "[50 40 30 20 10]",
        explanation: "The correct answer is [50 40 30 20 10]"
    },
    {
        id: 241,
        question: "Changing a slice view of a NumPy array",
        options: ["Can change the original array", "Raises error", "Never changes the original", "Deletes the original"],
        correctAnswer: "Can change the original array",
        explanation: "The correct answer is Can change the original array"
    },
    {
        id: 136,
        question: "np.outer([1,2],[3,4]) gives",
        options: ["[11]", "[3 8]", "[[4 3] [8 6]]", "[[3 4] [6 8]]"],
        correctAnswer: "[[3 4] [6 8]]",
        explanation: "The correct answer is [[3 4] [6 8]]"
    },
    {
        id: 174,
        question: ".npz format stores",
        options: ["Multiple arrays", "Only images", "Only strings", "Only one array"],
        correctAnswer: "Multiple arrays",
        explanation: "The correct answer is Multiple arrays"
    },
    {
        id: 204,
        question: "np.any([0,0,1]) is",
        options: ["False", "0", "1", "True"],
        correctAnswer: "True",
        explanation: "The correct answer is True"
    },
    {
        id: 42,
        question: "a[0:2,:] for a 3x3 array returns",
        options: ["First two rows, all columns", "First two columns, all rows", "Last two rows", "First two elements"],
        correctAnswer: "First two rows, all columns",
        explanation: "The correct answer is First two rows, all columns"
    },
    {
        id: 169,
        question: "np.unique([10,20,10,30,20,10], return_counts=True) counts are",
        options: ["[6]", "[3 2 1]", "[1 2 3]", "[10 20 30]"],
        correctAnswer: "[3 2 1]",
        explanation: "The correct answer is [3 2 1]"
    },
    {
        id: 274,
        question: "np.clip([1,5,10], 2, 8) is",
        options: ["[1 5 10]", "[2 5 8]", "[2 5 10]", "[1 5 8]"],
        correctAnswer: "[2 5 8]",
        explanation: "The correct answer is [2 5 8]"
    },
    {
        id: 195,
        question: "np.var computes",
        options: ["Mean", "Median", "Variance", "Rank"],
        correctAnswer: "Variance",
        explanation: "The correct answer is Variance"
    },
    {
        id: 250,
        question: "np.max(a, axis=0) for [[1,5],[7,2]] is",
        options: ["[7 2]", "[1 2]", "[5 7]", "[7 5]"],
        correctAnswer: "[7 5]",
        explanation: "The correct answer is [7 5]"
    },
    {
        id: 278,
        question: "np.mod(7, 3) is",
        options: ["0", "3", "1", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 36,
        question: "Slice syntax is",
        options: ["array{start:stop}", "array[start:stop:step]", "array(start,stop,step)", "array<start,stop>"],
        correctAnswer: "array[start:stop:step]",
        explanation: "The correct answer is array[start:stop:step]"
    },
    {
        id: 121,
        question: "Eigenvalues of [[2,0],[0,3]] are",
        options: ["2 and 2", "2 and 3", "1 and 6", "0 and 5"],
        correctAnswer: "2 and 3",
        explanation: "The correct answer is 2 and 3"
    },
    {
        id: 148,
        question: "np.random.randn(5) draws from",
        options: ["Poisson", "Standard normal distribution", "Binomial", "Uniform on [0,1)"],
        correctAnswer: "Standard normal distribution",
        explanation: "The correct answer is Standard normal distribution"
    },
    {
        id: 117,
        question: "Solving x+y=10 and x−y=2 gives",
        options: ["x=7, y=3", "x=6, y=4", "x=5, y=5", "x=4, y=6"],
        correctAnswer: "x=6, y=4",
        explanation: "The correct answer is x=6, y=4"
    },
    {
        id: 47,
        question: "a[-1,-1] for np.array([[1,2],[3,4]]) is",
        options: ["2", "3", "4", "1"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 223,
        question: "len(np.array([[1,2,3],[4,5,6]])) is",
        options: ["6", "2", "1", "3"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
  ],
  set19: [
    {
        id: 51,
        question: "np.mean(np.array([10,20,30,40,50])) is",
        options: ["50", "10", "150", "30.0"],
        correctAnswer: "30.0",
        explanation: "The correct answer is 30.0"
    },
    {
        id: 52,
        question: "np.min(np.array([10,20,30,40,50])) is",
        options: ["30", "50", "0", "10"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 228,
        question: "np.arange(10)[::2] is",
        options: ["[2 4 6 8]", "[0 1 2 3 4]", "[1 3 5 7 9]", "[0 2 4 6 8]"],
        correctAnswer: "[0 2 4 6 8]",
        explanation: "The correct answer is [0 2 4 6 8]"
    },
    {
        id: 86,
        question: "hstack of [[1],[2]] and [[3],[4]] gives",
        options: ["[[1] [2] [3] [4]]", "[[1 3] [2 4]]", "[[4 3] [2 1]]", "[1 2 3 4]"],
        correctAnswer: "[[1 3] [2 4]]",
        explanation: "The correct answer is [[1 3] [2 4]]"
    },
    {
        id: 154,
        question: "Random numbers are useful for",
        options: ["Simulations, sampling and testing", "Only drawing", "Only printing", "Only file storage"],
        correctAnswer: "Simulations, sampling and testing",
        explanation: "The correct answer is Simulations, sampling and testing"
    },
    {
        id: 15,
        question: "Which attribute gives the data type?",
        options: ["itemtype", "kind", "type_of", "dtype"],
        correctAnswer: "dtype",
        explanation: "The correct answer is dtype"
    },
    {
        id: 24,
        question: "np.arange(0, 5) gives",
        options: ["[0 1 2 3 4]", "[0 1 2 3 4 5]", "[0 5]", "[1 2 3 4 5]"],
        correctAnswer: "[0 1 2 3 4]",
        explanation: "The correct answer is [0 1 2 3 4]"
    },
    {
        id: 167,
        question: "np.unique returns values in",
        options: ["Reverse order", "Sorted order", "Original order", "Random order"],
        correctAnswer: "Sorted order",
        explanation: "The correct answer is Sorted order"
    },
    {
        id: 29,
        question: "linspace(start, stop, n) uses n as",
        options: ["Number of values", "Step size", "Dimension", "Last value"],
        correctAnswer: "Number of values",
        explanation: "The correct answer is Number of values"
    },
    {
        id: 151,
        question: "np.random.shuffle returns",
        options: ["None", "A copy", "The shuffled array", "A list"],
        correctAnswer: "None",
        explanation: "The correct answer is None"
    },
    {
        id: 184,
        question: "For the sales data, np.max is",
        options: ["2800", "2500", "3500", "3000"],
        correctAnswer: "3000",
        explanation: "The correct answer is 3000"
    },
    {
        id: 192,
        question: "For the sales data, sorted ascending first element is",
        options: ["1100", "1500", "1200", "3000"],
        correctAnswer: "1100",
        explanation: "The correct answer is 1100"
    },
    {
        id: 221,
        question: "Which function checks the NumPy version?",
        options: ["np.version()", "np.__version__", "np.release", "np.ver"],
        correctAnswer: "np.__version__",
        explanation: "The correct answer is np.__version__"
    },
    {
        id: 75,
        question: "np.arange(1,7).reshape(3,2) gives",
        options: ["[[1 2] [3 4] [5 6]]", "[[1 2 3] [4 5 6]]", "[[1 3 5] [2 4 6]]", "Error"],
        correctAnswer: "[[1 2] [3 4] [5 6]]",
        explanation: "The correct answer is [[1 2] [3 4] [5 6]]"
    },
    {
        id: 126,
        question: "Which function creates an identity matrix?",
        options: ["np.eye", "np.identity_only_no", "np.id", "np.one_diag"],
        correctAnswer: "np.eye",
        explanation: "The correct answer is np.eye"
    },
    {
        id: 272,
        question: "Which function counts nonzero elements?",
        options: ["np.nonzero_sum", "np.zerocount", "np.nzcount_all", "np.count_nonzero"],
        correctAnswer: "np.count_nonzero",
        explanation: "The correct answer is np.count_nonzero"
    },
    {
        id: 211,
        question: "np.exp(0) is",
        options: ["1.0", "0.0", "Error", "2.718"],
        correctAnswer: "1.0",
        explanation: "The correct answer is 1.0"
    },
    {
        id: 290,
        question: "np.empty((2,2)) creates",
        options: ["A random array", "An uninitialized 2x2 array", "An identity matrix", "A zeros array"],
        correctAnswer: "An uninitialized 2x2 array",
        explanation: "The correct answer is An uninitialized 2x2 array"
    },
    {
        id: 93,
        question: "Which method adds a new axis?",
        options: ["np.newaxis", "np.expand_all", "np.addaxis", "np.dimplus"],
        correctAnswer: "np.newaxis",
        explanation: "The correct answer is np.newaxis"
    },
    {
        id: 88,
        question: "a.T swaps",
        options: ["Nothing", "Rows and columns", "Values and index", "Rows and values"],
        correctAnswer: "Rows and columns",
        explanation: "The correct answer is Rows and columns"
    },
    {
        id: 90,
        question: "Which function joins arrays along an existing axis?",
        options: ["np.join_axis", "np.merge", "np.concatenate", "np.glue"],
        correctAnswer: "np.concatenate",
        explanation: "The correct answer is np.concatenate"
    },
    {
        id: 41,
        question: "a[1,2] for np.array([[10,20,30],[40,50,60]]) is",
        options: ["20", "30", "60", "50"],
        correctAnswer: "60",
        explanation: "The correct answer is 60"
    },
    {
        id: 196,
        question: "np.median([1,3,5,7]) is",
        options: ["4.0", "5.0", "3.0", "16"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 124,
        question: "Linear algebra is important in",
        options: ["Only typing", "Only painting", "Machine learning, PCA, optimization", "Only cooking"],
        correctAnswer: "Machine learning, PCA, optimization",
        explanation: "The correct answer is Machine learning, PCA, optimization"
    },
    {
        id: 255,
        question: "np.min([[1,2],[3,4]]) is",
        options: ["3", "1", "4", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 74,
        question: "np.arange(1,7).reshape(2,3) gives",
        options: ["Error", "[1 2 3 4 5 6]", "[[1 2 3] [4 5 6]]", "[[1 2] [3 4] [5 6]]"],
        correctAnswer: "[[1 2 3] [4 5 6]]",
        explanation: "The correct answer is [[1 2 3] [4 5 6]]"
    },
    {
        id: 119,
        question: "np.linalg.matrix_rank([[1,2],[2,4]]) is",
        options: ["2", "4", "0", "1"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 237,
        question: "A view shares memory with the original; a copy",
        options: ["Shares memory", "Has its own memory", "Is not an array", "Is always slower to create"],
        correctAnswer: "Has its own memory",
        explanation: "The correct answer is Has its own memory"
    },
    {
        id: 131,
        question: "Is matrix multiplication commutative in general?",
        options: ["Only for 1D", "Only for 2x2", "Yes always", "No"],
        correctAnswer: "No",
        explanation: "The correct answer is No"
    },
    {
        id: 236,
        question: "np.arange(5, 0, -1) is",
        options: ["[1 2 3 4 5]", "[4 3 2 1 0]", "[5 4 3 2 1]", "[5 4 3 2 1 0]"],
        correctAnswer: "[5 4 3 2 1]",
        explanation: "The correct answer is [5 4 3 2 1]"
    },
    {
        id: 5,
        question: "Command to install NumPy",
        options: ["python numpy --get", "get numpy", "install numpy.exe", "pip install numpy"],
        correctAnswer: "pip install numpy",
        explanation: "The correct answer is pip install numpy"
    },
    {
        id: 239,
        question: "a.copy() returns",
        options: ["A reference", "A view", "An independent copy", "A list"],
        correctAnswer: "An independent copy",
        explanation: "The correct answer is An independent copy"
    },
    {
        id: 148,
        question: "np.random.randn(5) draws from",
        options: ["Poisson", "Standard normal distribution", "Binomial", "Uniform on [0,1)"],
        correctAnswer: "Standard normal distribution",
        explanation: "The correct answer is Standard normal distribution"
    },
    {
        id: 280,
        question: "np.sqrt(16) is",
        options: ["256", "8.0", "4.0", "2.0"],
        correctAnswer: "4.0",
        explanation: "The correct answer is 4.0"
    },
    {
        id: 81,
        question: "np.array([[1,2],[3,4]]).flatten() is",
        options: ["[1 3 2 4]", "[1 2 3 4]", "[4 3 2 1]", "[[1 2 3 4]]"],
        correctAnswer: "[1 2 3 4]",
        explanation: "The correct answer is [1 2 3 4]"
    },
    {
        id: 38,
        question: "a[0:6:2] for np.array([10,20,30,40,50,60]) is",
        options: ["[10 20 30]", "[10 30 50]", "[10 40]", "[20 40 60]"],
        correctAnswer: "[10 30 50]",
        explanation: "The correct answer is [10 30 50]"
    },
    {
        id: 227,
        question: "np.arange(5).sum() is",
        options: ["4", "10", "5", "15"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 177,
        question: "Which preserves the array efficiently in binary?",
        options: [".png", ".txt", ".npy", ".docx"],
        correctAnswer: ".npy",
        explanation: "The correct answer is .npy"
    },
    {
        id: 218,
        question: "np.array(['a','b']).dtype kind is",
        options: ["Boolean", "String (Unicode)", "Float", "Integer"],
        correctAnswer: "String (Unicode)",
        explanation: "The correct answer is String (Unicode)"
    },
    {
        id: 129,
        question: "Matrix multiplication of 2x3 and 2x3 is",
        options: ["Invalid (inner dimensions mismatch)", "2x3", "2x2", "3x3"],
        correctAnswer: "Invalid (inner dimensions mismatch)",
        explanation: "The correct answer is Invalid (inner dimensions mismatch)"
    },
    {
        id: 234,
        question: "np.linspace(1, 5, 5) is",
        options: ["[1. 2. 3. 4. 5.]", "[1 5]", "[1 2 3 4]", "[0. 1. 2. 3. 4.]"],
        correctAnswer: "[1. 2. 3. 4. 5.]",
        explanation: "The correct answer is [1. 2. 3. 4. 5.]"
    },
    {
        id: 155,
        question: "np.random.seed(10) followed by randint gives",
        options: ["A different sequence each time", "No output", "The same sequence each time", "An error"],
        correctAnswer: "The same sequence each time",
        explanation: "The correct answer is The same sequence each time"
    },
    {
        id: 102,
        question: "Matrix multiplication formula is",
        options: ["C_ij = Σ A_ik B_kj", "C_ij = A_ji", "C_ij = A_ij × B_ij", "C_ij = A_ij + B_ij"],
        correctAnswer: "C_ij = Σ A_ik B_kj",
        explanation: "The correct answer is C_ij = Σ A_ik B_kj"
    },
    {
        id: 197,
        question: "np.cumsum([1,2,3]) is",
        options: ["[1 2 3]", "[6]", "[1 3 6]", "[3 2 1]"],
        correctAnswer: "[1 3 6]",
        explanation: "The correct answer is [1 3 6]"
    },
    {
        id: 248,
        question: "np.tile([1,2], 2) is",
        options: ["[1 1 2 2]", "[1 2 1 2]", "[1 2]", "[2 1 2 1]"],
        correctAnswer: "[1 2 1 2]",
        explanation: "The correct answer is [1 2 1 2]"
    },
    {
        id: 55,
        question: "Mean formula is",
        options: ["N / Σx", "Σx / N", "Σx × N", "Σx²"],
        correctAnswer: "Σx / N",
        explanation: "The correct answer is Σx / N"
    },
    {
        id: 122,
        question: "Eigenvalues of a diagonal matrix are",
        options: ["Its diagonal entries", "Always zero", "Always one", "Its determinant"],
        correctAnswer: "Its diagonal entries",
        explanation: "The correct answer is Its diagonal entries"
    },
    {
        id: 293,
        question: "Which is the best one-line definition of NumPy?",
        options: ["A plotting tool", "A database engine", "Python library for numerical computing built around the ndarray", "A web framework"],
        correctAnswer: "Python library for numerical computing built around the ndarray",
        explanation: "The correct answer is Python library for numerical computing built around the ndarray"
    },
    {
        id: 295,
        question: "np.arange(1, 6).max() - np.arange(1, 6).min() is",
        options: ["5", "4", "6", "1"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 152,
        question: "np.random.randint(1000, 5001, 10) gives 10 integers between",
        options: ["0 and 1000", "1001 and 5000", "1000 and 5001 inclusive", "1000 and 5000"],
        correctAnswer: "1000 and 5000",
        explanation: "The correct answer is 1000 and 5000"
    },
  ],
  set20: [
    {
        id: 152,
        question: "np.random.randint(1000, 5001, 10) gives 10 integers between",
        options: ["0 and 1000", "1001 and 5000", "1000 and 5001 inclusive", "1000 and 5000"],
        correctAnswer: "1000 and 5000",
        explanation: "The correct answer is 1000 and 5000"
    },
    {
        id: 12,
        question: "Which attribute gives the number of dimensions?",
        options: ["rank_of", "dim_count", "ndim", "dims"],
        correctAnswer: "ndim",
        explanation: "The correct answer is ndim"
    },
    {
        id: 203,
        question: "Boolean indexing selects elements",
        options: ["At random", "Where the condition is True", "Where the condition is False", "By position only"],
        correctAnswer: "Where the condition is True",
        explanation: "The correct answer is Where the condition is True"
    },
    {
        id: 141,
        question: "np.random.randint(1, 100, 5) generates numbers from",
        options: ["1 to 100", "0 to 99", "1 to 99", "2 to 100"],
        correctAnswer: "1 to 99",
        explanation: "The correct answer is 1 to 99"
    },
    {
        id: 5,
        question: "Command to install NumPy",
        options: ["python numpy --get", "get numpy", "install numpy.exe", "pip install numpy"],
        correctAnswer: "pip install numpy",
        explanation: "The correct answer is pip install numpy"
    },
    {
        id: 290,
        question: "np.empty((2,2)) creates",
        options: ["A random array", "An uninitialized 2x2 array", "An identity matrix", "A zeros array"],
        correctAnswer: "An uninitialized 2x2 array",
        explanation: "The correct answer is An uninitialized 2x2 array"
    },
    {
        id: 26,
        question: "arange() the stop value is",
        options: ["Ignored", "Excluded", "Included", "Doubled"],
        correctAnswer: "Excluded",
        explanation: "The correct answer is Excluded"
    },
    {
        id: 255,
        question: "np.min([[1,2],[3,4]]) is",
        options: ["3", "1", "4", "2"],
        correctAnswer: "1",
        explanation: "The correct answer is 1"
    },
    {
        id: 147,
        question: "np.random.choice(['A','B','C','D'], size=2) does",
        options: ["Deletes items", "Randomly samples 2 items", "Sorts the items", "Returns all items"],
        correctAnswer: "Randomly samples 2 items",
        explanation: "The correct answer is Randomly samples 2 items"
    },
    {
        id: 118,
        question: "np.linalg.matrix_rank([[2,0],[0,3]]) is",
        options: ["2", "3", "1", "0"],
        correctAnswer: "2",
        explanation: "The correct answer is 2"
    },
    {
        id: 181,
        question: "np.argmin(np.array([1200,1500,1800,1100,2500,3000,2200,1700,1900,2800])) is",
        options: ["4", "3", "1100", "0"],
        correctAnswer: "3",
        explanation: "The correct answer is 3"
    },
    {
        id: 113,
        question: "np.linalg.inv([[1,2],[3,4]]) is",
        options: ["[[4 -2] [-3 1]]", "[[0.5 0.25] [0.33 0.25]]", "[[-2. 1.] [1.5 -0.5]]", "[[1 3] [2 4]]"],
        correctAnswer: "[[-2. 1.] [1.5 -0.5]]",
        explanation: "The correct answer is [[-2. 1.] [1.5 -0.5]]"
    },
    {
        id: 98,
        question: "A * B for [[1,2],[3,4]] and [[5,6],[7,8]] is",
        options: ["[[5 12] [21 32]]", "[[6 8] [10 12]]", "[[19 22] [43 50]]", "[[26 30] [26 30]]"],
        correctAnswer: "[[5 12] [21 32]]",
        explanation: "The correct answer is [[5 12] [21 32]]"
    },
    {
        id: 129,
        question: "Matrix multiplication of 2x3 and 2x3 is",
        options: ["Invalid (inner dimensions mismatch)", "2x3", "2x2", "3x3"],
        correctAnswer: "Invalid (inner dimensions mismatch)",
        explanation: "The correct answer is Invalid (inner dimensions mismatch)"
    },
    {
        id: 71,
        question: "np.array([1,2,3]) == 2 gives",
        options: ["[1 2 3]", "True", "[False True False]", "[False False False]"],
        correctAnswer: "[False True False]",
        explanation: "The correct answer is [False True False]"
    },
    {
        id: 50,
        question: "np.sum(np.array([10,20,30,40,50])) is",
        options: ["30", "100", "50", "150"],
        correctAnswer: "150",
        explanation: "The correct answer is 150"
    },
    {
        id: 21,
        question: "np.ones((2,3)) creates",
        options: ["A 2x3 array of zeros", "A 3x2 array of ones", "A 2x3 array of 1.0", "An empty array"],
        correctAnswer: "A 2x3 array of 1.0",
        explanation: "The correct answer is A 2x3 array of 1.0"
    },
    {
        id: 159,
        question: "np.random.uniform(5, 10) returns a float between",
        options: ["5 and 10", "10 and 100", "0 and 1", "1 and 5"],
        correctAnswer: "5 and 10",
        explanation: "The correct answer is 5 and 10"
    },
    {
        id: 226,
        question: "np.full((2,2), 5).sum() is",
        options: ["25", "20", "10", "5"],
        correctAnswer: "20",
        explanation: "The correct answer is 20"
    },
    {
        id: 18,
        question: "np.array([[1,2,3],[4,5,6]]).size is",
        options: ["2", "5", "3", "6"],
        correctAnswer: "6",
        explanation: "The correct answer is 6"
    },
    {
        id: 297,
        question: "np.ones((4,2)).size is",
        options: ["2", "4", "8", "6"],
        correctAnswer: "8",
        explanation: "The correct answer is 8"
    },
    {
        id: 187,
        question: "For the sales data, sales.reshape(2,5) has shape",
        options: ["(1, 10)", "(5, 2)", "(2, 5)", "(10,)"],
        correctAnswer: "(2, 5)",
        explanation: "The correct answer is (2, 5)"
    },
    {
        id: 68,
        question: "np.array([1,2,3]) ** 2 is",
        options: ["[3 6 9]", "[2 4 6]", "[1 4 9]", "[1 2 3]"],
        correctAnswer: "[1 4 9]",
        explanation: "The correct answer is [1 4 9]"
    },
    {
        id: 47,
        question: "a[-1,-1] for np.array([[1,2],[3,4]]) is",
        options: ["2", "3", "4", "1"],
        correctAnswer: "4",
        explanation: "The correct answer is 4"
    },
    {
        id: 168,
        question: "np.unique(a, return_counts=True) returns",
        options: ["Index only", "Only counts", "Unique values and their counts", "Only values"],
        correctAnswer: "Unique values and their counts",
        explanation: "The correct answer is Unique values and their counts"
    },
    {
        id: 213,
        question: "np.pi is approximately",
        options: ["1.61803", "1.41421", "3.14159", "2.71828"],
        correctAnswer: "3.14159",
        explanation: "The correct answer is 3.14159"
    },
    {
        id: 90,
        question: "Which function joins arrays along an existing axis?",
        options: ["np.join_axis", "np.merge", "np.concatenate", "np.glue"],
        correctAnswer: "np.concatenate",
        explanation: "The correct answer is np.concatenate"
    },
    {
        id: 103,
        question: "np.dot([1,2,3],[4,5,6]) is",
        options: ["6", "15", "21", "32"],
        correctAnswer: "32",
        explanation: "The correct answer is 32"
    },
    {
        id: 277,
        question: "np.minimum([1,5],[3,2]) is",
        options: ["[3 5]", "[1]", "[1 2]", "[5 3]"],
        correctAnswer: "[1 2]",
        explanation: "The correct answer is [1 2]"
    },
    {
        id: 188,
        question: "sales.reshape(3,4) for 10 elements raises",
        options: ["Warning only", "Zeros added", "ValueError", "Nothing"],
        correctAnswer: "ValueError",
        explanation: "The correct answer is ValueError"
    },
    {
        id: 272,
        question: "Which function counts nonzero elements?",
        options: ["np.nonzero_sum", "np.zerocount", "np.nzcount_all", "np.count_nonzero"],
        correctAnswer: "np.count_nonzero",
        explanation: "The correct answer is np.count_nonzero"
    },
    {
        id: 257,
        question: "np.matmul is equivalent to",
        options: ["np.add", "The * operator", "np.sort", "The @ operator"],
        correctAnswer: "The @ operator",
        explanation: "The correct answer is The @ operator"
    },
    {
        id: 140,
        question: "np.random.rand(5) returns",
        options: ["A 5x5 matrix", "5 random floats", "5 random integers", "One float"],
        correctAnswer: "5 random floats",
        explanation: "The correct answer is 5 random floats"
    },
    {
        id: 85,
        question: "np.hstack((np.array([1,2,3]), np.array([4,5,6]))) gives",
        options: ["Error", "[[1 2 3] [4 5 6]]", "[5 7 9]", "[1 2 3 4 5 6]"],
        correctAnswer: "[1 2 3 4 5 6]",
        explanation: "The correct answer is [1 2 3 4 5 6]"
    },
    {
        id: 132,
        question: "Determinant of [[3,1],[2,4]] is",
        options: ["14", "2", "10", "12"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
    {
        id: 247,
        question: "np.repeat([1,2], 2) is",
        options: ["[1 2]", "[1 2 1 2]", "[2 2 1 1]", "[1 1 2 2]"],
        correctAnswer: "[1 1 2 2]",
        explanation: "The correct answer is [1 1 2 2]"
    },
    {
        id: 174,
        question: ".npz format stores",
        options: ["Multiple arrays", "Only images", "Only strings", "Only one array"],
        correctAnswer: "Multiple arrays",
        explanation: "The correct answer is Multiple arrays"
    },
    {
        id: 59,
        question: "np.std([2,2,2,2]) equals",
        options: ["4.0", "2.0", "1.0", "0.0"],
        correctAnswer: "0.0",
        explanation: "The correct answer is 0.0"
    },
    {
        id: 240,
        question: "flatten() returns a",
        options: ["View always", "List of lists", "Scalar", "Copy"],
        correctAnswer: "Copy",
        explanation: "The correct answer is Copy"
    },
    {
        id: 39,
        question: "a[::-1] for np.array([10,20,30,40,50]) is",
        options: ["[50]", "[10 20 30 40 50]", "Error", "[50 40 30 20 10]"],
        correctAnswer: "[50 40 30 20 10]",
        explanation: "The correct answer is [50 40 30 20 10]"
    },
    {
        id: 73,
        question: "A reshape is valid only if",
        options: ["Rows equal columns", "Array is sorted", "Total elements remain the same", "Array is 1D"],
        correctAnswer: "Total elements remain the same",
        explanation: "The correct answer is Total elements remain the same"
    },
    {
        id: 116,
        question: "Solving x+y=5 and 2x+y=8 gives",
        options: ["x=2, y=3", "x=4, y=1", "x=3, y=2", "x=5, y=0"],
        correctAnswer: "x=3, y=2",
        explanation: "The correct answer is x=3, y=2"
    },
    {
        id: 204,
        question: "np.any([0,0,1]) is",
        options: ["False", "0", "1", "True"],
        correctAnswer: "True",
        explanation: "The correct answer is True"
    },
    {
        id: 286,
        question: "np.arange(6).reshape(2,3).sum(axis=0) is",
        options: ["[0 3]", "[3 5 7]", "[15]", "[ 3 12]"],
        correctAnswer: "[3 5 7]",
        explanation: "The correct answer is [3 5 7]"
    },
    {
        id: 8,
        question: "Output of [10,20,30] + [1,2,3] for Python lists is",
        options: ["[10, 20, 30, 1, 2, 3]", "[33]", "[11, 22, 33]", "Error"],
        correctAnswer: "[10, 20, 30, 1, 2, 3]",
        explanation: "The correct answer is [10, 20, 30, 1, 2, 3]"
    },
    {
        id: 136,
        question: "np.outer([1,2],[3,4]) gives",
        options: ["[11]", "[3 8]", "[[4 3] [8 6]]", "[[3 4] [6 8]]"],
        correctAnswer: "[[3 4] [6 8]]",
        explanation: "The correct answer is [[3 4] [6 8]]"
    },
    {
        id: 275,
        question: "np.diff([1,4,9]) is",
        options: ["[3 5]", "[5 3]", "[8]", "[1 4 9]"],
        correctAnswer: "[3 5]",
        explanation: "The correct answer is [3 5]"
    },
    {
        id: 64,
        question: "Broadcasting allows NumPy to",
        options: ["Delete arrays", "Combine compatible shapes", "Save arrays", "Sort arrays"],
        correctAnswer: "Combine compatible shapes",
        explanation: "The correct answer is Combine compatible shapes"
    },
    {
        id: 233,
        question: "np.linspace(0, 1, 3) is",
        options: ["[0.3 0.6 1]", "[0. 0.5 1. ]", "[0 1 2]", "[0 0.25 0.5]"],
        correctAnswer: "[0. 0.5 1. ]",
        explanation: "The correct answer is [0. 0.5 1. ]"
    },
    {
        id: 189,
        question: "For the sales data, sales.size is",
        options: ["18700", "10", "2", "5"],
        correctAnswer: "10",
        explanation: "The correct answer is 10"
    },
  ],
};
