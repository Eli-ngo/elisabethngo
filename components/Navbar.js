import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'

export const NavStyle = styled.nav`

    background: #0E1420;
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;

    @media only screen and (max-width: 768px){
        padding-left: 0 50px;
    }

    .logo {
        h1 {
            margin: 0;
            font-weight: 900;
            font-size: 27px;
        }
    }

    .expanded{
        height: 100vh;
    }

    .navLinks{
        display: flex;
        & a{
            font-family: "Nexa-Bold";
            :not(:last-child) {
                margin-right: 50px;
            }
            list-style: none;
            display: none;
            color: #ffffff;
            font-weight: 700;
            text-transform: capitalize;

            @media only screen and (min-width: 768px){
                display: block;
            }
        }
    }

    button{
        all: unset;
        float: right;

        @media only screen and (min-width: 768px){
            display: none;
        }
    }

    .toggle-icon{
        @media only screen and (min-width: 768px){
            display: none;
        }
        .toggle-container{
            position: absolute;
            top: 40%;
            right: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .bar1,
            .bar2,
            .bar3{
                width: 30px;
                height: 2px;
                background-color: #ffffff;
                margin-top: 5px;
                
            }
        }
    }
    .mobile--menu{
        left: -100%;
        transition: left .6s ease-in-out;
        position: fixed;
        opacity: 0;
        &.opened{
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            top: 0;
            z-index: 5;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            opacity: 1;

            .close{
                transition: left .6s ease-in-out;
                position: absolute;
                width: 50px;
                height: 50px;
                right: 40px;
                top: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 20;
                .closeline{
                    width: 50%;
                    height: 2px;
                    background-color: #fff;
                    transform: rotate(45deg) translate(11px, -10px);
                    &:last-child{
                        transform: rotate(-45deg) translate(-7px, -7px);
                    }
                }
            }

            .mobile--links{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                a{
                    margin-top: 10px;
                }
            }
            a{
                font-family: "Nexa-Bold";
                color: white;

            }

        }

    }


`;

const Navbar = () => {

    //mobile navbar
    const [active, setActive] = useState(false);


    return ( 
        <NavStyle>
            <div className="logo">
                <h1>
                    <Link href="/"><a><Image src="/elisabeth_ngo_logo.svg" width={30} height={30} alt="logo"/></a></Link>
                </h1>
            </div>

            <div className="toggle-icon">
                <div className="toggle-container" onClick={() => setActive(!active)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            <div className={`mobile--menu ${active ? "opened" : ""}`}>
                    <div className="mobile--links">
                        <Link href="#skills" className="aboutUs"><a>Projets</a></Link>
                        <Link href="#contact" className="contactUs"><a>Contact</a></Link>
                        <div className="close" onClick={() => setActive(!active)}>
                        <div className="closeline"></div>
                        <div className="closeline"></div>
                </div>
                    </div>
            </div>
        
            <div className="navLinks">
                <Link href="#skills" className="aboutUsMobile"><a>Projets</a></Link>
                <Link href="#contact" className="contactUsMobile"><a>Contact</a></Link>
            </div>
        </NavStyle>
    );
}

export default Navbar;