function SelectSort(arr){
    var temp = 0;
    for (var i = 1; i < arr.length; i++){
        for (var k = i+ 1; k < arr.length-1; k++){
           if( arr [k] < arr[i]);
           var temp = arr[i];
            arr[i]= arr[k];
            arr[k] = temp;
        }
    } 
return arr;
}
arr = [5,4,6,2]

SelectSort(arr); // this is wrong below is correct



function BubbleSort(arr){
    for (var i=arr.length-1;i >0;i--){
        for (var k = 0;k<i;k++){
            if (arr[k+1] < arr [k]){
                let temp = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = temp;
            }
            console.log(arr);
        }
    }
    return arr;
}
arr = [10,5,8,6]

BubbleSort(arr);

//answer with console.log
   
[ 5, 10, 8, 6 ]
[ 5, 8, 10, 6 ]
[ 5, 8, 6, 10 ]
[ 5, 8, 6, 10 ]
[ 5, 6, 8, 10 ]
[ 5, 6, 8, 10 ]
=> [ 5, 6, 8, 10 ]
