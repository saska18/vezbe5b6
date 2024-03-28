
//console.log(obrisiDugmad);

function menjanjeBoje(boja){
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}

//menjanjeBoje("green");

let menjanjeBojeA=(boja)=>{
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}

//menjanjeBojeA("blue");

let menjanjeBojeB=(boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=> dugme.style.backgroundColor=boja);
menjanjeBojeB("purple");

let obrisiDugmad=document.getElementsByClassName("obrisi");

for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click",function(e){
        console.log(this);
        console.log(this.parentNode);
        let elementZaBrisanje=this.parentNode;
        elementZaBrisanje.remove();
        //document.getElementById("lista".removeChild(elementZaBrisanje));
    })
}

/*function obrisiRed(){
    this.parentNode.remove();
}

for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click",obrisiRed);
}*/

function dodajDestinaciju(event){

    event.preventDefault();
    let inputPolje=document.querySelector("#dodaj-destinaciju input");

    let nazivNoveDest=inputPolje.value;

    if(nazivNoveDest){
        let ul=document.getElementById("lista");
        let noviLi=document.createElement("li");

        noviLi.innerHTML=`<span class="naziv">${nazivNoveDest}</span>
        <span class="obrisi">obriši</span>`
        ul.appendChild(noviLi);

        inputPolje.value="";
    }

    function pozivCallback(){
        let forma=document.forms["#dodaj-destinaciju"];
        forma.addEventListener["submit",dodajDestinaciju];
    }

}

document.addEventListener("DOMContentLoaded",pozivCallback);