import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface FormData {
  name: string
  email: string
  message: string
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
})

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full">
      <div className="mb-10">
        <div className="mb-2">
          <label htmlFor="name" className="block text-gray-700 text-xl mb-3">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary-3 bg-gray-200"
              />
            )}
          />
        </div>
        {errors.name && (
          <span className="block mb-6 error-message text-sm text-red-600">
            Name is required
          </span>
        )}
      </div>
      <div className="mb-10">
        <div className="mb-2">
          <label htmlFor="email" className="block text-gray-700 text-xl mb-3 ">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary-3 bg-gray-200"
              />
            )}
          />
        </div>
        {errors.email && (
          <span className=" block error-message  mb-6 text-sm  text-red-600">
            Email is required
          </span>
        )}
      </div>
      <div className="mb-10">
        <div className="mb-2">
          <label htmlFor="message" className="block text-gray-700 text-xl mb-3">
            Message
          </label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="Type your message here..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary-3 bg-gray-200"
              />
            )}
          />
        </div>
        {errors.message && (
          <span className="error-message block  mb-6 text-sm text-red-600">
            Message is required
          </span>
        )}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-4 bg-primary-3 w-full text-white rounded-lg hover:bg-primary-4 focus:outline-none focus:ring focus:border-primary-3"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
