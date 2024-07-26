function make_album(Artist_name:string,Album_title:string,Tracks?:number)
{
    let Album:{Album_title: string,
        Artist_name: string, Tracks?:number} = {
        Album_title: Album_title,
        Artist_name: Artist_name,
    }
    if(Tracks!==undefined)
        Album.Tracks = Tracks;
    
    return Album;
}
let Album1 = make_album("Ali Azmat","Klashinfolk")
console.log(Album1)
let Album2 = make_album("Talha Anjum","Open Letter",15)
console.log(Album2)