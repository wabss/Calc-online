document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.key');
    const operators = document.querySelectorAll('.operator');
    const erasers = document.querySelectorAll('.eraser');
    const animButtons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonValue = event.target.textContent;
    
            if (screen.textContent === "Error" || screen.textContent === "Infinity") {
                screen.textContent = buttonValue; 
            } else {
                if (screen.textContent === "0") {
                    screen.textContent = "";
                }
                screen.textContent += buttonValue;
            }
        });
    });
    

    operators.forEach(operator => {
        operator.addEventListener('click', (event) => {
            const operatorValue = event.target.textContent;
            if (operatorValue === '=') {
                try {
                    screen.textContent = eval(screen.textContent);
                } catch (error) {
                    screen.textContent = "Error";
                }
            } else {
                screen.textContent += ` ${operatorValue} `;
            }
        });
    });
    erasers.forEach(eraser => {
        eraser.addEventListener('click', (event) => {
            const eraserValue = event.target.textContent;

            if(eraserValue === 'AC'){
                screen.textContent = "";
            } else {
                let newtext = screen.textContent.slice(0, -1);
                screen.textContent = newtext;
            }
        })
    })
    animButtons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.remove('active');  
            void button.offsetWidth;  
            button.classList.add('active');  
        });
    });
});