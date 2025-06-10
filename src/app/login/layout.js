export const metadata = {
    title: "My App",
    description: "A simple Next.js app with login",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-yellow-300">
                {children}
            </body>
        </html>
    );
}
