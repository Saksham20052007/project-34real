class Slingshot{
    constructor(body1, body2){
        var options={
            bodyA : body1,
            bodyB : body2,
            length:200,
            stiffness:0.01     
            
        }
        this.rope = Constraint.create(options);

        World.add(world, this.rope);
}
display(){
 

}


fly(){
    this.rope.bodyA = null;
}

attach(body){
    this.rope.bodyA = body;
}
}
