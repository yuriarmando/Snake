//funzione all'avvio
const DIM = 20; // costante dimensione campo
var campo = new Array(DIM);//vettore campo da gioco
var direzione = "dx"; //direzione destra iniziale dello snake all'avvio
/* Costanti per colori*/
const GRIGIO = "rgb(127, 127, 127)";
const BIANCO = "rgb(255, 255, 255)";
const ROSSO = "rgb(255, 0, 0)";
const BLU = "rgb(0, 0, 255)";
/* POSIZIONE CIBO*/
var xCibo, yCibo; //coordinate cibo
var nCibo;//quanto cibo è stato mangiato

/* POSIZIONE SNAKE */
var posSn x = 1; // coordinata x snake
var posSn y = 1; //coordinate y snake
var coda= new Array(0);// array contenente le posizioni della coda

function avvia(){
    initMatrice();
    //disegnaMatrice()
    disegnaCampo();


    // coda

    coda.push(posSn_x + ";"+ posSn_y);

    document.getElementById("btn_" + posSn_x + "_" + posSn_y).style.backgroundColor = Blu;
    moveSnake();

}
function initMatrice(){
    for(var i = 0; i<DIM; i++){
        campo[i]= new Array(DIM);
        //inizializzo la matrice
        for(var i = 0; i<DIM; i++){
            for(var j = 0; i<DIM; j++){
                campo[i][j] = 0;
            }
        }
function disegnaCampo(){
    var refBody = document.getElementsByTagName("body")[0];
    var tabella = document.createElement("table");
    var riga, cella, btn;
    refBody.appendChild(tabella);
        for(int i=0; i< DIM; i++){
            riga = document.createElement("tr");
            tabella.appendChild(riga);
            for(int i=0; j< DIM; j++){
                //crea cella
                cella = document.createElement("td");
                cella.style.width = "18px";
                riga.appendChild(cella);

                //Pulsanti
                btn = document.createElement("input");
                btn.type = "button";
                btn.id = "btn" + i + "-" + j;
                btn.style.width = "18px";
                btn.style.height = "15px";
                btn.style.backgroundColor = GRIGIO;
                btn.style.color = BIANCO;

                btn.setAttribute("Onclick", "get_coord(this)");
            }

        }
}

function visualizza(btn){


}

function get_coord(btn){
        // btn_1_4 --> x:1| y: 4
        var vect = btn.id.split("_");
        alert();

}

function cambiaDirezione(event){
    var codice = event.keyCode;
    if(codice == 37){
        direzione = "sx";
    }
    if(codice == 38){
        direzione = "up";
    }
    if(codice == 39){
        direzione = "dx";
    }
    if(codice == 40){
        direzione = "dw";
    }


}
