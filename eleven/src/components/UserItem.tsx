import { IUser } from "../type/types";

function UserItem({user}: {user: IUser}){
    return (
        <div style={{padding: 15, border: "1px solid gray", textAlign: "left"}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default UserItem;