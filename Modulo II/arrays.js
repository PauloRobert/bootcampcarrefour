const meuArray =  [30, 20,40,5030, 20,40,50]

function valoresunicos (arr){
    const mySet = new Set(arr);

    return[...mySet]
    }

    console.log(valoresunicos(meuArray));