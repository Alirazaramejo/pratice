function fibonacciMemoized() {
    const memo = {};

    function fibonacci(n) {
        if (n <= 1) return n;

        // Check if result is already in the cache
        if (memo[n]) return memo[n];

        // Calculate the result and store it in the cache
        memo[n] = fibonacci(n - 1) + fibonacci(n - 2);

        return memo[n];
    }

    return fibonacci;
}

const fibonacci = fibonacciMemoized();

console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(40)); // Fast, output: 102334155
