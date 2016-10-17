var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point){
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebKitTransform = "scaleX(1) translateY(0)";
};

var animatePoints = function(points){
    forEach(points, revealPoint);
    // pass in points and the revealPoint function. Where is points coming from (the argument)? Is it an array? forEach is like a loop, animating each point with revealPoint() but pieces vex me. 
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
       if (document.body.scrollTop >= scrollDistance){ 
           // this callback does something I don't understand, here. I know this OR condition calls animatePoints() with pointsArray passed in. 
           animatePoints(pointsArray);
       }
    });
}