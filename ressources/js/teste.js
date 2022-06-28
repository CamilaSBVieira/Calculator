const str = "888.2223,000";
function count(str) {
    let count = 0;
    str.split('').forEach(char => {
        if(char !== '.') {
            count++;
        }
    });
    return count;
}
console.log(count(str));
