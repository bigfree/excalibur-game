import {CollisionType, Color, Engine, EngineOptions, vec} from "excalibur";
import {Player} from "./player";
import {Enemy} from "./enemy";

export class Game extends Engine {
    constructor(options: EngineOptions) {
        super(options);
    }

    /**
     * onInitialize game
     * @param _engine
     */
    public onInitialize(_engine: Engine) {
        this.add(new Player({
            pos: vec(150, 150),
            width: 50,
            height: 50,
            color: Color.Yellow,
            collisionType: CollisionType.Active
        }));

        this.add(new Enemy({
            pos: vec(400, 300),
            width: 20,
            height: 20,
            color: Color.Red,
            collisionType: CollisionType.Active
        }));
    }
}