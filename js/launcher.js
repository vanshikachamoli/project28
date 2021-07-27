class launcher{
constructor(bodyA, pointB){
var options = {
bodyA:bodyA,
pointB:pointB,
stiffness:0.0004,
length:1
}
this.pointB = pointB
this.launcher = Constraint.create(options)

World.add(world,this.launcher)
}
fly(){
this.launcher.bodyA = null;

}

display(){
    if(this.launcher.bodyA){
var pointA = this.launcher.bodyA
var pointB = this.pointB;
strokeWeight(5);
stroke("black");
line(pointA.x , pointA.y , pointB.x , pointB.y)
    }
}
}