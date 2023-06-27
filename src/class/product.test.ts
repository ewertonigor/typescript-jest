import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

// Padrão de testes
describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); // Depois de cada teste o jest é limpado

  test('should have properties name and price', () => {
    // System under test
    const sut = createSut('Camiseta', 40.99); // sut -> Classe que está sendo testada
    expect(sut).toHaveProperty('name', sut.name);
    expect(sut.price).toBeCloseTo(40.99); // Recomendado testar pontos flutuantes com 'toBeCloseTo'
  });
});
