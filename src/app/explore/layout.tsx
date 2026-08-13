import { getDefaultMetadata } from "@/utils/seo";

export const metadata = getDefaultMetadata();

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            {/* <Navbar /> */}
            <main className="">
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    );
}
