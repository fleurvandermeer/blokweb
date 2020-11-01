var tekstjes=["ELKE WEEK NIEUWE ITEMS ONLINE", "GRATIS VERZENDING VAN JE BESTELLING VANAF &euro;10", "VÓÓR 23:00 BESTELD = VANDAAG VERZONDEN"];

var tekstNummer = 0;

var tempo = 3000;

function startTimer(){
    setTimeout(
        function(){
            var tekstje = document.querySelector("main section:first-of-type p span"); 
            tekstNummer++;
            if (tekstNummer >= tekstjes.length){
                tekstNummer = 0;
            }
            tekstje.innerHTML = tekstjes[tekstNummer];
            
            startTimer();

        } , 
        tempo
    ) 
}

startTimer();



/***********************/
/* Hamburger menu */
var deButton = document.querySelector("img");

function doeUlHeenEnWeer(){
	let hetFormulier = document.querySelector("section:first-of-type ul");
	hetFormulier.classList.toggle("toonUl");
}

deButton.addEventListener("click", doeUlHeenEnWeer);


