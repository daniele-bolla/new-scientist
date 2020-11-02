import {
  sortPeopleByNameAsc,
  sortPeopleByAgeDesc,
  getPeopleAges
} from './formatPeople';

var people = [
  {
    name: 'Bob',
    age: 29
  },
  {
    name: 'Jean',
    age: 50
  },
  {
    name: 'Alice',
    age: 42
  },
  {
    name: 'Greg',
    age: 23
  }
];

describe('formatPeople', () => {
  it('sorts by name asc', () => {
    const sortedByName = sortPeopleByNameAsc(people);
    const { 0: first, length, [length - 1]: last } = sortedByName;
    expect(length).toBe(people.length);
    expect(first.name).toBe('Alice');
    expect(last.name).toBe('Jean');
  });
  it('sorts by age desc', () => {
    const sortedByName = sortPeopleByAgeDesc(people);
    const { 0: first, length, [length - 1]: last } = sortedByName;
    expect(length).toBe(people.length);
    expect(first.age).toBe(50);
    expect(last.age).toBe(23);
  });
  it('pulls ages', () => {
    const expectedMapAges = [29, 50, 42, 23];
    const mapAges = getPeopleAges(people);
    expect(mapAges.length).toBe(people.length);
    expect(mapAges).toEqual(expect.arrayContaining(expectedMapAges));
  });
});
