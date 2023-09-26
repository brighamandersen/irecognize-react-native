export interface Person {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
}

export interface PersonFact {
  title: string;
  description: string;
  isNew?: boolean;
}

export interface MutualPlace {
  name: string;
  url: string;
  formattedDate: string;
}