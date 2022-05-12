import { AppBar } from '@mui/material';

const Header = () => {
    return (
        <header style={{ textAlign: 'center' }}>
            <AppBar position='static'>
                {' '}
                <h1>Contacts directory</h1>{' '}
            </AppBar>
        </header>
    );
};

export default Header;
