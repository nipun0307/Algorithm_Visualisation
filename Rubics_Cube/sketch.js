let cam;
let inp_dim;
let click_dim;
let side_length;  
let cubie_side=50;
let cubies_per_len=3; //cube; no cuboid for now
let cube=[]; //acts as a constructor; using a matrix to make the cube

//introducing the colors
// reference: https://www.speedsolving.com/wiki/index.php/File:Western_colors.png
const fill_face={
  'y_perp_up':'#FFFFFF',   //White
  'y_perp_down':'#FFFF00', //Yellow
  'x_perp_l':'#FFA500',    //Orange
  'x_perp_r':'#FF0000',    //Red
  'z_perp_back':'#0000FF', //Blue
  'z_perp_front':'#00FF00' //Green
  
};
function setup() {

  noLoop();
  createCanvas(600, 600, WEBGL); 
  background(50);
  //Using EasyCam Library in p5js
  cam= createEasyCam({distance: 500}); //depth
  console.log(fill_face['x_perp_l']);

  inp_dim=createInput("Enter Cubie on each length");
  inp_dim.position(1, height);

  side_length=createInput("Length of each side");
  side_length.position(inp_dim.x, inp_dim.y+inp_dim.height)

  click_dim=createButton("ENTER");
  click_dim.position(inp_dim.x+inp_dim.width,inp_dim.y+inp_dim.height/2 -click_dim.height/2);
  click_dim.mouseClicked(enter);

  let win_reload= createButton("RELOAD");
  win_reload.position(width-win_reload.width, click_dim.y);
  win_reload.mouseClicked(reload);

}

function enter(){
  cubies_per_len=float(inp_dim.value());
  cubie_side=(float(side_length.value()))/cubies_per_len;

  console.log(cubie_side);
  for(let i=0; i<cubies_per_len; i++){
    cube[i]=[];
    for(let j=0; j<cubies_per_len; j++){
      cube[i][j]=[];
      for(let k=0; k<cubies_per_len; k++){
        const len=cubie_side;
        const offset=0.5*len*(cubies_per_len-1);
        const x=len*i - offset;
        const y=len*j - offset;
        const z=len*k - offset;
        cube[i][j][k]=new cubie(x,y,z,len);
      }
    }
  }
  loop();
}

function reload(){
  location.reload();
}
let angle=0.1;

function draw() {
  background(50);
  for(let i=0; i<cubies_per_len; i++){
    for(let j=0; j<cubies_per_len; j++){
      for(let k=0; k<cubies_per_len; k++){
        cube[i][j][k].show();
      }
    }
  }
  rotateZ(angle);
  angle+=0.5;
  
} 
