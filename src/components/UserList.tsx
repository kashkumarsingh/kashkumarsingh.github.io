interface User{
     id:number;
     name:string;
     email:string;
}
interface UserProps{
    users:User[];
}

const UserList:React.FC<UserProps> = ({users}) => {
    return(
        <ul className="user-lists">
            {users.map((user)=>(
                <li key={user.id}><h3>{user.name}</h3><p>{user.email}</p></li>
            ))}
        </ul>
    );
}

export default UserList;


//generics
function getFirstElement<T>(arr:T[]): T | undefined{
      return arr.length > 0 ? arr[0] : undefined;
}

const stringArr = ['first', 'second', 'third'];

const firstString = getFirstElement<string>(stringArr); // 'first'

const numberArr = [1,2,3];
const firstNumber = getFirstElement<number>(numberArr); //1


//enums
    