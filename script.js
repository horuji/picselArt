let button = document.querySelector('button'); // определяем кнопку
let PlayField = document.querySelector(".PlayField") // определяем поле отрисовки
let ColorArr = ["black","white", "red", "green"] // массив с вариантами цвета пикселя 
let nam = 0; // счетчик для прохода по массиву
function CreetElement (width){    //функция созает линию пикселей определенной ширины 
 let c =  document.createElement("div") // 
PlayField.appendChild(c)      // 
for( i = 0 ;i< width ; i++){
  let x = document.createElement("div")
  x.style.display = "inline-block"
  x.style.width = '20px' // ШИРИНА ДОЛЖНА ИЗМЕНЯТЬСЯ В ЗАВИСИМОСТИ ОТ КОЛИЧЕСТВА ПИКСЕЛЕЙ
  x.style.height = '20px'
  x.style.backgroundColor = "black"
  x.classList.add("element")
  c.appendChild(x)
}
c.style.height = '20px'
PlayField.style.width = `${width*20 }px`
}

//функция получает значения из формы
//создает поле элементов 
 function FormWorker(){
let width = document.getElementById('w').value;
let height = document.getElementById("h").value;
for(let i = 0; i< height; i++){
CreetElement(width)
} 
}
//функция изменения цыета элементаб цвет из массива ColorArr
function ChangeColor(e){
  let x = e.target;
  let c = ColorArr.length -1; // !! ПЕРЕДЕЛАТЬ БЕЗ ПЕРЕМЕННОЙ
  console.log(c);
  if(x.style.backgroundColor == ColorArr[c] ){
    return x.style.backgroundColor = ColorArr[0]}
     for (const iterator of ColorArr) {
    if(iterator == x.style.backgroundColor){   
       let cant = ColorArr.indexOf(iterator) +1
       console.log (cant)
     return x.style.backgroundColor = ColorArr[cant]
    }
  }
  }
let colorsselect = document.querySelector('.colorsselect')
//функция отрисоввывает ColorArr
function ArrVisual(arr){
  for (let x of arr){
    let c  = document.createElement('div');
    c.style.backgroundColor = x
    c.style.width = '50px'
    c.style.height = '50px'
     c.style.border = '1px black solid'
    colorsselect.appendChild(c)
  }

 
}
// функция добавления элемента в массив 
function addcolor(){
  let addcolor = document.createElement('div')
  addcolor.style.width = '50px'
  addcolor.style.height = '50px'
  addcolor.style.border = '1px black solid'
  addcolor.style.backgroundColor = `${colorset.value}`

  colorsselect.appendChild(addcolor)

}

ArrVisual(ColorArr)

let colorset = document.querySelector('.Colorset')
colorset. style.width = '50px'
colorset. style.height = '50px'
colorset.style.border = '1px black solid'
colorset.addEventListener('key', function(event){
  if(event.keyCode ===13){
    console.log(55)
  }
})

addcolor()
 button.addEventListener("click", FormWorker );
//PlayField.addEventListener("click", Changenam)
PlayField.addEventListener("click", ChangeColor)