import { ALL_PEOPLE, BYU_FRIENDS_NETWORK, FRIENDS_FROM_HOME_NETWORK } from "./data";
import { Person } from "./models";

export function getPersonById(id: string): Person | undefined {
  for (const person of ALL_PEOPLE) {
    if (person.id === id) {
      return person;
    }
  }
  return null;
}

export function getListWithoutPerson(
  list: Person[],
  personToExclude: Person
): Person[] {
  return list.filter((p) => !p.name.includes(personToExclude.name));
}

export function getFriendsOfPerson(person: Person): Person[] {
  const inBYUFriendsNetwork = BYU_FRIENDS_NETWORK.includes(person);
  const inFriendsFromHomeNetwork = FRIENDS_FROM_HOME_NETWORK.includes(person);

  if (inBYUFriendsNetwork && inFriendsFromHomeNetwork) { // Me
    return getListWithoutPerson(ALL_PEOPLE, person);
  }

  if (BYU_FRIENDS_NETWORK.includes(person)) {
    return getListWithoutPerson(BYU_FRIENDS_NETWORK, person);
  }

  if (FRIENDS_FROM_HOME_NETWORK.includes(person)) {
    return getListWithoutPerson(FRIENDS_FROM_HOME_NETWORK, person);
  }
  
  return [];
}