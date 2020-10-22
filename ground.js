class ground {
    constructor()
    {
       
        this.body = Bodies.rectangle(400,660,800,20);
        this.w = 800;
        this.h = 20;
        World.add(world,this.body);
    }
    display()
    {
        var a = this.body.angle;
        rotate (a);
        fill ('yellow');
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}