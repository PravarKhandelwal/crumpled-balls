class dustbin{
    constructor(x,y,h,angle)
    {
        this.body = Bodies.rectangle(x,y,20,h,{isStatic: true});
        this.w = 20;
        this.h = h;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

    }
    display()
    {
        var a = this.body.angle;
        fill ("white");
        rotate (a);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
    
}