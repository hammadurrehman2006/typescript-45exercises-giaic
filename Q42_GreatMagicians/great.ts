let magicians: string[] = ["Harry Potter", "MAD", "Howard Thurston", "Jean-Eugène Robert-Houdin"];

let make_Great = (magicians: string[]): void => {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "Great " + magicians[i];
  }
};

let show_Magicians = (magicians: string[]): void => {
  magicians.forEach(magician => console.log(magician));
};

show_Magicians(magicians);//old array
make_Great(magicians);
show_Magicians(magicians); //modified array