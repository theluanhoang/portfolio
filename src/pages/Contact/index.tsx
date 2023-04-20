import React, { useState } from 'react'
import Title from '../../components/Title'
import { FaMapMarkerAlt, FaPhoneSquareAlt, FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa'
import { HiMailOpen } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import AOS from '../../utils/aos'
import { ref, child, get, set } from "firebase/database";
import { database } from '../../firebase'
import { v4 as uuidv4 } from 'uuid';
import { notification } from 'antd'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Contact() {
    let initialValues = { username: '', email: '', subject: '', message: '' };
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Name is require.'),
        email: Yup.string().email('Email is invalid.').required('Email is require.'),
        message: Yup.string().required('This field is require.')
    })
    const dbRef = ref(database);

    const handleSubmit = React.useCallback(async (values: any, { resetForm }: { resetForm: () => void }) => {
        try {
            const uniqueId = uuidv4();

            await validationSchema.validate(values, { abortEarly: true });

            const isValid = await validationSchema.isValid(values);
            if (isValid) {
                set(child(dbRef, 'comments/' + uniqueId), values);
                resetForm()
                notification.success({
                    message: 'Success',
                    description: 'You have successfully submitted!',
                    duration: 1.5,
                    key: '1',
                });
            }
            else {
                notification.error({
                    message: 'Failed',
                    description: 'You have failed submit!',
                    duration: 1.5,
                    key: '1',
                });
            }

        } catch (error) {
            notification.error({
                message: 'Failed',
                description: 'You have failed submit!',
                duration: 1.5,
                key: '1',
            });
        }
    }, [initialValues]);
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container'>
            <div className='overflow-hidden py-[50px] sm:px-[40px] px-[10px]'>
                <Title title={'Get in'} titleActive={'touch'} subTitle={'contact'} data-aos='fade-up' data-aos-duration='1000' />
                <div className='flex flex-col mymd:items-start mymd:flex-row gap-[100px] mt-[100px]'>
                    <div className='mymd:basis-1/3 basis-full flex flex-col gap-[30px]' data-aos='fade-right' data-aos-duration='2500'>
                        <h1 className='text-2xl font-bold uppercase text-white tracking-wider'>don't be shy</h1>
                        <p className='text-white'>
                            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <ul className='flex flex-col gap-[30px]'>
                            <li className='flex flex-row gap-2 items-center'>
                                <FaMapMarkerAlt className='text-my-yellow' size={36} />
                                <div>
                                    <p className='text-[#CDCDCD] uppercase font-bold'>Address point</p>
                                    <p className='text-white'>123 Nguyen Minh Chau, Hoa Hai, Ngu Hanh Son, Da Nang</p>
                                </div>
                            </li>
                            <li className='flex flex-row gap-2 items-center'>
                                <HiMailOpen className='text-my-yellow' size={36} />
                                <div>
                                    <p className='text-[#CDCDCD] uppercase font-bold'>Email</p>
                                    <p className='text-white'>hoangtheluan2016@gmail.com</p>
                                </div>
                            </li>
                            <li className='flex flex-row gap-2 items-center'>
                                <FaPhoneSquareAlt className='text-my-yellow' size={36} />
                                <div>
                                    <p className='text-[#CDCDCD] uppercase font-bold'>Call me</p>
                                    <p className='text-white'>(+84) 379124695</p>
                                </div>
                            </li>
                        </ul>
                        <ul className='flex flex-row gap-[15px]'>
                            <li className='w-[40px] h-[40px] hover:bg-my-yellow duration-150 cursor-pointer rounded-full bg-[#222222] flex items-center justify-center'>
                                <a href=""><FaFacebookF className='text-white' /></a>
                            </li>
                            <li className='w-[40px] h-[40px] hover:bg-my-yellow duration-150 cursor-pointer rounded-full bg-[#222222] flex items-center justify-center'>
                                <a href=""><AiFillInstagram className='text-white' /></a>
                            </li>
                            <li className='w-[40px] h-[40px] hover:bg-my-yellow duration-150 cursor-pointer rounded-full bg-[#222222] flex items-center justify-center'>
                                <a href=""><FaTiktok className='text-white' /></a>
                            </li>
                            <li className='w-[40px] h-[40px] hover:bg-my-yellow duration-150 cursor-pointer rounded-full bg-[#222222] flex items-center justify-center'>
                                <a href=""><FaYoutube className='text-white' /></a>
                            </li>
                        </ul>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className='mymd:basis-2/3 basis-full flex flex-col gap-[30px]' data-aos='fade-left' data-aos-duration='2500'
                            >
                                <div className='flex flex-col md:flex-row gap-[30px]'>
                                    <div className='flex flex-col w-full'>
                                        <Field className='input-form' type="text" name="username" placeholder='Your name' />
                                        <ErrorMessage className='text-[#ff6347]' name="username" component="div" />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <Field className='input-form' type="email" name="email" placeholder='Your email' />
                                        <ErrorMessage className='text-[#ff6347]' name="email" component="div" />
                                    </div>
                                </div>
                                <div className='flex flex-col' >
                                    <Field className='input-form' type="text" name="subject" placeholder='Your subject' />
                                    <ErrorMessage className='text-[#ff6347]' name="subject" component="div" />
                                </div>
                                <div className='flex flex-col'>
                                    <Field as="textarea" rows={8} name="message" placeholder='Your message' className='input-form' />
                                    <ErrorMessage className='text-[#ff6347]' name="message" component="div" />
                                </div>
                                <button type="submit" disabled={isSubmitting} className='max-w-[230px] text-center uppercase text-white px-[30px] py-[10px] border rounded-md border-my-yellow hover:bg-my-yellow duration-200'>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div >
    )
}

export default Contact