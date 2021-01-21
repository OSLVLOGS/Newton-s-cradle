class Rope {
    constructor(bodyA, pointB){

      var opt = {

        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:250
      }
      
      this.pointB = pointB;
      this.rope = Constraint.create(opt);
      World.add(world, this.rope);

    }


     display () {

       var pointA = this.rope.bodyA.position;
       var pointB = this.pointB;
       push();
       stroke(48, 22, 8);
       line(pointB.x, pointB.y, pointA.x, pointA.y);
       pop();


     }

}