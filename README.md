<h1>Módulo 05 - Curso de Front-End:EBAC</h1> 
<h3>Resolução de Atividade</h3> 

<strong>📝Requisitos:</strong> <br/>
Estrutura HTML:

»Crie um arquivo HTML com a seguinte estrutura:
<ul>
  <li>Um título para o jogo (ex: "Jogo de Adivinhação").</li>
  <li>Uma mensagem inicial explicando como o jogo funciona.</li>
  <li>Um campo de input para o jogador inserir seu palpite.</li>
  <li>Um botão com o texto "Chutar".</li>
  <li>Uma tag &ltp&gt para exibir as mensagens do jogo (dicas, resultado, etc.).</li>
</ul>

»Funcionalidades JavaScript:
<ul>
  <li>Ao carregar a página, o JavaScript deve:
    <ul>
      <li>Gerar um número aleatório entre 1 e 100 e armazená-lo em uma variável.</li>
      <li>Definir o número máximo de tentativas (ex: 10).</li>
      <li>Inicializar o contador de tentativas.</li>
    </ul>
  </li>
  <li>Ao clicar no botão "Chutar", o JavaScript deve:
    <ul>
      <li>Capturar o valor inserido no input (palpite do jogador).</li>
      <li>Validar se o palpite é um número válido entre 1 e 100.</li>
      <li>Comparar o palpite com o número secreto e exibir uma mensagem:
        <ul>
          <li>"Você acertou!" (e o jogo termina).</li>
          <li>"O número secreto é maior" (e o jogador continua tentando).</li>
          <li>"O número secreto é menor" (e o jogador continua tentando).</li>
        </ul>
      </li>
      <li>Decrementar o contador de tentativas.</li>
      <li>Exibir o número de tentativas restantes.</li>
      <li>Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".</li>
    </ul>
  </li>
</ul>

<strong>✨Melhorias implementadas a critério do aluno:</strong><br/>
<ul>
  <li>Adição de RegEx na validação do campo de entrada ao pressionar tecla.</li>
  <li>Transição de "Chutar" para "De novo" ao acertar ou atingir o máximo de tentativas, tornando a experiência cíclica.</li>
  <li>Adição de informativo ao lado da tentativa anterior, indicando se o palpite era maior ou menor que o número secreto.</li>
</ul>
