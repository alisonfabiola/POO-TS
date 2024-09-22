/**EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
-Crear un constructor que reciba como parámetros el título y género de la canción.
-Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
-Crea un método para mostrar los datos de la canción.  */

export function cancion() {
    class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Iniciar autor con un valor vacío
    }

      // Usamos este método para obtener el valor de `autor`
    getAutor(): string {
        return this.autor;
    }

      // Usamos este método para asignar el valor de `autor`
    setAutor(autor: string): void {
        this.autor = autor;
    }

      // Este método mostrará los datos de la canción, incluyendo el autor
    mostrarDatos(): string {
        return `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.getAutor()}`;
    }
    }

    // Aquí creamos una instancia de Cancion y usamos los métodos
    const cancion = new Cancion('Cancioncitas de amor', 'Bachata');
    cancion.setAutor('Romeo Santos'); // Establecemos el valor del autor correctamente

    // Retornamos los datos de la canción
    return `<p>${cancion.mostrarDatos()}</p>`;
}
