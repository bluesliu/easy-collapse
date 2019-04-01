let defaultClassName = "easy-collapse";

export default (className, suffix="")=>{
    let name1 = defaultClassName + ((suffix!=="")?("-" + suffix):"");
    if(!className || className===defaultClassName){
        return name1;
    }

    let name2 = className + ((suffix!=="")?("-" + suffix):"");
    return `${name1} ${name2}`
};