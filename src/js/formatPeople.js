import { orderBy } from './utils';

export const sortPeopleByNameAsc = people => orderBy(people, ['name'], ['asc']);
export const sortPeopleByAgeDesc = people => orderBy(people, ['age'], ['desc']);
export const getPeopleAges = people => people.map(({ age }) => age);
