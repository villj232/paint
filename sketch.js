//============================
//  Paint
//============================

//html elements
var drawingCanvas;
var saveButton;
var brushPicker;

//values saved from html elements
var colorPicker;
var brushSize;
var brushType;


function setup() {

    //Make the canvas and then insert it into a div
    drawingCanvas = createCanvas(760, 480);
    drawingCanvas.parent('drawingContainer');
    background("white");

    //set up the color picker
    colorPicker = select("#ColorPicker");

    //set up the paintbrush width slider
    brushSize = createSlider(1, 50, 10);
    brushSize.parent('brushSize');

    //set up the save button
    saveButton = select('.saveButton');
    saveButton.mouseClicked(saveFunction);

    //TASK: set up the clear button
    clearButton = select('.clearButton');
    clearButton.mouseClicked(clearFunction);


    //set up the brush types
    brushPicker = createSelect();
    brushPicker.parent("brushType")

    brushPicker.option('paint brush');
    //TASK: add paint bucket option
    brushPicker.option('paint bucket');
    //TASK: add eraser option
    brushPicker.option('eraser');

    //TASK: add two new brush options
    brushPicker.option("lineone");
    brushPicker.option("linetwo");
    brushPicker.option("linethree");

    //Set up the brush type event listener:
    brushPicker.changed(changeBrush);

    //Set the default brush type to the first item in the menu:
    brushType = brushPicker.value();
}


function draw() {

    if (mouseIsPressed) {
        if (brushType == "paint brush"){
            standardStroke();

        }
        //add your other brush options here using else if
        else if (brushType == "paint bucket"){
          background ("#"+colorPicker.value());
        }
        else if (brushType == "eraser"){
          strokeWeight(brushSize.value());
          stroke("white");
          line(pmouseX, pmouseY, mouseX, mouseY);

        }
        else if (brushType == "lineone"){
          strokeWeight(brushSize.value());
          stroke("#"+colorPicker.value());
          rect(mouseX, mouseY, 50, 50);
          ellipse(mouseX, mouseY, 30,30);

        }

        else if (brushType == "linetwo"){
          strokeWeight(brushSize.value());
          stroke("#"+colorPicker.value());
          ellipse(mouseX, mouseY, 70, 70);
          ellipse(mouseX, mouseY, 20, 20);
        }
        else if (brushType == "linethree"){
          strokeWeight(brushSize.value());
          stroke(mouseX/2,mouseX/2,mouseY/2);
          rect(mouseX, mouseY, 50, 50);
          ellipse(mouseX, mouseY, 30,30);

        }

    } else {
        //Cursor options: ARROW, CROSS, HAND, MOVE, TEXT, or WAIT, or path for image
        //if you use an image, the recommended size is 16x16 or 32x32 pixels
        cursor(CROSS);
    }
}

//--------------------------
// Brushes
//--------------------------

function standardStroke(){
    //set the size of the brush from the slider
    strokeWeight(brushSize.value());

    //use the hex code for the stroke color
    stroke("#"+colorPicker.value());
    //If you want to use the RGB values instead you can do so like this:
    //(useful if you want to add opacity with RGBA)
    // stroke(colorPicker.elt.color.rgb[0]*255,
    //         colorPicker.elt.color.rgb[1]*255,
    //         colorPicker.elt.color.rgb[2]*255
    //         );

    //pmouseX and pmouseY give you the previous mouse position
    line(pmouseX, pmouseY, mouseX, mouseY);

}

//TASK: set up a paint bucket, eraser, and two new brushes
//each one should have its own function

//--------------------------
// Event Listeners
//--------------------------

function changeBrush(){
    //This takes the name of the drop-down item you selected
    //and saves it as a string to the brushType variable.
    //There's no need to edit this function for you assignment
    brushType = brushPicker.value();
}

function saveFunction() {
    save(drawingCanvas, "myDrawing.jpg");
}

//TASK: set up clear button function
function clearFunction() {
  background("white");
}
