//NASA APOD API
async function getNASA(){
    try {
        const responseNASA = await fetch ("https://api.nasa.gov/planetary/apod?api_key=zZZumdFIPeG0wPVv3ga7fwnXpJ2Cc5fp2YbBa8u9");
        console.log(responseNASA);

        const responseDataNASA = await responseNASA.json();
        console.log(responseDataNASA);

        const sortedDataNASA = {
            copyright: responseDataNASA.copyright,
            date: responseDataNASA.date,
            description: responseDataNASA.explanation,
            title: responseDataNASA.title,
            image: responseDataNASA.url
        }
        populatedUIDATA(sortedDataNASA)
    }
    catch(error){

    }
}
getNASA()

const imageCopyright = document.querySelector(".image-copyright");
const imageDescription = document.querySelector(".image-description");
const imageTitle = document.querySelector(".image-title");
const imageBg = document.querySelector(".image-container");
const imageWiki = document.querySelector(".image-wiki");
console.log(imageWiki);

function populatedUIDATA(dataNASA){
    imageCopyright.textContent = dataNASA.copyright;
    imageDescription.textContent = dataNASA.description;
    imageTitle.textContent = dataNASA.title;
    imageBg.style.backgroundImage = `url(${dataNASA.image})`;
    imageWiki.href = `https://google.com/search?q=${dataNASA.title}`;
}

//AFFICHAGE DE LA DATE DU JOUR
const date = document.querySelector(".date");

let today = new Date();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let day = today.getDate();

let currentDate = `${month}/${day}/${year}`;
date.textContent = currentDate;