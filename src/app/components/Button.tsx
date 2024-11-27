import Link from "next/link";


interface ButtonProps {
  text: string;
  href?: string;
}

const Button = (props:ButtonProps) => {
  return (
    <button
     className="button"
    >
 
      <Link  className="links" href={props.href ? props.href : "/"} target="_blank" rel="noopener noreferrer"> {props.text}</Link>
    </button>
  );
};

export default Button;
