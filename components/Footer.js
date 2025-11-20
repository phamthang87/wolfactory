export default function Footer() {
    return (
        <footer style={{ padding: '40px 0', borderTop: '1px solid #222', textAlign: 'center', color: '#666', fontSize: '12px' }}>
            <div className="container">
                <p>© 2024 WOLFACTORY ALL RIGHTS RESERVED</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <span>HOME</span>
                    <span>ABOUT</span>
                    <span>GAMES</span>
                    <span>CAREERS</span>
                </div>
            </div>
        </footer>
    )
}
