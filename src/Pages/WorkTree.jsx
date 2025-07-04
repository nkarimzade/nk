import React, { useEffect } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function WorkTree() {
    useEffect(() => {
        ScrollReveal().reveal('.proje-tanitim', {
            origin: 'bottom',
            distance: '60px',
            duration: 1000,
            delay: 100,
            easing: 'ease-in-out',
            reset: false,
            interval: 200
        });

        ScrollReveal().reveal('.page-link', {
            origin: 'bottom',
            distance: '40px',
            duration: 800,
            delay: 50,
            easing: 'ease-in-out',
            reset: false
        });
    }, []);

    return (
        <>
            <div className="proje-tanitim">
                <a target='_blank' className="Tittle" href="https://uzunoba.vercel.app/">UzunOba Restorant QR-Code</a>
                <br /><br />
                <p className="paragraf">
                    This web application is specially designed for restaurants, allowing them to present their menu through a QR code. Customers can scan the code placed on the table to access the digital menu and view detailed product information.
                </p>
                <br />
                <p className="tarih">4 February  , 2025 ·</p>
                <br />
                <div className="dot-container">• • •</div>
            </div>
            <div style={{
                textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center',
                marginBottom: '50px'
            }}>
                <Link to="/worktwo" className=" page-link">
                    <div >
                        <FaChevronLeft />
                    </div>
                </Link>
                <p className='page-link' >Page 3</p>

                <Link to="/workthree" className=" page-link">
                    <div >
                        <FaChevronRight />
                    </div>
                </Link>

            </div>
        </>

    );
}

export default WorkTree;
