// Define the make_album function
function make_album(artist_name:string, album_title:string, tracks?: number){
let album: { artist: string, title:string, tracks?: number} = {
    artist:artist_name,
     title:album_title,
};
if (tracks !== undefined){
    album.tracks = tracks;
}

return album;

}

// Calling three functions and Creating 3 variables with different values

make_album("Saad" , "Album title 1")
let album1 = make_album("Saad" , "Album title 1")

let album2 = make_album("Usman", "Album title 2")


// Calling a make function with 3rd parameter
let album3 = make_album("Ali", "Album title 3", 10) 

// Printing the values

console.log(album1);
console.log(album2);
console.log(album3);