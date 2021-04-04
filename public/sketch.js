var vertices = [];

// Setting up the initial canvas
function setup() {
  createCanvas(windowWidth, windowHeight);   
}

// Getting the vertics when clicked on the canvas
function mousePressed() {
  var v = createVector(mouseX, mouseY);
  vertices.push(v);
}

function draw() {
  // Setting background colour
  background(30);

  // In Prim's Algorithm there would be two sets of vertices : 
  // 1. First set of vertices which are already included in Tree - included
  // 2. The vertices which are not included/touched yet - notIncluded

  var included = [];
  var notIncluded = [];

  // push all the vertices to notIncluded initially
  for (var i = 0; i < vertices.length; i++) {
    notIncluded.push(vertices[i]);
  }

  // Choose any one point
  included.push(notIncluded[0]);
  notIncluded.splice(0, 1);

  while (notIncluded.length > 0) {
    var record = 10000000;
    var rIndex;
    var uIndex;
    
    for (var i = 0; i < included.length; i++) {
      for (var j = 0; j < notIncluded.length; j++) {

        // storing included and nonIncluded vertices
        var v1 = included[i];
        var v2 = notIncluded[j];

        // Calculating shortest distance between two vetices
        var d = dist(v1.x, v1.y, v2.x, v2.y);
        
        if (d < record) {
          record = d;
          rIndex = i;
          uIndex = j;
        }
      }
    }
    stroke(255);
    strokeWeight(4);
    line(
      included[rIndex].x,
      included[rIndex].y,
      notIncluded[uIndex].x,
      notIncluded[uIndex].y
    );
    included.push(notIncluded[uIndex]);
    notIncluded.splice(uIndex, 1);
  }

  for (var i = 0; i < vertices.length; i++) {
    
    fill(255);
    // Circles when clicked
    ellipse(vertices[i].x, vertices[i].y, 16, 16);
  }
}