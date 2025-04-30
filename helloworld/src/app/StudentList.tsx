type Studentsprop = {
    name :string;
    rollNum : number;
    feepaid : boolean;
}

export default function StudentList({ name,rollNum,feepaid}:Studentsprop){
    return(
        <div>
            <h1>{name}</h1>
            <h3>{rollNum}</h3>

            {
                feepaid?
                <p>your fee is paid</p>:
                <p style={{color:"white"}}></p>
            }
        </div>
    )
}