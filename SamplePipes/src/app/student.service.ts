import { student } from "./student";
export class studentService{
studentList: student[]=[
    {name:"manikandan", course:"MCA", marks:520,gender:"Male"},
    {name:"priya", course:"MBA", marks:400,gender:"Female"},
    {name:"viJay", course:"B.Com", marks:530,gender:"Male"},
    {name:"reena", course:"BE", marks:480,gender:"Female"},
    {name:"sunDar", course:"BE", marks:550,gender:"Male"}];

maximumMark: number = 600
}
