import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'ucase'
})
export class ucase implements PipeTransform{
transform(value: any, ...args: any[]) {
    return String(value).toUpperCase();
}
}