const animals = [
        {
            name: "Cat",
            imgPath: "./Img/Cat.jpg",
            description: "Cats are small, carnivorous mammals that are often kept as pets. They are known for their agility, playfulness, and independent nature."
        },
        {
            name: "Deer",
            imgPath: "./Img/Deer.jpg",
            description: "Deers are herbivores known for their slender bodies and distinctive antlers, which are usually carried by the males. They are commonly found in forests and grasslands."
        },
        {
            name: "Dog",
            imgPath: "./Img/Dog.jpg",
            description: "Dogs are domesticated mammals, not natural wild animals. They are known for their loyalty and companionship with humans, making them popular pets."
        },
        {
            name: "Elephant",
            imgPath: "./Img/Elephant.jpg",
            description: "Elephants are large mammals known for their long trunks, tusks, and big ears. They are social animals and are often found in groups called herds."
        },
        {
            name: "Koala",
            imgPath: "./Img/Koala.jpg",
            description: "Koalas are marsupials native to Australia. They are known for their tree-dwelling lifestyle, primarily feeding on eucalyptus leaves."
        },
        {
            name: "Lemur",
            imgPath: "./Img/Lemur.jpg",
            description: "Lemurs are primates endemic to the island of Madagascar. They are known for their large, reflective eyes and distinctively long tails."
        },
        {
            name: "Owl",
            imgPath: "./Img/Owl.jpg",
            description: "Owls are nocturnal birds of prey known for their distinctive calls and the ability to rotate their heads up to 270 degrees. They are skilled hunters."
        },
        {
            name: "Pelican",
            imgPath: "./img/Pelican.jpg",
            description: "Pelicans are large water birds with long bills and a distinctive throat pouch. They are known for their impressive fishing skills and soaring flight."
        },
        {
            name: "Polar Bear",
            imgPath: "./Img/Polar_bear.jpg",
            description: "Polar bears are large carnivorous mammals native to the Arctic region. They are well-adapted to life in the icy environment and are excellent swimmers."
        },
        {
            name: "Puffin",
            imgPath: "./Img/Puffin.jpg",
            description: "Puffins are seabirds known for their distinctive appearance, with colorful beaks and markings. They are skilled flyers and divers, primarily found in the northern hemisphere."
        }
    ];
    
const animalContainer = document.getElementById("animal-container");


let index = 0;
let currentAnimal = animals[index];

function randomAnimal() {
    index = Math.floor(Math.random() * animals.length);
    currentAnimal = animals[index];
}


function createAnimalCard() {
    randomAnimal();
    animalContainer.innerHTML = `
        <div class="flex items-center justify-center bg-[#526D82] w-fit h-fit rounded-xl flex-col text-[#DDE6ED] p-4" id="card">
            <h2 class="my-2 text-xl">${currentAnimal.name}</h2>    
            <img class="w-96 h-auto rounded-md mx-5" src="${currentAnimal.imgPath}" alt="${currentAnimal.name}">
            <p class="w-96 my-2">${currentAnimal.description}</p>
        </div>
    `;    
}