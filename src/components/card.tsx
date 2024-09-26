interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "primary" | "secondary" | "tertiary" | "quarter";
  children: React.ReactNode;
  containerProps?: React.HTMLAttributes<HTMLDivElement> & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
}

const Card = ({
  variant = "primary",
  children,
  containerProps = {},
  ...rest
}: CardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "card-pink";
      case "secondary":
        return "card-blue";
      case "tertiary":
        return "card-green";
      case "quarter":
        return "card-yellow";
      default:
        return "card--primary";
    }
  };

  return (
    <div {...rest}>
      <div
        className={`card-container ${getVariantClasses()}`}
        {...containerProps}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
