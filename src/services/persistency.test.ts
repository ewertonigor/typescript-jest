import { Persistency } from './persistency';

// Padrão de testes
describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); // Depois de cada teste o jest é limpado

  test('should return undefined', () => {
    // System under test
    const sut = new Persistency(); // sut -> Classe que está sendo testada
    expect(sut.saveOrder()).toBeUndefined();
  });
  test('should call console.log once', () => {
    // System under test
    const sut = new Persistency(); // sut -> Classe que está sendo testada
    const consoleSpy = jest.spyOn(console, 'log'); // O jest vai ficar observando o console
    sut.saveOrder(); // Chamando o metodo saveOrder.
    expect(consoleSpy).toHaveBeenCalledTimes(1); // Vai ser chamado o console uma vez?
  });
  test('should call console.log with "Pedido salvo com sucesso..."', () => {
    // System under test
    const sut = new Persistency(); // sut -> Classe que está sendo testada
    const consoleSpy = jest.spyOn(console, 'log'); // O jest vai ficar observando o console
    sut.saveOrder(); // Chamando o metodo saveOrder.
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...'); // Vai ser chamado o console uma vez?
  });
});
