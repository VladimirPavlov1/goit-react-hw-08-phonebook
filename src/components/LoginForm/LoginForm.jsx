import { Label, Form, Input, Btn } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';

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
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input type="email" name="email" autoComplete="off" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" autoComplete="off" />
      </Label>
      <Btn type="submit">Log in</Btn>
    </Form>
  );
};
