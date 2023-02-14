export const getSrc = (name) => {
    return new URL(`./images/${name}`, import.meta.url).href
}
