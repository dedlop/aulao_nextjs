export default function ProductDatailsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <p style={{
                backgroundColor: 'aqua'
            }}>Especificações</p>
            {children}
        </>
    )
}