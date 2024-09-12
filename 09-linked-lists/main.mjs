import { LinkedList } from "./linkedList.mjs";

const list = LinkedList();

// Populate list 
list.append('dog');
list.append('parrot');
list.append('hamster');
list.append('cat');
list.prepend('snake');
list.prepend('turtle');
list.pop();
list.insertAt('cat', 3);
list.removeNode(1);

/*
    Should return:
    - List: ( turtle ) -> ( dog ) -> ( cat )  -> ( parrot ) -> ( hamster ) -> null
    - Size: 5
    - Head: turtle
    - Tail: hamster
    - Animal at index 2: cat
    - Contains dog: true
    - Find parrot index: 3
*/

console.log(`
    List: ${list.toString()}
    Size: ${list.size()}
    Head: ${list.head().value}
    Tail: ${list.tail().value}
    Animal at index 2: ${list.at(2).value}
    Contains cat: ${list.contains('cat')}
    Find parrot index: ${list.find('parrot')}
`);