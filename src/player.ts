import {Actor, ActorArgs, Engine, Input, PreCollisionEvent} from "excalibur";

export class Player extends Actor {
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

        this.on('precollision', (event: PreCollisionEvent) => this.onPreCollision(event));

        engine.input.pointers.primary.on('down', (event: Input.PointerEvent) => this.onHandleMoveEvent(engine, event));
        // engine.input.pointers.primary.on('down', (event: Input.PointerEvent) => {
        //     this.actions.clearActions();
        //     this.actions.moveTo(event.worldPos, this.speed);
        // });
    }

    public update(engine: Engine, delta: number) {
        // console.log(this.vel());
    }

    public onPostUpdate(engine: Engine, delta: number) {
        if (0 >= this.health) {
            console.log('Player KILL');
            return;
        }
    }

    private onPreCollision(event: PreCollisionEvent) {
        console.log('collision', event);
    }

    /**
     * Mouse click down event
     * @param engine
     * @param event
     * @private
     */
    private onHandleMoveEvent(engine: Engine, event: Input.PointerEvent): void
    {
        let directions = event.worldPos;

        this.actions.clearActions();
        this.actions.moveTo(directions, this.speed);
        // this.vel = directions.scale(this.speed/distance);
    }
}