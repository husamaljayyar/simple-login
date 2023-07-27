import { Typography } from "../../App.Styles";
import { FormBox, InnerDiv, Button } from "./Login.Styles";
import {
  ErrorMsg,
  Forms,
  Input,
} from "../../Components/FormInput/FormInput.Styles";
import { Formik } from "formik";
import { loginSchema } from "../../Valedation";
import { loginAction } from "../../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store);
  const error = user.message;

  // send values and history to action file
  const handleSaveChanges = async (values) => {
    dispatch(loginAction(values));
    navigate("/homepage");
  };

  return (
    <InnerDiv>
      <FormBox>
        <Typography fontSize={35} fontWeight={700} color={"#000"}>
          Login
        </Typography>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Forms>
                <Input name={"email"} type={"email"} placeholder={"Email"} />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}

                <Input
                  name={"password"}
                  type={"password"}
                  placeholder={"password"}
                />
                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                <Button type="submit">Login</Button>
              </Forms>
            );
          }}
        </Formik>
        <Typography>Forget password ?</Typography>
      </FormBox>
    </InnerDiv>
  );
}

export default Login;
