let magicians: string[] = ["Harry Potter", "MAD", "Howard Thurston", "Jean-Eugène Robert-Houdin"];

let make_Great = (magicians: string[]): string[] => {
   return magicians.map(item => `Great ${item}`)
}

let show_Magicians = (magicians: string[]): void => {
    magicians.forEach(magician => console.log(magician));
};

show_Magicians(magicians);//old array
let great_magicians = make_Great(magicians);
show_Magicians(great_magicians); //modified array
