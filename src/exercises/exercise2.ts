/**
EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
-Sumar
-Restar
-Multiplicar
-Dividir
-Potencia
-Factorial
 */

export function calculadora() {
    class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b !== 0) {
        return a / b;
        } else {
        throw new Error("No se puede dividir por cero.");
        }
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(n: number): number {
        if (n === 0 || n === 1) {
        return 1;
        } else {
          return n * this.factorial(n - 1);
        }
    }
    }

    const calc = new Calculadora();
    return `
    <p>Suma: ${calc.sumar(6, 3)}</p>
    <p>Factorial de 5: ${calc.factorial(5)}</p>
    `;
}
