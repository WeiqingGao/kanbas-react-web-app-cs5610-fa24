import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function AllAssignmentsControlButtons() {
    return (
        <div className="float-end">
            <div className="badge rounded-pill bg-light text-dark me-2">
                40% of Total
            </div>
            <FaPlus className="me-2" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}

/*
<p className="wd-rounded-corners-all-around 
                wd-border-thin wd-border-blue wd-border-solid 
                wd-padding-fat">
                40% of Total
            </p>
*/