const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);



const parRed = document.createElement('p');
parRed.classList.add('red-text');
parRed.style.color = "red";
parRed.textContent = "Hey I'm red!";

container.appendChild(parRed);


const blueSubTitle = document.createElement('h3');
blueSubTitle.classList.add('blue-h3');
blueSubTitle.style.color = "blue";
blueSubTitle.textContent = "I'm a blue h3";

container.appendChild(blueSubTitle);

const body = document.querySelector("body")


const pinkContainer = document.createElement('div');
pinkContainer.classList.add("pink-container");
pinkContainer.style.border = "2px solid black";
pinkContainer.style.backgroundColor = "pink";

container.appendChild(pinkContainer);

const h1div = document.createElement("h1");
h1div.classList.add("h1InDiv");
h1div.textContent = "I'm in a div!";

pinkContainer.appendChild(h1div);

const p2 = document.createElement("p");
p2.textContent = "ME TOO";

pinkContainer.appendChild(p2);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello Wordl");


// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener('click', () => {
//     alert("Hello World");
// });


btn2.addEventListener('click', function (e) {
    console.log(e);
  });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});