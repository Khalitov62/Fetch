fetch("https://jsonplaceholder.typicode.com/albums/1/photos", {
   
})
 .then((resp) => resp.json()) 
 .then((datas)=> {
    let container = document.querySelector(".container");
    let row = document.createElement("div");
    row.className = "row justify-content-between";
    datas.forEach((data) => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        let card_body = document.createElement("div");
        let text = document.createElement("p");
        let id=document.createElement("span")
        card.className = "card";
 
        card.style.width = "18rem";
        img.className = "card-img-top";
        card_body.className = "card-body";
        text.className = "card-text";

        img.src = data.url;
        text.innerHTML = data.title;
        id.innerHTML=data.id;

        card.append(id)
        card_body.appendChild(img);
        card_body.appendChild(text);
        card.appendChild(card_body);
        
        row.appendChild(card);
    });
    container.appendChild(row);
})
