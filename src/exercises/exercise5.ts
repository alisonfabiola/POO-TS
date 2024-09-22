/**
EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
-Crear un método constructor para recibir los datos.
-Crea un método que en base a la edad imprima un mensaje si es mayor de edad o
no.
-Crea   un   método   para   mostrar   todos   los   datos   personales   (será   el   método
abstracto).
-Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
-En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
-La clase Empleado va heredar de la clase Persona.
-Define un objeto de la clase Empleado y que se imprima los datos del empleado y
su sueldo.
 */
export function empleado() {
    abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    esMayorDeEdad(): string {
        if (this.edad >= 18) {
        return `${this.nombre} es mayor de edad.`;
        } else {
        return `${this.nombre} es menor de edad.`;
        }
    }

    abstract mostrarDatos(): string;
    }

    class Empleado extends Persona {
    public sueldo: number;
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): string {
        return `El sueldo de ${this.nombre} es $${this.sueldo}`;
    }

    mostrarDatos(): string {
        return `Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`;
    }
    }

    const empleado = new Empleado('Fabiola', 'Torres', 'Calle Las Flores 13', '7900-6428', 26, 1000);
    return `
    <p>${empleado.mostrarDatos()}</p>
    <p>${empleado.esMayorDeEdad()}</p>
    <p>${empleado.imprimirSueldo()}</p>
    `;
}
