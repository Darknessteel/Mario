var DOT_SIZE = 16;
var X_START_POS = -128*16/16;
var Y_START_POS = -128*16/16;
var Z_START_POS = -128* 9/16;

var PARTICLE_NUM    = 10000;
var PARTICLE_SIZE   = DOT_SIZE;
var PARTICLE_RANGE       = 110;
var PARTICLE_RANGE_HALF  = PARTICLE_RANGE/2;

// ‥‥‥‥‥‥‥‥‥‥‥‥‥□□□
// ‥‥‥‥‥‥〓〓〓〓〓‥‥□□□
// ‥‥‥‥‥〓〓〓〓〓〓〓〓〓□□
// ‥‥‥‥‥■■■□□■□‥■■■
// ‥‥‥‥■□■□□□■□□■■■
// ‥‥‥‥■□■■□□□■□□□■
// ‥‥‥‥■■□□□□■■■■■‥
// ‥‥‥‥‥‥□□□□□□□■‥‥
// ‥‥■■■■■〓■■■〓■‥‥‥
// ‥■■■■■■■〓■■■〓‥‥■
// □□■■■■■■〓〓〓〓〓‥‥■
// □□□‥〓〓■〓〓□〓〓□〓■■
// ‥□‥■〓〓〓〓〓〓〓〓〓〓■■
// ‥‥■■■〓〓〓〓〓〓〓〓〓■■
// ‥■■■〓〓〓〓〓〓〓‥‥‥‥‥
// ‥■‥‥〓〓〓〓‥‥‥‥‥‥‥‥
var dataSet = [
    [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","RD",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BR","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BR","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BR","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK"
    ],
    [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BG","BG","BG",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","RD",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK"
    ],
    [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","BK","BK","BK","BG","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","RD","BG","BG","BG",
    "BK","BK","BK","BK","BK","BR","BR","BR","BK","BK","BK","BK","BK","RD","RD","RD",
    "BK","BK","BK","BK","BR","BG","BK","BK","BK","BK","BK","BK","BK","RD","RD","RD",
    "BK","BK","BK","BK","BR","BG","BK","BK","BK","BK","BK","BR","RD","RD","RD","RD",
    "BK","BK","BK","BK","BR","BR","BK","BK","BK","BK","BR","BR","BR","BR","RD","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","RD","RD","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BL","BL","RD","RD","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BL","RD","RD","RD","BK","BK","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BK","BK","BR",
    "BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK"
    ],
    [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","RD","RD","RD","BK","BK",
    "BK","BK","BK","BK","BK","BR","BR","BR","BG","BG","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BG","BG","BG","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BR","BG","BG","BG","BR","BG","BG","BK","BK",
    "BK","BK","BK","BK","BR","BR","BG","BG","BG","BG","BR","BR","BR","BR","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BG","BG","BG","BG","BG","BG","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","BL","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","BL","BK","BK","BR",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","BL","BL","BL","BL","BK","BK","BR",
    "BK","BK","BK","BK","BK","BL","RD","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BL","BL","BL","BL","BR","BR",
    "BK","BK","BK","BK","BK","BK","BL","BL","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK"
    ],
    [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","RD","RD","RD","BK","BK",
    "BK","BK","BK","BK","BK","BR","BR","BR","BG","BG","BR","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BG","BG","BG","BR","BG","BG","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BR","BG","BG","BG","BR","BG","BG","BG","BK",
    "BK","BK","BK","BK","BR","BR","BG","BG","BG","BG","BR","BR","BR","BR","BK","BK",
    "BK","BK","BK","BK","BK","BK","BG","BG","BG","BG","BG","BG","BG","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","BL","RD","RD","RD","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","RD","BL","RD","RD","RD","BK","BK","BK","BR",
    "BK","BK","BK","BK","BK","BK","RD","RD","BL","BL","BL","BL","BL","BK","BK","BR",
    "BK","BK","BK","BK","BK","BL","RD","BL","BL","BL","BL","BL","YL","BK","BR","BR",
    "BK","BK","BK","BR","BK","BL","BL","BL","BL","BL","BL","BL","BL","BK","BR","BR",
    "BK","BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BL","BK","BR","BR",
    "BK","BR","BR","BR","BK","BK","BL","BL","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BR","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK"
    ],
    [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","RD","RD","RD","BK","BK",
    "BK","BK","BK","BK","BK","BR","BR","BR","BG","BG","BR","BG","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BG","BG","BG","BR","BG","BG","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BR","BG","BG","BG","BR","BG","BG","BG","BK",
    "BK","BK","BK","BK","BR","BR","BG","BG","BG","BG","BR","BR","BR","BR","BK","BK",
    "BK","BK","BK","BK","BK","BK","BG","BG","BG","BG","BG","BG","BG","BK","BK","BK",
    "BK","BK","BK","BK","BK","BL","RD","BL","RD","RD","RD","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BL","RD","RD","BL","RD","RD","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BL","RD","RD","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BL","RD","BL","BL","BL","BL","BL","BK","BK","BK","BK",
    "BK","BK","BK","BR","BK","BL","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK",
    "BK","BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK",
    "BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BR","BK","BK","BL","BL","BL","BL","BK","BK","BK","BK","BK","BK","BK","BK"
    ],
    [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","RD","RD","RD","BK","BK",
    "BK","BK","BK","BK","BK","BR","BR","BR","BG","BG","BR","BG","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BG","BG","BG","BR","BG","BG","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BR","BG","BG","BG","BR","BG","BG","BG","BK",
    "BK","BK","BK","BK","BR","BR","BG","BG","BG","BG","BR","BR","BR","BR","BK","BK",
    "BK","BK","BK","BK","BK","BK","BG","BG","BG","BG","BG","BG","BG","BK","BK","BK",
    "BK","BK","RD","RD","RD","RD","RD","BL","RD","RD","RD","BK","BK","BK","BK","BK",
    "BK","RD","RD","RD","RD","RD","RD","RD","BL","RD","RD","BK","BK","BK","BK","BK",
    "BG","BG","RD","RD","RD","RD","RD","RD","BL","BL","BL","BK","BK","BK","BK","BK",
    "BG","BG","BG","BK","BK","BK","RD","BL","BL","BL","BL","BL","BK","BK","BK","BK",
    "BK","BG","BK","BR","BK","BK","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK",
    "BK","BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK",
    "BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BR","BK","BK","BL","BL","BL","BL","BK","BK","BK","BK","BK","BK","BK","BK"
    ],
    [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","RD","RD","RD","BK","BK",
    "BK","BK","BK","BK","BK","BR","BR","BR","BG","BG","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BG","BG","BG","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BR","BR","BG","BG","BG","BR","BG","BG","BK","BK",
    "BK","BK","BK","BK","BR","BR","BG","BG","BG","BG","BR","BR","BR","BR","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BG","BG","BG","BG","BG","BG","BK","BK","BK",
    "BK","BK","RD","RD","RD","RD","RD","BL","RD","RD","BK","BK","BK","BK","BK","BK",
    "BK","RD","RD","RD","RD","RD","RD","RD","BL","RD","BK","BK","BK","BK","BK","BK",
    "BG","BG","RD","RD","RD","RD","RD","RD","BL","BL","BK","BK","BK","BK","BK","BK",
    "BG","BG","BG","BK","BK","BK","RD","BL","BL","YL","BK","BK","BK","BK","BK","BK",
    "BK","BG","BK","BR","BK","BK","BL","BL","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BR","BR","BR","BL","BL","BL","BL","BL","BL","BL","BK","BK","BK","BK","BK",
    "BK","BR","BK","BK","BL","BL","BL","BL","BK","BK","BK","BK","BK","BK","BK","BK"
    ],
    [
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","RD","RD","RD","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","RD","RD","RD","RD","RD","RD","RD","BK","BK","BK",
    "BK","BK","BK","BK","BK","BR","BR","BR","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BG","BK","BK","BK","BK","BK","BR","BK","BK","BK","BK",
    "BK","BK","BK","BK","BR","BR","BK","BK","BK","BK","BR","BR","BR","BK","BK","BK",
    "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","BK","RD","RD","RD","RD","RD","BL","BK","BK","BK","BK","BK","BK","BK","BK",
    "BK","RD","RD","RD","RD","RD","RD","RD","BL","BK","BK","BK","BK","BK","BK","BK",
    "BG","BG","RD","RD","RD","RD","RD","RD","BL","BK","BK","BK","BK","BK","BK","BK",
    "BG","BG","BG","BK","BK","BK","BK","BL","BL","BK","BK","BK","BK","BK","BK","BK",
    "BK","BG","BK","BR","BK","BK","BL","BL","BL","BL","BK","BK","BK","BK","BK","BK",
    "BK","BK","BR","BR","BR","BK","BL","BL","BL","BL","BK","BK","BK","BK","BK","BK",
    "BK","BR","BR","BR","BK","BK","BL","BL","BL","BL","BK","BK","BK","BK","BK","BK",
    "BK","BR","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK"
    ]
];

function getRgbColor(colorType)
{
    var colorHash = {
        "BK":"#000000", // black
        "WH":"#FFFFFF", // white
        "BG":"#FFCCCC", // beige
        "BR":"#800000", // brown
        "RD":"#FF0000", // red
        "YL":"#FFFF00", // yellow
        "GN":"#00FF00", // green
        "WT":"#00FFFF", // water
        "BL":"#0000FF", // blue
        "PR":"#800080"  // purple
    };
    return colorHash[colorType];
}

var renderer, scene, camera, particleSystem;

init();
animate();

function init() {

    // dom
    var container = document.getElementById('container');

    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // scene
    scene = new THREE.Scene();

    //camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 400;

    // particle system geometry
    var geometry = new THREE.Geometry();

    // vertex colors
    var colors = [];
    for (var j = 0; j < dataSet.length; j++) {
        for (var i = 0; i < dataSet[j].length; i++) {
            var x = (i % 16) * DOT_SIZE + X_START_POS;
            var y = (16 - Math.floor(i / 16)) * DOT_SIZE + Y_START_POS;
            var z = j * DOT_SIZE + Z_START_POS;
            var vertex = new THREE.Vector3();
            vertex.x = x;
            vertex.y = y;
            vertex.z = z;

            var color = new THREE.Color();
            if (dataSet[j][i] != "BK") {
                color.setStyle(getRgbColor(dataSet[j][i]));
                colors.push(color);
                geometry.vertices.push(vertex);

                var velocity = new THREE.Vector3(Math.random(), Math.random(), Math.random());
                vertex.velocity = velocity;
            }
        }
    }
    geometry.colors = colors;

    // material
    material = new THREE.PointCloudMaterial({
        size: DOT_SIZE * 2.5,
        transparent: false,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    });

    // particle system
    particleSystem = new THREE.PointCloud(geometry, material);
    particleSystem.rotation.y -= Math.PI / 2;

    scene.add(particleSystem);

}

function animate() {

    requestAnimationFrame(animate);

    render();

}

function render() {

    // rotate
    particleSystem.rotation.y += 0.010;

    // render
    renderer.render(scene, camera);

}