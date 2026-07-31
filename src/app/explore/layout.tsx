import { Footer } from "@/components/footer/components/Footer";
import { Navbar } from "@/components/navbar/components/Navbar";
import { getDefaultMetadata } from "@/utils/seo";

export const metadata = getDefaultMetadata();

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col bg-[#111111]">
            <Navbar />
            <main className="flex-grow relative flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
}
