import React from 'react';
import styles from './page.module.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Web開発',
      description: '最新技術を使ったレスポンシブWebサイトの開発',
      features: ['React/Next.js', 'TypeScript', 'SEO最適化']
    },
    {
      id: 2, 
      title: 'モバイルアプリ',
      description: 'iOS/Androidクロスプラットフォームアプリ開発',
      features: ['React Native', 'Flutter', 'Firebase連携']
    },
    {
      id: 3,
      title: 'クラウドコンサルティング',
      description: 'AWS/GCPを活用したクラウドソリューション',
      features: ['インフラ設計', 'DevOps', 'コスト最適化']
    }
  ];

  return (
    <div className={styles.container}>
      <h1>サービス</h1>
      <div className={styles.servicesGrid}>
        {services.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul className={styles.featuresList}>
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
