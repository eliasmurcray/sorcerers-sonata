class Particle {
  private x: number;
  private y: number;
  private xVel: number;
  private yVel: number;
  private lifespan: number;

  constructor(
    x: number,
    y: number,
    xVel: number,
    yVel: number,
    lifespan: number
  ) {
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
    this.lifespan = lifespan;
  }
}

export default Particle;
