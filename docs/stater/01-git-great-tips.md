# Git Great Tips

## Git commands

```
$ git config --list
+ Listar atalhos do git

$ git commit --amend --no-edit
+ Comando para commitar sobre o commit anterior
	+ ammend: adaicionar ao commit anterior
	+ no-edit: nao abrir o editor para editar a mensagem
	+ Assim eu junto commits e evito repetir outra coisa
```



## Git Config

São as configurações do git. há 3 níveis e configurações:

+ `--system`: git para qualquer usuário
+ `--local`: para somente o projeto
+ `--global`: para o usuário atual e em qualquer projeto

**Por o VSCODE como editor do git**

```
git config --global core.editor code
```

**Editar configurações do git config**

```
git config --global --edit
```

Após isso, no `code` coloque a flag de `--wait` para garantir que o vscode rode corretamente



## Editar e Adicionar atalhos ao git

```
[alias]
	s = !git status -s
	c = !git add --all && git commit -m 
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
```

+ s
  + Vai mostrar de forma resumida
  + $ git s
+ c
  + Vai fazer o add + commit numa mesma linha
  + `$ git c "re"`
+ l
  + Vai mostrar o log de forma resumida com só as informações interessante de forma a ocupar menos espaço
  + `$ git l`

## Padronizar commits

[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

Vamos usar o padrão  \<type\>: 

## Dicas de descrição de commits

+ não use letra maiúscula a não ser em nome de classe
+ Sem pontuação
+ Começa com verbo no presente

**Exemplos**

```
$ git c "chore: add npm"

$ git c "chore: add typescript"
```

## Git Lib: `git-commit-msg-linter`

```
$ npm i -D git-commit-msg-linter
```

+ Vai garantir que meus commits vão respeitar a diretriz do **conventional commits**
+ para evitar commits fora do padrão.