import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};
const enterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks()); // Depois de cada teste o jest é limpado

// Padrão de testes
describe('IndividualCustomer', () => {
  test('should have fisrtName, lastName and cpf', () => {
    // System under test
    const sut = createIndividualCustomer('Ewerton', 'Igor', '716.038.294-31'); // sut -> Classe que está sendo testada
    expect(sut).toHaveProperty('firstName', 'Ewerton');
    expect(sut).toHaveProperty('lastName', 'Igor');
    expect(sut).toHaveProperty('cpf', '716.038.294-31');
  });
  test('should have methods to get name and idn for individual customers', () => {
    // System under test
    const sut = createIndividualCustomer('Ewerton', 'Igor', '716.038.294-31'); // sut -> Classe que está sendo testada
    expect(sut.getName()).toBe('Ewerton Igor');
    expect(sut.getIDN()).toBe('716.038.294-31');
  });
});

describe('EnterpriseCustomer', () => {
  test('should have name and cnpj', () => {
    // System under test
    const sut = enterpriseCustomer('Americanas', '716.038.294-31/0001-22'); // sut -> Classe que está sendo testada
    expect(sut).toHaveProperty('name', 'Americanas');
    expect(sut).toHaveProperty('cnpj', '716.038.294-31/0001-22');
  });
  test('should have methods to get name and idn for enterprise customers', () => {
    // System under test
    const sut = enterpriseCustomer('Americanas', '716.038.294-31/0001-22'); // sut -> Classe que está sendo testada
    expect(sut.getName()).toBe('Americanas');
    expect(sut.getIDN()).toBe('716.038.294-31/0001-22');
  });
});
