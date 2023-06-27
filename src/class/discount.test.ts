import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

// Padrão de testes
describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); // Depois de cada teste o jest é limpado

  test('should have no discount', () => {
    // System under test
    const sut = createSut(NoDiscount); // sut -> Classe que está sendo testada
    expect(sut.calculate(10.99)).toBeCloseTo(10.99); // toBeCloseTo -> Se um valor estiver proximo também pega.
  });
  test('should apply 50% discount on price', () => {
    // System under test
    const sut = createSut(FiftyPercentDiscount); // sut -> Classe que está sendo testada
    expect(sut.calculate(300.5)).toBeCloseTo(150.25); // toBeCloseTo -> Se um valor estiver proximo também pega.
  });
  test('should apply 10% discount on price', () => {
    // System under test
    const sut = createSut(TenPercentDiscount); // sut -> Classe que está sendo testada
    expect(sut.calculate(200)).toBeCloseTo(180); // toBeCloseTo -> Se um valor estiver proximo também pega.
  });
});
