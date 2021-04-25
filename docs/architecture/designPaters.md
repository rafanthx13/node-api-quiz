# Design Patters e Outros

## Lista completa

> ## Princípios

#### SOLID

* Single Responsibility Principle (SRP)
  * Muitos arquivos, cada um pequeno, mas cada um cuida de uma coisa separada.
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
  * INTERFACE PRA TUDO. É criar interfaces como se fosse metodos a srerem adicionados numa classe a meidida que precisar dele. S eprecisar cahama, se nao, nao cahama. Assim há bastante reproveitamento. EX: se vocE faz uma unica funcionalidade (que muda uma classe) fica ruim, o bom seria criar uma iinterfaces. AI, se vocÊ chamar em outro lugar basta so implementatla
* Dependency Inversion Principle (DIP)
  * Em suma é dependender de abstraçôes (INTERFACE) ao invez de impleemntaçao (CLASSE DIRETA)
  * Ex: Ao invez de chamar o Express do Node, vocÊ chama uma classe que tem uma interface e nedtor da sua implementaçao chama o Express. Assim se vocÊ quiser mudar de Expres ara outra coisa, vocÊ somente muda o corpo dessa classe, mas nada de quem manda
  * SE FAZ COM ING=JEÇAOD E DEPDENENCIA
  * O padrão Injeção de dependência diz: Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
    Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.



* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance
* Small Commits

> ## Design Patterns

* Factory:
  * Se vocÊ cria um mesmo objeto taoda hora, seria interressante criar um metodo que o cria. Ele é uma fabrica. Assim se quiser mudar todos eles ao mesmo tmepo, basta mudar a FACTORY
* Adapter
  * É uma classe que implementa uma interface global, e dentro dela chama uma lib extena. Essa classe é usada numa main. Assim, se eu quiser mudar de lib eu nao mexo na main e sim somente nessa classe, já que ela é obrigada a implemnetar a interface, entao é so o corpo dos metodos e a chamada das libs
* Composite
* Decorator
* Proxy
* Dependency Injection
* Abstract Server
* Composition Root
* Builder
* Singleton

> ## Metodolo





### 