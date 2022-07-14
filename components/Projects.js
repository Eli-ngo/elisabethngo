import styled from 'styled-components'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export const ProjectStyle = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .headline{
        color: #ffffff;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
    }


    .projectContainer{
        width: 100%;
        padding: 6vh 0 25vh;
        --offset: 20vw;
        --move-initial: calc(-25% + var(--offset));
        --move-final: calc(-50% + var(--offset));
        font-size: 7vw;

        .project__item{
            position: relative;
            padding: 3vh 6vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .project__divider{
                width: 90%;
                height: 1px;
                background: #272727;
                opacity: 0.6s;
                margin-top: 3vh;
            }

            &-number{
                color: white;
            }

            &-link{
                font-family: "Ginger";
                display: inline-block;
                cursor: pointer;
                position: relative;
                /* -webkit-text-stroke: 1.5px #ffffff;
                -webkit-text-fill-color: transparent;
                color: transparent; */
                color: white;
                transition: opacity 0.4s;
                text-transform: uppercase;
                font-weight: lighter!important;

                &::before{
                    font-family: 'Ginger';
                    all: initial;
                    counter-increment: menu;
                    position: absolute;
                    bottom: 60%;
                    pointer-events: none;
                }

                &:hover{
                    transition-duration: 0.1s;
                    opacity: 0;
                }
            }
            &-img{
                pointer-events: none;
                position: absolute;
                height: 50vh;
                max-height: 400px;
                opacity: 0;
                left: 100%;
                top: 50%;
                transform: translate3d(calc(-100% - 6vw), -30%, 0) translate3d(0, 20px, 0);
            }

            .project__item-link:hover + .project__item-img{
                opacity: 1;
                transform: translate3d(calc(-100% - 6vw), -30%, 0) rotate3d(0, 0, 1, 4deg);
                transition: all 0.4s;
            }

            .marqueemenu{
                position: absolute;
                top: 0;
                left: 0;
                overflow: hidden;
                color: #ffffff;
                pointer-events: none;
                mix-blend-mode: difference;

                &__inner{
                    width: fit-content;
                    display: flex;
                    position: relative;
                    animation: marquee 5s linear infinite;
                    animation-play-state: paused;
                    opacity: 0;
                    transition: opacity 0.1s;

                    @keyframes marquee {
                        0% {
                            transform: translate3d(var(--move-initial), 0, 0);
                        }

                        100% {
                            transform: translate3d(var(--move-final), 0, 0);
                        }
                    }
                }
            }

            .project__item-link:hover ~ .marqueemenu .marqueemenu__inner{
                animation-play-state: running;
                opacity: 1;
                transition-duration: 0.4s;
            }

            .project__item-link,
            .marqueemenu span{
                white-space: nowrap;
                font-size: 6vw;
                padding: 0 1vw;
                font-weight: 900;
                line-height: 1.15;
            }

            .marqueemenu span{
                font-style: italic;
            }

        }
    }
`;

const Header = () => {

    return ( 
        <ProjectStyle id="projects">
            <p className="headline">projets</p>
            <div className="divider"></div>

            <div className="projectContainer">
                <div className="project__item">
                    <Link href="https://incognitos.vercel.app/"><a className="project__item-link">Twïce</a></Link>
                    <img class="project__item-img" src="/1.jpg" alt="Twïce"/>
                    <div class="marqueemenu">
                        <div class="marqueemenu__inner" aria-hidden="true">
                            <span>Twïce</span>
                            <span>Twïce</span>
                            <span>Twïce</span>
                            <span>Twïce</span>
                            <span>Twïce</span>
                            <span>Twïce</span>
                            <span>Twïce</span>
                            <span>Twïce</span>
                        </div>
                    </div>
                    <div className="project__divider"></div>
                </div>
                <div className="project__item">
                    <Link href="https://imminence-entrepreneur.com"><a className="project__item-link">Imminence</a></Link>
                    <img class="project__item-img" src="/1.jpg" alt="Some image"/>
                    <div class="marqueemenu">
                        <div class="marqueemenu__inner" aria-hidden="true">
                            <span>Imminence</span>
                            <span>Imminence</span>
                            <span>Imminence</span>
                            <span>Imminence</span>
                        </div>
                    </div>
                    <div className="project__divider"></div>
                </div>


                <div className="project__item">
                    <a href="https://pauldekock.fr/" className="project__item-link">Paul de Kock</a>
                    <img class="project__item-img" src="/2.jpg" alt="Some image"/>
                    <div class="marqueemenu">
                        <div class="marqueemenu__inner" aria-hidden="true">
                            <span>Paul de Kock</span>
                            <span>Paul de Kock</span>
                            <span>Paul de Kock</span>
                            <span>Paul de Kock</span>
                        </div>
                    </div>
                    <div className="project__divider"></div>
                </div>


                <div className="project__item">
                    <a href="https://lescompagnonsducompost.fr/" className="project__item-link">Les compagnons du compost</a>
                    <img class="project__item-img" src="/3.jpg" alt="Some image"/>
                    <div class="marqueemenu">
                        <div class="marqueemenu__inner" aria-hidden="true">
                            <span>Les compagnons du compost</span>
                            <span>Les compagnons du compost</span>
                            <span>Les compagnons du compost</span>
                            <span>Les compagnons du compost</span>
                        </div>
                    </div>
                    <div className="project__divider"></div>
                </div>
            </div> {/* end projectContainer */}
        </ProjectStyle>
    );
}

export default Header;