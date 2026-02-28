import sortHeroes from '../index';

test('следует отсортировать героев по состоянию здоровья в порядке убывания', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortHeroes(heroes)).toEqual(expected);
});

test('должен обрабатывать пустой массив', () => {
  expect(sortHeroes([])).toEqual([]);
});

test('должен обрабатывать массив с одним героем', () => {
  const heroes = [{ name: 'воин', health: 50 }];
  expect(sortHeroes(heroes)).toEqual([{ name: 'воин', health: 50 }]);
});

test('следует сохранить исходный массив', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];
  const originalCopy = heroes.map(hero => ({ ...hero }));
  sortHeroes(heroes);
  expect(heroes).toEqual(originalCopy);
});

test('должна выполняться правильная сортировка при равных значениях работоспособности', () => {
  const heroes = [
    { name: 'A', health: 50 },
    { name: 'B', health: 50 },
    { name: 'C', health: 30 },
  ];
  const result = sortHeroes(heroes);
  expect(result).toEqual([
    { name: 'A', health: 50 },
    { name: 'B', health: 50 },
    { name: 'C', health: 30 },
  ]);
});