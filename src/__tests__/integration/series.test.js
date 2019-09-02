import { getSeries } from '../../services';

describe('Api de series', () => {
  test('deve retornar uma lista de personagens', async () => {
    const series = await getSeries('http://gateway.marvel.com/v1/public/characters/1011334/series');
    await expect(series.status).toBe(200);
  });
});
