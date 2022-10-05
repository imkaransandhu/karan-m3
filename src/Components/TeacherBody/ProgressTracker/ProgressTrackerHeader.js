import { useDownloadExcel } from "react-export-table-to-excel";
import TableForStudentToExport from "./TableForStudentToExport";
import { useRef } from "react";

const ProgressTrackerHeader = ({ studentProjectDetails }) => {
  const studentProjectTable = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: studentProjectTable.current,
    filename: "StudentProjectDetails",
    sheet: "Students",
  });
  return (
    <div className="progess-tracker-header">
      <h1 className="progress-tracker-heading">BEGINNER COURSE</h1>

      <button onClick={onDownload} className="spreadsheet">
        <img
          src="./images/Icon awesome-file-export.svg"
          alt="Export As Spreadsheet"
        />
        EXPORT AS SPREADSHEET
      </button>

      <TableForStudentToExport
        studentProjectTable={studentProjectTable}
        studentProjectDetails={studentProjectDetails}
      />
    </div>
  );
};

export default ProgressTrackerHeader;
