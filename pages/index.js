import styles from '../styles/Home.module.css';

export default function Home() {
    const categories = [
        { name: "Nature", color: "#4CAF50" }, // 진한 초록색
        { name: "Photography", color: "#2196F3" }, // 진한 파란색
        { name: "Adventure", color: "#FF9800" }, // 진한 주황색
        { name: "Relaxation", color: "#9C27B0" }, // 진한 보라색
        { name: "Travel", color: "#FF5722" }, // 진한 빨간색
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>AI경제분석</h1>
                <p>경제 트렌드를 한눈에 파악하세요.</p> 
                <button className={styles.button}>View Latest Posts</button>
            </header>
            <nav className={styles.nav}>
                <a href="#">Nature</a>
                <a href="#">Photography</a>
                <a href="#">Relaxation</a>
                <a href="#">Vacation</a>
                <a href="#">Travel</a>
                <a href="#">Adventure</a>
            </nav>
            <section className={styles.featured}>
                <h2>Featured Posts</h2>
                <div className={styles.featuredPosts}>
                    <div className={styles.post}>
                        <div className={styles.category} style={{ backgroundColor: categories[1].color }}>
                            {categories[1].name}
                        </div>
                        <div className={styles.postImage} >📸</div>
                        <h3>Photography</h3>
                        <h4>The Road Ahead</h4>
                        <p>by Mat Vogels | September 25, 2015</p>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.category} style={{ backgroundColor: categories[3].color }}>
                            {categories[3].name}
                        </div>
                        <div className={styles.postImage}>🏞️</div>
                        <h3>Adventure</h3>
                        <h4>From Top Down</h4>
                        <p>by William Wong | September 25, 2015</p>
                    </div>
                </div>
            </section>
            <section className={styles.recent}>
                <h2>Most Recent</h2>
                <div className={styles.recentPosts}>
                    <div className={styles.post}>
                        <div className={styles.category} style={{ backgroundColor: categories[0].color }}>
                            {categories[0].name}
                        </div>
                        <div className={styles.postImage}>🌳</div>
                        <h3>Nature</h3>
                        <h4>Still Standing Tall</h4>
                        <p>by William Wong | 9/25/2015</p>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.category} style={{ backgroundColor: categories[1].color }}>
                            {categories[1].name}
                        </div>
                        <div className={styles.postImage}>☀️</div>
                        <h3>Photography</h3>
                        <h4>Sunny Side Up</h4>
                        <p>by Mat Vogels | 9/25/2015</p>
                    </div>
                    <div className={styles.post}>
                        <div className={styles.category} style={{ backgroundColor: categories[3].color }}>
                            {categories[3].name}
                        </div>
                        <div className={styles.postImage}>💧</div>
                        <h3>Relaxation</h3>
                        <h4>Water Falls</h4>
                        <p>by Mat Vogels | 9/25/2015</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
