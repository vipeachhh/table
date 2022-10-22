// const container = document.getElementById('container');
// const div = document.createElement('div');

// const efir2 = document.createElement('efir2');

// container.appendChild(efir2);

// efir2.innerHTML = "hello kak dela?"

// div.className = 'child'
// div.innerText = "container 3"
// div.style.background = "blue"

// div.onclick = changeColor
// div.onmouseenter = changeColor
// div.onmouseleave = changeColorBack

// function changeColorBack() {
//     div.style.background = "blue";
//     div.innerHTML = "hoho"
// }

// function changeColor() {

//     console.log(' i was click ');
//     div.style.background = "green";
//     div.innerHTML = "haha"

// }

// container.appendChild(div);
// console.log(container)
// console.log(div)

const data = {
  count: 82,
  next: "https://swapi.dev/api/people/?page=2",
  previous: null,
  results: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.dev/api/people/1/",
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:10:51.357000Z",
      edited: "2014-12-20T21:17:50.309000Z",
      url: "https://swapi.dev/api/people/2/",
    },
    {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/8/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:11:50.376000Z",
      edited: "2014-12-20T21:17:50.311000Z",
      url: "https://swapi.dev/api/people/3/",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [],
      starships: ["https://swapi.dev/api/starships/13/"],
      created: "2014-12-10T15:18:20.704000Z",
      edited: "2014-12-20T21:17:50.313000Z",
      url: "https://swapi.dev/api/people/4/",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/2/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: ["https://swapi.dev/api/vehicles/30/"],
      starships: [],
      created: "2014-12-10T15:20:09.791000Z",
      edited: "2014-12-20T21:17:50.315000Z",
      url: "https://swapi.dev/api/people/5/",
    },
    {
      name: "Owen Lars",
      height: "178",
      mass: "120",
      hair_color: "brown, grey",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "52BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:52:14.024000Z",
      edited: "2014-12-20T21:17:50.317000Z",
      url: "https://swapi.dev/api/people/6/",
    },
    {
      name: "Beru Whitesun lars",
      height: "165",
      mass: "75",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "47BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:53:41.121000Z",
      edited: "2014-12-20T21:17:50.319000Z",
      url: "https://swapi.dev/api/people/7/",
    },
    {
      name: "R5-D4",
      height: "97",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, red",
      eye_color: "red",
      birth_year: "unknown",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: ["https://swapi.dev/api/films/1/"],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:57:50.959000Z",
      edited: "2014-12-20T21:17:50.321000Z",
      url: "https://swapi.dev/api/people/8/",
    },
    {
      name: "Biggs Darklighter",
      height: "183",
      mass: "84",
      hair_color: "black",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "24BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: ["https://swapi.dev/api/films/1/"],
      species: [],
      vehicles: [],
      starships: ["https://swapi.dev/api/starships/12/"],
      created: "2014-12-10T15:59:50.509000Z",
      edited: "2014-12-20T21:17:50.323000Z",
      url: "https://swapi.dev/api/people/9/",
    },
    {
      name: "Obi-Wan Kenobi",
      height: "182",
      mass: "77",
      hair_color: "auburn, white",
      skin_color: "fair",
      eye_color: "blue-gray",
      birth_year: "57BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/20/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: ["https://swapi.dev/api/vehicles/38/"],
      starships: [
        "https://swapi.dev/api/starships/48/",
        "https://swapi.dev/api/starships/59/",
        "https://swapi.dev/api/starships/64/",
        "https://swapi.dev/api/starships/65/",
        "https://swapi.dev/api/starships/74/",
      ],
      created: "2014-12-10T16:16:29.192000Z",
      edited: "2014-12-20T21:17:50.325000Z",
      url: "https://swapi.dev/api/people/10/",
    },
  ],
};

console.log(data.results);

const DB = data.results;

class TableGenerator {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  addRow(table, entityId) {
    let entityTr = document.createElement("tr");
    this.fillRow(entityId, entityTr);
    table.appendChild(entityTr);
  }

  fillRow(entityId, entityTr) {
    let propertiesList = Object.keys(this.data[0]);
    for (let p = 0; p < propertiesList.length; p++) {
      let td = document.createElement("td");
      td.innerText = this.data[entityId][propertiesList[p]];
      td.onclick = function () {
        console.log(td.innerText); // выводим всю разметку и содержание внутри когда нажимаем на ячейку
        let input = document.createElement("input"); // создаем элемент <input>
        input.value = td.innerText; //значение инпута равно значению ячейки
        td.innerText = null;
        td.appendChild(input); // в ячейки добавляется <input>
        input.focus();

        input.addEventListener("blur", () => closeInputAndSaveValue(td, input));
      };

      entityTr.appendChild(td);
    }
  }

  setData(data, id) {
    this.id = id; // id = table-generator
    this.data = data;
  }

  display() {
    const myTable = document.getElementById(
      this.id
    ); /* вся таблица это table-generator */
    let column = document.createElement("tr"); // создаем элемент tr - строку и получаем столбик = строке
    let dataProps = Object.keys(
      this.data[0]
    ); /* присваиваем dataProps КЛЮЧИ, т.е. name height и т.д.*/

    myTable.appendChild(column); // добавляем созданный столбик - строку

    for (let v = 0; v < dataProps.length; v++) {
      let th = document.createElement("th"); // создаем заголовочную ячейку
      th.innerText = dataProps[v];
      column.appendChild(th); // столбик - строка жирно выделенных свойств
    }
    for (let z = 0; z < this.data.length; z++) {
      this.addRow(myTable, z);
    }
  }
}

function closeInputAndSaveValue(td, input) {
  td.innerText = input.value;
  input.removeEventListener("blur", () => closeInputAndSaveValue(td, input));
  input.remove();
}
const MyTable = new TableGenerator();

MyTable.setData(DB, "table-generator");

MyTable.display();
