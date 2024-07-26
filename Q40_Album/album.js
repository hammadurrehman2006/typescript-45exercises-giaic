function make_album(Artist_name, Album_title, Tracks) {
    var Album = {
        Album_title: Album_title,
        Artist_name: Artist_name,
    };
    if (Tracks !== undefined)
        Album.Tracks = Tracks;
    return Album;
}
var Album1 = make_album("Ali Azmat", "Klashinfolk");
console.log(Album1);
var Album2 = make_album("Talha Anjum", "Open Letter", 15);
console.log(Album2);
