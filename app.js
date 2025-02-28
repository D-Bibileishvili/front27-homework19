// N1
const buttonDelete = document.querySelector(".click");

buttonDelete.addEventListener("click", (event) => {
  buttonDelete.remove();
});

// N2
let imgTag = document.createElement("img");

imgTag.src =
  "https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A";
imgTag.alt = "img Description";
imgTag.width = 300;
document.body.appendChild(imgTag);
/*
// N4
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScz6hXP1gCjGNGnVjlZns0edukmCxGnVbHTA&s",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMORUO48KiCsGFNtnz94_8Q3jgp5-iI-KpgA&s",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6ReJpcbvMPj4MunVFuh-jNTew7fFsVhttQ&s",
    actor: "Tom Felton",
  },
];

const button = document.querySelector("button");

const setCharacters = characters
  .map(
    (character) => `
      <div class="character-card">
  <div class='bg-color'>
    <div>
      <h3>${character.first_name} ${character.last_name}</h3>
    </div>
    <div>
      <p>House: ${character.house}</p>
      <p>Actor: ${character.actor}</p>
    </div>
    </div>
    <img
      src="${character.image}"
      alt="${character.first_name} ${character.last_name}"
    />
</div>
    <div><button class="delete-btn">delete</button></div>
  `
  )
  .join("");

document.getElementById("characters-list").innerHTML = setCharacters;

charactersList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest(".character-card").remove();
  }
});

// button.addEventListener("click", (event) => {
//   return characters.classList.remove();
// });
*/

const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScz6hXP1gCjGNGnVjlZns0edukmCxGnVbHTA&s",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMORUO48KiCsGFNtnz94_8Q3jgp5-iI-KpgA&s",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6ReJpcbvMPj4MunVFuh-jNTew7fFsVhttQ&s",
    actor: "Tom Felton",
  },
];

// Get the section where characters will be inserted
const charactersList = document.getElementById("characters-list");

// Generate and insert character cards
charactersList.innerHTML = characters
  .map(
    (character) => `
        <div class="character-card">
          <div class='bg-color'>
            <div>
              <h3>${character.first_name} ${character.last_name}</h3>
            </div>
            <div>
              <p>House: ${character.house}</p>
              <p>Actor: ${character.actor}</p>
            </div>
          </div>
          <img
            src="${character.image}"
            alt="${character.first_name} ${character.last_name}"
          />
          <div><button class="delete-btn">Delete</button></div>
        </div>
      `
  )
  .join("");

// Event listener for delete buttons (Event Delegation)
charactersList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest(".character-card").remove();
  }
});
