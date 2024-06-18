import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import ListRow from "./ListRow";


const MyList = () => {
    const { user } = UseAuth();
    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading


    useEffect(() => {
        fetch(`https://trip-tailor-server.vercel.app/lists?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLists(data)
                setLoading(false); // Set loading to false when data is fetched
            })
    }, [user?.email])

    const handleDelete = _id =>{
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
            fetch(`https://trip-tailor-server.vercel.app/spot/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Delete Successfully!')
                    const remaining = lists.filter(lis => lis._id !== _id);
                    setLists(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h4>Welcome {user?.displayName} with email: {user?.email} to your list of spot: {lists.length}</h4>
            {loading ? (
                // Render spinner while loading
                <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-800'><p className="text-sm">Loading...</p></div> // Show loading spinner while fetching data
            ) : (
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Name</th>
                                <th>Season</th>
                                <th>Delete</th>
                                <th>Edit</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            lists.map(list => <ListRow
                            key={list._id}
                            list={list}
                            handleDelete={handleDelete}
                            ></ListRow>)
                           } 
                        </tbody>

                    </table>
                </div>
            </div>
            )}
        </div>
    );
};

export default MyList;