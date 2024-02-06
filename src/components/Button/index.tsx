import "./styles.css";

type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <button className="button-style">
      <p>{title}</p>
    </button>
  );
};

export default Button;