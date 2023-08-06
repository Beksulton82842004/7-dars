const elName = document.querySelector(".input-name");
 const elRelationship = document.querySelector(".input-relationship");
 const elNumber = document.querySelector(".input-phone");
 const elForm = document.querySelector("#form")
 const elCards = document.querySelector(".cards");



 elForm.addEventListener ("submit", function(evt) {
    evt.preventDefault();
    if(elName.value !== ""){ 
        const newCard = document.createElement("div")
        newCard.className = "card p-3 mt-2" 
        newCard.innerHTML=`<div class="card-title"> ${elName.value} </div> 
        <p class="card-relationship"> ${elRelationship.value} </p>
        <p class="card-phone"> ${elNumber.value} </p>
        ` 
       
       elCards.appendChild(newCard)
       elForm.reset()
    } else {
        alert(`error`)
    }


}  ) 