import Link from 'next/link'
import styled from 'styled-components';

export const FooterStyle = styled.footer`
    width: 100%;
    padding: 30px 10px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    flex-direction: column;
    font-family: "Ginger";
    font-weight: lighter;

    .footer-container{

        p{
            font-weight: bold;

            @media only screen and (min-width: 768px){
                text-align: center;
            }
        }
        .navFooterLinks{
            & a{
                text-decoration: underline;
                margin-right: 30px;

                @media only screen and (min-width: 768px){
                    margin-right: 120px;
                }

                &:last-of-type{
                    margin-right: 0;
                }
            }
        }
    }

`;

const Footer = () => {
    return ( 
        <FooterStyle id="footer">
            <div className="footer-container">
                <p>Copyright © 2022 Elisabeth Ngo</p>
                {/* <div className="navFooterLinks">
                    <Link href="/" className="legalNotice"><a>Mentions Légales</a></Link>
                    <Link href="/" className="CGU"><a>CGU</a></Link>
                    <Link href="/" className="contactFooter"><a>Nous contacter</a></Link>
                </div> */}
            </div>
        </FooterStyle>
    );
}

export default Footer;