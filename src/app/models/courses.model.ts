//import { Student } from "./students.model";

export interface Courses{
    name : string;
    shortDiscriptions : string;
    createdBy : string;
    courseDuration : string;
    price : string;
    rating:{
        rating : string;
        enrollments: number;
    };
    includes:string[];
    learn:string[];
    discription:{
        basic:string,
        element: string[],
        topics:string[],
        footnote:string
    };
    curriculum : string[]
    aboutInstructor:{
        name : string;
        photo : string;
        about : string;
        achievement :string
    };
    faq : {
        howiwilllearn: string,
        willigetcertificate:string
    };

}