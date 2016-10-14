var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points){

    var revealPoint = function(index){
            points[index].style.opacity = 1;
            points[index].style.transform = "scaleX(1) translateY(0)";
            points[index].style.msTransform = "scaleX(1) translateY(0)";
            points[index].style.WebKitTransform = "scaleX(1) translateY(0)";
    };
    
    for (var i = 0; i < points.length; i++)
        revealPoint(i);

};

window.onload = function() {
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    var sellingPoints = document.getElementsByClassName('selling-points')[0]; 
    // Defining  sellingPoints as the first selling-point; I don't know why the variable name is plural if it's one point
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200; 
    // define scrollDistance as the distance between the sellingPoints area and the top, then subtract the distance from the fold plus 200px into the selling-points area
    window.addEventListener('scroll', function(event) { // add scroll event listener 
       if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance){ 
           // this callback does something I don't understand, here. I know this OR condition calls animatePoints() with pointsArray passed in. 
           animatePoints(pointsArray);
       }
    });
}