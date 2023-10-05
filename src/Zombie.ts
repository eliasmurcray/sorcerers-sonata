import Player from "./Player";

class Zombie {
  private x: number;
  private y: number;
  private hp: number;
  private radius: number;
  private angle: number;
  private maxHp: number;
  private xVel: number;
  private yVel: number;
  private maxSpeed: number;
  private healthbarTimer: number;
  private hitTimer: number;
  private maxHitTimer: number;

  private myopia: number;
  private fov: number;
  #lerpHp: number;
  #maxHealthbarTimer: number = 480;

  constructor(x: number, y: number, hp: number) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.radius = 15;
    this.angle = 0;
    this.hp = hp;
    this.maxHp = hp;
    this.#lerpHp = hp;
    this.xVel = 0;
    this.yVel = 0;
    this.maxSpeed = Math.random() + 0.5;
    this.healthbarTimer = 0;
    this.hitTimer = 0;
    this.maxHitTimer = 600;
    this.myopia = 200;
    this.fov = 90;
  }

  public damage(amount: number) {
    this.hp -= amount;
    this.healthbarTimer = this.#maxHealthbarTimer;
  }

  public canSeePlayer(player: Player): boolean {
    return false;
  }
}

export default Zombie;
