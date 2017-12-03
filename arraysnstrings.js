//Random Algos
//boolean primeaive

boolean primeNaive(int n) {
    if (n < 2 ){
        return false;
    } 
    for (int i = 2; i < n; i++){
        if (n % i == 0){
            return false;
        }
    }    
    return true;
}

// some more randon algos