import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch('/api/news');
            const data = await response.json();
            setNews(data);
        };

        fetchNews();
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>뉴스 카드</h1>
                <p>최신 뉴스 업데이트</p>
            </header>
            <section className={styles.newsSection}>
                {news.map(item => (
                    <div key={item.id} className={styles.card}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <span className={styles.category}>{item.category}</span>
                        <p>{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
