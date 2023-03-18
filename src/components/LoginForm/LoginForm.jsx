import { Label,Form } from "./LoginForm.styled"
import { useDispatch } from "react-redux";
import { logIn } from "redux/Auth/operations";


export const LoginForm = () => {
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
     
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
    return(
        <Form onSubmit={handleSubmit}>
            <Label>
                Email
                <input type="email" name="email" />
            </Label>
            <Label>
                Password
                <input type="password" name="password"/>
            </Label>
            <button type="submit">Log in</button>
        </Form>
    )
}
