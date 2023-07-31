function Artist(name, playCount){
    this.name = name;
    this.playCount = playCount;
}

const radiohead = new Artist('radiohead',156);
const kishoreKumar = new Artist('kishoreKumar',141);
const theBlackKeys = new Artist('theBlackKeys',35);
const neutralMilkHotel = new Artist('neutralMilkHotel',94);
const beck = new Artist('beck',88);
const theStrokes = new Artist('theStrokes',61);
const wilco = new Artist('wilco',111);


const music = [radiohead, kishoreKumar, theBlackKeys, neutralMilkHotel, beck, theStrokes, wilco];

// pre-read

function sortMostListen(arr){

    let artist = JSON.parse(JSON.stringify(arr));  // deeply clone array 

    const sorted = [];


        for(i = 0; i < artist.length;){

            let index = 0;
            let current = artist[0]

                for (j = 0; j<artist.length; j++){

                    if(artist[j].playCount>current.playCount){
                        current = artist[j];
                        index = j
                    }
                }
            sorted.push(artist[index])
            artist.splice(index,1)  // to-do unmethod splice
        
        }
    return sorted

}

console.log(sortMostListen(music));
