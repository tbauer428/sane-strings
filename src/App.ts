"use strict";

export function reverse(stringToBeReversed: String){

    let newStringArray: String[] = [""];
    
    for(let i: number = stringToBeReversed.length; i >= 0; --i){

        newStringArray.push(stringToBeReversed.charAt(i).toString())
        
    }

    return newStringArray.join("");

}



