let index1 = prompt('Введите первый индекс: ')
let index2 = prompt('Введите второй индекс: ')
k=666
let mArr = new Array()
for(i=0; i<k; i++){
    mArr[i] = new Array();
    for(j=0; j<k; j++){
        mArr[i][j]=i*j
    }
}
alert(mArr[index1][index2])