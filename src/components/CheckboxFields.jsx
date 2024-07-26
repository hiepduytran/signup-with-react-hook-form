import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const CheckboxFields = ({ name, errors, control }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} required />}
            label="I Agree to MyApp Terms and Privacy Policy"
          />
        )}
      />
      {/* {errors[name] ? <ErrorMessage message={errors[name].message} /> : null} */}
      {errors[name] ? (
        <FormHelperText sx={{ color: "#d32f2f" }}>
          {errors[name].message}
        </FormHelperText>
      ) : null}
    </>
  );
};

export default CheckboxFields;
