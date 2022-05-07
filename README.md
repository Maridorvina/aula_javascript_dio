# Aula Javascript da Dio

## Com Prof. Rafael Galleani

Introdução ao JavaScript - Dio

- Primeiro criar repositório no Github 
https://github.com/Maridorvina/aula_javascript_dio.git

- Clonar repositório para sua máquina, após esse primeiros passos está 
pronto para desenvolver na máquina local.

git clone <seurepositorio>

- Item1 - alert()

- Variaveis e String
* Obs: Usando o console no navegador (F12 ou botã direito do mouse > opção "inspecionar").

- Usando a substituição de strings com o <replace()>
 
 - Listas/Array
    - [0, 1 ou 2] seleciona posição dos itens na lista 
    - <push()> acrescenta item na lista 
    - <pop()> exlui item da lista
    - <toString()> converte um elemento para string 

- Criando um Dicionário com chaves -> var heroi = {nome:"Spider" , cor:"vermelho"}   
    - Fazendo a chamada do item no dicionário <console.log(heroi.nome);>

- Criando uma lista de Dicionários
   - heroi = [{nome:"spider" , cor:"vermelho"} , {nome:"hulk" , cor:"verde"}]   


- Condicionais
    - Condição -> if(10 > 4){ alert("O valor é maior")} 
    - ou Senão essa condição é executada -> else{(alert("O valor é menor"))} 
    
- Laços de repetição
    - while -> estrutura de repetição (repete a condição desde que seja maior, menor ou igual ao valor definido)
    - for -> 

- getDate  -> retorna o dia, mês, ano e horario do sistema.
- getMouth -> retorno o mês do sistema   
- getHours -> retorna o horas

- Função
    - Função com variavel global -> a variavel é declarada fora de uma função 
    - Função com variavel local -> a variavel é declarada dentro de uma função

- Manipulando os elementos no navegador usando JavaScript
    - <onclick()> - ação do click do botão
    - <onmouseover()> - ação do ponteiro do mouse sobre o texto e/ou  botão
    - <document.getElementById()>
    - <.innerHTML>

    - window.open("https://link.com.br/"); (abre outra aba no navegador utilizando o DOM)
    - window.location.href = "https//link.com.br/"; (abre uma página na mesma aba utilizando o DOM)

    - this
    - unload="event()" - quando terminar o carregamento do body a função será chamada
    - onchange="event()" - coleta e altera o valor do elemento (exemplo: tag <select> e <option>)