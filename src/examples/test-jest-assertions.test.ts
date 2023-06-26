// Describe é usado para agrupar os testes
describe('Primitive values', () => {
  test('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); // Checka a igualdade para valores primitivos
    expect(number).toEqual(10); // Checka igualdede também, mas funciona com objetos

    expect(number).not.toBeNull(); // Checka se é nulo
    expect(number).toBeGreaterThan(9); // Verifica se o número é maior que
    expect(number).toBeLessThan(11); // Verifica se o número é menor que

    expect(number).toBeCloseTo(10); // Verifica se o número passado estar proximo.

    expect(number).toHaveProperty('toString'); // Verificou se uma propriedade existe dentro de number
  });
});

describe('Objects', () => {
  test('should test jest assertions with objects', () => {
    const person = { name: 'Ewerton', age: 20 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 20);
    expect(person.name).toBe('Ewerton');
  });
});
