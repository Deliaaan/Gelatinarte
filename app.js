let left = document.querySelector('.bi-caret-left-fill');
let right = document.querySelector('.bi-caret-right-fill');
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', ()=> {
    cards.scrollLeft -= 140;
})

right.addEventListener('click', ()=> {
    cards.scrollLeft += 140;
})

const descripciones = [
    "",
    'Un hermoso paisaje nevado en 3D, sabor mora azul. Pedir con minimo 4 dias de anticipación ❄️',
    'Por fuera color negro, por dentro colores neon de varios sabores! 🔦',
    'Una de nuestras gelatinas mas famosas, mitad mosaico mitad flores de gelatina 🌸',
    "Todo el sabor de fruta fesca: durazno, fresa, manzana y hasta cereza 🍎🥭🍒. \n las paletas se venden por unidad ",
    "Una tormenta de frutos rojos!, sabor frutal con los mejores ingedientes, definitivamente: ⭐⭐⭐⭐⭐",
    "Si buscas un sabor tan suave como su color, esta va a ser para ti. 🧁",
    "La opcion #1 para los amantes del chocolate sin más que decir 🍫 ",
    "No solo es bonita, al elaborarla con fresa natural es muy rica! 🍓",
    "La favorita de los niños, pero no te dejes engañar, el relleno es una sorpresa arcoiris 🌈🐰",
    "Sabor bonbon por dentro, gomitas mora azul y fresa por fuera 😋",
    "¿Tienes una tematica?, podemos hacerla! personalizamos para que todo convine en tu fiesta tematica 🐲",
    "complemento para tus pastel con gelatinas de helado, son muy esponjosas!🍧 \n Se vende por unidad",
    "Para quien busca un sabor mas acido y picosito 🌶️🥭 \n Se vente por unidad"
];

let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price = document.getElementById('price_cont');
let info = document.getElementById('description');

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
    ele.addEventListener('click', () => {
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        price.innerText = ele.getElementsByTagName('h4')[0].innerText;
        info.innerText = descripciones[i];
    })
})

//PONER UN SPAN A PRECIO POR UNIDAD PARA RESALTAR EL TEXTO.
