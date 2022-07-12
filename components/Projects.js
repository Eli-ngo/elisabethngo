import styled from 'styled-components'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export const ProjectStyle = styled.section`
    width: 100%;
    height: 100vh; 
    background: #0E1420;
    display: flex;
    align-items: center;
    flex-direction: column;

    .headline{
        color: #ffffff;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
    }

    .divider{
        width: 80%;
        height: 1px;
        background: #CACACA;
        margin-bottom: 30px;
    }

    .projectContainer{
        width: 100%;
        height: 150px;
        background: lightblue;
        display: flex;
        justify-content: space-between;
        padding: 40px;

        &:hover{
            background: url("/header-image.webp") no-repeat 0 0 / cover;
            transition: all 1s ease-in-out;
        }
    }
`;

const Header = () => {

    return ( 
        <ProjectStyle id="project">
            <p className="headline">projects</p>
            <div className="divider"></div>
            <div className="projectContainer">
                <h3>Project 1</h3>
                <p>Web Development</p>
            </div>
        </ProjectStyle>
    );
}

export default Header;