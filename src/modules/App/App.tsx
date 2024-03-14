import Navbar from '../../components/Navbar';
import KinoLiteLayout from '../../ui/KinoLiteLayout';
import AppRouter from './AppRouter/AppRouter';
import './styles.scss';


export const App = () => {
    return (
        <div className='app'>
            <KinoLiteLayout>
                <AppRouter/>
            </KinoLiteLayout>
        </div>
    )
}
