// Examen JavaScript Amaliy savollar

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

// let a = 5;
// let b = 2;
// let c;
// c = a % b;
// alert(c)




// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

// let a = Math.random(10)
// alert(a)





// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring!

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// let a = Math.floor(12.510)
// alert(a)



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering

// let a = "MARS IT SCHOOL"
// let b = a.length
// alert( "MARS IT SCHOOL sozida" + b +  "harif bor" )





// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering


// let b = "MARS IT SCHOOL"
// function abs() {
//     for (let a = 0; a < 10; a++) {
//         console.log(b);
//     }
// }
// abs()





// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let a = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

// console.log( a[0] + a[1] + a[2] + a[19] +a[10] +a[0] +a[23] +a[7] +a[23]);


// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// let a = +prompt("Yoshingizni kiriting...")

// if (a > 18 ) {
//     console.log("Siz balag'ot yoshiga yetgansiz");
// } else  if(a === 18){
//     console.log("balog'at yoshi muborak");
// }else{
//     console.log("balog'at yoshiga yetmagansiz");
// }




// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// let a = prompt("Ismingizni kiriting")
// alert(a.split("").reverse().join(''));








// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// console.log(array);


// for (let i = 0; i < array.length; i++) {
//     let check = array[i] % 2
//     if (check === 0) {
//         console.log(array[i], ("juft son"));
//     } else { console.log(array[i], ("toq son")); }
// }
