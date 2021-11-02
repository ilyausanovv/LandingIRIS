function atm_task(n){

    const array = [50, 100, 200, 500, 1000];
    let count = 0;
    let elem = 0;

    for(let i = 0; i < 5; i++){
        elem = array[i];
        count += n / elem;
        n %= elem;
    }

    if(n > 0){
        count = -1;
        console.log(count);
    } else {
        console.log(count);
    }
}


