import Tile from "./tile.js";

export default class Map {

    constructor(scene, sizeX, sizeY) {
        this.scene = scene;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.createTiles();
    }

    createArrays(width, height) {
        for (var slots=[]; slots.push([height])<width;);
        return slots;
    }

    arrayXtoScreenX(arrayX, width) {
        return arrayX*width;
    }

    arrayYtoScreenY(arrayY, height) {
        return arrayY*height;
    }

    createTiles() {
        this.tiles = this.createArrays(this.sizeX, this.sizeY);
        for (var x=0; x<this.sizeX; x++) {
            for (var y=0; y<this.sizeY; y++) {
                this.createTile(x, y);
            }
        }
    }

    createTile(arrayX, arrayY) {
        var width  = 35;
        var height = 35;
        var x = this.arrayXtoScreenX(arrayX, width);
        var y = this.arrayYtoScreenY(arrayY, height);
        let tile = new Tile(this.scene, x, y, width, height);
        this.tiles[arrayX][arrayY] = tile;
    }

}
