import { constrain, lerp } from "./util";

class Camera {
  public x: number;
  public y: number;
  private maxX: number;
  private maxY: number;
  private minX: number;
  private minY: number;

  constructor(
    x: number,
    y: number,
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    canvas: HTMLCanvasElement
  ) {
    this.x = x;
    this.y = y;
    this.maxX = -minX;
    this.maxY = -minY;
    this.minX = -maxX - canvas.width;
    this.minY = -maxY - canvas.height;
  }

  /**
   * Adjusts the camera's position to focus on a specific coordinate point.
   *
   * This method smoothly updates the camera's position using linear interpolation
   * (lerp) to approach the specified target coordinates (x, y). It also ensures
   * that the camera remains within the specified boundaries defined by minX, minY,
   * maxX, and maxY.
   *
   * @param x - The target X-coordinate to focus on.
   * @param y - The target Y-coordinate to focus on.
   * @returns {void}
   */
  public lookAt(x: number, y: number): void {
    this.x = constrain(lerp(this.x, x, 0.1), this.minX, this.maxX);
    this.y = constrain(lerp(this.y, y, 0.1), this.minY, this.maxY);
  }
}

export default Camera;
