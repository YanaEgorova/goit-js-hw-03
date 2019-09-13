'use strict';



// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 

// Функция возвращает число - количество свойств.




const countProps = obj => {

  let result = 0;

  for (const el in obj) {
    //console.log(el);
    result += 1;
    //console.log(result);
  }

  return result;
}






console.log(countProps({})); // 0

console.log(countProps({
  name: 'Mango',
  age: 2
})); // 2

console.log(countProps({
  mail: 'poly@mail.com',
  isOnline: true,
  score: 500
})); // 3