import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name:'percentage'
}    
)

export class percentage implements PipeTransform{

    transform(value?:any,totalMarks?:any,digits?:any){
        return (((value/totalMarks)*100).toFixed(digits))
    }
}