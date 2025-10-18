import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className="font-bold">find us on</h2>
            <div>
                <div className="join join-vertical space-y-3 w-full">
                    <button className="btn justify-start bg-base-100 join-item"><FaFacebook/> Facebook</button>
                    <button className="btn justify-start bg-base-100 join-item"><FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn justify-start bg-base-100 join-item"><FaInstagram></FaInstagram>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;