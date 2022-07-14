import styled from 'styled-components'
import Link from 'next/link';

export const ContactStyle = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .contactContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 100px;

        .contactText{
            font-family: "Roboto", sans-serif;
            font-size: 3rem;
            text-transform: uppercase;
            text-align: center;
            padding: 30px;
            color: white;

            @media only screen and (min-width: 768px){
                font-size: 6rem;
            }

            &__link{
                font-family: "Ginger";
                text-transform: uppercase;
                color: #4DA2C0;
            }

            &__email{
                color: white;
                font-family: "Roboto", sans-serif;
                font-size: 1rem;
            }
        }
    }
    
`;

const Contact = () => {

    return ( 
        <ContactStyle id="contact">
            <p className="headline">contact</p>
            <div className="divider"></div>
            <div className="contactContainer">
                <p className="contactText">Collaborons<Link href="/"><a className="contactText__link"> ensemble</a></Link></p>
                <Link href="/"><a className="contactText__email">elisab.ngo@gmail.com</a></Link>
            </div>
            <div className="divider"></div>
        </ContactStyle>
    );
}

export default Contact;