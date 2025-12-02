'use client';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import styles from './header.module.scss.js';
import { useShowElement } from '~/libs/hooks';
// import { isMobile } from '@libs/utils';
import { Flex } from '../flex/flex.js';
import { Button } from '../client-form/components/button/button.js';

export type HeaderMobileProps = {
  funcMobile: () => void;
  funcUtilities: () => void;
};

export const Header = () => {
  const { showElement: showMobile, setShowElement: setShowMobile } = useShowElement();
  const { showElement: showBlog, setShowElement: setShowBlog } = useShowElement();
  const { showElement: showUtilities, setShowElement: setShowUtilities } = useShowElement();

  const resetHeader = () => {
    setShowBlog(false);
    setShowUtilities(false);
  };

  const toggleBlog = () => {
    setShowBlog(!showBlog);
    setShowUtilities(false);
  };

  const toggleUtilities = () => {
    setShowUtilities(!showUtilities);
    setShowBlog(false);
  };

  const toggleBlogMobile = () => {
    setShowMobile(false);
    setShowBlog(!showBlog);
    setShowUtilities(false);
  };

  const toggleUtilitiesMobile = () => {
    setShowMobile(false);
    setShowBlog(false);
    setShowUtilities(!showUtilities);
  };

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Flex direction="horizontal" alignHorizontal="apart" alignVertical="center">
            {/* {isMobile() ? (
              <img
                className={styles.headerImage}
                src="https://lewisbritton.com/images/logo/bash-logo.png"
                alt="header-logo"
              />
            ) : ( */}
            <Flex direction="horizontal" alignVertical="center" gap="sm">
              <img
                className={styles.headerImage}
                src="https://lewisbritton.com/images/logo/bash-logo.png"
                alt="header-logo"
              />

              <div className={styles.headerLogo}>BrittonsBashRC</div>
            </Flex>
            {/* )} */}

            {/* {isMobile() ? (
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                  setShowMobile(!showMobile);
                  resetHeader();
                }}
              />
            ) : ( */}
            <Flex direction="horizontal" alignVertical="center" gap="sm">
              <Button link={{ href: '/' }}>Home</Button>
              {/* <Link to="/">Home</Link>
                <Link to="/academia">Academia</Link>
                <Link to="/employment">Employment</Link>
                <Link to="/library">Library</Link>
                <Link to="#" onClick={toggleBlog}>
                  Blog
                </Link>
                <Link to="#" onClick={toggleUtilities}>
                  Utilities
                </Link> */}
            </Flex>
            {/* )} */}
          </Flex>
        </div>
      </div>

      {/* {showMobile && isMobile() ? (
        <div className={styles.subheader}>
          <div className={styles.subheaderContent}>
            <Flex direction="vertical" gap="2xs">
              <Flex direction="horizontal" alignHorizontal="right" gap="sm">
                <Link to="/">Home</Link>
                <Link to="/academia">Academia</Link>
                <Link to="/employment">Employment</Link>
                <Link to="/library">Library</Link>
              </Flex>

              <Flex direction="horizontal" alignHorizontal="right" gap="sm">
                <Link to="#" onClick={toggleBlogMobile}>
                  Blog
                </Link>
                <Link to="#" onClick={toggleUtilitiesMobile}>
                  Utilities
                </Link>
              </Flex>
            </Flex>
          </div>
        </div>
      ) : null} */}

      {showBlog ? (
        <div className={styles.subheader}>
          <div className={styles.subheaderContent}>
            {/* <Flex direction="vertical" gap="2xs">
              <Flex direction="horizontal" alignHorizontal="right" gap="sm">
                <Link to="/blog/instant-gram" onClick={resetHeader}>
                  Instant Gram
                </Link>
                <Link to="/blog/sport" onClick={resetHeader}>
                  Sport
                </Link>
                <Link to="/blog/brittons-foodrc" onClick={resetHeader}>
                  BrittonsFoodRC
                </Link>
              </Flex>

              <Flex direction="horizontal" alignHorizontal="right" gap="sm">
                <Link to="/blog/allroad" onClick={resetHeader}>
                  allroad
                </Link>
                <Link to="/blog/gentlemen-who-cafe" onClick={resetHeader}>
                  Gentlemen Who Caf&eacute;
                </Link>
              </Flex>

              <Flex direction="horizontal" alignHorizontal="right" gap="sm">
                <Link to="/blog/ricing" onClick={resetHeader}>
                  Ricing
                </Link>
                <Link to="/blog/think-flow" onClick={resetHeader}>
                  ThinkFlow
                </Link>
                <Link to="/blog/founding-fathers" onClick={resetHeader}>
                  Founding Fathers
                </Link>
              </Flex>

              <Flex direction="horizontal" alignHorizontal="right" gap="sm">
                <Link to="/blog/media" onClick={resetHeader}>
                  Media
                </Link>
                <Link to="/blog/miami-vice" onClick={resetHeader}>
                  Miami Vice
                </Link>
                <Link to="/blog/graphic-design" onClick={resetHeader}>
                  Graphic Design
                </Link>
              </Flex>
            </Flex> */}
          </div>
        </div>
      ) : null}

      {showUtilities ? (
        <div className={styles.subheader}>
          <div className={styles.subheaderContent}>
            {/* <Flex direction="horizontal" alignHorizontal="right" gap="sm">
              <Link to="/utilities/weather" onClick={resetHeader}>
                Weather
              </Link>
              <Link to="/utilities/conquest" onClick={resetHeader}>
                Conquest
              </Link>
            </Flex> */}
          </div>
        </div>
      ) : null}
    </header>
  );
};
