import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacteresCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/* const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorterNumbers = new Sorter(numbersCollection);
sorterNumbers.sort();
console.log(numbersCollection.data); */


/* const charactersCollection = new CharacteresCollection('lahoatodos')
const sorterCharacters = new Sorter(charactersCollection);
sorterCharacters.sort();
console.log(charactersCollection.data); */

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();