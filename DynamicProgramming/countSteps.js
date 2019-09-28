function countPaths(n) {
    // I: n - number of steps
    // O: number of paths
    // C: none
    // E: n = 0, n < 0

    // If n = 0 return 1
    // If n < 0 return 0
    function recursiveSum(n, memo) { 
        if (n === 0) {
            return 1;
        }

        if (n < 0) {
            return 0;
        } 

        if (memo[n]) { 
            return memo[n];
        }
        memo[n] = countPaths(n - 1) + countPaths(n - 2) + countPaths(n - 3);
        return memo[n];
    }

    const memo = {};
    return recursiveSum(n, memo);
}

export { countPaths };