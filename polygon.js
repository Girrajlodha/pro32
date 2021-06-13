class Polygon{
    constructor(x, y, radius){
        var options = {
            restitution : 0.4, 
            friction : 1.0,
            density : 1.0
        }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        fill("yellow");
        circle( pos.x, pos.y, this.radius);
        pop();
    }
}