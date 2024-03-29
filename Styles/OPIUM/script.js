window.onload = function() {
    // Array de nombres de archivo de imágenes
    var images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",
        "image19.png",
        "gif1.gif",
        "gif2.gif",
        "gif3.gif",
        "gif4.gif",
        "gif5.gif",
        "gif6.gif",
        "gif7.gif",
        "gif8.gif",
        "gif9.gif",
        // Agrega más nombres de archivo según sea necesario
    ];

    // Array de nombres de archivo de música
    var musicList = [
        "song1.mp3",
        "song2.mp3",
        "song3.mp3",
        "song4.mp3",
        "song5.mp3",
        "song6.mp3",
        // Agrega más canciones aquí si es necesario
    ];


    // Obtiene una imagen aleatoria del array
    var randomImage = images[Math.floor(Math.random() * images.length)];

     // Obtiene una canción aleatoria del array
     var randomMusic = musicList[Math.floor(Math.random() * musicList.length)];


    // Obtiene la referencia a la etiqueta img
    var imgElement = document.getElementById("randomImage");

       // Obtiene el elemento de audio
    var audioPlayer = document.getElementById("audioPlayer");

    // Establece la ruta de la imagen al azar en la etiqueta img
    imgElement.src = "images/" + randomImage;

     // Establece la fuente de audio aleatoria
     audioPlayer.src = "music/" + randomMusic;

         // Reproduce la canción automáticamente
    audioPlayer.play();

};
