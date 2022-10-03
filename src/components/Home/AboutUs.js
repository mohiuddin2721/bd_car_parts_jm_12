import React from 'react';
import { Circle, LayerGroup, MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';

const AboutUs = () => {
    return (
        <div id='aboutUs' className="flex items-center flex-col sm:flex-row my-10">
            <div data-aos="fade-down-right" data-aos-duration="2000" className="w-4/5 text-center sm:w-1/2 mx-auto px-2">
                <h1 className="section-title text-3xl font-semibold">Our Company</h1>
                <p className="my-3">We Are a established company in this area for last 21 years. We have currently a lot of customers and many of them are repeat customers. Below shown our company's roadmap through year.</p>
                <ul className="steps w-full">
                    <li className="step step-primary text-xs">Established on 2001</li>
                    <li className="step step-primary text-xs">Went online on 2009</li>
                    <li className="step step-primary text-xs">Reached whole world on 2010</li>
                    <li className="step text-xs">Became a international brand in 2011</li>
                </ul>
                <div>
                    <h1 className="text-xl font-bold">Find Us :</h1>
                    <address>Rd No. 8A, Nikunjo-1, Kurmitola, Dhaka-1229, Bangladesh</address>
                    <h1 className="text-xl font-bold">Contact Us :</h1>
                    <p>+8801680106149</p>
                    <h1 className="text-xl font-bold">Mail:</h1>
                    <address>bdcarparts@gmail.com</address>
                </div>
            </div>
            {/* center={[23.75005494868502, 90.37491877181348] */}
            <div data-aos="fade-down-left" data-aos-duration="2000" className="w-full border-4 flex justify-center items-center sm:w-1/2 mx-2">
                <MapContainer center={[23.82321, 90.41912]} zoom={15} style={{ height: '300px', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LayerGroup>
                        <Circle
                            center={[23.82321, 90.41912]}
                            pathOptions={{ color: 'green', fillColor: 'green' }}
                            radius={50}
                        />
                    </LayerGroup>
                    <Marker position={[23.82321, 90.41912]}>
                        <Tooltip>Bd Car Parts</Tooltip>
                    </Marker>
                </MapContainer>
            </div>

        </div >
    )
}
export default AboutUs;