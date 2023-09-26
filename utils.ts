import { ALL_PEOPLE } from "./data";
import { Person } from "./models";

export function getPersonById(id: string): Person | undefined {
  for (const person of ALL_PEOPLE) {
    if (person.id === id) {
      return person;
    }
  }
  return null;
}