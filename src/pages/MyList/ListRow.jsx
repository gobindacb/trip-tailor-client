import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import {trashO} from 'react-icons-kit/fa/trashO';
import {pencil} from 'react-icons-kit/fa/pencil'




const ListRow = ({ list, handleDelete }) => {
    const { _id, photo, spot_name, country, location, description, cost, season, time, visitors, email, name } = list;

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{location}</div>
                        <div className="text-sm opacity-50">{country}</div>
                    </div>
                </div>
            </td>
            <td>
                {spot_name}
                <br />
                <span className="badge badge-ghost badge-sm">Yearly visit {visitors} people</span>
            </td>
            <td>{season}</td>
            <th>
                <label>
                    <button onClick={() =>handleDelete(_id)} className="btn btn-ghost"><Icon icon={trashO} size={24}/></button>
                </label>
            </th>
            <th>
                <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs"><Icon icon={pencil} size={24}/></button></Link>
            </th>
            <th>
               <Link to={`/details/${_id}`}><button> <Icon icon={eye} size={24}/></button></Link>
            </th>
        </tr>
    );
};

export default ListRow;