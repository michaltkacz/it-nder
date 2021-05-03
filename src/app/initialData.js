import { v4 as uuidv4 } from 'uuid';

const initialData = [
  {
    id: uuidv4(),
    name: 'Jan',
    surname: 'Kowalski',
    title: 'React Front-End Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at tortor semper, tincidunt quam vel, dapibus dui. Cras faucibus facilisis enim, at finibus ex posuere quis. Maecenas nec est diam. Sed semper placerat purus id dictum. Nulla egestas tortor eget volutpat ultrices. Cras id est est. Vivamus sed velit eros. Morbi tristique justo a porta egestas.',
    tags: ['react', 'js', 'html', 'css'],
  },
  {
    id: uuidv4(),
    name: 'Anna',
    surname: 'Nowak',
    title: 'Angular full-stack web app',
    description:
      'Nulla mollis sed risus sed volutpat. Fusce sit amet gravida ligula, in convallis tellus. Phasellus in lorem ut tortor aliquet interdum at a arcu. Aliquam faucibus tellus malesuada, dapibus diam at, sollicitudin neque. Curabitur dictum neque velit, vitae sollicitudin est scelerisque et. Cras venenatis sollicitudin lacus, sed finibus neque faucibus vel. Morbi lacinia lobortis nulla, eu posuere lorem mattis at. Ut consectetur malesuada nibh, nec fringilla massa facilisis ut',
    tags: ['angular', 'typescript', 'dotnet', 'azure'],
  },
  {
    id: uuidv4(),
    name: 'Jarek',
    surname: 'Pieczarek',
    title: 'Backend server with Node.js',
    description:
      'In non tempus odio. Nulla eget felis urna. Nullam condimentum finibus elementum. Vivamus mauris eros, accumsan vel felis sed, ullamcorper tristique leo. Nunc ut leo a massa gravida ornare. Nunc ut eros posuere, euismod felis at, posuere velit. Quisque a dui lectus.',
    tags: ['nodejs', 'js', 'express', 'restapi'],
  },
];

export default initialData;
