import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>P2P Console Chat</title>
                <meta name='P2P Chat' content='P2P Chat built with Rust' />
                <link rel='icon' href='/snail.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome!</h1>

                <p className={styles.description}>
                    {' '}
                    P2P Chat built with{' '}
                    <a href='https://www.rust-lang.org/'>Rust</a> and{' '}
                    <a href='https://libp2p.io/'>libp2p</a>
                </p>

                <a href='https://github.com/yoliveros/rust-p2p-chat/releases/download/0.1.0/p2p-chat-0.1.0-x86_64.msi'>
                    <button className={styles['download-btn']}>Download</button>
                </a>
            </main>

            <footer className={styles.footer}>
                <p>Snail - {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}
