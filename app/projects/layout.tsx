
export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

return (
    <main className="flex flex-col w-full bg-background min-h-svh z-50 relative">
        {children}
    </main>
)}