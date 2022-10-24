import tw from "twin.macro";

const ShowDetailsBtn = tw.button`
    text-blue-400
    hover:text-blue-900
    py-1.5
    duration-300
    hover:transform[opacity-25] hover:transform[translateY(-5px)] hover:duration-300 transform[none]
    `;

export default ShowDetailsBtn;
