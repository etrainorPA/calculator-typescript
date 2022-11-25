interface CalculatorButtonProps {
  buttonText: string;
}

const CalculatorButton = ({ buttonText }: CalculatorButtonProps) => {
  return (
    <div>
      <button>{buttonText}</button>
    </div>
  );
};

export default CalculatorButton;
