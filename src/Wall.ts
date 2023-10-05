import Circle from "./Circle";

class Wall {
  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /**
   * Resolves collision between this wall and a circle.
   *
   * This method calculates the closest point on the wall's boundary to the center
   * of the provided circle and checks if it collides with the circle. If a
   * collision is detected, it resolves it by moving the circle to a new position
   * where it no longer overlaps with the wall.
   *
   * @param circle - The circle object representing the colliding element.
   * @returns {void}
   */
  public resolveCircleCollision(circle: Circle): void {
    let closest_x = Math.max(this.x, Math.min(circle.x, this.x + this.width));
    let closest_y = Math.max(this.y, Math.min(circle.y, this.y + this.height));
    let dx = circle.x - closest_x;
    let dy = circle.y - closest_y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance <= circle.radius && distance !== 0) {
      let overlap = circle.radius - distance;
      circle.x += (overlap * dx) / distance;
      circle.y += (overlap * dy) / distance;
    }
  }
}

export default Wall;
