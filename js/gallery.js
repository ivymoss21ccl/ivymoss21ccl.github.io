var gallery = document.getElementById('gallery')

fetch("assets/gallery.json")
.then(function(res) {
    res.json().then(function(json) {
    json.forEach(function(el) {
var galleryItem = document.createElement('a');

galleryItem.setAttribute('class', 'gallery-item');
galleryItem.setAttribute('href', el.url);
galleryItem.setAttribute('target', '_blank');
// this writes what is essentially html and stays in memory all of it is here 
var image = document.createElement('img');
image.setAttribute('src', el.url);        
image.setAttribute('alt', el.caption);    
image.setAttribute('title', el.description); 
// this sets the image attributes like in a html <img> tag the source of the image, the alt text and the title.

var caption = document.createElement('caption');
caption.innerText = el.caption;

      
      galleryItem.appendChild(image);
      galleryItem.appendChild(caption);
      
      
      gallery.appendChild(galleryItem);
    });
  });
});
