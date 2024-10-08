document.addEventListener('DOMContentLoaded', function() {
    const inputDecimal = document.getElementById("demo1");
    const parabensMsg = document.getElementById("parabensMsg");

    // Atualiza ao digitar para converter em tempo real
    inputDecimal.addEventListener('input', converter);

    function converter() {
        var decimal = Number(inputDecimal.value); // Converte o valor digitado para número

        // Verifica se é um número válido
        if (!isNaN(decimal) && inputDecimal.value !== '') {
            // Conversões
            let octal = decimal.toString(8);
            let hexadecimal = decimal.toString(16).toUpperCase();
            let binaria = decimal.toString(2);

            // Exibe os valores nas caixinhas
            document.getElementById("demo2").innerHTML = `Octal: ${octal}`;
            document.getElementById("demo3").innerHTML = `Hexadecimal: ${hexadecimal}`;
            document.getElementById("demo4").innerHTML = `Binário: ${binaria}`;
        } else {
            // Limpa as caixinhas se o valor for inválido
            document.getElementById("demo2").innerHTML = '';
            document.getElementById("demo3").innerHTML = '';
            document.getElementById("demo4").innerHTML = '';
        }
    }

    // Botão para mostrar mensagem de parabéns
    document.getElementById('btnParabens').addEventListener('click', function() {
        parabensMsg.style.display = 'block';
    });

    // Cria a bolha
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);

    // Evento de movimento do mouse para seguir o cursor
    document.addEventListener('mousemove', function(e) {
        bubble.style.transform = `translate(${e.clientX - 75}px, ${e.clientY - 75}px)`; // Ajusta para centralizar
    });

    document.addEventListener('DOMContentLoaded', function() {
        const num1 = document.getElementById("num1");
        const num2 = document.getElementById("num2");
        const resultDiv = document.getElementById("result");
    
        function calcular(operacao) {
            const n1 = parseFloat(num1.value);
            const n2 = parseFloat(num2.value);
            let resultado;
    
            if (isNaN(n1) || isNaN(n2)) {
                resultDiv.innerHTML = "Por favor, insira números válidos.";
                return;
            }
    
            switch (operacao) {
                case 'soma':
                    resultado = n1 + n2;
                    break;
                case 'subtracao':
                    resultado = n1 - n2;
                    break;
                case 'multiplicacao':
                    resultado = n1 * n2;
                    break;
                case 'divisao':
                    if (n2 === 0) {
                        resultDiv.innerHTML = "Divisão por zero não é permitida.";
                        return;
                    }
                    resultado = n1 / n2;
                    break;
                default:
                    resultado = "Operação inválida.";
            }
    
            resultDiv.innerHTML = `Resultado: ${resultado}`;
        }
    
        // Adicionando eventos aos botões
        document.getElementById('btnSoma').addEventListener('click', () => calcular('soma'));
        document.getElementById('btnSubtracao').addEventListener('click', () => calcular('subtracao'));
        document.getElementById('btnMultiplicacao').addEventListener('click', () => calcular('multiplicacao'));
        document.getElementById('btnDivisao').addEventListener('click', () => calcular('divisao'));
    });
    
    document.getElementById("decimalInput").addEventListener("input", function() {
        const decimalValue = parseInt(this.value, 10);
    
        // Verifica se o valor é um número
        if (!isNaN(decimalValue)) {
            // Calcula os valores em diferentes bases
            const octalValue = decimalValue.toString(8);
            const hexValue = decimalValue.toString(16).toUpperCase();
            const binaryValue = decimalValue.toString(2);
    
            // Atualiza os inputs correspondentes
            document.getElementById("octalInput").value = octalValue;
            document.getElementById("hexInput").value = hexValue;
            document.getElementById("binaryInput").value = binaryValue;
        } else {
            // Limpa os inputs se o valor não for um número
            document.getElementById("octalInput").value = '';
            document.getElementById("hexInput").value = '';
            document.getElementById("binaryInput").value = '';
        }
    });
    
    document.getElementById("btnParabens").addEventListener("click", function() {
        document.getElementById("parabensMsg").style.display = "block"; // Mostra a mensagem
    });
    

    document.getElementById("decimalInput").addEventListener("input", function() {
        const decimalValue = parseInt(this.value, 10);
    
        // Verifica se o valor é um número
        if (!isNaN(decimalValue)) {
            // Calcula os valores em diferentes bases
            const octalValue = decimalValue.toString(8);
            const hexValue = decimalValue.toString(16).toUpperCase();
            const binaryValue = decimalValue.toString(2);
    
            // Atualiza os inputs correspondentes
            document.getElementById("octalInput").value = octalValue;
            document.getElementById("hexInput").value = hexValue;
            document.getElementById("binaryInput").value = binaryValue;
        } else {
            // Limpa os inputs se o valor não for um número
            document.getElementById("octalInput").value = '';
            document.getElementById("hexInput").value = '';
            document.getElementById("binaryInput").value = '';
        }
    });
    
    document.getElementById("btnParabens").addEventListener("click", function() {
        document.getElementById("parabensMsg").style.display = "block"; // Mostra a mensagem
    });
    
    // Rastro do mouse
    document.addEventListener('mousemove', function(e) {
        let trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.top = `${e.clientY}px`;
        trail.style.left = `${e.clientX}px`;
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove(); // Remove o rastro após um segundo
        }, 1000);
    });
});
document.getElementById("decimalInput").addEventListener("input", function() {
    const decimalValue = parseInt(this.value, 10);

    // Verifica se o valor é um número
    if (!isNaN(decimalValue)) {
        // Calcula os valores em diferentes bases
        const octalValue = decimalValue.toString(8);
        const hexValue = decimalValue.toString(16).toUpperCase();
        const binaryValue = decimalValue.toString(2);

        // Atualiza os inputs correspondentes
        document.getElementById("octalInput").value = octalValue;
        document.getElementById("hexInput").value = hexValue;
        document.getElementById("binaryInput").value = binaryValue;
    } else {
        // Limpa os inputs se o valor não for um número
        document.getElementById("octalInput").value = '';
        document.getElementById("hexInput").value = '';
        document.getElementById("binaryInput").value = '';
    }
});

document.getElementById("btnParabens").addEventListener("click", function() {
    document.getElementById("parabensMsg").style.display = "block"; // Mostra a mensagem
});
