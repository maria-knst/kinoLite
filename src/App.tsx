import './styles.css';
import IMGAGE from './k.png';
import LOGO from './heart.svg';

export const App = () => {
    return <>
    <h1>React TS !!!</h1>
    <img src={IMGAGE} alt='kitten' width='300' height='300' />
    <img src={LOGO} alt='heart' width='100' />
    </>
}