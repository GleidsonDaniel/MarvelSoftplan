import { getCharacters } from '../../services';

describe('Characters api', () => {
  test('deve retornar uma lista de personagens', async () => {
    const heroes = await getCharacters();
    await expect(heroes.status).toBe(200);
  });
});
