/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'gray-1': '#F3F6F7',
        'gray-2': '#DFE5E7',
        'gray-3': '#E5E7EB',
        'gray-4': 'rgba(15, 45, 55, 0.1)',
        'green-1': '#0E9F6E',
        'blue-1': 'rgba(30, 119, 166, 0.3)',
        'read-1': 'rgba(187, 44, 44, 0.3)',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        'gray-1': '#F3F6F7',
        'gray-4': 'rgba(29, 69, 82, 0.2)',
        'gray-5': 'rgba(92, 111, 117, 0.2)',
        'gray-6': 'rgba(7, 44, 56, 0.2)',
      }),
      borderRadius: {
        none: '0',
        sm: '12px',
        md: '24px',
        lg: '40px',
        xl: '100px',
      },
      borderWidth: {
        6: '6px',
      },
      textColor: {
        blue: '#1E77A6',
        read: '#BB2C2C',
        'gray-5': '#001E28',
        'gray-4': '#2D464E',
        'gray-6': '#001E28',
      },
      placeholderColor: {
        'gray-4': '#2D464E',
      },
    },
  },
  plugins: [],
};
