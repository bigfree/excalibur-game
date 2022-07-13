import {Actor, ActorArgs, Engine} from "excalibur";

export class Enemy extends Actor {
    private health: number;
    private speed: number;

    constructor(config: ActorArgs) {
        super(config);
    }

    /**
     * onInitialize Player
     * @param engine
     */
    public onInitialize(engine: Engine) {
        this.health = 100
        this.speed = 300;
    }

    public onPostUpdate(engine: Engine, delta: number) {
        if (0 >= this.health) {
            console.log('Enemy DEATH!!!');
            return;
        }
    }
}