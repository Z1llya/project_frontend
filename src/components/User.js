export default function User({user}){
    const {_id,email,is_active} = user;
    return(
        <div>
            <hr/>
            id:{_id}
            <br/>
            email:{email}
            <br/>
            is_active:{is_active}
            <hr/>
        </div>
    );
}