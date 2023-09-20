

function importAll(r) {
  let images1929 = {};
    r.keys().forEach((item, index) => { images1929[item.replace('./', '')] = r(item); });
  return images1929
  }
  const images1929 = importAll(require.context('../assets/1929', false, /\.(png|jpe?g|svg)$/));

  const imagesBoa = importAll(require.context('../assets/Boa di mare', false, /\.(png|jpe?g|svg)$/));

  const imagesBrasilia = importAll(require.context('../assets/Brasilia', false, /\.(png|jpe?g|svg)$/));

  const imagesColtrane = importAll(require.context('../assets/Coltrane Sofa', false, /\.(png|jpe?g|svg)$/));

  const imagesDo = importAll(require.context('../assets/Dining out', false, /\.(png|jpe?g|svg)$/));

  const imagesFluvial = importAll(require.context('../assets/Fluvial', false, /\.(png|jpe?g|svg)$/));

  const imagesParamo = importAll(require.context('../assets/Paramo', false, /\.(png|jpe?g|svg)$/));

  const imagesWyh = importAll(require.context('../assets/Wash your hands', false, /\.(png|jpe?g|svg)$/));

  const arrImages1929 = Object.values(images1929);

  const arrImagesBoa = Object.values(imagesBoa);

  const arrImagesBrasilia = Object.values(imagesBrasilia);

  const arrImagesColtrane = Object.values(imagesColtrane);

  const arrImagesDo = Object.values(imagesDo);

  const arrImagesFluvial = Object.values(imagesFluvial);

  const arrImagesParamo = Object.values(imagesParamo);

  const arrImagesWyh = Object.values(imagesWyh);


export const ProjectList = [
  {
    name: "1929 an Art-Deco Obsession",
    subtitle: "Bathroom Collection",
    images: arrImages1929,
    date: 2020,
    client: "Concept",
    description: "Bathroom Collection inspired on the Art-Deco style that searches to re-interpret this iconic period in a contemporary way."
  },
  {
    name: "Boa di Mare",
    subtitle: "Portable light",
    images: arrImagesBoa,
    date: 2021,
    client: "Concept",
    description: "The Boa di Mare aims to take advantage of the way light behaves on water projecting, reflecting and materializing it, creating a very special and almost theatrical atmosphere in this realm.",
    description2: "At the same time seeks to be a functional piece to illuminate its surroundings and serve as a company light and a vessel, creating a special ambiance in amphibious environments"
  },
  {
    name: "Brasilia",
    subtitle: "Furniture Collection",
    images: arrImagesBrasilia,
    date: 2022,
    client: "Zientte-Bombox",
    description: "Inspired by Oscar Niemeyer’s architectural gestures, this collection re-interprets the classic wooden bench into a series of comfortable pieces. By rounding the corners and chamfering the edges, the structure appears to be lighter while in contrast to the upholstery. The result is a contemporary piece with a vintage spirit."
  },
  {
    name: "Coltrane Sofa",
    images: arrImagesColtrane,
    date: 2022,
    client: "Private",
    description: "Sofa design inspired by vintage pieces. looking for an elegant and light appearance while remaining very comfortable. The mix of leather fabric and metal gives the piece a certain dynamism while keeping a classical look."
  },
  {
    name: "DiningOut",
    subtitle: "experience delivery concept",
    images: arrImagesDo,
    date: 2021,
    description: "This project aims to create a brand that builds the experience of dining out, across the journey from the interface to the actual meal.",
    description2: "In terms of mobility it might be true that food delivery is far from new or innovative, but the food is just half of the story, dining, beyond the feeding part is a ritual.  A restaurant is an extension of our personality, of our taste, character and decision-making skills; a good choice can turn into a meaningful relationship and a fond memory. Clearly food is the reason, but it is the experience, what actually creates the magic."
  },
  {
    name: "Fluvial",
    images: arrImagesFluvial,
    date: 2022,
    client: "Concept",
    description: "Small collection of vases inspired by different colombian rivers. After an exercise of thredimentionalization of the shape of the river, resulting in a variety of organic shapes."
  },
  {
    name: "Paramo",
    images: arrImagesParamo,
    date: 2021,
    client: "Mario Hernandez",
    description: "A series of graphic prints inspired on the natural life of the paramo regions of Colombia’s Andes mountains.",
    description2: "After the extraction of color pallets and the abstraction of various shapes, the collection honors this important ecosystem and imprints its spirit on a series of designs."
  },
  {
    name: "Wash your Hands",
    subtitle: "Covid awareness posters",
    images: arrImagesWyh,
    date: 2020,
    description: "During the pandemic of COVID-19, the importance of self care actions has become paramount to overcome this situation. Washing your hands is an action that has become almost compulsive after any kind of activity."
  }
]
