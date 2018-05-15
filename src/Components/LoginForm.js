import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { login } from 'store/user'

const LoginFormView = ({ handleSubmit, error, invalid, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}

            <div>
                <label htmlFor="username">Username:</label>
                <Field name="username" component="input" type="text" />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <Field name="password" component="input" type="password" />
            </div>

            <button disabled={submitting} type="submit">
                Login
            </button>
        </form>
    )
}

const validate = ({ username, password }) => {
    const errors = {}
    if (!username) {
        errors.username = 'missing username'
    }
    if (!password) {
        errors.password = 'missing password'
    }
    return errors
}

const onSubmit = ({ username, password }, dispatch, props) => {
    return dispatch(login(username, password)).then(() => {
        if (props.onLogin) props.onLogin()
    }).catch(error => {
        throw new SubmissionError({
            '_error': error.response.data.error,
        })
    })
}

const LoginForm = reduxForm({
    form: 'login',
    validate,
    onSubmit,
<<<<<<< HEAD
    initialValues: {
        username: "rasna",
        password: "Ras123",
    },
=======
    // initialValues: {
    //     username: "olmo",
    //     password: "test",
    // },
>>>>>>> 83c016abccb10b5df3e061c3e3c52df7595772b2
})(LoginFormView)

export default LoginForm