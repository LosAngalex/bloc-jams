//Old Version
/* var pointsArray = document.getElementsByClassName('point');
 
 var animatePoints = function(point) {
     
     var revealPoint = function(index) {
         point.style.opacity = 1;
         point.style.transform = "scaleX(1) translateY(0)";
         point.style.msTransform = "scaleX(1) translateY(0)";
         point.style.WebkitTransform = "scaleX(1) translateY(0)"
     };
    
     
 var animatePoints = function(points) {
     forEach(points, revealPoint);
 };

 window.onload = function() {
       if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     
 window.addEventListener('scroll', function(event) {
                 if (pointsArray[0].getBoundingClientRect().top <= 500) {
             animatePoints(pointsArray);   
         }
     });
 }
 
 */
 
 
 var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(point) {

    var revealPoint = function(pointIndex) {
        pointIndex.style.opacity = 1;
        pointIndex.style.transform = "scaleX(1) translateY(0)";
        pointIndex.style.msTransform = "scaleX(1) translateY(0)";
        pointIndex.style.WebkitTransform = "scaleX(1) translateY(0)"
    };
   
    
    forEach(points, revealPoint);
    // revealPoint(points[i])
};

window.onload = function() {
      if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    
window.addEventListener('scroll', function(event) {
                if (pointsArray[0].getBoundingClientRect().top <= 500) {
            animatePoints(pointsArray);   
        }
    });
}