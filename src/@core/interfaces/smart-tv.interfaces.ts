/**
 * @name smart-tv.interfaces
 * @description Core mobile interfaces in ngx-responsive
 *
 * @author Manu Cutillas
 * @license MIT
 */

import {
    TChromecast, TAppleTv, TGoogleTv, TPs4, TXboxOne, TGenericTv
} from '../types';

/**
 * @interface ISmartTv
 * @export ISmartTv
 */
export interface ISmartTv {
    CHROMECAST: TChromecast;
    APPLE_TV: TAppleTv;
    GOOGLE_TV: TGoogleTv;
    PS4: TPs4;
    XBOX_ONE: TXboxOne;
    GENERIC_TV: TGenericTv;
}