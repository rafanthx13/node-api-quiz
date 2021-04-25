# Type Script

## Porque usar Type Script

+ Programação orientada a objetos permite aplicar Design Patters: que usam classe e interfaces
+ Garante que o Java script rode como Java, com tipagem e assim garante que não seja uma zona como python de tipagem dinâmica.
+ É uma dependência de DEV, pois no fim será somente java-script
+ Com tipagem + eslint vocÊ evit acom que chame um aributo errado e só der erro na hora de compilar. Ex: Se for http.statusCode, mas vocÊ coloca http.stataus code, só vai dar erro na hora de compilar. Agora se esse stats code diver tipado, ele vai verificar que essa propriedade nao existe e vai acusar
  - Como resolver? Crie intreface para as coisa spassads por parametros
+ Se vocÊ faz tipagem pra tudo, entao praticamente vocÊ personaliza tanta coisa que a leitura do código fica direta
+ Se você faz `imlements EmailValidator` ele vai criar a linha de Import. Isso funciona por causa da tipagem e do watch do VSCOde. Entao agiliza a improtar as coisas, é só chamalas que ele vai la e chama a linha IGUAL AO JAVA

Exemplo: ANTES

if (!httpRequest.body.name) {
      return { STATUScODE: 400, error: new MissingParamError('name') }
    }


EXMEPLOD DEPOIES

if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name') )   
    }


## Adicionar Type Script

```
$ npm i -D typescript @types/node
```

**Criar Arquivo de configuração do TypeScript `tsconfig.json`**

```json
{
    "compilerOptions": {
      "outDir": "./dist", 
        //onde queremos gerar nosso java-script
      "module": "commonjs", 
        // vamos usar o import e export para importar e exportar nesse formato
      "target": "es2019", 
        // para gerar com padrao do es2019. que pertmite coisas como o condicionl ?
      "esModuleInterop": true, 
        // converter mais coisas, é importante
      "allowJs": true,
      // permitir ter arquivos js normais
    }
  }
```

