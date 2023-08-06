class Person{
    constructor(name, bool, friends){

        this.name = name;
        this.mango = bool;
        this.friends = friends;
    }    
}

const anuj = new Person('anuj', false,  []);
const peggy = new Person('peggy', false,  []);
const thom = new Person('thom', true,  []);
const jhonny = new Person('jhonny', false,  []);
const alice = new Person('alice', false,  [anuj,peggy]);
const bob = new Person('bob', false,  [peggy]);
const claire = new Person('claire', false,  [thom,jhonny]);
const you = new Person('you', false,  [alice,bob,claire]);




function breathFirstSearch(start){

    const q = [start];
    const searched = []

    
    while (q.length > 0){

        let person = q.shift();


        if(!searched.includes(person.name)){   

            searched.push(person.name);

            person.friends.forEach((friend)=>{  
                if(friend.parent === undefined){
                    friend.parent = person;
                }
            })

            
            if (isSeller(person)){
                
                console.log(person.name + " sells mango");
                return [person, backtrackParent(person)]

            } else {
                q.push(...person.friends)
            };
        }    
    }

    return false
};

function isSeller(person){
    return person.mango === true;
}

function backtrackParent(person){
    if(person.parent === undefined){
        return ''
    } else {
        return person.parent.name + ' ' + backtrackParent(person.parent)
    }
};

console.log(breathFirstSearch(you))


// add backwards that goes trough parents nodes. Asign parent nodes a la ida,
// I think that can get messy if someone has already being assigned a parent