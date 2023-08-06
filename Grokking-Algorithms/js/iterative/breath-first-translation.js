
const graph = {};  // this one is a straigth translation, the other ones aren't. 
// tbs that I learned from this it was not necesary to make everyone a const
// but ofc in real application it would be an obj with a name n friends properties.


graph['you'] = ['alice','bob','claire'];
graph['bob'] = ['anuj','peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom','jhonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jhonny'] = [];

const queue = graph['you'];

function breathFirstSearch(graph,queue){
    // console.log(graph)
    // console.log(queue)
    
    const q = queue.slice();
    const searched = []
    while (q.length > 0){

        let person = q.shift();

        if(!searched.includes(person)){     // need this for not searching for peggy twice

            // console.log(person)
            
            if (isSeller(person)){
                
                console.log(person + ' is a mango seller'); // we know thom is a mango seller

                return true

            } else {
                q.push(...graph[person])
            };

            searched.push(person)
        }    
    }

    return false
};

function isSeller(name){
    return name === 'thom';
}


console.log(breathFirstSearch(graph,queue))

