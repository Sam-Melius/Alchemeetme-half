import { render ,screen, waitfor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


describe('App', () => {
    test('Should render the header', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        screen.findByAltText('header');
        
    })
})

