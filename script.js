let shakeThreshold = 15;
let shakeableElement = document.getElementById('shakeableElement');

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', function(event) {
    let acceleration = event.accelerationIncludingGravity;
    let shake = Math.sqrt(
      acceleration.x * acceleration.x +
      acceleration.y * acceleration.y +
      acceleration.z * acceleration.z
    );

    if (shake > shakeThreshold) {
      shakeableElement.classList.add('shake');
      setTimeout(() => {
        shakeableElement.classList.remove('shake');
      }, 500); // duration of the shake animation
    }
  });
} else {
  alert("Device motion is not supported on this device.");
}
