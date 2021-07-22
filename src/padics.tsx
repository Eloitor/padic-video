function padicValuation(p: number, n: number): number {
    if (n === 0) {
        return 0;
    }
    var val = 0;
    while n % p === 0 {
        val++;
        n /= p;
    }
    return val;
}
