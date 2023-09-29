import React, { FC, Fragment } from 'react';
import { ALL_PEOPLE } from '../data';
import PersonList from '../components/PersonList';
import SearchBar from '../components/SearchBarNew';

const Search: FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const matchingPersons = ALL_PEOPLE.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Fragment>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PersonList persons={matchingPersons} />
    </Fragment>
  );
};

export default Search;
