export const addEllipsis = (text) =>{
    if(text.lenth > 50){
        return text.subString(0,50) + '...'
    }
    return text;
}