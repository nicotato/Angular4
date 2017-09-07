import { Pipe, PipeTransform } from "@angular/core";
import linkifyStr from 'linkifyjs/string';

@Pipe({ name: 'linkifystr' })
export class LinkifystrPipe implements PipeTransform {
    // transform(value: any, ...args: any[]) {
    //     throw new Error("Method not implemented.");
    // }
    transform(str: string): string {
        return str ? linkifyStr(str, {target:'_system'}) : str;
    }
}