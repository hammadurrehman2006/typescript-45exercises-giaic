let myname = "Muhammad Hammad ur Rehman"
console.log("\t\tLowerCase")
console.log("\t",myname.toLowerCase())
console.log("\n\n\t\tUpperCase")
console.log("\t",myname.toUpperCase())
//tile_case==============================================================
function toTitleCase(myname: string): string {
    const words = myname.split(" ");
    const titleCasedWords = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
    return titleCasedWords.join(" ");
  }
console.log("\n\n\t\tTitleCase")
console.log("\t",toTitleCase(myname))