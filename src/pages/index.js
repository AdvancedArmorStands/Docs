import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { Icon } from "@iconify/react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logo}>
          <img src="img/logo.svg" alt="Minecraft Plugin Logo" width="200" height="200" />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/getting-starteds">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/installation">
            Installation
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, icon}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.featuresTitle}>Key Features</h2>
        <div className={styles.featureGrid}>
          <FeatureCard
            title="Easy To Use"
            description="This plugin has easy to use commands, inventories and types."
            icon={<Icon icon="lucide:wand-2" width="32" height="32" color="#fd784a" />}
          />
          <FeatureCard
            title="Version Support"
            description="This plugin support from 1.8x to the latest version of minecraft (1.21)."
            icon={<Icon icon="lucide:layers" width="32" height="32" color="#fd784a" />}
          />
          <FeatureCard
            title="Active Support"
            description="This plugin has active support and updates, with a discord server."
            icon={<Icon icon="lucide:headset" width="32" height="32" color="#fd784a" />}
          />
          <FeatureCard
            title="Developer API"
            description="Extensive API for developers to extend functionality"
            icon={<Icon icon="lucide:code-2" width="32" height="32" color="#fd784a" />}
          />
          <FeatureCard
            title="Open Source"
            description="This plugin is open source and free to use, modify and distribute."
            icon={<Icon icon="lucide:settings" width="32" height="32" color="#fd784a" />}
          />
          <FeatureCard
            title="Regular Updates"
            description="Continuous improvements and compatibility updates"
            icon={<Icon icon="lucide:refresh-ccw" width="32" height="32" color="#fd784a" />}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.ctaSection}>
          <div className="container">
            <h2>Ready to enhance your Minecraft server?</h2>
            <p>Get started with our comprehensive documentation</p>
            <div className={styles.ctaButtons}>
              <Link
                className="button button--primary button--lg"
                to="/">
                Documentation
              </Link>
              <a
                className="button button--secondary button--lg"
                href="https://github.com/AdvancedArmorStands/"
                target="_blank"
                rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}