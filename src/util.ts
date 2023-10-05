/**
 * Linearly interpolates between two numbers.
 *
 * @param {number} oldValue - The starting value.
 * @param {number} newValue - The ending value.
 * @param {number} amount - The interpolation factor, a value within the range [0, 1].
 * @returns {number} - The interpolated number between oldValue and newValue.
 */
export function lerp(
  oldValue: number,
  newValue: number,
  amount: number
): number {
  return (newValue - oldValue) * amount + oldValue;
}

/**
 * Performs spherical linear interpolation (slerp) between two angles.
 *
 * @param {number} startAngle - The starting angle in degrees.
 * @param {number} endAngle - The ending angle in degrees.
 * @param {number} t - The interpolation factor, a value between 0 and 1.
 * @returns {number} - The interpolated angle in degrees.
 */
export function slerp(startAngle: number, endAngle: number, t: number): number {
  // Ensure angles are within the range [0, 360)
  startAngle = ((startAngle % 360) + 360) % 360;
  endAngle = ((endAngle % 360) + 360) % 360;

  // Calculate the angular difference while considering wrap-around
  let angleDiff = endAngle - startAngle;

  if (angleDiff > 180) {
    angleDiff -= 360;
  } else if (angleDiff < -180) {
    angleDiff += 360;
  }

  // Perform spherical linear interpolation
  return startAngle + angleDiff * t;
}

/**
 * Constrains a value to be within a specified range.
 *
 * @param {number} value - The value to be constrained.
 * @param {number} min - The minimum allowable value.
 * @param {number} max - The maximum allowable value.
 * @returns {number} - The constrained value.
 */
export function constrain(value: number, min: number, max: number): number {
  return value > max ? max : value < min ? min : value;
}

export function get(
  canvas: HTMLCanvasElement,
  x: number,
  y: number,
  width: number,
  height: number
): HTMLCanvasElement {
  // Create a new canvas to store the captured portion
  let capturedCanvas = document.createElement("canvas");
  capturedCanvas.width = width;
  capturedCanvas.height = height;

  // Get the 2D rendering context of the new canvas
  let capturedCtx = capturedCanvas.getContext("2d");

  // Copy the specified portion of the source canvas to the new canvas
  capturedCtx.drawImage(canvas, x, y, width, height, 0, 0, width, height);

  return capturedCanvas;
}
