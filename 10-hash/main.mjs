import { HashMap } from "./hashMap.mjs";

const hashMap = HashMap(16, 0.75);
hashMap.set('apple', 'red');
hashMap.set('banana', 'yellow');
hashMap.set('carrot', 'orange');
hashMap.set('dog', 'brown');
hashMap.set('elephant', 'gray');
hashMap.set('frog', 'green');
hashMap.set('grape', 'purple');
hashMap.set('hat', 'black');
hashMap.set('ice cream', 'white');
hashMap.set('jacket', 'blue');
hashMap.set('kite', 'pink');
hashMap.set('lion', 'golden');

// Print initial entries
console.log(`
    --- Initial Entry ---
    Bucket Size: ${hashMap.buckets.length}
    Num of nodes: ${hashMap.length()}
    Entries:    
`);

for (let i = 0; i < hashMap.entries().length; i++) {
    console.log(`       [${hashMap.entries()[i]}]`);
};

// After update
hashMap.set('elephant', 'big');
console.log(`
    --- After Update ---
    Bucket Size: ${hashMap.buckets.length}
    Num of nodes: ${hashMap.length()}
    Entries:    
`);

for (let i = 0; i < hashMap.entries().length; i++) {
    console.log(`       [${hashMap.entries()[i]}]`);
};

// After insertion
hashMap.set('moon', 'silver');
console.log(`
    --- After Update ---
    Bucket Size: ${hashMap.buckets.length}
    Num of nodes: ${hashMap.length()}
    Entries:    
`);

for (let i = 0; i < hashMap.entries().length; i++) {
    console.log(`       [${hashMap.entries()[i]}]`);
};

// Test another functions
hashMap.set('sun', 'hot');
hashMap.clear();

hashMap.set('dog', 'cute');
hashMap.set('moon', 'light');
hashMap.set('ice', 'cold');

console.log(`
    --- Final testing ---
    Bucket Size: ${hashMap.buckets.length}
    Num of nodes: ${hashMap.length()}
    Get ice value: ${hashMap.get('ice')}
    Has sun key: ${hashMap.has('sun')}

    Keys: ${hashMap.keys()}
    Values: ${hashMap.values()}

    Entries:    
`);

for (let i = 0; i < hashMap.entries().length; i++) {
    console.log(`       [${hashMap.entries()[i]}]`);
};