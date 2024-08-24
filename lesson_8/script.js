// 1) Напишите функцию для извлечения чисел - это функция которая принимает строку и возвращает массив всех чисел в строке 
// Пример: 

const extractNumbers = (str) => {
   const regEx = /\D/;
   const newArr = str.replace(regEx, '');
   return newArr;
}

console.log(extractNumbers("a1fg5hj6"));
// 8

// 2) Напишите функцию рекурсию которая будет выводить в консоль числа фибоначчи с задержкой в одну секунду (ограничение число 144)

const fibonacciRecursion = (a = 0, b = 1) => {
   console.log(a);
   if (b > 144) return;
   setTimeout(() => {
       fibonacciRecursion(b, a + b);
   }, 1000);
}
fibonacciRecursion();

// 8

// 3) Сделать запрос на API используя async await и try catch
// Делайте запроса на этот API => https://fakestoreapi.com/products
// Из полученных данных возьмите ключ title у каждого объекта и выведите их в консоль
const productRequest = async () => {
   try {
      const request = await fetch('https://fakestoreapi.com/products');
      const data = await request.json();

      // console.log(data);

      data.forEach(title => {
         console.log(title.title)
      });
      console.log();

   } catch (error) {
      console.log(error);
   }
};
productRequest();
// 8

// 4) Создайте 5 кнопок внутри которого будут названия цветов на английском
// Пример:

// 9

// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Делегирование событий</title>
// </head>
// <body>

// <div>
//     <button>red</button>
//     <button>green</button>
//     <button>blue</button>
//     <button>yellow</button>
//     <button>purple</button>
// </div>

// </body>
// </html>

// При помощи делегирования событий сделайте так чтобы при нажатии на какую либо из кнопок менялся цвет заднего фона body на цвет нажатой кнопки
const $btns = document.querySelector('.btns');

$btns.onclick = (event) => {
   if (event.target.classList.contains('red')) {
      document.body.style.background = 'red';
   } else if (event.target.classList.contains('green')) {
      document.body.style.background = 'green';
   } else if (event.target.classList.contains('blue')) {
      document.body.style.background = 'blue';
   } else if (event.target.classList.contains('yellow')) {
      document.body.style.background = 'yellow';
   } else if (event.target.classList.contains('purple')) {
      document.body.style.background = 'purple';
   }
}


// 5) Создайте кнопку которая будет отображать блок либо скрывать его
// Надо сделать блок просто квадратным, а рядом кнопка , если нажать на  неё то блок скроется, если снова нажать на ту же кнопку то блок снова покажется
const $blockBtn = document.querySelector('.blockBtn');
const $block = document.querySelector('.block');
let isPressed = false;
$blockBtn.onclick = () => {
   if (!isPressed) {
      $block.classList.add('hide')
      isPressed = true
   } else {
      $block.classList.remove('hide')
   }
}

// 6) Отобразите на странице цифру ноль и начните его увеличивать на +1 каждую мили-секунду  - остановите отсчёт когда счётчик дойдёт до 100
let count = 0;
const counterElement = document.querySelector('.num');

const intervalId = setInterval(() => {
   if (count <= 100) {
      counterElement.textContent = count;
      count++;
   } else {
      clearInterval(intervalId);
   }
}, 1);

// 7) Создайте кнопку при нажатии на которую будет отправляться GET запрос на JSON и полученные данные от туда выводите в консоль (JSON создавайте на своё усмотрение) используйте async await
const $jsonBtn = document.querySelector('.jsonBtn');
const someRequest = async () => {
   try {
      const request = await fetch('products.json');
      const data = await request.json();

      console.log(data);
   } catch (er) {
      console.log(er);
   }
}
$jsonBtn.onclick = () => {
   someRequest()
}
