import UseAuth from "../../Hooks/UseAuth";

const UserProfile = () => {

    const {user} = UseAuth()

    return (
        <div className="px-5"> 
            <div>
                <div className="w-64 space-y-4">
                    <div>
                        <figure className="w-64"><img src={user.photoURL} className='w-full rounded-full object-cover shadow-xl' alt="" /></figure>
                    <h1 className="uppercase text-center"> {user.displayName}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;