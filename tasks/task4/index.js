let num = prompt('Введите число');
let a = 1;
let b = 1;
let c = 2;
while(a < num){
    b = b + c;
    c = c + 1;
    a = a + 1;
}
alert(b);