//1.Array increment and multiply

var a=[1,2,3,4,5];
console.log(a);
for(i=0;i<a.length;i++){
     console.log((a[i]+1)*5);
}

//2.Print Array Reverse Order

var a=[10,20,30,40,50];
console.log(a);
for(i=a.length;i>=0;i--){
    console.log(a[i]);
}

//3.Two array concat and print reverse

var a=[10,20,30,40,50];
var b=[60,70,80,90,100];
var c=a.concat(b);
console.log(c);
for(i=c.length-1;i>=0;i--){
    console.log(c[i]);
}