# Type Script

## Porque usar Type Script

+ Programação orientada a objetos permite aplicar Design Patters: que usam classe e interfaces
+ Garante que o Java script rode como Java, com tipagem e assim garante que não seja uma zona como python de tipagem dinâmica.
+ É uma dependência de DEV, pois no fim será somente java-script

## Adicionar Type Script

```
$ npm i -D typescript @types/node
```

**Criar Arquivo de configuração do TypeScript `tsconfig.json`**

```json
{
  "compilerOptions": {
    "outDir": "dist", 
      //onde queremos gerar nosso java-script
    "module": "commonjs", 
      // vamos usar o import e export para importar e exportar nesse formato
    "target": "es2019", 
      // para gerar com padrao do es2019. que pertmite coisas como o condicionl ?
    "esModuleInterop": true, 
      // converter os modeolos
    "sourceMap": true,
    "rootDirs": ["src", "tests"],
    "baseUrl": "src",
    "paths": {
      "@/tests/*": ["../tests/*"],
      "@/*": ["*"]
    }
  },
  "include": ["src", "tests"],
  "exclude": []
}
```

