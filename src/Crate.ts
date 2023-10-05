import Wall from "./Wall";

class Crate extends Wall {
  private hitpoints: number;
  private offsetX: number;
  private offsetY: number;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);
    this.hitpoints = 3;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  public render() {}
}
