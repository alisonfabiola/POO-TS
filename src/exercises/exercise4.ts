/**
EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos: 
-Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de
cuenta y número de cuenta.
-Crea   un  método  llamado   depositar  y  en  base  a   la   cantidad   ingresada   en  el
constructor haz una condición de que si la cantidad es menor a $5.00 que se
imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo
imprima   un   mensaje   de   que   se   ha   depositado   correctamente   y   la   cantidad
depositada.
-Crea un método llamado retirar, que reciba un parámetro llamado valor y en base
a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje
de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de
$5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la
cuenta.
-Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de
cuenta. 
-Define un objeto de la clase Cuenta y llama sus métodos.
 */

export function cuenta() {
    class Cuenta {
    public nombre: string;
    public cantidad: number;
    public tipoCuenta: string;
    public numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(): string {
        if (this.cantidad < 5) {
        return 'El valor a depositar debe ser mayor a $5.00';
        } else {
        return `Se ha depositado correctamente la cantidad de $${this.cantidad}`;
        }
    }

    retirar(valor: number): string {
        if (valor > this.cantidad || this.cantidad <= 5) {
    return 'No hay suficiente saldo en la cuenta o la cantidad es menor de $5.00';
        } else {
        this.cantidad -= valor;
        return `Has retirado $${valor}. Te queda $${this.cantidad} en la cuenta.`;
        }
    }

    mostrarDatos(): string {
        return `Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`;
    }
    }

    const cuenta = new Cuenta('Alison Fabiola', 200, 'Ahorros', '2551282022');
    return `
    <p>${cuenta.mostrarDatos()}</p>
    <p>${cuenta.depositar()}</p>
    <p>${cuenta.retirar(20)}</p>
    `;
}
