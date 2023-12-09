function f(n){
    if (n == o) return 1;
    let result = n * f(n-1);
    return result;
}
console.log(f(3));