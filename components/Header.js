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
    padding: 200px 0;

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
                font-size: 4rem;
                
                @media only screen and (min-width: 768px){
                    font-size: 4.3rem;
                }
                @media only screen and (min-width: 1024px){
                    font-size: 6rem;
                }
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
        </HeaderStyle>
    );
}

export default Header;