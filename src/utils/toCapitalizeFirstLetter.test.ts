import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('capitalize first letter', () => {
  test('Должна принимать слово "pikachU" и возвращать это слово с первой заглавной буквой и остальными строчными', () => {
    const result = toCapitalizeFirstLetter('pikachU');
    expect(result).toEqual('Pikachu');
  });
  test('Должна принимать слово "poKeMon "и возвращать это слово с первой заглавной буквой и остальными строчными', () => {
    const result = toCapitalizeFirstLetter('poKeMon');
    expect(result).toEqual('Pokemon');
  });
  test('Должна принимать пустую строку и возвращать пустую строку', () => {
    const result = toCapitalizeFirstLetter('');
    expect(result).toEqual('');
  });
});
