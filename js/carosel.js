document.addEventListener('DOMContentLoaded', function() {

   
  
    var images = document.getElementById('carouselImages');
    var caption = document.getElementById('carouselCaption');
    var prev = document.getElementById('carouselPrev');
    var next = document.getElementById('carouselNext');
    
    
   // this fetches the .json file from the assets folder 
    fetch("assets/carosel.json")
    
  
    .then(function(res) {
    
     
      res.json().then(function(json) {
    
        // this does the function after the fetch command 
        json.forEach(function(el, i) {
    
         
          // this section creates something that loads in images the alt text and the titles for the carosel.
        var image = document.createElement('img');
    
          
          image.setAttribute('src', el.url);        // The image url is set here
          image.setAttribute('alt', el.caption);    // The caption is set here as the alt text as i wanted my website to have the tooltip as description
          image.setAttribute('title', el.alt);  // The tooltip
    
          
          images.appendChild(image);
          
        });
        
        
        setupCarousel(json);
      });
    });
    
    
    //this function establishes the setup and how it works
    function setupCarousel(json) {
      
    
    
     
      var imageCount = images.childElementCount;
    
      
      var currentImage = 1;
    
      
      var imageWidth = 204 ;
      
     
    
      
      prev.addEventListener('click', function(e) {
        e.preventDefault();
    
        
        if(currentImage != 1) {
    
          
          --currentImage;
    
          
          images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }
        
        
        caption.innerText = json[currentImage - 1].caption;
      });
    
      
      next.addEventListener('click', function(e) {
        e.preventDefault();
    
        
        if(currentImage != imageCount) {
    
          
          ++currentImage;
    
          
          images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }
        
        
        caption.innerText = json[currentImage - 1].caption;
      });
      
      
      caption.innerText = json[currentImage - 1].caption;
    }
    
   
    });