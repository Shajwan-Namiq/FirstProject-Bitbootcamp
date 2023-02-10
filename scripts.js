const arrayData = [{
        id: 1,
        title: "Dining room",
        desc: "Dining room information  Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        pictureUrl: "/img/header3.jpg",
    },
    {
        id: 2,
        title: "Arm Chair",
        desc: "Arm Chair information Lorem ipsum dolor sit, amet consectetur adipisicing elit ",
        pictureUrl: "/img/header4.jpg",
    },
    {
        id: 3,
        title: "Living Room",
        desc: "Living Room information  Lorem ipsum dolor sit, amet consectetur adipisicing elit",
        pictureUrl: "/img/header5.jpg",
    },
];

let htmlCode = ``;

arrayData.forEach(function(value) {

    htmlCode =
        htmlCode +
        `
      <div class="card">
      <img src=${value.pictureUrl} alt=${value.title} style="width: 100%" />
            <div class="container">
                <h2>${value.title}</h2>
                <p>
                ${value.desc}
                 </p>
                <button class="button">Buy</button>
            </div>
        </div>

 

  `;
});

const Cards = document.querySelector(".all-cards");
Cards.innerHTML = htmlCode;