
// Вариант 1
var n = 33721;
var s = 0;

while (n > 0)
{
    s += n % 10
    n = Math.floor(n/10)
}
alert("Сумма: " + s)


//Вариант 2
var n = 33721;
var s = String(n).split('');
var sum = 0;
for (i = 0; i < s.length; i++) {
    sum = sum + parseInt(s[i]);
}
alert("Сумма: " + sum);