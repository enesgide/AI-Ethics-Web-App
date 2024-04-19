export function answer(type, youranswer) {
    // if (result == -1){
    //     return "No";
    // }
    // if(result == 1){
    //     return "Yes";
    // } else {
    //     return result;
    // }


    if(type == "Multiple Choice Option" && youranswer == 1){
        return "No";
    }
    if(type == "Text"){
        return youranswer;
    }

}

export function correctAnswer(type, answer){
    if(type == "Multiple Choice Option" && answer == -1){
        return "Yes";
    }
    if(type == "Text"){
        return "No correct answer for this question";
    }
}