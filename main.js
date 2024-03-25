const content = {
    create : async function(){
        var cardContainer = document.getElementById("card-container")
        for(let i = 0; i < 24; i++){
            const response = await axios.get("https://foodish-api.com/api/")
            const imgUrl = response.data.image

            const card = document.createElement("div");
                card.classList.add("card");
                card.style.width = "18rem";

                const image = document.createElement("img");
                image.classList.add("card-img-top");
                image.classList.add("card-adjust")
                image.src = imgUrl;
                image.alt = "Imagem de capa do card";

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                const cardText = document.createElement("p");
                cardText.classList.add("card-text");
                cardText.textContent = "Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.";

                cardBody.appendChild(cardText);
                card.appendChild(image);
                card.appendChild(cardBody);

                cardContainer.appendChild(card)
        }
    }
}

content.create()



 function changeImages(){
    var firstImg = document.getElementById("first-slide")
    setSlide(firstImg)
 }

 async function setSlide(field){
    var response = await axios.get("https://foodish-api.com/api/")
    var url = response.data.image
    field.src = url
 }
 
 setInterval(changeImages, 3000)