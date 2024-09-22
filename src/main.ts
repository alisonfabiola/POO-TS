// Importar los ejercicios
import { cabeceraPagina } from './exercises/exercise1';
import { calculadora } from './exercises/exercise2';
import { cancion } from './exercises/exercise3';
import { cuenta } from './exercises/exercise4';
import { empleado } from './exercises/exercise5';

// Obtener el div de salida
const outputDiv = document.getElementById('output')!;

// Funciones para mostrar los resultados de cada ejercicio
document.getElementById('exercise1')?.addEventListener('click', (e) => {
  e.preventDefault();  // Evita que el enlace recargue la página
  outputDiv.innerHTML = cabeceraPagina();
});

document.getElementById('exercise2')?.addEventListener('click', (e) => {
  e.preventDefault();
  outputDiv.innerHTML = calculadora();
});

document.getElementById('exercise3')?.addEventListener('click', (e) => {
  e.preventDefault();
  outputDiv.innerHTML = cancion();
});

document.getElementById('exercise4')?.addEventListener('click', (e) => {
  e.preventDefault();
  outputDiv.innerHTML = cuenta();
});

document.getElementById('exercise5')?.addEventListener('click', (e) => {
  e.preventDefault();
  outputDiv.innerHTML = empleado();
});
