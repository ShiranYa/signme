
//TODO: change name of fuction
function name(){
   var videoElement=  document.createElement("div");
   var aTagVideo= document.createElement("a");
   var iBtn= document.createElement('<i class="fas fa-play-circle"></i>');
   var video= videoElement.appendChild(aTagVideo).appendChild(iBtn);

return document.getElementsByClassName("videos").appendChild(video);


}

// name of class = videos


//  <div class="video" style="background-image: url(images/VIDEO01.jpg)">
//  <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/OW3CdpmD3w4" data-gall="myGallery">
//  <i class="fas fa-play-circle"></i></a>
//  </div>

var wordDictionary= [
    {
        "Name": "How_are_you", 
        "Image":"images/VIDEO01.jpg",
        "Url": "https://youtu.be/OW3CdpmD3w4"
    },
 
    {
        "Name": "Happy", 
        "Image": "images/VIDEO02.jpg",
        "Url": "https://youtu.be/OW3CdpmD3w4"
    },
  
    {
        "Name": "Yes", 
        "Image": "images/VIDEO03.jpg",
        "Url": "https://youtu.be/OW3CdpmD3w4"
    }
];