import React, { FC, Fragment } from 'react';
import Searchbar from '../components/Searchbar';
import { ALL_PEOPLE } from '../data';
import PersonList from '../components/PersonList';

const Search: FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const matchingPersons = ALL_PEOPLE.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Fragment>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PersonList persons={matchingPersons} />
    </Fragment>
  );
};

export default Search;
