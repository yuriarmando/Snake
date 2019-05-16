const DIM = 20; //dimensione del campo da gioco
var campo = new Array(DIM); //vettore campo da gioco

var direzione = "dx";   //direzione snake

//COSTANTI PER I COLORI
//-------------------------------------------------------------------
const GRIGIO = "rgb(127,127,127)";
const BIANCO = "rgb(255,255,255)";
const ROSSO = "rgb(255,0,0)";
const BLU = "rgb(0,0,255)";
const NERO = "rgb(22,22,22)";
const VERDE = "rgb(0, 255, 115)";
//-------------------------------------------------------------------


//VARIABILI CIBO
//-------------------------------------------------------------------
var xCibo,yCibo;    //coordinate cibo
var nCibo;      //quanto cibo ha mangiato
//-------------------------------------------------------------------


//VARIABILI SNAKE
//-------------------------------------------------------------------
var xSnake = 1;    //coordinate testa
var ySnake = 1;    //coordinate testa
var coda = new Array(0);  //array con le poszioni della coda
//-------------------------------------------------------------------



//funzione di avvio
function avvia(){
    initMatrix();
//disegna matrice
    disegnaCampo(); //grafica del campo
    coda.push(xSnake + "_" + ySnake);
    // coloro testa
    document.getElementById("btn_"+ xSnake + "_" + ySnake).style.backgroundColor = BLU;
//controlla snake
}
//inizializza matrice
function initMatrix(){
//creo la matrice
    for(var i = 0;i<DIM;i++){
        campo[i] = new Array(DIM);
    }

//inizializzo la matrice a 
    for(var i=0;i<DIM;i++){
        for(var j=0;j<DIM;j++){
            campo[i][j] = 0;
        }
    }
}
function disegnaCampo(){
//specificando il tag e la posizione  mi da tutti i componenti all'interno del tag body
    var refBody = document.getElementsByTagName("body")[0];

//creo un elemento 
    var tabella = document.createElement("table");

    var riga, cella, btn;
//all'interno del body inserisco un elemento html (in questo caso la tabella)
    refBody.appendChild(tabella);
    tabella.style.margin = "20px auto";
    tabella.style.borderSpacing = "0";
    for(i=0;i<DIM;i++){
        riga = document.createElement("tr");
        tabella.appendChild(riga);
        for(j=0;j<DIM;j++){
            cella = document.createElement("td");
            cella.style.width = "18 px"
            riga.appendChild(cella);
            btn = document.createElement("input");
            btn.type = "button";
            btn.id ="btn_"+i+"_"+j;
            btn.style.width="20px";
            btn.style.height="20px";
            btn.style.border="1px solid "+VERDE ;
            btn.style.backgroundColor=NERO;
            btn.setAttribute("onClick", "get_coord(this)");
            cella.appendChild(btn);        
        }
    }
}
function get_coord(btn) {
    var vect = btn.id.split("_");
    alert(vect [1]+ " "+vect[2]);
}
function cambiaDirezione(event){
    var codice = event.keyCode;
    if (codice == 65){
        direzione = "sx";
        if (codice == 68){
            direzione = "sx"
        }
        }
    if (codice == 87){
        direzione = "up";
        if (codice == 83){
            direzione = "up"
        }
        }
    if (codice == 68){
        direzione = "dx";
        if (codice == 65){
            direzione = "dx"
        }
        }
    if (codice == 83){
        direzione = "dw";
        if (codice == 87){
            direzione = "dw";
        }
        }
}
