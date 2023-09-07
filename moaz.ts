
const  age:number   =19 


const name2:string = 'moaz'





type MoazProps = {
    objectToEdit: {
        name:string ,
        age:number ,
        is_active:boolean
    }
}
function Moaz ({objectToEdit:{age ,is_active ,name}} : MoazProps){


        console.log(age)
        


}