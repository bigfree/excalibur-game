import './sass/main.scss'

import {DisplayMode, Physics, Resolution} from "excalibur";
import {Game} from "./game";
import {DevTool} from "@excaliburjs/dev-tools";

Physics.useArcadePhysics();

export const game = new Game({
    canvasElementId: 'game-container',
    displayMode: DisplayMode.FillScreen,
    resolution: Resolution.Standard,
    maxFps: 60,
});

game.start().then(r => console.log(r));

const devtool = new DevTool(game);