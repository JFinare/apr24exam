import data from './data.js';
const root=document.querySelector("#root");

function buildMeUp(){
let introEl =document.createElement("section");
introEl.className="intro"
let introHead=document.createElement("h1");
introHead.className="intro__header"
introEl.appendChild(introHead);


let contEl=document.createElement("section");
contEl.className="container";

function cardDealer(techno){
  let theCard=document.createElement("div");
  theCard.className="card";

  let cardHead=document.createElement("div");
  let cardBody=document.createElement("div");
  cardHead.className="card__header";
  cardBody.className="card__body";

  let cardImg=document.createElement("div");
  cardImg.className="card__body__image";

  let imgTag=document.createElement("img");
  let cardText=document.createElement("div");
  cardText.className="card__body__text"
  
  if(techno==="angular"){
  imgTag.setAttribute('src',data.angular.image)
  imgTag.setAttribute('alt',data.angular.title)
  cardText.innerText=data.angular.text
  }else if(techno==="firebase"){
    imgTag.setAttribute('src',data.firebase.image)
    imgTag.setAttribute('alt',data.firebase.title)
    cardText.innerText=data.firebase.text

  }else if (techno==="nodejs"){
    imgTag.setAttribute('src',data.nodejs.image)
    imgTag.setAttribute('alt',data.nodejs.title)
    cardText.innerText=data.nodejs.text

  }else if(techno==="react"){
    imgTag.setAttribute('src',data.react.image)
    imgTag.setAttribute('alt',data.react.title)
    cardText.innerText=data.react.text
  }
  cardBody.appendChild(cardImg,cardText);
  theCard.appendChild(cardHead, cardBody);
  return theCard;
}
contEl.appendChild(cardDealer("angular"),cardDealer("firebase"),cardDealer("nodejs"),cardDealer("react"))
root.appendChild(introEl, contEl);

}



function main() {
  console.log(data);
  buildMeUp();
}

main();
