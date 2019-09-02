import { getCharacters } from '../../services';

describe('Api de personagens', () => {
  test('deve retornar uma lista de personagens', async () => {
    const heroes = await getCharacters();
    await expect(heroes.status).toBe(200);
  });
});
