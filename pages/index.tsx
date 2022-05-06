
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from "next/image";

import Main from "../components/layouts/main/main.component";

import styles from '../styles/Home.module.scss';
import Button from "../components/button/button.component";

import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss'

8f65f1c (Navbar)

import Button from "../components/button/button.component";
7671eb1 (update)

const Home: NextPage = () =>
{
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
                <meta content="ie=edge" httpEquiv="X-UA-Compatible" />

                <title>Guardian Community</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <Main>
                <section className={styles.home}>
                    <div className={styles.homeHeaderLeft}>
                        <h1>
                            Buy & sell <br />
                            crypto in minutes
                        </h1>
                        <p>
                            Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset exchange.
                        </p>
                        <Button name="Get started now" type="Primary" />
                    </div>
                    <span className={styles.homeHeaderRight}>
                        <Image
                            src="/static/images/content/cards.png"
                            alt="Guardian Community"
                            width={913}
                            height={924}
                            objectFit="none"
                        />
                    </span>

                    <div className={styles.homeCards}>
                        <div className={styles.homeCard}>
                            <span className={styles.homeCardIcon}>
                                <Image
                                    src="/static/images/content/currency/bitcoin.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.homeCardDetails}>
                                <div className={styles.homeCardDetailsInfo}>
                                    <span className={styles.homeCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.homeCardDetailsInfoNegative}>-0.79%</span>
                                </div>

                                <div className={styles.homeCardDetailsPrice}>36,641.20</div>
                                <div className={styles.homeCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.homeCard}>
                            <span className={styles.homeCardIcon}>
                                <Image
                                    src="/static/images/content/currency/chainlink.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.homeCardDetails}>
                                <div className={styles.homeCardDetailsInfo}>
                                    <span className={styles.homeCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.homeCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.homeCardDetailsPrice}>36,641.20</div>
                                <div className={styles.homeCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.homeCard}>
                            <span className={styles.homeCardIcon}>
                                <Image
                                    src="/static/images/content/currency/monero.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.homeCardDetails}>
                                <div className={styles.homeCardDetailsInfo}>
                                    <span className={styles.homeCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.homeCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.homeCardDetailsPrice}>36,641.20</div>
                                <div className={styles.homeCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.homeCard}>
                            <span className={styles.homeCardIcon}>
                                <Image
                                    src="/static/images/content/currency/maid.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.homeCardDetails}>
                                <div className={styles.homeCardDetailsInfo}>
                                    <span className={styles.homeCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.homeCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.homeCardDetailsPrice}>36,641.20</div>
                                <div className={styles.homeCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                    </div>
                </section>
            </Main>

8f65f1c (Navbar)


            <main className="container">
                <section className={styles.sectionStart}>
                    <div className={styles.sectionStartContent}>
                        <h1>Buy & sell <br/> crypto in minutes</h1>
                        <p>Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset exchange.</p>
                        <Button name="Get started now" type="Primary" />
                    </div>

                    <div className={styles.sectionStartBG}>
                        <Image
                            src="/static/cards.png"
                            alt="Guardian Community"
                            layout={'fill'}
                            objectFit={'contain'}
                        />
                    </div>

                    <div className={styles.sectionStartCards}>
                        <div className={styles.sectionStartCard}>
                            <span className={styles.sectionStartCardIcon}>
                                <Image
                                    src="/static/currency/bitcoin.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.sectionStartCardDetails}>
                                <div className={styles.sectionStartCardDetailsInfo}>
                                    <span className={styles.sectionStartCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.sectionStartCardDetailsInfoNegative}>-0.79%</span>
                                </div>

                                <div className={styles.sectionStartCardDetailsPrice}>36,641.20</div>
                                <div className={styles.sectionStartCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.sectionStartCard}>
                            <span className={styles.sectionStartCardIcon}>
                                <Image
                                    src="/static/currency/chainlink.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.sectionStartCardDetails}>
                                <div className={styles.sectionStartCardDetailsInfo}>
                                    <span className={styles.sectionStartCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.sectionStartCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.sectionStartCardDetailsPrice}>36,641.20</div>
                                <div className={styles.sectionStartCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.sectionStartCard}>
                            <span className={styles.sectionStartCardIcon}>
                                <Image
                                    src="/static/currency/monero.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.sectionStartCardDetails}>
                                <div className={styles.sectionStartCardDetailsInfo}>
                                    <span className={styles.sectionStartCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.sectionStartCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.sectionStartCardDetailsPrice}>36,641.20</div>
                                <div className={styles.sectionStartCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.sectionStartCard}>
                            <span className={styles.sectionStartCardIcon}>
                                <Image
                                    src="/static/currency/maid.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.sectionStartCardDetails}>
                                <div className={styles.sectionStartCardDetailsInfo}>
                                    <span className={styles.sectionStartCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.sectionStartCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.sectionStartCardDetailsPrice}>36,641.20</div>
                                <div className={styles.sectionStartCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
7671eb1 (update)
        </>
    )
}

export default Home;
