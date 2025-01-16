import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
  	const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_ecjoxco', 'template_8s24eyo', form.current, {
        publicKey: 'XnLTFneXRVkwkphGD',
      })
      .then(
        () => {
          e.target.reset()
          alert('Email Sent!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }
  return (
    <div id="contact" className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-6xl p-8 rounded-xl shadow-lg bg-cyan-700 text-white">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            <h1 className="font-bold text-3xl tracking-wide">Contact Us</h1>
            <p className="pt-2 text-cyan-100 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus accusantium fugiat temporibus natus quaerat in ex,
              earum aspernatur quas ipsum illo reprehenderit enim vero
              repudiandae animi ducimus nostrum fuga pariatur.
            </p>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <BsTelephoneFill className="text-teal-300 text-xl" />
                <span>(678) 300-3789</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <MdEmail className="text-teal-300 text-xl" />
                <span>ruthncloud@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <FaLocationDot className="text-teal-300 text-xl" />
                <span>Atlanta, GA USA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-1/2">
            <form action="" ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Message"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <button className="inline-block self-end bg-cyan-700 font-bold text-white rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
