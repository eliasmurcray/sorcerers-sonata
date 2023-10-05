import Camera from "./Camera";
import Circle from "./Circle";
import Wall from "./Wall";
let assets: {
  [key: string]: HTMLCanvasElement;
};

const HALF_PI = Math.PI * 0.5;

class Player extends Circle {
  private angle: number;
  private hitpoints: number;
  private knockback: number;
  private movementSpeed: number;
  private punchAnimationOffset: number;
  private punchSide: boolean;
  private punchSpeed: number;
  private swingAnimationOffset: number;
  private swingDelay: number;
  private swingDirection: boolean;
  private swingSpeed: number;
  private weaponIndex: number;
  private worldXMax: number;
  private worldXMin: number;
  private worldYMax: number;
  private worldYMin: number;
  private xVelocity: number;
  private yVelocity: number;
  private keys: boolean[];

  #maxSwingAngle: number = Math.PI;
  #constSwingDelay: number = 90;

  constructor(x: number, y: number) {
    super(x, y, 19);
    this.angle = 0;
    this.hitpoints = 3;
    this.knockback = 0.5;
    this.movementSpeed = 2;
    this.punchAnimationOffset = 0;
    this.punchSide = false;
    this.punchSpeed = 0.3333;
    this.swingAnimationOffset = 0;
    this.swingDelay = 0;
    this.swingDirection = false;
    this.swingSpeed = 6;
    this.weaponIndex = 0;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.keys = [];
  }

  bindEventListeners(canvas: HTMLCanvasElement): void {
    canvas.tabIndex = 1;
    canvas.addEventListener(
      "mousemove",
      (event: MouseEvent) => {
        this.angle =
          Math.atan2(event.offsetY - this.y, event.offsetX - this.x) +
          Math.PI / 2;
      },
      { passive: true }
    );

    canvas.addEventListener("keydown", (event: KeyboardEvent) => {
      this.keys[event.keyCode] = true;
    });

    canvas.addEventListener("keyup", (event: KeyboardEvent) => {
      delete this.keys[event.keyCode];
    });
  }

  setWorldBounds(
    worldXMin: number,
    worldXMax: number,
    worldYMin: number,
    worldYMax: number
  ): void {
    this.worldXMin = worldXMin;
    this.worldXMax = worldXMax;
    this.worldYMin = worldYMin;
    this.worldYMax = worldYMax;
  }

  update(walls: Wall[]): void {
    this.xVelocity = 0;
    this.yVelocity = 0;

    if (this.keys[49]) {
      this.weaponIndex = 0;
    } else if (this.keys[50]) {
      this.weaponIndex = 1;
    }

    if (this.keys[65]) {
      this.xVelocity -= this.movementSpeed;
    }
    if (this.keys[87]) {
      this.yVelocity -= this.movementSpeed;
    }

    if (this.keys[83]) {
      this.yVelocity += this.movementSpeed;
    }
    if (this.keys[68]) {
      this.xVelocity += this.movementSpeed;
    }

    this.x += this.xVelocity;
    this.y += this.yVelocity;

    // World boundaries
    if (this.x < this.worldXMin + this.radius) {
      this.x = this.worldXMin + this.radius;
    } else if (this.x > this.worldXMax - this.radius) {
      this.x = this.worldXMax - this.radius;
    }
    if (this.y < this.worldYMin + this.radius) {
      this.y = this.worldYMin + this.radius;
    } else if (this.y > this.worldYMax - this.radius) {
      this.y = this.worldYMax - this.radius;
    }

    // Walls
    walls.forEach((wall) => wall.resolveCircleCollision(this));
  }

  render(
    ctx: CanvasRenderingContext2D,
    assets: {
      [key: string]: HTMLCanvasElement;
    }
  ) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    switch (this.weaponIndex) {
      default:
        ctx.fillStyle = `rgb(245, 216, 166)`;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        if (this.punchSide) {
          ctx.beginPath();
          ctx.ellipse(
            12,
            -16 - this.punchAnimationOffset,
            6,
            6,
            0,
            0,
            Math.PI * 2
          );
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.ellipse(-12, -16, 6, 6, 0, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.ellipse(12, -16, 6, 6, 0, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.beginPath();
          ctx.ellipse(
            -12,
            -16 - this.punchAnimationOffset,
            6,
            6,
            0,
            0,
            Math.PI * 2
          );
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
        ctx.drawImage(assets.player_body, -this.radius, -this.radius);
    }
    ctx.restore();
  }
}

export default Player;
