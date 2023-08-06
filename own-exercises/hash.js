function veet(string) {
    let hash = 0;
    if (string.length == 0) return hash;
    for (x = 0; x <string.length; x++) {
    ch = string.charCodeAt(x);
            hash = ((hash <<5) - hash) + ch;
            hash = hash & hash;
        }
    return hash;
    }
    let str = "veet"
    console.log(veet(str));