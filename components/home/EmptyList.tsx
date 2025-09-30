import { Button } from "../ui/button";
const EmptyList = ({
  heading = "No items found",
  message = "Please try again",
  btnText = "Back to Home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <div className="mb-3">
      <h2>{heading}</h2>
      <p>{message}</p>
      <Button>{btnText}</Button>
    </div>
  );
};
export default EmptyList;
