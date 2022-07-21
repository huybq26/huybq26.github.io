import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Contact = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const formRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_ysl85xr',
				'template_0kvgwpx',
				formRef.current,
				'hmQXFMwdPcWItAXcS'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>HUY009@e.ntu.edu.sg</h5>
						<a href='mailto:HUY009@e.ntu.edu.sg'>Send a message</a>
					</article>
				</div>
				<form ref={formRef} onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Your Full Name'
						name='user_name'
						required
					/>
					<input
						type='text'
						placeholder='Your Email Address'
						name='user_email'
						required
					/>
					<textarea
						placeholder='Your message'
						rows='7'
						name='message'
						required
					></textarea>
					<button
						type='submit'
						className='btn btn-primary'
						onClick={handleClickOpen}
					>
						Send Message
					</button>
				</form>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'Thank you!'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Your message has been sent successfully! I will get back to you
						soon.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</section>
	);
};

export default Contact;
