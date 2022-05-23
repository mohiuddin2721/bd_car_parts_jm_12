import React from 'react';
import parts1 from '../../images/parts1.webp';
import parts4 from '../../images/parts4.webp';
import parts6 from '../../images/parts6.webp';
import parts9 from '../../images/parts9.webp';

const Footer = () => {
    return (
        <footer className='bg-accent mt-4'>
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
                    <div className=''>
                        <div className='ml-8'>
                            <h3 className='text-primary my-4 text-2xl'>Get in touch</h3>
                            <ul>
                                <li className='text-white'>
                                    <p>Phone: 0182-44-3535</p>
                                </li>
                                <li className='text-white'>
                                    <p>bdcarparts@help.com</p>
                                </li>
                                <li className='text-white'>
                                    <p>Golshan-2, Dhaka</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='ml-8'>
                        <div>
                            <h3 className='text-primary my-4 text-2xl'>SUSTAINABILITY</h3>
                            <ul>
                                <li className='text-white'>
                                    <a className=' ' href=" ">Overview</a>
                                </li>
                                <li className='text-white'>
                                    <a className=' ' href=" ">Environment</a>
                                </li>
                                <li className='text-white'>
                                    <a className=' ' href=" ">Corporate Citizenship</a>
                                </li>
                                <li className='text-white'>
                                    <a className=' ' href=" ">Digital Responsibility</a>
                                </li>
                                <li className='text-white'>
                                    <a className=' ' href=" ">Sustainable Supply Chain</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='ml-8'>
                        <div>
                            <h3 className='text-primary my-4 text-2xl'>ABOUT US</h3>
                            <ul>
                                <li className='text-white'>
                                    <a className=' ' href=" ">Company Info</a>
                                </li>
                                <li className='text-white'>
                                    <a className=' ' href=" ">Business Area</a>
                                </li>
                                <li className='text-white'>
                                    <a className=' ' href=" ">Brand Identity</a>
                                </li>
                                <li className='text-white'>
                                    <a className=' ' href=" ">Ethics</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='ml-8'>
                        <div>
                            <h3 className='text-primary my-4 text-2xl'>GALLERY</h3>
                            <ul className='grid grid-cols-2 gap-0'>
                                <img className='w-20' src={parts1} alt="" />
                                <img className='w-20' src={parts4} alt="" />
                                <img className='w-20' src={parts6} alt="" />
                                <img className='w-20' src={parts9} alt="" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-white text-center mt-8'><small>Copyright &copy; {new Date().getFullYear()} BD Car House. All Rights Reserved. Designed By K M Mohiuddin Patwary</small></p>

        </footer>
    );
};

export default Footer;