// hardcoded for the translation, will do class consctructors while solving

const graph = {
    start: {
        a:    6,
        b: 2,
    },

    a: {
        fin: 1,
    },

    b: {
        a: 3,
        fin: 5,
    },

    fin: undefined,

};

const costs = {
    a: 6,
    b: 2,
    fin: Infinity,
}

const parents = {
    a: 'start',
    b: 'start',
    fin: undefined,
} 

const processed = [];

function findLowestCostNode(costs){
    let lower = Infinity;
    let lowerCostNode;

    for(node in costs){
        let cost = costs[node];
        if(cost < lower && !processed.includes(node)){
            lower = cost;
            lowerCostNode = node;
        }
    }

    return lowerCostNode;

}

function dijkstras(graph){

    let node = findLowestCostNode(costs);

    while (node){
        let cost = costs[node];
        let neighbors = graph[node];

        console.log(neighbors);  

        for (n in neighbors){
            console.log(n)
            let newCost = cost + neighbors[n];
            console.log(newCost)
            if(costs[n] > newCost){
                costs[n] = newCost;
                parents[n] = node;
                console.log(costs);

            }
        }
        processed.push(node);
        node = findLowestCostNode(costs)
    }
    return [costs.fin, parents]
}


console.log(dijkstras(graph))