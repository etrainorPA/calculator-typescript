import { TextareaAutosize } from "@mui/material";

const History = () => {
  return (
    <div>
      <p>History Here!</p>
      <TextareaAutosize
        maxRows={30}
        minRows={30}
        aria-label="minimum height"
        placeholder="History"
        style={{ minWidth: 100 }}
      />
    </div>
  );
};

export default History;
