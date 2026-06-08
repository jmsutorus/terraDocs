import React, { useMemo } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function getYear(dateStr) {
  return new Date(dateStr).getFullYear();
}

export default function BlogListPage({ items }) {
  const grouped = useMemo(() => {
    const map = new Map();
    items.forEach(({ content }) => {
      const year = getYear(content.metadata.date);
      if (!map.has(year)) map.set(year, []);
      map.get(year).push(content);
    });
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [items]);

  return (
    <Layout
      title="Blog"
      description="Stories, features, and philosophy from the CairnHolm team."
    >
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerLabel}>CairnHolm</div>
          <h1 className={styles.headerTitle}>Blog</h1>
          <p className={styles.headerSubtitle}>
            Stories, features, and philosophy from the CairnHolm team.
          </p>
        </header>

        <main className={styles.main}>
          {grouped.map(([year, posts]) => (
            <section key={year} className={styles.yearGroup}>
              <div className={styles.yearLabel}>{year}</div>
              <div className={styles.postList}>
                {posts.map((post) => {
                  const { date, title, description, permalink, readingTime, tags } =
                    post.metadata;
                  return (
                    <article key={permalink} className={styles.postItem}>
                      <Link to={permalink} className={styles.postLink}>
                        <div className={styles.postInner}>
                          <div className={styles.postDate}>{formatDate(date)}</div>
                          <div className={styles.postContent}>
                            <h2 className={styles.postTitle}>{title}</h2>
                            {description && (
                              <p className={styles.postDescription}>{description}</p>
                            )}
                            <div className={styles.postFooter}>
                              {tags.length > 0 && (
                                <div className={styles.tags}>
                                  {tags.map((tag) => (
                                    <span key={tag.permalink} className={styles.tag}>
                                      {tag.label}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {readingTime && (
                                <span className={styles.readingTime}>
                                  {Math.ceil(readingTime)} min read
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      </div>
    </Layout>
  );
}
