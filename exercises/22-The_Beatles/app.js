let song = "let it be,0 let it be,1 let it be,2 let it be,3 \
            there will be an answer, 4\
            let it be,5 let it be,6 let it be,7 let it be,8 let it be,9 \
            whisper words of wisdom, 10\
            let it be 11"

function sing(){
    let lyrics = []
    for(let i= 0; i <= 11; i++){
        switch (i){
            case 4: 
                lyrics.push(" there will be an answer")
                continue
            case 10: 
                lyrics.push(" whisper words of wisdom")
                continue
            default: 
                lyrics.push(" let it be")
                continue
        }
    }

    return lyrics.toString().trimStart()
}
//Your code above ^^^
console.log(sing());