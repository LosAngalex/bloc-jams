var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(point) {

    var revealPoint = function(pointIndex) {
        pointIndex.style.opacity = 1;
        pointIndex.style.transform = "scaleX(1) translateY(0)";
        pointIndex.style.msTransform = "scaleX(1) translateY(0)";
        pointIndex.style.WebkitTransform = "scaleX(1) translateY(0)"
    };


    forEach(pointsArray, revealPoint);
};

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
       window.addEventListener('scroll', function(event) {
                 if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
         }

        if (window.innerHeight > 950) {
            animatePoints(pointsArray);
        }

     });
 }
