/*
Crear tarjeta
Crear secciones para tarjeta
Img
Nombre, desc, edad, lista de algo
Insertar en la tarjeta
Mostrar dentro de div.container
Funciones para crear items
*/

//En caso que no funcione getElementBy podemos seleccionarlo con document.querySelector(.siclase) y document.querySelector(#siusoel ID). En este caso sería document.querySelector(".card-container")


const CARDS_CONTAINER = document.querySelector("#card-container");
const USERS = [
  {
    id: 1,
    username: "booklover123",
    description: "Avid reader and coffee enthusiast.",
    age: 29,
    fav_books: {
      books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"],
    },
  },
  {
    id: 2,
    username: "literature_junkie",
    description: "Poetry lover and amateur writer.",
    age: 35,
    fav_books: {
      books: ["The Great Gatsby", "Invisible Man", "Beloved"],
    },
  },
];

// Crear secciones
function createElements() {
  const cardObj = {
    name_section: document.createElement("h3"),
    desc_section: document.createElement("p"),
    age_section: document.createElement("p"),
    book_section: document.createElement("div"),
  };
  return cardObj;
}

// Crear tarjeta
// Inyectamos info
function injectData(obj, user) {
  const bookList = user.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
  });

  obj.name_section.textContent = user.username;
  obj.desc_section.textContent = user.desc;
  obj.age_section.textContent = user.age;
  obj.book_section.append(...bookList);
  renderCard(obj);
}

function renderCard(cardObj) {
  const card = document.createElement("div");
  card.append(
    cardObj.name_section,
    cardObj.desc_section,
    cardObj.age_section,
    cardObj.book_section,
  );
  card.className = "div-creado";
  CARDS_CONTAINER.appendChild(card);
}

USERS.forEach((user) => {
  const cardData = createElements();
  injectData(cardData, user);
});




//Lista 
    //Llama una función de tipo callback y regresa un array con los resultados, por cada libro voy a tener un elemento ul. 
   
//Crear tarjeta
//TextContent e inner text son intercambiables. Nos sirven para extraer infortmación de nuestras constantes en la parte de arriba.
//NAME_SECTION.textContent = USER.userName;
//DECS_SECTION.textContent = USER.desc;
//AGE_SECTION.textContent = USER.age;
//Lo que tengo en booklist es no es un nodo, es un arreglo. Es por ello que necesitamos los puntitos. Muestra todos los elementos con append. appendChild manda la operación sólo 1 vez, append lo hace con varios.
//BOOK_SECTION

//Push agarra nuestra colección de array y lo agrega hasta el final. Append hace lo mismo pero en nodos.
//CARD.append(NAME_SECTION, DECS_SECTION, AGE_SECTION, BOOK_SECTION);

//Inyectar tarjeta en el container
//CARDS_CONTAINER.appendChild(CARD);


//Las varaibles tienen que estar dentro de funciones.
//Deben funcionar par amúltiples usuarios. Que tengan por lo menos dos columns.
/*
const users = [
  {
    id: 1,
    username: "booklover123",
    description: "Avid reader and coffee enthusiast.",
    age: 29,
    fav_books: {
      books: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"]
    }
  },
  {
    id: 2,
    username: "literature_junkie",
    description: "Poetry lover and amateur writer.",
    age: 35,
    fav_books: {
      books: ["The Great Gatsby", "Invisible Man", "Beloved"]
    }
  }
]; */