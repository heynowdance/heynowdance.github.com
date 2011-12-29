var heynowdance;

heynowdance = this.heynowdance || {};

heynowdance.Point = (function() {
  var x;
  var y;
  
  function Point(xCoord, yCoord) {
    this.x = xCoord;
    this.y = yCoord;
  }
  
  return Point;
})();

heynowdance.Vector = (function() {
  var start;
  var end;
  
  function Vector(s, e) {
    this.start = s;
    this.end = e;
  }
  
  Vector.prototype.intersects = function(vector) {
    // Check if points never share an x-value
    var leftMostVector = this;
    var rightMostVectory = vector;
    if (this.start.x < vector.start.x) {
      leftMostVector = vector;
      rightMostVector = this;
    }
    if (leftMostVector.right.x < rightMostVector.left.x)
      return false;
    
    
    
    var higherVector = this;
    if (this.start.y > vector.start.y)
      leftMost
    
    // Find which vector has a higher y-value
    
    // If the greater y-value vector is still higher by the highest common x-value
    // then the lines never crossed
    
    return true;
  }
  
  return Vector;
})();

heynowdance.Polygon = (function() {
  var points = [];

  var minX;
  var minY;
  var maxX;
  var maxY;
  
  function Polygon(p) {
    this.points = p;
    this.minX = 0; this.minY = 0; this.maxX = 0; this.maxY = 0;
    
    // Find the min and max for x and y axes
    for (var p in this.points) {
      if (this.points[p].x < this.minX)
        this.minX = this.points[p].x;
      if (this.points[p].x > this.maxX)
        this.maxX = this.points[p].x;
      if (this.points[p].y < this.minY)
        this.minY = this.points[p].y;
      if (this.points[p].y > this.maxY)
        this.maxY = this.points[p].y;
    }
  }
  
  Polygon.prototype.containsPoint = function(point) {
    if (point.x < this.minX || point.x > this.maxX || point.y < this.minY || point.y > this.maxY)
      return false;
    
    var padding = (this.maxX - this.xMin) / 100;
    var rayStart = new heynowdance.Point(this.minX - padding, point.y);
    var ray = new heynowdance.Vector(rayStart, point);
    
    var intersections = 0;
    for (var p in this.points) {
      var sideStart = this.points[p];
      var sideEnd;
      if (p == this.points.length-1)
        sideEnd = this.points[0];
      else
        sideEnd = this.points[p + 1]
      var side = new heynowdance.Vector(sideStart, sideEnd);
        
      if (ray.intersects(side))
        intersections++;
    }
    
    if (intersections == 0 || intersections == this.points.length)
      return true;
    return false;
  }
  
  return Polygon;
})();