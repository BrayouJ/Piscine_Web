export function countGs(str) {
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "G")
        counter += 1
    }
    return counter
}