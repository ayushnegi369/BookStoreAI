export const metadata = {
    title: "My App",
    description: "A simple Next.js app with login",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-50 text-gray-900">
                <header className="p-4 bg-blue-600 text-white">
                    <h1 className="text-xl font-bold">My App</h1>
                </header>

                <main className="p-4">{children}</main>

                <footer className="p-4 mt-10 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} My App. All rights
                    reserved.
                </footer>
            </body>
        </html>
    );
}
