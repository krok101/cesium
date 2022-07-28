import { Cartesian2 } from "cesium"

export const radiansToDegrees = (radians) => {
  let pi = Math.PI;
  return radians * (180/pi);
}

export const getLocationFromScreenXY = (x, y, cesium) => {
  const scene = cesium.current?.cesiumElement?.scene;
  if (!scene) return;
  const ellipsoid = scene.globe.ellipsoid;
  const cartesian = scene.camera.pickEllipsoid(new Cartesian2(x, y), ellipsoid);
  if (!cartesian) return;
  const { latitude, longitude, height } = ellipsoid.cartesianToCartographic(cartesian);
  return [ latitude, longitude, height ];
}