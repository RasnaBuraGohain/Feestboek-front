import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { contact } from 'store/contact'


const TextField = ({ meta, input, ...props }) => {
  console.log('meta', meta)
  return (
    <div>
      {meta.invalid ? meta.error : null}
      <input {...input} {...props} />
    </div>)
  // console.log('props', props)

}

const ContactFormView = ({ handleSubmit, error, invalid, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}

      <div>
        <label htmlFor="email">Email:</label>
        <Field name="email" component={TextField} type="text" />
      </div>

      <div>
        <label htmlFor="whatsup">What's up :</label>
        <Field name="whatsup" component={TextField} type="text" />
      </div>

      <div>
        <button disabled={submitting} type="submit">
          SUBMIT
            </button>
      </div>
    </form>
  )
}

const validate = ({ email, whatsup }) => {
  const errors = {}
  if (!email) {
    errors.email = 'invalid or missing email'
  }
  if (!whatsup) {
    errors.whatsup = 'missing whatsup text'
  }

  return errors
}

const onSubmit = ({ email, whatsup }, dispatch, props) => {
  return dispatch(contact(email, whatsup)).then(() => {
    if (props.onContact) props.onContact()
  }).catch(error => {
    throw new SubmissionError({
      '_error': error.response.data.error,
    })
  })
}

const ContactForm = reduxForm({
  form: 'contact',
  validate,
  onSubmit,
  // initialValues: {
  //     email: "abc@gmail.com",
  //     whatsup: "Hi ",
  // },
})(ContactFormView)

export default ContactForm