function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

var arr = [1,2,3,4,5,6];

let Total=0;

let temp;

temp = arr.filter(isEven).map(x=>x*3);

Total=arr.filter(isEven).map(x=>x*3).reduce((Total,y)=>Total+y);


console.log(temp);


console.log(Total);