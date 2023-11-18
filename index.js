function somatorioMultiplos3e5(numero) {
    let somatorio = 0;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    return somatorio;
  }
  
  // Testando a função com um exemplo
  const resultado = somatorioMultiplos3e5(10);  // Substitua 10 pelo número desejado
  console.log(`O somatório de todos os valores divisíveis por 3 ou 5 menores que 10 é: ${resultado}`);