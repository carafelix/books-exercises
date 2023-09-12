// I haven't watch the video. I just know the question, the limitations
// but I want to recreate it and prove it on my own. Because it's a good exercise.
const chai = require("chai");
const assert = chai.assert;


const horseNames = require('./horses.json').horses
const groups = ["A","B","C","D","E"];

// speed for horses avarage range between 32-49km/hr. so range in meters is between 8.8m/s and 13.6m/s 

function r(n){
    return Math.floor(Math.random()*n)
}

class Horse{ 
    constructor(name,speed, r1Group){
        this.name = name;
        this.speed = speed;
        this.r1Group = r1Group;
    }
}

function runRace(){


    function getHorses(){
        const preHorses = [];
        for(let i=0;i<25;i++){

            let name = horseNames[r(81)];
            let speed = (r(48)+88)/10;
            
            while(checkDuplicateName(name, preHorses)){
                name = horseNames[r(81)];
            };
            while(checkDuplicateSpeed(speed, preHorses)){
                speed = (r(48)+88)/10;
            }

            preHorses.push(new Horse(  name    , speed ,  groups[i%5]  ))
        }
        return preHorses
    }

    function checkDuplicateName(name, arr ){
        for(const hors of arr){
            if(name == hors.name){
                return true
            }
        } return false
    }

    function checkDuplicateSpeed(s, arr){
        for(const hors of arr){
            if(s == hors.speed){
                return true
            }
        } return false
    }


    const horses = getHorses().sort((a,b)=>(a.r1Group >= b.r1Group) ? 1 : -1);

    function divideGroups(h){
        const grouped = {};

        for(const hors of h){
            grouped[hors.r1Group] = ( grouped[hors.r1Group] || []).concat([hors])
        }

        for(const group in grouped){
            grouped[group] = grouped[group].sort((a,b) => (a.speed <= b.speed) ? 1 : -1);
        }

        return grouped
    }

    const firstRound = divideGroups(horses); // thats 5 races

    function poppinLasts(r1){
        for(const group in r1){
            r1[group].pop();
            r1[group].pop();

            for(let i=0;i<3;i++){
                r1[group][i].r1Placement = r1[group][i].r1Group + (i+1);
            }
        }
        return r1
    }

    const popFirstRoundPlaces = poppinLasts(firstRound);


    function getFirstPlaces(r1){

        const firsts = []

        for (const group in r1){
            firsts.push(r1[group][0])
        }    
            return firsts.sort((a,b)=> a.speed<=b.speed ? 1 : -1 )
    }

    const secondRound = getFirstPlaces(popFirstRoundPlaces); // 6 race
    secondRound.pop();
    secondRound.pop();

    const fp = secondRound[0];
    const sp = secondRound[1]

    function thirdRace(r2,r1){ // 7
        const race = [r1[fp.r1Group][1], r1[fp.r1Group][2], r1[sp.r1Group][1],
                    r2[1], r2[2]].sort((a,b)=> a.speed<=b.speed ? 1 : -1);
        return race;
    }



    const podium = [fp].concat(thirdRace(secondRound , popFirstRoundPlaces));
    podium.pop();
    podium.pop();
    podium.pop();

    const fastHorses = horses.sort((a,b)=>(a.speed <= b.speed) ? 1 : -1);
    
    return {
        race: [      podium[0].name,        podium[1].name,      podium[2].name],
        guaranteed: [fastHorses[0].name,    fastHorses[1].name  ,fastHorses[2].name]
    }
}


    for(let i=0; i<1000000;i++){
        let hipodromo = runRace();
        assert.deepEqual( hipodromo.race,    hipodromo.guaranteed,   'hermanito q paso');
        // console.log(hipodromo)
    }






// Axioms
// the third of any group could be the third globally but no higher
// the second of *
// any placement of the podium of any group could de-rank in the global scope. ex, the first of B group could be in reallity the 4th globally
// for a third from any to become third globally, the second from that group should also must have become second globally 
// for a second * ... first
// the 4th and 5th of any race could never become 1st, 2nd or 3rd globally

// taking those things into consideration and with a drawed table in a notepad, solution came obvious.
// race 5 horses into groups
// race the first horses of each group
// race the first 3 horses of that against the other 2 from the initial group of the horse that came in first.
// that makes it 7 races.






