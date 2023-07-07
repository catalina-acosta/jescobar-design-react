import { Description } from "@material-ui/icons";

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
    name: 1929,
    images: arrImages1929,
    date: 2021,
    client: "Bombox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, sapien nec congue hendrerit, velit magna auctor neque, ut tincidunt diam libero id quam. Pellentesque congue in dolor et porttitor. Nulla vestibulum volutpat ante, ut mattis metus pretium nec. Curabitur et felis sed odio blandit eleifend. Donec sit amet ex sit amet neque molestie ornare. Proin turpis turpis, fermentum quis nisl tempus, pulvinar elementum sapien. Duis dictum euismod vehicula. Sed consequat neque vitae ultricies sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at pharetra magna. Morbi justo lorem, consequat id varius vel, imperdiet a enim. Aenean ut dignissim turpis."
  },
  {
    name: "Boa",
    images: arrImagesBoa,
    date: 2021,
    client: "Bombox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, sapien nec congue hendrerit, velit magna auctor neque, ut tincidunt diam libero id quam. Pellentesque congue in dolor et porttitor. Nulla vestibulum volutpat ante, ut mattis metus pretium nec. Curabitur et felis sed odio blandit eleifend. Donec sit amet ex sit amet neque molestie ornare. Proin turpis turpis, fermentum quis nisl tempus, pulvinar elementum sapien. Duis dictum euismod vehicula. Sed consequat neque vitae ultricies sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at pharetra magna. Morbi justo lorem, consequat id varius vel, imperdiet a enim. Aenean ut dignissim turpis."
  },
  {
    name: "Brasilia",
    images: arrImagesBrasilia,
    date: 2021,
    client: "Bombox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, sapien nec congue hendrerit, velit magna auctor neque, ut tincidunt diam libero id quam. Pellentesque congue in dolor et porttitor. Nulla vestibulum volutpat ante, ut mattis metus pretium nec. Curabitur et felis sed odio blandit eleifend. Donec sit amet ex sit amet neque molestie ornare. Proin turpis turpis, fermentum quis nisl tempus, pulvinar elementum sapien. Duis dictum euismod vehicula. Sed consequat neque vitae ultricies sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at pharetra magna. Morbi justo lorem, consequat id varius vel, imperdiet a enim. Aenean ut dignissim turpis."
  },
  {
    name: "Coltrane",
    images: arrImagesColtrane,
    date: 2021,
    client: "Bombox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, sapien nec congue hendrerit, velit magna auctor neque, ut tincidunt diam libero id quam. Pellentesque congue in dolor et porttitor. Nulla vestibulum volutpat ante, ut mattis metus pretium nec. Curabitur et felis sed odio blandit eleifend. Donec sit amet ex sit amet neque molestie ornare. Proin turpis turpis, fermentum quis nisl tempus, pulvinar elementum sapien. Duis dictum euismod vehicula. Sed consequat neque vitae ultricies sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at pharetra magna. Morbi justo lorem, consequat id varius vel, imperdiet a enim. Aenean ut dignissim turpis."
  },
  {
    name: "Dining out",
    images: arrImagesDo,
    date: 2021,
    client: "Bombox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, sapien nec congue hendrerit, velit magna auctor neque, ut tincidunt diam libero id quam. Pellentesque congue in dolor et porttitor. Nulla vestibulum volutpat ante, ut mattis metus pretium nec. Curabitur et felis sed odio blandit eleifend. Donec sit amet ex sit amet neque molestie ornare. Proin turpis turpis, fermentum quis nisl tempus, pulvinar elementum sapien. Duis dictum euismod vehicula. Sed consequat neque vitae ultricies sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at pharetra magna. Morbi justo lorem, consequat id varius vel, imperdiet a enim. Aenean ut dignissim turpis."
  },
  {
    name: "Fluvial",
    images: arrImagesFluvial,
    date: 2021,
    client: "Bombox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, sapien nec congue hendrerit, velit magna auctor neque, ut tincidunt diam libero id quam. Pellentesque congue in dolor et porttitor. Nulla vestibulum volutpat ante, ut mattis metus pretium nec. Curabitur et felis sed odio blandit eleifend. Donec sit amet ex sit amet neque molestie ornare. Proin turpis turpis, fermentum quis nisl tempus, pulvinar elementum sapien. Duis dictum euismod vehicula. Sed consequat neque vitae ultricies sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at pharetra magna. Morbi justo lorem, consequat id varius vel, imperdiet a enim. Aenean ut dignissim turpis."
  },
  {
    name: "Paramo",
    images: arrImagesParamo,
    date: 2021,
    client: "Bombox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, sapien nec congue hendrerit, velit magna auctor neque, ut tincidunt diam libero id quam. Pellentesque congue in dolor et porttitor. Nulla vestibulum volutpat ante, ut mattis metus pretium nec. Curabitur et felis sed odio blandit eleifend. Donec sit amet ex sit amet neque molestie ornare. Proin turpis turpis, fermentum quis nisl tempus, pulvinar elementum sapien. Duis dictum euismod vehicula. Sed consequat neque vitae ultricies sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at pharetra magna. Morbi justo lorem, consequat id varius vel, imperdiet a enim. Aenean ut dignissim turpis."
  },
  {
    name: "Wash your hands",
    images: arrImagesWyh,
    date: 2021,
    client: "Bombox",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet, sapien nec congue hendrerit, velit magna auctor neque, ut tincidunt diam libero id quam. Pellentesque congue in dolor et porttitor. Nulla vestibulum volutpat ante, ut mattis metus pretium nec. Curabitur et felis sed odio blandit eleifend. Donec sit amet ex sit amet neque molestie ornare. Proin turpis turpis, fermentum quis nisl tempus, pulvinar elementum sapien. Duis dictum euismod vehicula. Sed consequat neque vitae ultricies sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at pharetra magna. Morbi justo lorem, consequat id varius vel, imperdiet a enim. Aenean ut dignissim turpis."
  }
]
