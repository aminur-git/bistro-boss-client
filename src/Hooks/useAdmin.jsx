import {useQuery} from "@tanstack/react-query"
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = UseAuth()

    const axiosSecure = useAxiosSecure()

    const {data : isAdmin, isPending: adminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin;

        }
    })

    return [isAdmin]

};

export default useAdmin;