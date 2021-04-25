# Aruitetura do sistema

draw.io

Utilizresmos:
+ express, mongodb, bcrypt, validator

Vamos criar uma arquitetura desacoplada. Dessa forma, susas claasse nao vao precisar tanto de sertos pacotes e sera mais fácil fazer torcar e manuntetaçao

**Desgin Patters: Adapter**
+ Adaptador de interfaces: 
+ Nosso controler deverá ter resquest e responses personalizados

No nosso caodito, havera uma interface chamada controller, e o meu adapter aponta para um controller. E é o meu adapter que vai impelementar o express.

Assim, se eu quiser trocar meu Express por outro, só vou precisar mexer na classe "ExpressRouteAdapter"

**Em suma como implementar um Adapter"
+ SituaçÂo/Problema: Minha classe (chamaremos de main) depende de uma lib externa que pode ser trocada, como fazer isso sem alterar essa classe?
  - Fazemos isso atraves do adpater: Essa classe que queremos por uma lib nâo vai por ela. Nos criamos outra classe, uma Adapter que vai implementar essa lib.
  - E ai, na classe adapter vamos chamar a lib.
  - a classe main nao vai puxar adapter, e sim uma interface que sera implementada no adapters
  - Assim, eu poderia trocar de lib apenas trocando classes que utilizem uma mesma interface
  - Assim, implementando Adapter, a nossa classe mainnao precisa de nenhuma modificaçâo, apenas chamar classe que implementam uma interface

Area de DOMAON: Regras de negocios, funcionalidade