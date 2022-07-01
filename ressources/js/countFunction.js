export function count(str) {
    let count = 0;
    str.split('').forEach(char => {
        if(char !== '.') {
            count++;
        }
    });
    return count;
}