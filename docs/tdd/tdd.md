# tdd

## filosofia do TDD

Primeiro faz o teste, que não passa, e depois faz as funcionalidade para ele passar. Você coloca o mínimo necessário para o testes passar

## exemplo:

```typescript
// Criar conta de eusuário
describe('SignUp Controller', () => {
    test('Should return 400 if no name is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'any_email@mail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)

    })
  })
```

## JEST

Flag --watch: vigiar e faz reload

--passWithNoTests : o jest vai passar se na hpuver nenhum testse

## ESLINT

### 1

"@typescript-eslint/strict-boolean-expressions": "off",

+ PERMITE QUE  FAÇAMOS `if (!httpRequest.body.name)`

### 2

Se tiver tando muito erro use CTRL+SHIF+P: 

ESLINT: Fix all auto-fixable erros