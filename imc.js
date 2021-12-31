
 const calcular = document.getElementById('calcular');
 

 /*nome.value = 'Igor Pereira';
 altura.value = 1.80;
 peso.value = 85;*/

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorImc = (peso / (altura*altura)).toFixed(2);
        let classificacao = '';
        if(valorImc<18.5){
            classificacao = "Magreza";
        }
        if(valorImc>=18.5 && valorImc<=24.9){
            classificacao = 'Normal';
        }
        if(valorImc>=25 && valorImc<=29.9){
            classificacao = 'Sobrepeso';
        }
        if(valorImc>=30 && valorImc<=39.9){
            classificacao = 'Obesidade';
        }
        if(valorImc>=40){
            classificacao = 'Obesidade grave';
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e sua classificação é ${classificacao}`;
    }else{
        resultado.textContent = 'Preencha todos os campos';
    }
}


calcular.addEventListener('click', imc);