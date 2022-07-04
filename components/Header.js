import styled from 'styled-components'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export const HeaderStyle = styled.header`
    width: 100%;
    height: 110vh!important; 
    background: #0E1420;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1024px){
        height: 100vh;
    }

    .headerContainer{
        display: flex;
        flex-direction: column;
        color: #ffffff;
        justify-content: center;
        align-items: center;
        width: 80%;

        @media only screen and (min-width: 768px){
            flex-direction: row;
            align-items: flex-end;
        }

        &__text{
            &--name{
                font-family: "Ginger";
                font-size: 2.25rem;
            }
            &--title{
                font-family: "Ginger";
                text-transform: uppercase;
                font-weight: lighter;
                font-size: 3rem;
                
                @media only screen and (min-width: 768px){
                    font-size: 4.3rem;
                }
                @media only screen and (min-width: 1024px){
                    font-size: 6rem;
                }
            }
            &--description{
                font-family: 'Roboto', sans-serif;
                text-transform: uppercase;
            }
        }

        &__img{
            &--banner{
                display: flex;
                justify-content: center;
                width: 90%;
                clip-path: inset(0% 0% 100% 0%);
                transition: clip-path 2s cubic-bezier(0.73, 0.01, 0, 1);

                @media only screen and (min-width: 768px){
                    width: 100%;
                }
                
                &.reveal {
                    clip-path: inset(0% 0% 0% 0%);
                }
            }
        }
    }

    .scrollDown{
        position: absolute;
        height: 60px;
        width: 30px;
        border-radius: 50px;
        border: 1.3px solid #ffffff;
        margin: auto;
        left: 0;
        right: 0;
        bottom: -100px;

        @media only screen and (min-width: 1024px){
            bottom: -50px;
        }

        &::before{
            position: absolute;
            content: "";
            margin: auto;
            left: 0;
            right: 0;
            height: 8px;
            width: 8px;
            background: #ffffff;
            border-radius: 50%;
            animation: move-down 2s infinite;

            @keyframes move-down {
                0%{
                    transform: translateY(20px);
                }
                50%{
                    transform: translateY(40px);
                }
                75%{
                    transform: translateY(10px);
                }
                100%{
                    transform: translateY(20px);
                }
            }
        }

        &::after{
            position: absolute;
            content: "SCROLL DOWN";
            font-family: 'Roboto', sans-serif;
            width: 12em;
            display: block;
            text-align: center;
            left: -4.5em;
            bottom: -2.5em;
            font-size: 0.6rem;
            color: #ffffff;
        }
    }
`;

const Header = () => {

    const [isReveal, setIsReveal] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setIsReveal(!isReveal)
        }, 1000);      
    },[])




    return ( 
        <HeaderStyle>
            <div className="headerContainer d-flex">
                <div className="headerContainer__text">
                    <p className="headerContainer__text--name">Elisabeth Ngo</p>
                    <h1 className="headerContainer__text--title">portfolio</h1>
                    <p className="headerContainer__text--description">développeuse front-end basée sur paris</p>
                </div>
                <div className="headerContainer__img">
                    <figure>
                        <img className={`headerContainer__img--banner ${isReveal ? "reveal" : ""}`} src="/header-image.webp" alt="header image Elisabeth Ngo"></img>
                    </figure>
                </div>
            </div>
            <div className="scrollDown"></div>
        </HeaderStyle>
    );
}

export default Header;