import { render ,screen, waitfor} from '@testing-library/react';
import App from './App';



    test('Should render the header', async () => {
        render(
                <App />
        );

        const image = screen.getByAltText('Alchemy Logo');
       
        expect(image).toBeInTheDocument();

        const profName = await screen.findByLabelText(/meet vonta!/i);

        expect(profName).toBeInTheDocument();

        const backColor = screen.getByRole('banner');

        expect(backColor).toHaveStyle(`background: var(---grey`);
    })


