'use client';

import { Flex } from '../flex/flex.js';
import { Typography } from '../typography/typography.js';
import styles from './footer.module.scss.js';
import { FC } from 'react';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <Flex direction="vertical" alignHorizontal="center" gap="md">
        <Flex direction="horizontal" alignVertical="center" gap="sm">
          <img
            src="https://lewisbritton.com/images/logo/bash-logo.png"
            alt="logo"
            style={{ height: '48px' }}
          />

          <Flex direction="vertical" alignHorizontal="left">
            <div className={styles.footerLogo}>BrittonsBashRC</div>

            <Typography variant="body" element="code" color="lightGrey">
              brittonsbash.com
            </Typography>
          </Flex>
        </Flex>

        <Flex direction="horizontal" alignVertical="center" gap="sm">
          <img
            src="https://lewisbritton.com/images/monero/xmr.svg"
            alt="xmr"
            style={{ height: '15px' }}
          />

          <Typography variant="body" color="lightGrey">
            Monero Donations
          </Typography>
        </Flex>

        <Typography variant="footnote" element="code" color="lightGrey">
          <>
            4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5R
            <br />
            PcM8KF6hDWGhj7f37dfqwzGCqq1Vug13vm
            <br />
            BkxoQARfNnrbNEcqsjZMTJSSkB46V
            <br />
          </>
        </Typography>

        <img
          src="https://lewisbritton.com/images/monero/xmr-code.png"
          alt="xmr-code"
          style={{ height: '100px' }}
        />

        <Typography variant="body" color="lightGrey">
          <>&#169; Lewis Britton 2020&mdash;2024</>
        </Typography>
      </Flex>
    </div>
  </footer>
);
