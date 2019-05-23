import {firebaseManager} from "./index.js";
import Map from "./map.js";
import CameraController from "./cameracontroller.js";

export default class GameScene extends Phaser.Scene {
    preload() {
        this.load.image("castle", "../assets/castle.png");
        this.load.image("tile", "../assets/square.png");
    }

    create() {
        this.text = this.add.text(16, 16, "Castles", {
            font: "18px monospace",
            fill: "#000000",
            padding: { x: 20, y: 10 },
            backgroundColor: "#ffffff"
        })
        .setScrollFactor(0);

        this.createMap();
        this.createInput();
        this.createCamera();
    }

    createMap() {
        this.graphics = this.add.graphics();
        this.map = new Map(this, 10, 10);
    }

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    createCamera() {
        var camera = this.cameras.main;
        this.cameraController = new CameraController(this, camera, this.cursors);
    }

    update(time, delta) {
        this.cameraController.update(delta);
    }
}
