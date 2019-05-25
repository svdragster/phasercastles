import Structure from "./structure.js";

export default class Tile extends Phaser.GameObjects.Zone {
    constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height);
        this.scene = scene;
        this.owner = null;
        scene.add.existing(this);

        this.setInteractive();

        this.draw();

        this.structure = null;
    }

    setOwner(player) {
        this.owner = player;
        this.draw();
    }

    getOwner() {
        return this.owner;
    }

    getTileColor() {
        if (this.getOwner() == null) {
            return 0x777777;
        }
        return this.getOwner().getColor();
    }

    draw() {
        var graphics = this.scene.graphics;
        graphics.lineStyle(3, 0xFFFFFF);
        graphics.fillStyle(this.getTileColor(), 1.0);
        graphics.fillRect(this.x - this.input.hitArea.width / 2, this.y - this.input.hitArea.height / 2, this.input.hitArea.width, this.input.hitArea.height);
        graphics.strokeRect(this.x - this.input.hitArea.width / 2, this.y - this.input.hitArea.height / 2, this.input.hitArea.width, this.input.hitArea.height);
    }

    setStructure(structureName) {
        this.structure = this.getStructureFromName(structureName);
    }

    getStructureFromName(structureName) {
        switch (structureName) {
            case "castle": return new Structure(scene, x, y, "castle");
            case "goldmine": return new Structure(scene, x, y, "goldmine");
        }
        return null;
    }
}
