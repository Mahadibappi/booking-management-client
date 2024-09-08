interface Facility {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const facilities: Facility[] = [
  {
    id: 1,
    title: "Name : Tennis Court",
    price: 70,
    imageUrl:
      "https://img.freepik.com/free-photo/sideways-tennis-racket-ball_23-2148218672.jpg?t=st=1725080122~exp=1725083722~hmac=d082d009516ee9d414a77444f958af1fd5b938d52dd0523aa9a6bbe23042d2f0&w=1380",
  },
  {
    id: 2,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 3,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 4,
    title: "Shoes!",
    description: "If a dog chews shoes whose shoes does he choose?",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
];
export default facilities;
