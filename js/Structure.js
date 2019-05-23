export default class Structure extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, null);
        this.scene  = scene;
    }
}
