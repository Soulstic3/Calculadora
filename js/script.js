// Inserir numeros pelos botoes
    function insert(num)
        {
            var numero = document.getElementById('resultado').value;
            document.getElementById('resultado').value = numero + num;
        };
    
// Função para limpar campo        
        function clean()
        {
            document.getElementById('resultado').value = "";
        };

// Função backspace        
        function back()
        {
            var resultado = document.getElementById('resultado').value;
            document.getElementById('resultado').value = resultado.substring(0, resultado.length -1);
        };

// Botão = usando eval para calcular
        function calcular()
        {
            var resultado = document.getElementById('resultado').value;
            if(resultado)
            {
                document.getElementById('resultado').value = eval(resultado);
            }
            else
            {
                document.getElementById('resultado').value = "0";
            }
        };

// Calcular com enter
        var input = document.getElementById("resultado");
// Execultar função quando pressionar uma tecla no teclado
         input.addEventListener("keypress", function(event) {
// Definir tecla
            if (event.key === "Enter") {
// Cancela ação default, se preciso
            event.preventDefault();
// Aciona o botao chamando pelo id dele
         document.getElementById("btn").click();
  }
});

