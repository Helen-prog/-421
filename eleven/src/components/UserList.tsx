
import { IUser } from "../type/types";
import UserItem from "./UserItem";

interface UsersListProps{
    users: IUser[]
}

function UserList({users}: UsersListProps){
    return (
        <div>
            {
                users.map(user => 
                    <UserItem key={user.id} user={user} />
                )
            }
        </div>
    )
}

export default UserList;