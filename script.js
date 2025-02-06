document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.key');
    const operators = document.querySelectorAll('.operator');
    
    // Agregar eventos para los botones de números
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonValue = event.target.textContent;
            
            // Si el valor es el botón de resultado (=)
            if (buttonValue === '=') {
                try {
                    // Evaluamos la expresión en la pantalla y mostramos el resultado
                    screen.textContent = eval(screen.textContent);
                } catch (error) {
                    screen.textContent = "Error";
                }
            } else {
                // Agregamos el valor del botón a la pantalla
                screen.textContent += buttonValue;
            }
        });
    });

    // Agregar eventos para los botones de operadores
    operators.forEach(operator => {
        operator.addEventListener('click', (event) => {
            const operatorValue = event.target.textContent;
            screen.textContent += ` ${operatorValue} `;
        });
    });
});
