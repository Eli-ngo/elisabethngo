import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const SkillsStyle = styled.section`
    width: 100%;
    height: 70vh; 
    background: #0E1420;
    display: flex;
    justify-content: center;
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
    }

    .marquee{
        margin-top: 30px;
    }
    .marquee2{
        margin-bottom: 30px;
    }

    .marquee, 
    .marquee2{
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* transform: rotate(20deg) translateY(200px) translateY(200px); */

        div{
            font-family: "Ginger";
            white-space: nowrap;
            color: #ffffff;
            text-transform: uppercase;
            font-size: 2.3rem;
            animation: scrollText 30s linear infinite;

            @media only screen and (min-width: 1024px){
                font-size: 5rem;
            }

            @keyframes scrollText{
                0%{
                    transform: translate(10%, 0);
                }
                100%{
                    transform: translate(-70%, 10%);
                }
            }
        }
    }

    .marquee2{
        div{
            font-family: "Roboto", sans-serif;
            white-space: nowrap;
            color: #ffffff;
            text-transform: uppercase;
            font-size: 2.3rem;
            animation: scrollText2 25s linear infinite;

            @media only screen and (min-width: 1024px){
                font-size: 5rem;
            }

            @keyframes scrollText2{
                0%{
                    transform: translate(-70%, 0);
                }
                100%{
                    transform: translate(0, 0);
                }
            }
        }
    }
    
`;

const Skills = () => {

    return ( 
        <SkillsStyle id="skills">
            <p className="headline">skills</p>
            <div className="divider"></div>
            <div className="marquee">
                <div>FRONT-END DEVELOPER - UX/UI - FRONT-END DEVELOPER - UX/UI - FRONT-END DEVELOPER - UX/UI&nbsp;</div>
                <div>FRONT-END DEVELOPER - UX/UI - FRONT-END DEVELOPER - UX/UI - FRONT-END DEVELOPER - UX/UI&nbsp;</div>
            </div>
            <div className="marquee2">
                <div>NEXTJS - REACTJS - TAILWINDCSS - PHP - CAKEPHP - NODEJS - WORDPRESS&nbsp;</div>
                <div>NEXTJS - REACTJS - TAILWINDCSS - PHP - CAKEPHP - NODEJS - WORDPRESS&nbsp;</div>
            </div>
            <div className="divider"></div>
        </SkillsStyle>
    );
}

export default Skills;