'use client';

// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import { isMobile as getIsMobile } from '~/libs/utils';
import { routes } from '../../../../../app/_libs/constants/routes.js';
import { Button } from '../form/components/button/button.jsx';
import { Flex } from '../flex/flex.js';
import { Typography } from '../typography/typography.jsx';
import styles from './header.module.scss.js';

export const Header: FC = () => {
  const isMobile = getIsMobile();
  const [showMobile, setShowMobile] = useState(false);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Flex direction="horizontal" alignHorizontal="apart" alignVertical="center">
            <Flex direction="horizontal" alignVertical="center" gap="sm">
              <img
                className={styles.headerImage}
                src="https://lewisbritton.com/images/logo/bash-logo.png"
                alt="header-logo"
              />

              <Typography variant="h2">brittonsbash</Typography>
            </Flex>

            {isMobile ? (
              // TODO: upgrade React and ReactMarkdown versions to include this
              // <FontAwesomeIcon
              //   icon={faBars}
              //   onClick={(): void => {
              //     setShowMobile(!showMobile);
              //   }}
              // />
              <Button
                link={{ href: '#' }}
                onClick={(): void => {
                  setShowMobile(!showMobile);
                }}
              >
                {showMobile ? 'Contract' : 'Expand'}
              </Button>
            ) : (
              <Flex direction="horizontal" alignVertical="center" gap="sm">
                <Button link={{ href: routes.home }}>Home</Button>
                <Button link={{ href: routes.instantGram.base }}>Instant Gram</Button>
                <Button link={{ href: routes.projects.base }}>Projects</Button>
              </Flex>
            )}
          </Flex>
        </div>
      </div>

      {isMobile && showMobile ? (
        <div className={styles.subheader}>
          <div className={styles.subheaderContent}>
            <Flex direction="vertical" alignHorizontal="right" gap="3xs">
              <Button link={{ href: routes.home }}>Home</Button>
              <Button link={{ href: routes.instantGram.base }}>Instant Gram</Button>
              <Button link={{ href: routes.projects.base }}>Projects</Button>
            </Flex>
          </div>
        </div>
      ) : null}
    </header>
  );
};
