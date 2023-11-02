// Create a Promised based function that will check a string to determine if it's length is greater than 10.

// If the length is greater than 10 then resolve it and console log "Big word".

// If the length of the string is less than 10 then reject it and console log "Small String"

function bigWord(string) {
    let result = new Promise((resolve, reject) => {
        if(string.length > 10) {
            setTimeout(() => resolve("Big Word"), 2000)
        }else {
            setTimeout(() => reject("Small String"), 2000)
        }
    })

    return result
}

bigWord("DylanHeslop").then((result) => {
    console.log(result)
} ).catch((result) => console.log(result))
