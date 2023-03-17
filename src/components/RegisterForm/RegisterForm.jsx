

export const RegisterForm = () => {
    return (
        <form>
            <label>
                Name
                <input type="text" name="userName"/>
            </label>
            <label>
                Email
                <input type="email" name="email" />
            </label>
            <label>
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Register</button>
        </form>
    )
}
