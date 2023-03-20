import { useDispatch } from "react-redux";
import { register } from "redux/Auth/operations";
import { Form, Label,Input, Btn } from "./RegisterForm.styled";

export const RegisterForm = () => {
    const dispatch = useDispatch();
   
    const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.name.value)
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Name
                <Input type="text" name="name" autoComplete="off"/>
            </Label>
            <Label>
                Email
                <Input type="email" name="email"  autoComplete="off"/>
            </Label>
            <Label>
                Password
                <Input type="password" name="password" autoComplete="off" />
            </Label>
            <Btn type="submit">Register</Btn>
        </Form>
    )
}
