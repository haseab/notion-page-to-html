import { Decoration } from '../../../../../../data/protocols/blocks';
import { ToHtml } from '../../../../../../domain/use-cases/to-html';
export declare class ColorDecorationToHtml implements ToHtml {
    private readonly _text;
    private readonly _decoration;
    constructor(text: string, decoration: Decoration);
    convert(): Promise<string>;
    private _isBackground;
    private get _style();
}