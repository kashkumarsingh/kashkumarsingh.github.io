interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}

const Button = ({ onClick, disabled, className, children }: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`font-sans font-bold  px-[1.5rem] py-[1rem] w-auto sm:w-[12rem] ${className}`}>
            {children}
        </button>
    );
};

export default Button;