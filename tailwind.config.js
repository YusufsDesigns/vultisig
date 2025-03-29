/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                nohemi: ['Nohemi', 'sans-serif'],
            },
            colors: {
                primary: 'var(--Vultisig-color-primary)', // Oxford Blue
                lightPrimary: 'var(--Vultisig-color-lightPrimary)', // Persian Blue
                secondary: 'var(--Vultisig-color-secondary)', // Turquoise
                gradient: 'var(--Vultisig-color-gradient)', // Gradient (Turquoise to Persian Blue)

                primaryBackground: 'var(--Vultisig-color-primaryBackground)', // Primary Background (#02122B)
                secondaryBackground: 'var(--Vultisig-color-secondaryBackground)', // Secondary Background (#061B3A)
                tertiaryBackground: 'var(--Vultisig-color-tertiaryBackground)', // Tertiary Background (#11284A)

                white: 'var(--Vultisig-color-white)', // White
                black: 'var(--Vultisig-color-black)', // Black
                lightText: 'var(--Vultisig-text-color-grey)', // Light text color
            }
        }
    },
    // plugins: [require("tailwindcss-animate")],
}