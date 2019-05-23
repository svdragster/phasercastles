import Structure from "./structure.js";

export default class Tile extends Phaser.GameObjects.Zone {
    constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height);
        this.scene = scene;
        scene.add.existing(this);

        this.setInteractive();

        var graphics = this.scene.graphics;
        graphics.lineStyle(2, 0xFF8888 + Math.random() * 0x005555);
        graphics.strokeRect(this.x - this.input.hitArea.width / 2, this.y - this.input.hitArea.height / 2, this.input.hitArea.width, this.input.hitArea.height);

        this.structure = new Structure(scene, x, y, "castle")
    }
}