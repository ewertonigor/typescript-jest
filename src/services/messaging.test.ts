import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

// Padrão de testes
describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); // Depois de cada teste o jest é limpado

  test('should return undefined', () => {
    // System under test
    const sut = createSut(); // sut -> Classe que está sendo testada
    expect(sut.sendMessage('teste')).toBeUndefined();
  });
  test('should call console.log once', () => {
    // System under test
    const sut = createSut(); // sut -> Classe que está sendo testada
    const consoleSpy = jest.spyOn(console, 'log'); // O jest vai ficar observando o console
    sut.sendMessage('teste'); // Chamando o metodo sendMessage.
    expect(consoleSpy).toHaveBeenCalledTimes(1); // Vai ser chamado o console uma vez?
  });
  test('should call console.log with "Mensagem enviada" and msg', () => {
    // System under test
    const sut = createSut(); // sut -> Classe que está sendo testada
    const consoleSpy = jest.spyOn(console, 'log'); // O jest vai ficar observando o console
    sut.sendMessage('teste'); // Chamando o metodo sendMessage.
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada', 'teste'); // Vai ser chamado o console uma vez?
  });
});
