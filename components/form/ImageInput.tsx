import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const ImageInput = () => {
  const name = "image";
  return (
    <div>
      <Label className="capitalize">{name}</Label>
      <Input id="name" name={name} type="file" required accept="image/*" />
    </div>
  );
};
export default ImageInput;
