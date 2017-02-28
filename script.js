TinyTurtle.apply(window, [undefined, 400, 400]);

function square() {
    forward(50);
    right(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
    forward(50);
}

// Type your function call below
//square()

stamp();



function rectangle() {
    forward(60);
    right(90);
    forward(100);
    right(90);
    forward(60);
    right(90);
    forward(100);
    right(90);
}
//rectangle();

function hexagon() {
    forward(30);
    right(60);
    forward(30);
    right(60);
    forward(30);
    right(60);
    forward(30);
    right(60);
    forward(30);
    right(60);
     forward(30);
    right(60);
}
//hexagon();

function house(){

square();
    right(40);
    forward(40);
    right(100);
    forward(40);
    
}

//house();

function pentagon(){
    
}

function rectangle(x,y) {
    forward(x);
    right(90);
    forward(y);
    right(90);
    forward(x);
    right(90);
    forward(y);
    right(90);
}
//rectangle(20,120);

function tri(t){
right(60);
forward(t);
right(120);
forward(t);
right(120);
forward(t);
}
//tri(300);
