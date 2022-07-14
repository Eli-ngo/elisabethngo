import styled from 'styled-components'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export const HeaderStyle = styled.header`
    width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;

    .headerContainer{
        display: flex;
        flex-direction: column;
        color: #ffffff;
        justify-content: center;
        align-items: center;
        width: 80%;
        position: relative;

        &:before { //left halo
                display: block;
                position: absolute;
                /* top: 50px; */
                bottom: -500px;
                left: -550px;
                content: "";
                width: 728px;
                height: 728px;
                border-radius: 50%;
                /* background: radial-gradient(50.2% 50.2% at 50.2% 49.8%, #87628D 0%, rgba(14, 27, 74, 0) 100%); */
                background: radial-gradient(50.2% 50.2% at 50.2% 49.8%, #4D9999 0%, rgba(14, 27, 74, 0) 100%);
                filter: blur(80px);

                @media only screen and (min-width: 768px){
                    left: -740px;
                }
        }

        &:after { //righgt halo
                display: block;
                position: absolute;
                /* top: 50px; */
                bottom: 200px;
                right: -280px;
                content: "";
                width: 360px;
                height: 360px;
                border-radius: 50%;
                /* background: radial-gradient(50.2% 50.2% at 50.2% 49.8%, #0F2A89 0%, rgba(14, 27, 74, 0) 100%); */
                background: radial-gradient(50.2% 50.2% at 50.2% 49.8%, #5689A6 0%, rgba(14, 27, 74, 0) 100%);
                filter: blur(60px);

                @media only screen and (min-width: 768px){
                    right: -400px;
                }
        }

        @media only screen and (min-width: 768px){
            flex-direction: row;
            align-items: flex-end;
        }
        @media only screen and (min-width: 1024px){
            gap: 300px;
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
                height: 70px;
                width: 100%;
                overflow: hidden;
                position: relative;

                @media only screen and (min-width: 1024px){
                    height: 94px;
                    width: 140%;
                }

                & span{
                    position: absolute;
                    transform: translateY(0px);
                    animation: 1.5s cubic-bezier(0.77, 0, 0.175, 1) 1s num2;

                    @keyframes num2 {
                        0%   {
                        transform: translateY(80px);
                        }
                        
                        100% {
                            transform: translateY(0px);
                        }
                    }
                }
                
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
                /* border-radius: 20px; */

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
                    <h1 className="headerContainer__text--title"><span>portfolio</span></h1>
                    <p className="headerContainer__text--description">développeuse front-end basée sur paris</p>
                </div>
                <div className="headerContainer__img">
                    <figure>
                        <img className={`headerContainer__img--banner ${isReveal ? "reveal" : ""}`} src="/liquid.jpg" alt="header image Elisabeth Ngo"></img>
                    </figure>
                </div>
            </div>
            <div className="scrollDown"></div>
        </HeaderStyle>
    );
}

export default Header;