import {DisplayMode, Resolution} from "excalibur";
import {Game} from "./game";
import {DevTool} from "@excaliburjs/dev-tools";

export const game = new Game({
    canvasElementId: 'game-container',
    displayMode: DisplayMode.FillScreen,
    resolution: Resolution.Standard,
    suppressHiDPIScaling: true,
});

game.start().then(r => console.log(r));

const devtool = new DevTool(game);