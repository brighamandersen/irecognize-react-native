import { MutualPlace, Person, PersonFact } from "./models";

const S3_BASE_URL =
    'https://irecognize-profile-pics.s3.us-east-2.amazonaws.com/';
const DEFAULT_IMG_URL = S3_BASE_URL + 'DEFAULT_IMG_URL.jpg';
const BYU_CS_STUDENT_TAGLINE =
    "I'm a BYU student taking CS 356.  Love that CS 356 is my only class!";
const SOJO_BRO_TAGLINE =
    "I'm from South Jordan and I love to ball up with the buddies!";

// Person data

export const PERSON_CURRENT_USER: Person = {
  id: '1',
  name: 'Brigham Andersen',
  bio: "I'm a 23-yr old studying CS and Business @ BYU.  Excited to meet ya!",
  imageUrl: 'https://irecognize-profile-pics.s3.us-east-2.amazonaws.com/CURRENT_USER.jpg'
}
const PERSON_ALEXA_URREA: Person = {
  name: 'Alexa Urrea',
  id: '2',
  bio:  BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SJFP5TFD-800745531fd0-512'
}
const PERSON_SAM_BENNION: Person = {
  name: 'Sam Bennion', 
  id: '3',
  bio: BYU_CS_STUDENT_TAGLINE,
 imageUrl: 'https://avatars.githubusercontent.com/u/13336157?v=4'
}
const PERSON_TRACE_HALE: Person = {
  id: '4',
  name: 'Trace Hale', 
  bio: BYU_CS_STUDENT_TAGLINE, 
  imageUrl: S3_BASE_URL + 'TRACE_HALE.jpg'
}
const PERSON_ADAM_LENNING: Person = {
  id: '5',
  name: 'Adam Lenning',
  bio: "TA for CS 356.  I'm a huge fan of UI/UX and Stats!",
  imageUrl: S3_BASE_URL + 'ADAM_LENNING.jpg'
}
const PERSON_MIKE_JONES: Person = {
  id: '6',
  name: 'Mike Jones',
  bio: 'Biggest advocate of HCI in the outdoors!  Skiing is life.',
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02S7HAHUS0-539d1cf233c7-512'
}
const PERSON_ELIJAH_QUARTEY: Person = {
  id: '7',
  name: 'Elijah Quartey',
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SJ89NK8B-a350a98b0c15-512'
}
const PERSON_MADDIE_PETTY: Person = {
  id: '8',
  name: 'Maddie Petty',
  bio:  BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SLGE1B3N-41e414f01aed-512'
}
const PERSON_HARRISON_BURGESS: Person = {
  id: '9',
  name: 'Harrison Burgess',
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SJD2Q7EE-82cf643a6be1-512'
}
const PERSON_TUSTIN_NEILSON: Person = {
  id: '10',
  name: 'Tustin Neilson',
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SFH46QLD-583f467533cd-512'
}
const PERSON_CARTER_MADSEN: Person = {
  id: '11',
  name: 'Carter Madsen', 
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SLGBMSQ4-aa49c5405700-512'
}
const PERSON_RAND_ALRABADI: Person = {
  id: '12',
  name: 'Rand Alrabadi', 
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SF9N5X8D-fcf82c2118a3-512'
}
const PERSON_JACOB_SEARLE: Person = {
  id: '13',
  name: 'Jake Searle',
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02T1R3R734-b593f39f41f6-512'
}
const PERSON_DANIEL_TAYLOR: Person = {
  id: '14',
  name: 'Daniel Taylor',
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02TFBK8YHE-1d17e0841420-512'
}
const PERSON_ETHAN_WALCH: Person = {
  id: '15',
  name: 'Ethan Walch',
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02TD7A2YSW-d20eccae1b3c-512'
}
const PERSON_NOOR_ASSI: Person = {
  id: '16',
  name: 'Noor Assi',
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SD71NE8P-5891ebbc48f0-512'
}
const PERSON_DYLAN_PACKHAM: Person = {
  id: '17',
  name: 'Dylan Packham',
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SJ7P16P4-95b3f9dc8a5c-512'
}
const PERSON_JAX_MATTHEWS: Person = {
  id: '18',
  name: 'Jax Matthews',
  bio: BYU_CS_STUDENT_TAGLINE,
  imageUrl: 'https://ca.slack-edge.com/T02S59PFSPM-U02SBH3RXAA-c754706d9c9b-512'
}
const PERSON_CODY_KNECHT: Person = {
  id: '19',
  name: 'Cody Knecht',
  bio: "I'm a party animal always looking for a good time!",
  imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/74163393_105469217541030_6680815542959341568_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ffno8TKMl9UAX8sZLMf&_nc_ht=scontent-lax3-2.xx&oh=00_AT-7-ZEn40O1likX3iQrnCQL3dfjx0FIB6DrD8SQRwBOeg&oe=6275BF1F'
}
const PERSON_ISAAC_PETTIT: Person = {
  id: '20',
  name: 'Isaac Pettit', 
  bio: SOJO_BRO_TAGLINE,
  imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/119837228_611934999471646_2931247024621831643_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FbSRnE4ohNoAX8G6lQn&_nc_ht=scontent-lax3-1.xx&oh=00_AT_r99Ra3k9l-7WAYN5-CfHX0enW5xtrXh6Hj5WT_CTswg&oe=62764994'
}
const PERSON_CADEN_KIRBY: Person = {
  id: '21',
  name: 'Caden Kirby', 
  bio: SOJO_BRO_TAGLINE,
  imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/127759301_2853316474941664_706178127536423216_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=530iTwDFsKIAX858e05&_nc_ht=scontent-lax3-2.xx&oh=00_AT-HPnlr56IuEy2kH6km8FgKO1Jn-Mt2nJgQ7eWRKvPAYA&oe=62786AB0'
}
const PERSON_JEFFERSON_HARBAUGH: Person = {
  id: '22',
  name: 'Jefferson Harbaugh',
  bio: SOJO_BRO_TAGLINE,
  imageUrl: 'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/235749020_581089276597136_3792108346606392814_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3IW7XgEpsg8AX8wKU7J&_nc_ht=scontent-lax3-1.xx&oh=00_AT9p97Howy9bTSHzD-rahiks2mUzPjW7ZDQGcwM75uwIWQ&oe=62568574'
}
const PERSON_MARCUS_YOUNG: Person = {
  id: '23',
  name: 'Marcus Young', 
  bio: SOJO_BRO_TAGLINE,
  imageUrl: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/123586938_10207457148862615_3895091083065767711_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=rUV3SIJ9JE4AX9ryLuE&_nc_ht=scontent-lax3-2.xx&oh=00_AT9X1uPsG_iYjMJRITWNQa0G0em_l-eghtyMAc0g2sLOag&oe=627647A9'
}


export const PEOPLE_NEAR_ME = [
  // List of people near the current user
  PERSON_ALEXA_URREA,
  PERSON_SAM_BENNION,
  PERSON_TRACE_HALE,
  PERSON_ADAM_LENNING,
  PERSON_MIKE_JONES,
  PERSON_ELIJAH_QUARTEY,
  PERSON_MADDIE_PETTY,
  PERSON_HARRISON_BURGESS,
  PERSON_TUSTIN_NEILSON,
  PERSON_CARTER_MADSEN,
  PERSON_RAND_ALRABADI,
  PERSON_JACOB_SEARLE,
  PERSON_DANIEL_TAYLOR,
  PERSON_ETHAN_WALCH,
  PERSON_NOOR_ASSI,
  PERSON_DYLAN_PACKHAM,
  PERSON_JAX_MATTHEWS
];


export const MY_TALKED_TO_RECENTLY = [
  // List of people who have recently talked to the current user
  PERSON_ALEXA_URREA,
  PERSON_SAM_BENNION,
  PERSON_MIKE_JONES,
  PERSON_TRACE_HALE,
  PERSON_CODY_KNECHT
];


export const BYU_FRIENDS_NETWORK = [
  // Network of friends
  // Use getMyFriends() in helpers to get list from perspective of a certain person
  PERSON_CURRENT_USER,
  PERSON_ALEXA_URREA,
  PERSON_SAM_BENNION,
  PERSON_HARRISON_BURGESS,
  PERSON_MIKE_JONES,
  PERSON_ETHAN_WALCH,
  PERSON_DYLAN_PACKHAM,
  PERSON_TRACE_HALE
];

export const FRIENDS_FROM_HOME_NETWORK = [
  PERSON_CURRENT_USER,
  PERSON_CODY_KNECHT,
  PERSON_ISAAC_PETTIT,
  PERSON_CADEN_KIRBY,
  PERSON_JEFFERSON_HARBAUGH,
  PERSON_MARCUS_YOUNG
];


export const ALL_PEOPLE = [
  // List of all people
  PERSON_CURRENT_USER,
  PERSON_ALEXA_URREA,
  PERSON_SAM_BENNION,
  PERSON_TRACE_HALE,
  PERSON_ADAM_LENNING,
  PERSON_MIKE_JONES,
  PERSON_ELIJAH_QUARTEY,
  PERSON_MADDIE_PETTY,
  PERSON_HARRISON_BURGESS,
  PERSON_TUSTIN_NEILSON,
  PERSON_CARTER_MADSEN,
  PERSON_RAND_ALRABADI,
  PERSON_JACOB_SEARLE,
  PERSON_DANIEL_TAYLOR,
  PERSON_ETHAN_WALCH,
  PERSON_NOOR_ASSI,
  PERSON_DYLAN_PACKHAM,
  PERSON_JAX_MATTHEWS,
  PERSON_CODY_KNECHT,
  PERSON_ISAAC_PETTIT,
  PERSON_CADEN_KIRBY,
  PERSON_JEFFERSON_HARBAUGH,
  PERSON_MARCUS_YOUNG
];

// PersonFact data

const PERSON_FACTS_BEFORE: PersonFact[] = [
  { title: 'Conversation Reminders', description: 'Ask how 312 project presentation went today'},
  { title: 'Events', description: '340 presentation with them today!!'},
  { title: 'How You Met', description: 'Met in CS 235 2 months ago'},
  { title: 'Birthday', description: 'November 7'},
  { title: 'DO NOT TALK ABOUT', description: 'The color green'},
  { title: "Relationship Status", description: "Married"},
  { title: "Social Media", description: "@sambennion"},
];

const PERSON_FACTS_AFTER: PersonFact[] = [
  { 
    title: 'Conversation Reminders',
    description: 'Wish them luck for their job interview at Amazon', 
    isNew: true 
  },
  { title: 'Events', description: '340 presentation with them today!!'},
  { title: 'How You Met', description: 'Met in CS 235 2 years ago'},
  { title: 'Birthday', description: 'November 7'},
  { title: 'DO NOT TALK ABOUT', description: 'The color green'},
  { title: "Marital Status", description: "Married"},
];

// MutualPlace data

const MUTUAL_PLACES_BEFORE: MutualPlace[] = [
  {
    name: "Wilk Ballroom",
    url: "https://goo.gl/maps/9T68wjY1qxSZwaYa9",
    formattedDate: "Friday"
  },
  {
    name: "Talmage Building",
    url: "https://goo.gl/maps/4eBE29i1LKQJFSiK8",
    formattedDate: "Apr 5"
  },
  {
    name: "Penguin Brothers Ice Cream Shop",
    url: "https://goo.gl/maps/az11Xp382t1VKFU4A",
    formattedDate: "Apr 3"
  },
  {
    name: "Kiwanis Park",
    url: "https://goo.gl/maps/LZw4fQqcP8AUaQdU7",
    formattedDate: "Apr 2"
  },
  {
    name: "Afuego Fridays",
    url: "https://g.page/afuegofridays?share",
    formattedDate: "Mar 4"
  }
];

const MUTUAL_PLACES_AFTER: MutualPlace[] = [
  {
    name: "MARB 130",
    url: "https://goo.gl/maps/Ab3WN5gBrqCsaQyGA",
    formattedDate: "5 Min Ago"
  },
  {
    name: "Wilk Ballroom",
    url: "https://goo.gl/maps/9T68wjY1qxSZwaYa9",
    formattedDate: "Saturday"
  },
  {
    name: "Talmage Building",
    url: "https://goo.gl/maps/4eBE29i1LKQJFSiK8",
    formattedDate: "Apr 5"
  },
  {
    name: "Penguin Brothers Ice Cream Shop",
    url: "https://goo.gl/maps/az11Xp382t1VKFU4A",
    formattedDate: "Apr 3"
  },
  {
    name: "Kiwanis Park",
    url: "https://goo.gl/maps/LZw4fQqcP8AUaQdU7",
    formattedDate: "Apr 2"
  },
  {
    name: "Afuego Fridays",
    url: "https://g.page/afuegofridays?share",
    formattedDate: "Mar 4"
  }
];