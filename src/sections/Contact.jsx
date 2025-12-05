import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // console.log('Form submitted:', formData);
      await emailjs.send(
        'service_9rvij6q',
        'template_j7k0vov',
        {
          from_name: formData.name,
          to_name: 'Zuxing Wu',
          from_email: formData.email,
          to_email: 'wuzuxing1992@gmail.com',
          message: formData.message,
        },
        'H-NHMS_IT4Jhnb4u6'
      );
      alert('Thank you. I will get back to you as soon as possible.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='relative flex items-center c-space section-spacing'>
      <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
          <h2 className='text-heading'>Contact Me</h2>
          <p className='font-normal text-neutral-300'>
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='mb-5'>
            <label htmlFor='name' className='field-label'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='field-input field-input-focus'
              placeholder='John Doe'
              autoComplete='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='field-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='field-input field-input-focus'
              placeholder='JohnDoe@email.com'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='message' className='field-label'>
              Message
            </label>
            <textarea
              type='text'
              id='message'
              name='message'
              rows='4'
              className='field-input field-input-focus'
              placeholder='Share your thoughts...'
              autoComplete='message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type='submit'
            className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'
          >
            {!isLoading ? 'Send' : 'Sending...'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
