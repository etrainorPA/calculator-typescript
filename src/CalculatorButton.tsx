import { Button } from "@mui/material";

interface CalculatorButtonProps {
  buttonText: string;
  isNumber: boolean;
}

const CalculatorButton = ({ buttonText }: CalculatorButtonProps) => {
  return (
    <div style={{ padding: "5px" }}>
      <Button
        variant="contained"
        className="number-button"
        size="large"
        color="primary"
        fullWidth={true}
        style={{ minHeight: "80px", minWidth: "80px" }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default CalculatorButton;
