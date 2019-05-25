import Structure from "./structure.js";

export default class Tile extends Phaser.GameObjects.Zone {
    constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height);
        this.scene = scene;
        scene.add.existing(this);

        this.setInteractive();

        this.draw();

        this.structure = new Structure(scene, x, y, "castle")
    }

    setOwner(player) {
        this.owner = player;
    }

    getOwner() {
        return this.owner;
    }

    draw() {
        var graphics = this.scene.graphics;
        graphics.lineStyle(3, 0xFFFFFF);
        graphics.fillStyle(0x777777, 1.0);
        graphics.fillRect(this.x - this.input.hitArea.width / 2, this.y - this.input.hitArea.height / 2, this.input.hitArea.width, this.input.hitArea.height);
        graphics.strokeRect(this.x - this.input.hitArea.width / 2, this.y - this.input.hitArea.height / 2, this.input.hitArea.width, this.input.hitArea.height);


    }
}
