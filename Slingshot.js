class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,280,70,30,150);
        image(this.sling2,260,70,30,90);

        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("#301608");
            if (pointA.x < 290){
                strokeWeight(8);
                line(pointA.x - 20, pointA.y , pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y , pointB.x + 20 , pointB.y);
                image(this.sling3,pointA.x - 30,pointA.y - 10, 15, 30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 20, pointA.y , pointB.x - 10, pointB.y);
                line(pointA.x + 20, pointA.y , pointB.x + 20 , pointB.y);
                image(this.sling3,pointA.x + 25,pointA.y - 10, 15, 30);
            }
            
            pop();
        }
    }
    
}