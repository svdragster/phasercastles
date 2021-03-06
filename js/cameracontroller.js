export default class CameraController {
    constructor(scene, camera, cursors) {
        // var cursors = scene.input.keyboard.createCursorKeys();
        let config = {
            camera: camera,

            left: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),    // { isDown, isUp }
            right: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),  // { isDown, isUp }
            up: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),        // { isDown, isUp }
            down: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),    // { isDown, isUp }
            zoomIn: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),          // { isDown, isUp }
            zoomOut: scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),         // { isDown, isUp }

            zoomSpeed: 0.01,

            acceleration: 0.2,

            drag: 0.001,
            // drag: {
            //    x: 0,
            //    y: 0
            // }

            maxSpeed: 0.25
            // maxSpeed: {
            //    x: 0,
            //    y: 0
            // }
        };
        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(config);
        //this.controls = new Phaser.Cameras.Controls.FixedKeyControl(config);
        this.controls.start()
    }

    update(delta) {
        this.controls.update(delta);
    }
}
