import {Actor, ActorArgs, Engine, Input, MoveTo, PreCollisionEvent, Vector} from "excalibur";

export class Player extends Actor {
    private health: number;
    private speed: number;
    private isClicked: boolean;

    constructor(config: ActorArgs) {
        super({
            ...config,
            name: 'player'
        });
    }

    /**
     * onInitialize Player
     * @param engine
     */
    public onInitialize(engine: Engine) {
        this.health = 100
        this.speed = 400;

        this.on('precollision', (event: PreCollisionEvent) => this.onPreCollision(event));

        engine.input.pointers.primary.on('down', (event: Input.PointerEvent) => {
            return this.onHandleInputPointerDownEvent(engine, event);
        });

        engine.input.pointers.primary.on('up', (event: Input.PointerEvent) => {
            return this.onHandleInputPointerUpEvent(event);
        });

        engine.input.pointers.primary.on('move', (event: Input.PointerEvent) => {
            return this.onHandleInputPointerMoveEvent(engine, event);
        });
    }

    public update(engine: Engine, delta: number) {
        // console.log(this.vel());
        super.update(engine, delta);
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
    private onHandleInputPointerDownEvent(engine: Engine, event: Input.PointerEvent): void {
        this.isClicked = true;
        this.setPlayerPosition(event.worldPos);
        // this.vel = directions.scale(this.speed/distance);
    }

    /**
     * Mouse click up event
     * @param event
     * @private
     */
    private onHandleInputPointerUpEvent(event: Input.PointerEvent): void {
        this.isClicked = false;
    }

    /**
     * Mousemove event
     * @param engine
     * @param event
     * @private
     */
    private onHandleInputPointerMoveEvent(engine: Engine, event: Input.PointerEvent): void {
        if (!this.isClicked) {
            return;
        }

        this.setPlayerPosition(event.worldPos);
    }

    /**
     * Set player position by directions
     * @param directions
     * @private
     */
    private setPlayerPosition(directions: Vector): void {
        this.actions.getQueue().remove(MoveTo);

        // this.actions.clearActions()
        this.actions.moveTo(directions, this.speed);

        // let dir = Vector.Zero.clone();
        // dir.x = directions.x;
        // dir.y = directions.y;
        // console.log(directions, dir, dir.normalize());
        // this.vel = dir;
    }
}