const upperHandle = (name) => {
    if (name) {
        const firstLetter = name[0].toLocaleUpperCase()
        const restOfName = name.substr(1)
        return firstLetter + restOfName
    }
}
export default upperHandle