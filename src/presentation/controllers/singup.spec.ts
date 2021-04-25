import { SignUpController } from './signup'
import { MissingParamError, InvalidParamError, ServerError } from '../errors/'
import { EmailValidator } from '../protocols/email-validator'

interface SutTypes {
  sut: SignUpController
  emailValidatorStub: EmailValidator
}

// Factury para emial validator
const makeEmailValidator = (): EmailValidator => {
// Mock (simulado)
  // Stub significa 'duble', é o mock que retorna algo hard-code
  // Outros Mocks: Spy, Fake, Stub
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }

  return new EmailValidatorStub()
}

// Factury para emial validator
const makeEmailValidatorWithError = (): EmailValidator => {
  // Mock (simulado)
  // Stub significa 'duble', é o mock que retorna algo hard-code
  // Outros Mocks: Spy, Fake, Stub
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      throw Error()
    }
  }

  return new EmailValidatorStub()
}

// Factory
// Serve para centralizar as mudançar em apenas um lugar
const makeSut = (): SutTypes => {
  const emailValidatorStub = makeEmailValidator()
  const sut = new SignUpController(emailValidatorStub)
  return {
    sut,
    emailValidatorStub
  }
}

// Criar conta de usuário
describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no passwordConfirmation is provided', () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })

  test('Should return 400 if no an invalid email is provided', () => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false) // vamos mockar para que esse validator vai voltar, aqui, somente  false aqui
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'invalid_email@mail.cmom',
        password: 'any_password',
        passwordConfirmation: 'any_password'

      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidParamError('email'))
  })

  test('Should call EmailValidator with correct email', () => {
    // garantir que va com o email mesmo que pasasmos
    const { sut, emailValidatorStub } = makeSut()
    // Eu capturar o retorno desse isValid
    const isValidSpy = jest.spyOn(emailValidatorStub, 'isValid')
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'

      }
    }
    sut.handle(httpRequest)
    expect(isValidSpy).toHaveBeenCalledWith('any_email@mail.com')
  })

  test('Should return 500 if emailValidator throws an Exception', () => {
    const emailValidatorStub = makeEmailValidatorWithError()
    const sut = new SignUpController(emailValidatorStub)

    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.cmom',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })
})
