# Outros

## Husky: Executar antes de commitar

Permite que agente defina comando para serem executados antes dos nosso commits.

Ex: Se algum arquivo estiver com problema de formatação, agente coloca o husky para bloquear o commit por esta tendo problemas de formatação

**USE HUSKY VERSÃO `"husky": "^4.2.5",`**

```
npm i -D husky
```

`.huskyrc.json`

+ Vou executar eslint antes do commit
````
{
	"hooks": {
		"pre-commit": "lint-staged"
	}
}
````

PROBLEMA DO HUSKY: ele vai executar em todos os arquivos a cada commit, até mesmo em arquivo que não foram modificados. Pra resolver isso vamos usa um outro eslint, o lint-staged. Ele permite que rode nos arquivos que estejam na staged area

`.lintstagedrc.json`

+ Vai executar nos arquivos typescript o eslint na pasta scr
````json
{
	"*ts":
		"eslint 'src/**' --fix",
		"npm run test:staged", // vai rodar nosso teste de forma separada. Assim nao vai passar commit com teste falhando
		// "git add" // o lint-staged na versoa 10 ja faz automaticamente git add, enao nao use pois vao dar warning
}

````

em `package.json` adiciona `"test:staged: "jest"`

```
$ npm i -D lint-staged
```


+ permite que eu rode arquivos em somente no `staged area`
+ Assim o husky não vai rodar em todos os arquivo se somente você criar um único arquivo nodo. Isso

## Jest: Em TypeScript

```
npm i -D jest @types/jest ts-jest
```

+ `jest`: testes de js
+ `@types/jest`
+ `ts-jest`: jest para typescript

depois eu inicializo o jest:

Instale global com

`npm install jest --global`

inicializnado

```
jest --init
```

+ 1 - yes: substituir o teste do `package.json`
+ 2 - projeto node? yes
+ 3 - coverage reports? yes
+ 4 - no

### Arquivo de configuração do jest `jest.config.js`

```json
modeule.exports = {
	roots: ['<rootDir>/src']
	collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
	coverageDirectory: 'coverage',
	testEnvironment: 'node',
	transform: {'.+\\.ts$': 'ts-jest'},
	
}
```

### Problemas de Jest ao depois de fazer uma refatoração

```
# jest --clearCache
```

 vai limpar o cache, e isso corrigi o caso de o jest esta procurando um arquivo para fazer teste que não existe

##  Lib npm-check

Instalar

```
$ npm i -g npm-check
```

+ Serve para verificar dependências, e com ela, ela permite agente atualizar só aquelas que queremos

Com

```
$ npm-check -s -u
```

abre uma interface e agente pode atualizar as bibliotecas que queremos de forma interativa, escolhendo uma a uma

**ATUALIZA TODAS MENOS  `es-lint-config-standard-with-typescript`, essa deixa 11.0.1**

Recomenda rodar essa lib duas vezes