size = 180;

let colorPicker1;
let colorPicker2;

let strokeWeightSlider;
let lineSizeSlider;
let lineSize;


function setup() {
  colorPicker1 = createColorPicker('#1E4382');
  colorPicker2 = createColorPicker('#EE2626');
  
   strokeWeightSlider = createSlider(20, 50, 35);
   strokeWeightSlider.style('width', '180px');
   
   lineSizeSlider = createSlider(100, 250, 180);
   lineSizeSlider.style('width', '180px');
  
  
  let myColors = ["#1E4382", "#EE2626"];
  let randCol;
  createCanvas(1000, 1000);
  let StrokeWeightt = 20;
  strokeWeight(StrokeWeightt);
  strokeCap(SQUARE);
  let saveButton = createButton("Save pattern");
  saveButton.mousePressed(saveArt);
  background(255);
  translate(-50, StrokeWeightt/2);
  for(x=0;x<width;x+=size-1){
    for (y=0;y<height;y+=size+0){
      c=random(0,1.3); 
      if (c<1){
        randCol=random(myColors.length);
        randCol=floor(randCol);
         stroke(myColors[randCol]);
        line(x+size,y,x,y);
      }
      else if (c<2){
       // line(x,y+size,x+size,y)
      }
      else if (c<3){
      // line(x+size,y,x,y)
      }
      else if (c<4){
        //line(x,y,x+size,y)
      }
    }
  }  
  var button = createButton("Apply and reset");
  button.mousePressed(resetSketch);
}

function draw() {
  StrokeWeightt = strokeWeightSlider.value();
  lineSize = lineSizeSlider.value();
}


function resetSketch() {
  size = lineSize;
  let myColors = [colorPicker1.color(), colorPicker2.color()];
  let randCol;
  createCanvas(1000, 1000);
  strokeWeight(StrokeWeightt);
  strokeCap(SQUARE);
  background(255);
  translate(-50, StrokeWeightt/2);
  for(x=0;x<width;x+=size-1){
    for (y=0;y<height;y+=size+0){
      c=random(0,1.3); 
      if (c<1){
        randCol=random(myColors.length);
        randCol=floor(randCol);
         stroke(myColors[randCol]);
        line(x+size,y,x,y);
      }
      else if (c<2){
       // line(x,y+size,x+size,y)
      }
      else if (c<3){
      // line(x+size,y,x,y)
      }
      else if (c<4){
        //line(x,y,x+size,y)
      }
    }
  }  
}
 
function saveArt() {
  save("myCanvas.jpg");
}
