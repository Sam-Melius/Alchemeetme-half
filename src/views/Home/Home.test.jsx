import { render, screen } from '@testing-library/react';
import Home from './Home';


  const user = {
    id: 1,
    created_at: '2021-12-13T00:17:29+00:00',
    name: 'Vonta',
    avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
    header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
    likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
    motto: 'Res Non Verba',
    color: 'crimson',
  }
  
  test('Should render the user profile', async () => {
    render(
      
        <Home user={user} />
      
    );
    const { name, motto, likes } = user;
    
    
    const profName = screen.getByRole('heading', { name });

    console.log({ name });

    expect(profName).toBeInTheDocument();

    const profMotto = screen.getByText(motto);

    expect(profMotto).toBeInTheDocument();

    const profLikes = screen.getByRole('list');

    expect(profLikes.children.length).toEqual(likes.length);

    const interests = screen.getByRole('heading', { name: /interests/i });

    expect(interests).toBeInTheDocument();


  })

