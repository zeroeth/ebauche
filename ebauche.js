$(document).ready(function () {
  var width = 400, height = 300;
  var angle = 45, aspect = width/height, near = 0.1, far = 10000;

  var renderer = new THREE.WebGLRenderer();
  var camera   = new THREE.PerspectiveCamera(angle, aspect, near, far);
  var scene    = new THREE.Scene();

  var material = new THREE.MeshNormalMaterial();
  var geometry = new THREE.CylinderGeometry(10, 10, 10, 16, 1, false);
  var sphere   = new THREE.Mesh(geometry, material);

  var light    = new THREE.PointLight(0xFFFFFF);


  camera.position.z = 300;

  light.position.x = 10;
  light.position.y = 50;
  light.position.z = 130;

  scene.add(camera);
  scene.add(sphere);
  scene.add(light);

  $('#container').append(renderer.domElement);
  renderer.setSize(width, height);
  renderer.render(scene, camera);
});
