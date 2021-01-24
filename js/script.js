const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: function() {
        console.log("Meow!")
    }
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add(`subheading`);

// Question 5

const paragraphs = document.querySelectorAll(`p`);

for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red"
};

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.color = "yellow";

// Question 7

function myFunction (list) {
    for (i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
};

myFunction(cats);

// Question 8

function catsList(cats) {

    let catsP = "";
    let catsH5 = "";


    for (i = 0; i < cats.length; i++) {
        
        catsP = catsP + "<p>" + cats[i].name + "</p>";
        catsH5 = catsH5 + "<h5>" + cats[i].age + "</h5>";

        if (cats[i].age === undefined) {
            cats[i].age = "Age unknown"
        }

    }

    catsFinal = "<div>" + catsP + catsH5 + "</div>";

    return catsFinal;

};

catsList(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = catsList(cats);


