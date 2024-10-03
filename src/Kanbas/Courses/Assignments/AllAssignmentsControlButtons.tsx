import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function AllAssignmentsControlButtons() {
    return (
        <div className="float-end">
            <div className="badge rounded-pill text-dark me-2" 
                 style={{ backgroundColor: '#f1f2f3', border:'1px solid #ccc'}}>
                40% of Total
            </div>
            <FaPlus className="me-2" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

