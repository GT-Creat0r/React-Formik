import { Button } from "@mui/material";

interface Props {
  buttonText:string;

}
const CustomButton = ({ buttonText }: Props) => {
  return (
    <Button fullWidth type="submit" variant="contained" color="success" sx={{ mt: 1 }}>
      {buttonText}
    </Button>
  );
};

export default CustomButton;
