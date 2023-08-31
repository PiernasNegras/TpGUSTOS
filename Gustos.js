//programa que ayude a entender qué cosas le gustan a distintas personas.

//------------------------------------Defino mis personas---------------------------------------------------------------

const Rosa = {
//le gustan las cosas que pesan 2 kilos (o sea 2000 gramos) o menos.

}

const Estefania = {
 //le gustan las cosas de colores fuertes.
}

const Luisa ={
//le gustan las cosas que sean de un material que brilla.
}

const Juan = {
//le gustan las cosas que, o bien son de un color que no es fuerte, o bien pesan entre 1200 y 1800 gramos.
}


//---------------------------------------Defino mis colores---------------------------------------------------------------

const rojo = {
    esFuerte : true,
}

const verde = {
    esFuerte : true,
}

const celeste = {
    esFuerte : false,
}

const pardo = {
    esFuerte : false,
}


//---------------------------------------Defino mis materiales-------------------------------------------------------

const cobre = {
    esBrillante : true,
}

const vidrio = {
    esBrillante : true,
}

const madera = {
    esBrillante : false,
}

const cuero = {
    esBrillante : false,
}

const lino = {
    esBrillante = false,
}

//---------------------------------------Defino mis objetos------------------------------------------------------------

const remera ={
   color : rojo,
   peso : 800,
   material : lino,
}

const pelota = {
    color : pardo,
    peso : 1300,
    material : cuero,
}

const biblioteca = {
    color : verde,
    peso : 8000,
    material : madera,
}

const munieco = {
    color : celeste,
    material : vidrio,
    peso : undefined,

    //cambio de peso actual
    cambiarDePeso(nuevoPeso){
        this.peso = nuevoPeso
    },
}

const placa = {
    color :undefined,
    material : cobre,
    peso : undefined,

    //cambio peso actual y color
    cambiarDePeso(nuevoPeso){
        this.peso = nuevoPeso
    },
    cambiarDeColor(nuevoColor){
        this.color = nuevoColor
    },

}

//---------------------------------------Defino el Bolichito------------------------------------------------------------

const Bolichito = {
    mostrador : pelota,
    vidriera : remera,

    //cambiar mis objetos
    cambioElObjetoDelMostrador(unObjeto){
        this.mostrador = unObjeto
    },
    cambioElObjetoDeVidriera(unObjeto){
        this.vidriera = unObjeto
    },

    //ver si mis objetos en vidriera son de un material que brilla
    esBrillante(){
        return this.mostrador.material.esBrillante() && this.vidriera.material.esBrillante()
    },

    //indica si el objeto en el mostrador pesa más que el de la vidriera.s
    estaDesequilibrado(){
        return this.mostrador.peso() > this.vidriera.peso()
    },

    //indica si alguno de los dos objetos que tiene el boliche es del color indicado.
    tieneAlgoDeColor(elColor){
        return this.mostrador.color() == elColor || this.vidriera.color() == elColor
    }

}



