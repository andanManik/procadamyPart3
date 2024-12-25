import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'tcase'
})
export class tcase implements PipeTransform{
transform(value: string) {
let firstChar: string;
let restValue:string;
let fullvalue:string;
firstChar = value.substring(0,1).toUpperCase();
restValue = value.substring(1,value.length).toLowerCase();
// fullvalue = firstChar+restValue;
return (firstChar+restValue);    
}

}