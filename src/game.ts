import {Color, Engine, EngineOptions, vec} from "excalibur";
import {Player} from "./player";

export class Game extends Engine {
    constructor(options: EngineOptions) {
        super(options);
    }

    /**
     * onInitialize game
     * @param _engine
     */
    public onInitialize(_engine: Engine) {
        const player = new Player({
            pos: vec(150, 150),
            width: 100,
            height: 100,
            color: Color.Yellow
        });
        this.add(player);
    }
}