import { AppBar } from '@mui/material';

const Header = () => {
    return (
        <header style={{ textAlign: 'center' }}>
            <AppBar position='static'>
                {' '}
                <h1>My Contacts </h1>{' '}
            </AppBar>
        </header>
    );
};

export default Header;
