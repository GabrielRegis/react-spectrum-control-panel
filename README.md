
# SPECTRUM - Painel de Controle

O Spectrum é um simulador de Redes Ópticas Elásticas (EON) cujo objetivo é promover simulações de forma abstraída, com configurações práticas e visuais. É também uma ferramenta para ensino do comportamento de uma Rede EON.

Este repositório compila o código do Painel de Controle (Cliente) do SPECTRUM. Para acessar o código da aplicação servidor do simulador, basta acessar [seu repositório](https://github.com/GabrielRegis/spring-spectrum-service)

Atualmente, o Painel de Controle está hospedado através do serviço Heroku, e pode ser acessado [neste link](https://spectrum-eon-simulator.herokuapp.com).

## Modificação do Código
O SPECTRUM é uma ferramenta de código aberto, e poderá sofrer modificações pela comunidade interessada. Para modificar o código do simulador, é necessário clonar este repositório (Branch Develop) e criar uma nova branch de trabalho. Ao final da validação e das modificações da ferramenta, será necessário realizar um pull-request para a Master. Este pull-request será analisado e posteriormente aprovado.

Ao desenvolver modificações para o SPECTRUM, realizá-las respeitando a licensa deste simulador ([Confira aqui](https://creativecommons.org/licenses/by-nc-sa/4.0/))

## Instalando, compilando e executando o SPECTRUM em modo desenvolvedor
Inicialmente, execute o comando abaixo para que as dependências sejam instaladas:
```
$ yarn
```
Para executar o Painel de Controle, execute o seguinte comando:
```
$ yarn startDev
```



# Licença
 [Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
