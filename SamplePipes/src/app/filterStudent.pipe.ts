import { Pipe, PipeTransform } from "@angular/core";
import { student } from "./student";

@Pipe({
    name:'filterStudent'
})
export class filterStudent implements PipeTransform{

    
    transform(students:student[],filterText: string) {

            if (students.length===0 || filterText === '')
            {
                return students;
            }
            else
            {
            return  students.filter((currentRow)=>
                {
                   return currentRow.gender.toLowerCase()===filterText.toLowerCase()
                })
            }
       
        }
    }
