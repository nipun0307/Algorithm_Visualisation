 class cubie{
    constructor(x,y,z,length){
        this.pos=createVector(x,y,z);   //stores the coordinates of each and every cubie
        this.len=length;
    }
    show(){
        stroke(0);
        strokeWeight(8);
        push(); //not sure
        translate(this.pos.x, this.pos.y, this.pos.z);
        //box(this.len);
        //using box we cant change colors of the faces

        // I will declare all the faces below idependently
        //it should leverage more control; or praying so
        //using vertices to make the squares

        let a= this.len*0.5;
        //orientation of axis:
        //  -------> x
        //  y (downwards positive)
        //  z (inwards positive)
        //################################################
        // Drawing both faces perp to x:
        beginShape();
        fill(fill_face['x_perp_l']);
        vertex(-a, -a, -a);
        vertex(-a, -a, a);
        vertex(-a, a, a);
        vertex(-a, a, -a);
        endShape(CLOSE);

        beginShape();
        fill(fill_face['x_perp_r']);
        vertex(a, -a, -a);
        vertex(a, -a, a);
        vertex(a, a, a);
        vertex(a, a, -a);
        endShape(CLOSE);

        //################################################
        // Drawing both faces perp to y:
        beginShape();
        fill(fill_face['y_perp_up']);
        vertex(-a, -a, -a);
        vertex(a, -a, -a);
        vertex(a, -a, a);
        vertex(-a, -a, a);
        endShape(CLOSE);

        beginShape();
        fill(fill_face['y_perp_down']);
        vertex(-a, a, -a);
        vertex(a, a, -a);
        vertex(a, a, a);
        vertex(-a, a, a);
        endShape(CLOSE);

        //################################################
        // Drawing both faces perp to y:
        beginShape();
        fill(fill_face['z_perp_back']);
        vertex(-a, -a, -a);
        vertex(a, -a, -a);
        vertex(a, a, -a);
        vertex(-a, a, -a);
        endShape(CLOSE);

        beginShape();
        fill(fill_face['z_perp_front']);
        vertex(-a, -a, a);
        vertex(a, -a, a);
        vertex(a, a, a);
        vertex(-a, a, a);
        endShape(CLOSE);
        
        pop();
    }

}
