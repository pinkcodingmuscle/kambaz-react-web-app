import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";

interface AssignmentControlButtonsProps {
  assignmentId: string;
  deleteAssignment: (id: string) => void;
  editAssignment: (id: string) => void;
}

export default function AssignmentControlButtons({ assignmentId, deleteAssignment, editAssignment }: AssignmentControlButtonsProps) {
  return (
    <div className="float-end">
      <BsPlusLg />
      <IoEllipsisVertical className="fs-4" />
      <button onClick={() => deleteAssignment(assignmentId)}>Delete</button>
      <button onClick={() => editAssignment(assignmentId)}>Edit</button>
    </div>
  );
}