const cargador = ["pium!","pium!","pium!","pium!","pium!","pium!","pium!"];


function chauchat (cargador) {
    for (let i = 0; i < cargador.length;i++) {
        let probabilidad = Math.floor(Math.random() * 11);
        let esMultiplo = (i + 1) % 3 === 0 
        if (probabilidad >2 ) {
             console.log ("Illo, me he quedao pillá!")
             if(esMultiplo) {
                console.log ("\n");
              } 
         }
         else if (probabilidad <= 2 ){
            console.log (cargador[i]);
            if(esMultiplo) {
                console.log ("\n");
              } 
        }
    }

};


chauchat (cargador);