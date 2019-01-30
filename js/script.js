/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["American Boy", "Belly ache", "Bohemian Rhapsody", "2 Lanes"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var image_links= ["https://upload.wikimedia.org/wikipedia/en/0/0d/American_Boy_UK_Cover.jpg",
,"https://cdn176.picsart.com/228529418013202.jpg?r1024x1024", "https://streamd.hitparade.ch/cdimages/queen-bohemian_rhapsody_s_10.jpg",
"https://i.ytimg.com/vi/MF2YCxZIoys/maxresdefault.jpg"];

var artist= ["Estelle", "Billie Ellish","Queen", "Anthony Rosso"];
var song_lengths= ["4:02", "3:31", "5:55", "3:43"];
var links= ["https://www.youtube.com/watch?v=Ic5vxw3eijY", "https://www.youtube.com/watch?v=gBRi6aZJGj4", "https://www.youtube.com/watch?v=axAtWjn3MfI",
"https://www.youtube.com/watch?v=II9n7AbIlDY"]; 


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    image_links.forEach(function(img_src){
        $('#images').append('<img src="' + img_src + '">');
    });
    songs.forEach(function(song_name){
        $('#songs').append('<p class="song_name">' + song_name + '</p>');
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
