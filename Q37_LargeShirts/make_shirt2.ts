function make_shirt(size: string = "Large", quote: string = "I love Typescript") {
    console.log(`The shirt of ${size} size and message "${quote}" printed on it will be delivered to you soon.`)
}
//large shirt
console.log("\nLarge shirt")
make_shirt()
//medium shirt
console.log("\nMedium shirt")
make_shirt("medium")
//small shirt
console.log("\nSmall shirt")
make_shirt("small", "Code with passion, debug with patience.")