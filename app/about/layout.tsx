
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
          
            <main className="p-36">
                {children}
            </main>
        </>
    )
}