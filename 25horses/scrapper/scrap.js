const cheerio = require("cheerio")
const axios = require("axios")

const horses = [];

// links
// 'https://es.wikipedia.org/wiki/Gran_Premio_Hip%C3%B3dromo_Chile'
// 'https://es.wikipedia.org/wiki/Tanteo_de_Potrancas'
async function scrap(link) { 
 

    // downloading the target web page

    const axiosResponse = await axios.request({
        method: "GET",
        url: link,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    // clean data

    const $ = cheerio.load(axiosResponse.data);

    $('table.wikitable').find('b').each((i,el)=>{
        horses.push(el.children[0].data)
    });

    return horses
}

// scrap('https://es.wikipedia.org/wiki/Gran_Premio_Hip%C3%B3dromo_Chile');
// scrap('https://es.wikipedia.org/wiki/Tanteo_de_Potrancas');

async function cleanHorses(arr){
    await scrap('https://es.wikipedia.org/wiki/Gran_Premio_Hip%C3%B3dromo_Chile');
    await scrap('https://es.wikipedia.org/wiki/Tanteo_de_Potrancas');
    
    console.log(
        [...new Set(arr)]
    )

}

cleanHorses(horses);
