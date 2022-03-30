import "./App.css";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// date-fns
import DateAdapter from "@mui/lab/AdapterDateFns";
import {
  useForm,
  Controller,
  SubmitHandler,
} from "react-hook-form";
import { Button, Stack } from "@mui/material";

type FormValues = {
  username: string;
  email: string;
  dateOfBirth: Date | null;
};

function App() {
  const { handleSubmit, control,getValues } = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      dateOfBirth: null,
    },
  });
  
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    // setUserData(dirtyFields)
  };

  return (
    <div
      className="App"
      style={{ padding: "4rem", width: "40rem", margin: "0 auto" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                size="small"
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
              />
            )}
          />
          <LocalizationProvider dateAdapter={DateAdapter}>
            <Controller
              control={control}
              name="dateOfBirth"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <DesktopDatePicker
                  label="Date Of Birth"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={onChange}
                  renderInput={(params) => (
                    <TextField variant="outlined" size="small" {...params} />
                  )}
                />
              )}
            />
          </LocalizationProvider>
          <Button variant="contained" type="submit" onClick={()=>{
             alert(JSON.stringify(getValues(['username','email','dateOfBirth'])))
          }}>
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default App;
