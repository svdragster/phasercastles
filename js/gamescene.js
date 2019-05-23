import {firebaseManager} from "./index.js";
import Map from "./map.js";

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
    }

    createMap() {
        this.graphics = this.add.graphics();
        this.map = new Map(this, 10, 10);
    }

    update(time, delta) {
    }
}
