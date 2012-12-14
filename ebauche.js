$(document).ready(function () {

  // Dimension Settings
  var width = 400, height = 300;
  var angle = 45, aspect = width/height, near = 0.1, far = 10000;


  // World Objects
  var renderer = new THREE.WebGLRenderer();
  var camera   = new THREE.PerspectiveCamera(angle, aspect, near, far);
  var scene    = new THREE.Scene();
  var light    = new THREE.PointLight(0xFFFFFF);
  var material = new THREE.MeshNormalMaterial();

  var geometry = new THREE.CylinderGeometry(20, 21, 4, 24, 1, false);
  var dial     = new THREE.Mesh(geometry, material);

  var geometry = new THREE.CubeGeometry(15, 1, 2);
  geometry.applyMatrix( new THREE.Matrix4().translate( new THREE.Vector3(15, 0, 0)));
  geometry.applyMatrix( new THREE.Matrix4().rotateX( 0.2 ));
  var second   = new THREE.Mesh(geometry, material);

  var geometry = new THREE.CubeGeometry(10, 1, 3);
  geometry.applyMatrix( new THREE.Matrix4().translate( new THREE.Vector3(15, 0, 0)));
  geometry.applyMatrix( new THREE.Matrix4().rotateX( 0.2 ));
  var minute   = new THREE.Mesh(geometry, material);

  var geometry = new THREE.CubeGeometry(10, 1, 4);
  geometry.applyMatrix( new THREE.Matrix4().translate( new THREE.Vector3(15, 0, 0)));
  geometry.applyMatrix( new THREE.Matrix4().rotateX( 0.2 ));
  var hour   = new THREE.Mesh(geometry, material);

  // Positions
  dial.position.x   = 0;
  dial.position.y   = 0;
  dial.position.z   = 0;

  second.position.x = 0;
  second.position.y = 3;
  second.position.z = 0;

  minute.position.x = 0;
  minute.position.y = 4;
  minute.position.z = 0;

  hour.position.x = 0;
  hour.position.y = 5;
  hour.position.z = 0;

  light.position.x  = 10;
  light.position.y  = 50;
  light.position.z  = 130;

  camera.position.z = 40;
  camera.position.y = 40;
  camera.lookAt(dial.position);


  // Build World
  scene.add(camera);
  scene.add(light);
  scene.add(dial);
  scene.add(second);
  scene.add(minute);
  scene.add(hour);


  // Render
  $('#container').append(renderer.domElement);
  renderer.setSize(width, height);
  renderer.render(scene, camera);

  var update = function() {
    second.rotation.y += 0.01;
    minute.rotation.y += 0.001;
    hour.rotation.y   += 0.0005;
  };

  var animate = function() {
    update();

    renderer.render(scene, camera);
    requestAnimationFrame( animate );
  };
  animate();
});
