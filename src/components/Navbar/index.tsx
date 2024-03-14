import { ButtonTheme, KinoLiteButton } from '../../ui/KinoLiteButton';
import Logo from '../../ui/KinoLiteLogo';
import { KinoLiteText, TextSize, TextTheme } from '../../ui/KinoLiteText';
import { KinoLiteInput } from '../../ui/KinoLiteInput';
import { RoutePath } from '../../modules/App/AppRouter/routerConfig';

interface NavbarProps {

}

const Navbar = ({}: NavbarProps) => {
    return (
        <div className='container-fluid bg-dark p-2'>
            <div className='container d-flex justify-content-between'>
                <a href={RoutePath.main} className='link-underline-dark'>
                <div className='d-flex gap-3'>
                    <Logo/>
                    <KinoLiteText text='KinoLite' theme={TextTheme.LIGHT} size={TextSize.LG} />
                </div>
                </a>
                <div className='d-flex gap-3'>
                    <KinoLiteInput className='mt-1 mb-1' placeholder='Search' />
                    <KinoLiteButton theme={ButtonTheme.OUTLINE_LIGHT}>LogIn</KinoLiteButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;