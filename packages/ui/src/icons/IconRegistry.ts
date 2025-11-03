import {IcIdentify} from "./IcIdentify";
import {IcLeftArrow} from "./IcLeftArrow";
import {IcRightArrow} from "./IcRightArrow";

export const IconRegistry = {
    identify: IcIdentify,
    leftArrow: IcLeftArrow,
    rightArrow: IcRightArrow
}

export type IconName = keyof typeof IconRegistry
