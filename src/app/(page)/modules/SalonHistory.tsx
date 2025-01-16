import React from 'react';

const SalonHistory = () => (
    <section className="bg-background text-foreground py-16">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
                {/* Columna Izquierda: Texto */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                    <h2 className="text-3xl font-semibold text-foreground mb-4">Our History</h2>
                    <p className="text-lg text-muted mb-6">
                        Founded in [Year], our salon began as a small space dedicated to enhancing natural beauty. Over the years, we have grown into a trusted name in the beauty industry, known for exceptional service and innovation.
                    </p>
                    <p className="text-lg text-muted mb-6">
                        From introducing cutting-edge techniques to expanding our offerings, every milestone has been driven by a passion for excellence and a commitment to our clients&apos; satisfaction.
                    </p>
                </div>
                {/* Columna Derecha: Misión y Visión */}
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Mission & Vision</h3>
                    <p className="text-lg text-muted mb-6">
                        Our mission is to provide personalized beauty solutions that empower our clients to look and feel their best. We believe in delivering quality services that blend creativity, skill, and care.
                    </p>
                    <p className="text-lg text-muted">
                        Our vision is to be a             leader in the beauty industry, setting standards for excellence while fostering an inclusive and inspiring environment for everyone who walks through our doors.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default SalonHistory;

