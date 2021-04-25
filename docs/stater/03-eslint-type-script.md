# Eslint com TypeScript



## Padrão JavaScript Standard

[JavaScript Standard Style](https://standardjs.com/)

```shell
$ npm install --save-dev eslint@7 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@4 eslint-config-standard-with-typescript
```

## Extensões do VSCode

+ ESLint
+ Desativar plug-in JavaScript Standard Style

## Configurando ESLint

### Arquivo de Configuração `.eslint.json`

````json
{
  "extends": "standard-with-typescript",
  "parserOptions": {
    "project": "./tsconfig.json" // apontar para o nosso arquivo de configura
  }
}
````

### .ignore do eslint `.eslintignore`

```
node_modules
dist
```

