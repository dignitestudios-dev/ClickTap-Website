import React from 'react';

type BrandIdentityProps = {
    title: React.ReactNode;
    description: string;
};

const BrandIdentity = ({ title, description }: BrandIdentityProps) => {
    const colors = {
        dark: [
            { name: 'Dark Brown', hex: '#7D5B3F' },
            { name: 'Pastel Brown', hex: '#DCC9B8' },
        ],
        light: [
            { name: 'Dark Green', hex: '#556B2F' },
            { name: 'Red', hex: '#C8102E' },
        ],
    };

    return (
        <section className="px-4 md:px-20 py-10 bg-white text-[#0a0a0a] font-sans">
            {/* Header Section */}
            <div className="text-center mb-24">
                <h1 className="text-[clamp(2rem,8vw,4.125rem)] mb-6 tracking-tight">{title}</h1>
                <div className="max-w-2xl mx-auto space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-sm opacity-80">
                        {description}
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Typography Section */}
                <div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Using the brand palette</span>
                    <h2 className="text-4xl font-bold mt-2 mb-8">Typography</h2>

                    <div className="flex gap-8 mb-12">
                        <div>
                            <h3 className="text-xl font-bold">Primary</h3>
                            <p className="text-sm text-gray-500">General Sans</p>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                            The "Chubb's Army" web app uses the General Sans font for a clean and modern feel.
                            Its strong, sans-serif design ensures readability and projects a tech-forward image.
                        </p>
                    </div>

                    <div className="flex items-start gap-8">
                        <span className="text-8xl font-bold leading-none">Aa</span>
                        <div className="grid grid-cols-5 sm:grid-cols-9 gap-y-4 gap-x-2 font-medium text-lg">
                            {['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 'Gg', 'Hh', 'Ii', 'Jj', 'Kk', 'Ll', 'Mm', 'Nn', 'Oo', 'Pp', 'Qq', 'Rr', 'Ss', 'Tt', 'Uu', 'Vv', 'Ww', 'Xx', 'Yy', 'Zz'].map(l => (
                                <span key={l}>{l}</span>
                            ))}
                            {['01', '02', '03', '04', '05', '06', '07', '08', '09'].map(n => (
                                <span key={n}>{n}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Colors Section */}
                <div>
                    <h2 className="text-4xl font-bold mb-8">Colors</h2>

                    <div className="space-y-6">
                        {/* Color Group Component */}
                        {Object.entries(colors).map(([mode, palette]) => (
                            <div key={mode} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">
                                    {mode}
                                </span>
                                <div className="flex h-32 rounded-lg overflow-hidden mb-4">
                                    {palette.map((col) => (
                                        <div key={col.hex} className="flex-1" style={{ backgroundColor: col.hex }} />
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    {palette.map((col) => (
                                        <div key={col.hex}>
                                            <p className="text-xs font-bold text-gray-800">{col.name}</p>
                                            <p className="text-[10px] text-gray-400 uppercase">{col.hex}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandIdentity;
