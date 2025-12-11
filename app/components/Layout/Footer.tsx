
export default function Footer() {
    return (
        <footer className="w-full bg-foreground text-background py-6 text-center z-50">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
        </footer>
    );
}