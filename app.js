class Resolve {
    constructor(num1 , num2 , opSum , opRes , opMul , opDiv ) {
        this.num1 = num1 ;
        this.num2 = num2 ;
        this.opSum = opSum ;
        this.opRes = opRes ;
        this.opMul = opMul ;
        this.opDiv = opDiv ;
    }

}

class UI {
    //Suma
    sumar(num1 , num2) {
        //verificamos que el chechbox que elije la opcion suma este valido
        const checkbox = document.getElementById('checkS').checked
        if(checkbox == true) {
            // si el checkbox esta valido en la opcion suma, realizara la suma
            document.getElementById('Sum').value = `${parseInt(num1) + parseInt(num2)}`
        }
    }
    //Restar
    restar(num1 , num2) {
        //verificamos que el chechbox que elije la opcion suma este valido
        const checkbox = document.getElementById('checkR').checked
        if(checkbox == true) {
            // si el checkbox esta valido en la opcion suma, realizara la suma
            document.getElementById('Res').value = `${parseInt(num1) - parseInt(num2)}`
        }
    }
    //Multiplicar
    multiplicar(num1 , num2) {
        //verificamos que el chechbox que elije la opcion suma este valido
        const checkbox = document.getElementById('checkM').checked
        if(checkbox == true) {
            // si el checkbox esta valido en la opcion suma, realizara la suma
            document.getElementById('Mul').value = `${parseInt(num1) * parseInt(num2)}`
        }
    }
    //Dividir
    dividir(num1 , num2) {
        //verificamos que el chechbox que elije la opcion suma este valido
        const checkbox = document.getElementById('checkD').checked
        if(checkbox == true) {
            // si el checkbox esta valido en la opcion suma, realizara la suma
            document.getElementById('Div').value = `${parseInt(num1) / parseInt(num2)}`
        }
    }
}

document.getElementById('form-resolve').addEventListener('submit' , (e) => {
    e.preventDefault();

    const num1 = document.getElementById('numero1').value
    const num2 = document.getElementById('numero2').value
    //console.log(num1) para ver que me entrega, y verificar que sea el valor con ".value"
    console.log(num1);

    //Creo una clase
    const ui = new UI()


    //Evaluar si los datos ingresados son correctos(Solo aceptar numeros validos)

    if(num1.length === 0 || num2.length === 0){
        alert('Ingrese numeros validos');
    } else {

        //llamamos al metodo
        ui.sumar(num1 , num2)
        ui.restar(num1 , num2)
        ui.multiplicar(num1 , num2)
        ui.dividir(num1 , num2)
    }

})


