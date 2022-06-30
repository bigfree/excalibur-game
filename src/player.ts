import {Actor, ActorArgs, Engine, Input, vec} from "excalibur";

export class Player extends Actor {
    constructor(config: ActorArgs) {
        super(config);
    }

    public onInitialize(_engine: Engine) {
        _engine.input.pointers.primary.on('down', (event: Input.PointerEvent) => {
            this.actions.clearActions();
            this.actions.moveTo(event.worldPos, 200);
        });
    }

    public update(engine: Engine, delta: number) {
        // console.log(this.vel());
    }
}