import washingMachine from "../src/assets/washing-machine.png";
import fryer from "../src/assets/fryer.png";
import fridge from "../src/assets/fridge.png";
import stove from "../src/assets/stove.png";
import hairDryer from "../src/assets/hair-dryer.png";

export const products = [
  {
    id: 1,
    title: "fryer",
    imgSrc: fryer,
    products: [
      {
        id: 101,
        title: "fryer 2xl huge omg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        imgSrc: fryer,
        category: "fryer",
        zone: "kitchen",
      },
    ],
  },
  {
    id: 2,
    title: "washing machine",
    imgSrc: washingMachine,
    products: [
      {
        id: 102,
        title: "washing machine 2xl huge omg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        imgSrc: washingMachine,
        category: "washing machine",
        zone: "kitchen",
      },
    ],
  },
  {
    id: 3,
    title: "fridge",
    imgSrc: fridge,
    products: [
      {
        id: 103,
        title: "fridge 2xl huge omg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        imgSrc: fridge,
        category: "fridge",
        zone: "living room",
      },
    ],
  },
  {
    id: 4,
    title: "stove",
    imgSrc: stove,
    products: [
      {
        id: 104,
        title: "stove 2xl huge omg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        imgSrc: stove,
        category: "stove",
        zone: "bed",
      },
    ],
  },
  {
    id: 5,

    title: "hair dryer",
    imgSrc: hairDryer,
    products: [
      {
        id: 105,
        title: "hair dryer 2xl huge omg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        imgSrc: hairDryer,
        category: "hair dryer",
        zone: "wall",
      },
    ],
  },
];

export const categories = [
  "fryer",
  "washing machine",
  "fridge",
  "stove",
  "hair dryer",
];

export const zones = ["kitchen", "living room", "bed", "wall"];
