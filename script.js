document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.key, .operator, .eraser'); // Unimos los botones en un solo selector
    const animButtons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonValue = event.target.textContent;

            if (button.classList.contains('key')) { // Si es un botón numérico o de texto
                if (screen.textContent === "Error" || screen.textContent === "Infinity") {
                    screen.textContent = buttonValue; 
                } else {
                    if (screen.textContent === "0") {
                        screen.textContent = "";
                    }
                    screen.textContent += buttonValue;
                }
            } 

            else if (button.classList.contains('operator')) { // Si es un operador
                const hasParentheses = screen.textContent.includes("(");

                if (buttonValue === '=') {
                    if (hasParentheses) {
                        screen.textContent = screen.textContent.replace("(", "*").replace(")", "");
                    }
                    try {
                        screen.textContent = eval(screen.textContent);
                    } catch (error) {
                        screen.textContent = "Error";
                    }
                } else {
                    screen.textContent += ` ${buttonValue} `;
                }
            }

            else if (button.classList.contains('eraser')) { // Si es un botón de borrar
                if (buttonValue === 'AC') {
                    screen.textContent = "";
                } else {
                    screen.textContent = screen.textContent.slice(0, -1);
                }
            }
        });
    });

    // Animación de botones
    animButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.remove('active');  
            void button.offsetWidth;  
            button.classList.add('active');  
        });
    });
});
