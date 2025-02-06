//
document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.key');
    const operators = document.querySelectorAll('.operator');
    const erasers = document.querySelectorAll('.eraser');
    
    // Agregar eventos para los botones de números
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonValue = event.target.textContent;
            
            screen.textContent += buttonValue;
        });
    });

    // Agregar eventos para los botones de operadores
    operators.forEach(operator => {
        operator.addEventListener('click', (event) => {
            const operatorValue = event.target.textContent;
            if (operatorValue === '=') {
                try {
                    // Evaluamos la expresión en la pantalla y mostramos el resultado
                    screen.textContent = eval(screen.textContent);
                } catch (error) {
                    screen.textContent = "Error";
                }
            } else {
                // Agregamos el valor del botón a la pantalla
                screen.textContent += ` ${operatorValue} `;
            }
        });
    });
    erasers.forEach(eraser => {
        eraser.addEventListener('click', (event) => {
            const eraserValue = event.target.textContent;

            if(eraserValue === 'AC'){
                screen.textContent *= 0;
            } else {
                let newtext = screen.textContent.slice(0, -1);
                screen.textContent = newtext;
            }
        })
    })
});

console.log(window.innerHeight)
