function add() {
var arr=[];
    for(var i=1; i < 256; i++){
        arr.push(i);
    }
    return arr;   
}

console.log(arr)

function even(){
var sum1=0;
    for(var i=1; i<1001; i++){
        if(i % 2 === 0) {
            sum1=sum1+i;
        }
}
return sum1;
}


function odd(){
var sum2=0;
    for(var i=1; i<5001; i++){
        if(i%2 === 1) {
            sum2=sum2+i;
            console.log(i);
        }
}
return sum2;
}

numArr = [1,2,5]

function iterate(numArr){
    var sum3=0
    for(var i=0; i<numArr.length; i++){
        sum3 = sum3 + numArr[i];
    }
    return sum3;
}

var arr = [-3,3,5,7]

function max(arr){
    var max=arr[0]
    for(var i=0; i<arr.length; i++){
        if(arr[0]> max){
            max = arr[i];
        }
    }
    return max;
}

avgArr [1,3,5,7,20]

fuction findAvg(avgArr){
    var sum=0;
    var avg=0;
    for(var i=o; i < avgArr.length; i++){
        sum = sum + avgArr[i];
    }
    avg = sum/avgArr.length;
    return avg;
}

function arrOdd(){
    var oddArr[];
    for(var i=0; i<50; i++){
        oddArr.push(i);
    }
    return oddArr;
}

var yarr = [1,3,5,7]
    var y=3

function greatY(yarr, y){
    var num = 0;
    for(var i=0; i<yarr.length; i++){
        if (arr[i] > y){
            num++;
        }
    }
    return num;
}

var arr[1,5,10,-2]

function square(arr){
    for(var i=0, i<arr.length; i++){
        arr[i]=arr[i]*arr[i];
    }
}

var negArr = [1,5,10,-2]

function neg(negArr){
    for (var i=0; i<negArr.length; i++){
        if(negArr[i]<0){
            arr[i] = 0;
        }
    }
    console.log(negArr)
}

var mmaArr = [1,5,10,-2]

function mma(mmaArr){
    var sum=0
    var max=mmaArr[0]
    var min=mmaArr[0]
    for(var i=0; i<mmaArr.length; i++){
        sum = sum + mmaArr[i];
        if(mmaArr[i]> max){
            max = arr[i];
        }
        else if (arr[i]<min){
            min = arr[i];
        }
    }
    var new = [];
    new.push(max);
    new.push(min);
    var avg = sum/arr.length;
    new.push(avg);

    return new;
}

var swapArr = [1,5,10,-2]

function swap(swapArr){
    var temp = swapArr[swapArr.length-1];
    swapArr[swapArr.length - 1]= swapArr[0];
    swapArr[0]=temp;
}

var arr = [1,-2,3,-4]

function string(arr);{
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            console.log(arr[i])
        else(arr[i<0]){
            console.log("Dojo")
        }
        }
    }
    console.log(arr)
}