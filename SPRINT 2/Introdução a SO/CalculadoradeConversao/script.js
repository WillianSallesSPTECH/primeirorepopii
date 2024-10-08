document.addEventListener('DOMContentLoaded', function() {
    const inputDecimal = document.getElementById("demo1");
    const parabensMsg = document.getElementById("parabensMsg");

    // Atualiza ao digitar para converter em tempo real
    inputDecimal.addEventListener('input', converter);

    function converter() {
        var decimal = Number(inputDecimal.value); // Converte o valor digitado para número

        // Verifica se é um número válido
        if (!isNaN(decimal) && decimal !== '') {
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