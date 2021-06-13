class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB;
        this.slingshot1 = Constraint.create(options);
        World.add(world, this.slingshot1);
    }

    display(){
        if(this.slingshot1.bodyA){
            var pointA = this.slingshot1.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(0);
            strokeWeight(5);
            line(pointA.x, pointA.y , pointB.x, pointB.y);
            pop();
        }
    }
    attach(body){
        this.slingshot1.bodyA = body;
    }
    
    fly(){
        this.slingshot1.bodyA = null;
    }
}