import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a
				href='https://www.linkedin.com/in/bui-quang-huy-b54860194/'
				target='_blank'
				rel='noreferrer'
			>
				<BsLinkedin />
			</a>
			<a href='https://github.com/huybq26' target='_blank' rel='noreferrer'>
				<FaGithub />
			</a>
			<a href='tel:84390091' target='_blank' rel='noreferrer'>
				<FiPhoneCall />
			</a>
		</div>
	);
};

export default HeaderSocials;
