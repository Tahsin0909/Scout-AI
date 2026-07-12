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
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
