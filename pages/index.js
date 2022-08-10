import React, { useState } from "react";
import Image from "next/image";
const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isList2, setIsList2] = useState(false);
  const [isList3, setIsList3] = useState(false);
  const [isList4, setIsList4] = useState(false);
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [count1, setCount1] = useState(1);
  const [count12, setCount12] = useState(0);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [hide5, setHide5] = useState(false);
  const [hide6, setHide6] = useState(false);

  return (
    <>
      <div className="justify-center">
        <div className="  ">
          <div className="flex flex-wrap justify-between items-center px-20">
            <svg
              className=" cursor-pointer"
              width="56"
              height="73"
              viewBox="0 0 56 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.4173 20.9156C52.1161 27.6366 48.1539 33.7608 42.9939 38.5684C41.4392 40.017 39.7015 41.3876 37.6422 41.8735C36.9636 42.0324 36.2349 42.0924 35.577 41.8525C34.0193 41.2916 33.4174 39.3332 33.5 37.6567C33.5826 35.9772 34.1225 34.3157 33.9249 32.6481C33.8393 31.9254 33.6003 31.1966 33.1076 30.6657L33.1047 30.6627C32.9365 30.4828 32.7212 30.3478 32.4881 30.2788C31.5735 30.0089 30.5114 30.2458 29.5732 30.5548C27.8916 31.1066 26.263 31.8354 24.726 32.7231C22.8437 33.8118 21.0381 35.1644 18.9199 35.6263C18.1646 35.7912 17.3651 35.8332 16.6393 35.5663C15.1465 35.0205 14.3647 33.3229 14.1493 31.7244C13.751 28.7583 14.763 25.7801 16.0758 23.1019C18.9848 17.1696 23.4338 12.1251 28.4462 7.88734C32.6031 4.37236 37.3324 1.30126 42.6488 0.290549C44.5369 -0.0693464 46.5136 -0.156321 48.3605 0.386521C52.1486 1.4992 54.8304 5.18813 55.6564 9.10799C56.4855 13.0278 55.7125 17.1307 54.4173 20.9156Z"
                fill="#EE5A3C"
              />
              <path
                d="M27.3697 59.5988V60.9184C27.3785 60.9634 27.3844 61.0144 27.3815 61.0654C27.3785 61.1523 27.3756 61.2393 27.3726 61.3233C29.8744 64.1305 32.3704 66.9377 34.8722 69.7418C34.9813 69.7059 35.1052 69.6849 35.2439 69.6849C36.7102 69.6849 36.7072 72.0002 35.2439 72.0002C34.4326 72.0002 34.0697 71.2954 34.1582 70.6596C31.8777 68.1013 29.6001 65.5401 27.3195 62.9818C27.2517 65.1892 27.231 67.3935 27.2635 69.6009C28.0069 70.1737 27.7798 71.7003 26.5908 71.7003C25.2986 71.7003 25.1452 69.9128 26.1217 69.4809C26.0922 67.3216 26.107 65.1622 26.1748 63.0058C24.1893 65.3751 22.2569 67.7894 20.3894 70.2487C20.5634 70.9145 20.2094 71.7423 19.3332 71.7423C17.864 71.7423 17.8669 69.4269 19.3332 69.4269C19.4187 69.4269 19.4984 69.4359 19.5692 69.4509C21.717 66.6287 23.9356 63.8606 26.2309 61.1613C26.2309 61.1583 26.2338 61.1583 26.2338 61.1553V59.6108C7.8626 59.2179 3.16875 39.4207 5.11001 37.1563C5.50535 36.6945 6.0541 36.5835 6.67365 36.6975L6.63825 36.9044C6.63825 36.9044 9.68881 45.9618 14.3502 49.6387C18.5278 52.9317 25.4992 53.0337 26.9035 53.0187C28.3049 53.0337 35.2793 52.9317 39.4569 49.6387C44.1183 45.9618 47.219 36.7694 47.219 36.7694L47.2396 36.6885C47.5199 36.7514 47.7766 36.8984 47.9949 37.1563C49.9126 39.4027 45.322 58.855 27.3697 59.5988Z"
                fill="#353A68"
                stroke="#353A68"
                stroke-width="1.5438"
                stroke-miterlimit="10"
              />
              <path
                d="M26.7921 59.6223C26.7092 59.6223 26.6263 59.6223 26.5464 59.6194"
                stroke="#353A68"
                stroke-width="1.5438"
                stroke-miterlimit="10"
              />
              <path
                d="M6.67067 36.7032C7.86553 36.9192 9.3318 37.9659 10.5296 38.9916C11.6832 39.9813 13.471 39.1685 13.4887 37.636C13.5536 31.9796 9.03088 25.5975 4.57009 18.7535C-0.843624 10.4549 2.62292 2.68113 10.1726 5.72524C16.9258 8.44245 24.8914 8.6134 26.4993 8.6224C26.5288 8.6224 26.5613 8.6224 26.5937 8.6224C26.7206 8.6224 26.7885 8.6224 26.7885 8.6224"
                stroke="#353A68"
                stroke-width="1.5438"
                stroke-miterlimit="10"
              />
              <path
                d="M27.1491 53.0186C27.1491 53.0186 27.0603 53.0249 26.8975 53.0249"
                stroke="#353A68"
                stroke-width="1.5438"
                stroke-miterlimit="10"
              />
              <path
                d="M26.5472 59.6194C26.4673 59.6223 26.3844 59.6223 26.3015 59.6223"
                stroke="#353A68"
                stroke-width="1.5438"
                stroke-miterlimit="10"
              />
              <path
                d="M47.2307 36.694C46.1096 36.4391 44.5873 37.5368 43.3423 38.6975C42.2212 39.7442 40.4009 38.9974 40.3448 37.4528C40.1501 31.8445 44.0946 25.5463 48.5259 18.7533C53.9396 10.4517 50.473 2.68094 42.9233 5.72205C36.1731 8.43926 28.2045 8.61021 26.5966 8.61921C26.5612 8.61921 26.5317 8.61921 26.5022 8.61921C26.3754 8.61921 26.3075 8.61921 26.3075 8.61921"
                stroke="#353A68"
                stroke-width="1.5438"
                stroke-miterlimit="10"
              />
              <path
                d="M26.8983 53.0249C26.7355 53.0249 26.6467 53.0186 26.6467 53.0186"
                stroke="#353A68"
                stroke-width="1.5438"
                stroke-miterlimit="10"
              />
              <path
                d="M11.45 7.71948L11.2198 24.3886L10.9927 7.71948H11.45Z"
                fill="#353A68"
              />
              <path
                d="M5.396 15.853L16.7515 16.084L5.396 16.3179V15.853Z"
                fill="#353A68"
              />
              <path
                d="M14.7866 10.9614C12.5356 14.3474 10.3967 17.8144 8.37573 21.3534C10.2639 17.7394 12.276 14.1885 14.4031 10.7095L14.7866 10.9614Z"
                fill="#353A68"
              />
              <path
                d="M7.63524 11.2703C10.1607 14.4403 12.6094 17.6764 14.9755 20.9694C12.4884 17.7694 9.92464 14.6353 7.28711 11.5672L7.63524 11.2703Z"
                fill="#353A68"
              />
              <path
                d="M5.75585 26.5L5.52868 35.1225L5.30151 26.5H5.75585Z"
                fill="#353A68"
              />
              <path
                d="M0.593018 30.5579L9.07795 30.7888L0.593018 31.0197V30.5579Z"
                fill="#353A68"
              />
              <path
                d="M7.89767 27.7176L3.20972 34.4807L7.51709 27.4597L7.89767 27.7176Z"
                fill="#353A68"
              />
              <path
                d="M2.8204 27.5015C4.67316 29.5709 6.47281 31.6883 8.21346 33.8536C6.35775 31.7902 4.44894 29.7808 2.49292 27.8224L2.8204 27.5015Z"
                fill="#353A68"
              />
              <path
                d="M5.26602 15.0945C4.09477 15.0945 4.09182 16.9479 5.26602 16.9479C6.43727 16.9449 6.44022 15.0945 5.26602 15.0945Z"
                fill="#353A68"
              />
              <path
                d="M11.1845 6.82568C10.0132 6.82568 10.0103 8.67915 11.1845 8.67915C12.3587 8.67615 12.3587 6.82568 11.1845 6.82568Z"
                fill="#353A68"
              />
              <path
                d="M16.8517 15.2231C15.6805 15.2231 15.6775 17.0766 16.8517 17.0766C18.023 17.0736 18.0259 15.2231 16.8517 15.2231Z"
                fill="#353A68"
              />
              <path
                d="M11.3112 23.2339C10.1399 23.2339 10.137 25.0873 11.3112 25.0873C12.4824 25.0873 12.4854 23.2339 11.3112 23.2339Z"
                fill="#353A68"
              />
              <path
                d="M42.7107 13.0967L42.4835 23.7466L42.2563 13.0967H42.7107Z"
                fill="#353A68"
              />
              <path
                d="M40.6278 15.886C42.1589 17.5655 43.6311 19.296 45.0472 21.0715C43.519 19.398 41.9347 17.7754 40.3032 16.2099L40.6278 15.886Z"
                fill="#353A68"
              />
              <path
                d="M44.3479 15.835C43.0379 17.5925 41.7782 19.389 40.5715 21.2275C41.6484 19.308 42.7842 17.4216 43.9761 15.5681L44.3479 15.835Z"
                fill="#353A68"
              />
              <path
                d="M40.3298 18.0784L44.7936 18.3093L40.3298 18.5402V18.0784Z"
                fill="#353A68"
              />
              <path
                d="M40.9642 20.4656C40.2325 20.4656 40.2295 21.6232 40.9642 21.6232C41.6958 21.6232 41.6988 20.4656 40.9642 20.4656Z"
                fill="#353A68"
              />
              <path
                d="M44.1917 15.0583C43.46 15.0583 43.4571 16.216 44.1917 16.216C44.9263 16.216 44.9263 15.0583 44.1917 15.0583Z"
                fill="#353A68"
              />
              <path
                d="M42.5778 12.647C41.8461 12.647 41.8432 13.8046 42.5778 13.8046C43.3095 13.8046 43.3124 12.647 42.5778 12.647Z"
                fill="#353A68"
              />
              <path
                d="M3.52568 33.7188C2.79402 33.7188 2.79107 34.8764 3.52568 34.8764C4.25735 34.8764 4.2603 33.7188 3.52568 33.7188Z"
                fill="#353A68"
              />
              <path
                d="M5.51983 34.5854C4.78816 34.5854 4.78521 35.7431 5.51983 35.7431C6.25149 35.7431 6.25149 34.5854 5.51983 34.5854Z"
                fill="#353A68"
              />
              <path
                d="M8.08379 33.4277C7.35213 33.4277 7.34918 34.5854 8.08379 34.5854C8.81545 34.5854 8.81545 33.4277 8.08379 33.4277Z"
                fill="#353A68"
              />
              <path
                d="M7.70317 26.8657C6.97151 26.8657 6.96856 28.0234 7.70317 28.0234C8.43484 28.0204 8.43779 26.8657 7.70317 26.8657Z"
                fill="#353A68"
              />
              <path
                d="M2.9561 27.3457C2.22444 27.3457 2.22149 28.5034 2.9561 28.5034C3.68777 28.5034 3.68777 27.3457 2.9561 27.3457Z"
                fill="#353A68"
              />
              <path
                d="M5.2603 22.6369C4.7263 22.6459 2.77324 22.8528 2.63163 25.5461V25.855C2.63163 25.783 2.62867 25.714 2.62867 25.648C2.62867 25.714 2.62572 25.783 2.62572 25.855V25.5461C2.48706 22.8588 0.536946 22.6429 0 22.6369C2.09763 22.5409 2.56672 20.2376 2.62572 19.8717V19.8237C2.62572 19.8237 2.62867 19.8327 2.62867 19.8447C2.63162 19.8327 2.63163 19.8237 2.63163 19.8237V19.8717C2.69358 20.2376 3.16267 22.5439 5.2603 22.6369Z"
                fill="#353A68"
              />
              <path
                d="M12.6477 35.7583C12.2878 35.7643 10.9601 35.9052 10.8657 37.7317V37.9416C10.8657 37.8937 10.8657 37.8457 10.8628 37.8007C10.8628 37.8457 10.8598 37.8937 10.8598 37.9416V37.7317C10.7654 35.9112 9.44371 35.7643 9.07788 35.7583C10.4999 35.6923 10.8185 34.1327 10.8598 33.8838V33.8508C10.8598 33.8508 10.8598 33.8568 10.8628 33.8658C10.8628 33.8568 10.8657 33.8508 10.8657 33.8508V33.8838C10.9041 34.1327 11.2227 35.6953 12.6477 35.7583Z"
                fill="#353A68"
              />
              <path
                d="M49.0569 30.4528C48.5229 30.4618 46.5699 30.6688 46.4283 33.362V33.6709C46.4283 33.5989 46.4253 33.5299 46.4253 33.464C46.4224 33.5299 46.4224 33.5989 46.4224 33.6709V33.362C46.2837 30.6748 44.3336 30.4588 43.7966 30.4528C45.8943 30.3569 46.3634 28.0535 46.4224 27.6876V27.6396C46.4224 27.6396 46.4253 27.6486 46.4253 27.6606C46.4283 27.6486 46.4283 27.6396 46.4283 27.6396V27.6876C46.4902 28.0535 46.9564 30.3599 49.0569 30.4528Z"
                fill="#353A68"
              />
              <path
                d="M49.9919 25.1445C49.632 25.1505 48.3044 25.2915 48.21 27.1179V27.3279C48.21 27.2799 48.21 27.2319 48.207 27.1869C48.207 27.2319 48.2041 27.2799 48.2041 27.3279V27.1179C48.1097 25.2975 46.788 25.1505 46.4221 25.1445C47.8441 25.0785 48.1628 23.519 48.2041 23.2701V23.2371C48.2041 23.2371 48.2041 23.2431 48.207 23.2521C48.207 23.2431 48.21 23.2371 48.21 23.2371V23.2701C48.2513 23.516 48.5699 25.0785 49.9919 25.1445Z"
                fill="#353A68"
              />
            </svg>

            <button
              className="ml-auto block xl:hidden "
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
            </button>
            <ul className="xl:flex hidden">
              <li className="pr-8  cursor-pointer relative">
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4  pr-2 ">
                    Bedroom
                  </a>
                  <div onClick={() => setIsList4(!isList4)} className="mt-2">
                    <Image
                      src="/dropdown.vector.png"
                      width={16}
                      height={16}
                      className=" my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList4 ? "  flex-col drop-shadow-xl" : "hidden"
                  } absolute z-20 bg-white p-6 w-32 mr-6`}
                >
                  <il className="py-4 text-gray-600 hover:text-rose-300">
                    Beds
                  </il>
                  <li className="pt-4 text-gray-600 hover:text-rose-300">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Bridal
                  </li>
                  <l className="text-gray-600 hover:text-rose-300">Chesters</l>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Dresser
                  </li>
                  <li className="text-gray-600 hover:text-rose-300">Shelves</li>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Side Tables
                  </li>
                  <li className="text-gray-600 hover:text-rose-300">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
              <li className="pr-8  cursor-pointer relative mx-4">
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4  pr-2 ">
                    Living Room
                  </a>
                  <div onClick={() => setIsList(!isList)} className="pt-2">
                    <Image
                      src="/dropdown.vector.png"
                      width={16}
                      height={16}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList ? "  flex-col  drop-shadow-xl" : "hidden "
                  } absolute z-20 bg-white p-6 w-32`}
                >
                  <il className="py-4 text-gray-600 hover:text-rose-300">
                    Beds
                  </il>
                  <li className="pt-4 text-gray-600 hover:text-rose-300">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Bridal
                  </li>
                  <l className="text-gray-600 hover:text-rose-300">Chesters</l>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Dresser
                  </li>
                  <li className="text-gray-600 hover:text-rose-300">Shelves</li>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Side Tables
                  </li>
                  <li className="text-gray-600 hover:text-rose-300">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
              <li className="pr-8  cursor-pointer relative">
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4  pr-2 ">
                    Dining & Kitchen{" "}
                  </a>
                  <div onClick={() => setIsList2(!isList2)} className="pt-2">
                    <Image
                      src="/dropdown.vector.png"
                      width={16}
                      height={16}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList2 ? "  flex-col drop-shadow-xl" : "hidden"
                  } absolute z-20 bg-white p-6 w-32`}
                >
                  <il className="py-4 text-gray-600 hover:text-rose-300">
                    Beds
                  </il>
                  <li className="pt-4 text-gray-600 hover:text-rose-300">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Bridal
                  </li>
                  <l className="text-gray-600 hover:text-rose-300">Chesters</l>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Dresser
                  </li>
                  <li className="text-gray-600 hover:text-rose-300">Shelves</li>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Side Tables
                  </li>
                  <li className="text-gray-600 hover:text-rose-300">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>

              <li className="  cursor-pointer relative">
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4  pr-2 ">
                    Office
                  </a>
                  <div onClick={() => setIsList3(!isList3)} className="pt-2">
                    <Image
                      src="/dropdown.vector.png"
                      width={16}
                      height={16}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList3 ? "  flex-col drop-shadow-xl" : "hidden"
                  }  p-6 absolute z-20 bg-white w-32`}
                >
                  <il className="py-4 text-gray-600 hover:text-rose-300">
                    Beds
                  </il>
                  <li className="pt-4 text-gray-600 hover:text-rose-300">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Bridal
                  </li>
                  <l className="text-gray-600 hover:text-rose-300">Chesters</l>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Dresser
                  </li>
                  <li className="text-gray-600 hover:text-rose-300">Shelves</li>
                  <li className="py-4 text-gray-600 hover:text-rose-300">
                    Side Tables
                  </li>
                  <li className="text-gray-600 hover:text-rose-300">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
            </ul>
            <ul
              className={`${
                showMenu ? " xl:hidden flex " : "hidden"
              } flex-col w-full px-8  rounded-xl my-6  `}
            >
              <li className="pr-8  cursor-pointer relative pb-4 pt-8">
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4  pr-2 ">
                    Bed Room
                  </a>
                  <div onClick={() => setIsList4(!isList4)} className="pt-2">
                    <Image
                      src="/dropdown.vector.png"
                      width={16}
                      height={16}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList4 ? "  flex-col " : "hidden"
                  }  z-20 bg-white p-6 `}
                >
                  <il className="py-4 text-gray-600  hover:text-rose-300 ">
                    Beds
                  </il>
                  <li className="pt-4 text-gray-600  hover:text-rose-300">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Bridal
                  </li>
                  <l className="text-gray-600">Chesters</l>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Dresser
                  </li>
                  <li className="text-gray-600  hover:text-rose-300">
                    Shelves
                  </li>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Side Tables
                  </li>
                  <li className="text-gray-600  hover:text-rose-300">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
              <li className="pr-8  cursor-pointer relative ">
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4  pr-2 ">
                    Living Room
                  </a>
                  <div onClick={() => setIsList(!isList)} className="pt-2">
                    <Image
                      src="/dropdown.vector.png"
                      width={18}
                      height={18}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList ? "  flex-col " : "hidden"
                  } z-20 bg-white p-6 `}
                >
                  <il className="py-4 text-gray-600  hover:text-rose-300 ">
                    Beds
                  </il>
                  <li className="pt-4 text-gray-600  hover:text-rose-300">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Bridal
                  </li>
                  <l className="text-gray-600  hover:text-rose-300">Chesters</l>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Dresser
                  </li>
                  <li className="text-gray-600  hover:text-rose-300">
                    Shelves
                  </li>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Side Tables
                  </li>
                  <li className="text-gray-600  hover:text-rose-300">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
              <li className="pr-8  cursor-pointer relative py-4">
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4  pr-2 ">
                    Dining & Kitchen{" "}
                  </a>
                  <div onClick={() => setIsList2(!isList2)} className="pt-2">
                    <Image
                      src="/dropdown.vector.png"
                      width={18}
                      height={18}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList2 ? "  flex-col " : "hidden"
                  } z-20 bg-white p-6`}
                >
                  <il className="py-4 text-gray-600  hover:text-rose-300 ">
                    Beds
                  </il>
                  <li className="pt-4 text-gray-600  hover:text-rose-300">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Bridal
                  </li>
                  <l className="text-gray-600  hover:text-rose-300">Chesters</l>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Dresser
                  </li>
                  <li className="text-gray-600  hover:text-rose-300">
                    Shelves
                  </li>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Side Tables
                  </li>
                  <li className="text-gray-600  hover:text-rose-300">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>

              <li className="pr-8  cursor-pointer relative pb-8">
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4  pr-2 ">
                    Office
                  </a>
                  <div onClick={() => setIsList3(!isList3)} className="pt-2">
                    <Image
                      src="/dropdown.vector.png"
                      width={18}
                      height={18}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList3 ? "  flex-col " : "hidden"
                  }  p-6  z-20 bg-white`}
                >
                  <il className="py-4 text-gray-600  hover:text-rose-300">
                    Beds
                  </il>
                  <li className="pt-4 text-gray-600  hover:text-rose-300">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Bridal
                  </li>
                  <l className="text-gray-600  hover:text-rose-300">Chesters</l>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Dresser
                  </li>
                  <li className="text-gray-600  hover:text-rose-300">
                    Shelves
                  </li>
                  <li className="py-4 text-gray-600  hover:text-rose-300">
                    Side Tables
                  </li>
                  <li className="text-gray-600  hover:text-rose-300">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
            </ul>
            <div className="xl:flex hidden">
              <div>
                <Image
                  className="cursor-pointer"
                  src="/Group 6.png"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex pl-8">
                <div>
                  <Image
                    className="cursor-pointer"
                    src="/Group 260.png"
                    width={20}
                    height={20}
                    onClick={() => setHide1(true)}
                  />
                </div>
                <div>
                  <p
                    id="count"
                    className="text-gray-800 cursor-pointer  leading-none -mt-2 ml-1"
                  >
                    {count12}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {hide1 && (
          <div className="flex px-20  py-40 gap-32">
            <div className=" xl:w-5/12 2xl:w-full ">
              <div>
                <p className=" w-5/5 text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800">
                  Dining Chair Rocco in Bottle Green Velvet
                </p>
                <div className="items-center flex my-5 text-center gap-x-6">
                  <div className="flex gap-x-4  items-center my-auto text-center">
                    <div className="mt-2">
                      <Image src="/Vectorstar.png" width={22} height={21} />
                    </div>
                    <div className="mt-2">
                      <Image src="/Vectorstar.png" width={22} height={21} />
                    </div>
                    <div className="mt-2">
                      <Image src="/Vectorstar.png" width={22} height={21} />
                    </div>
                    <div className="mt-2">
                      <Image src="/Vectorstar.png" width={22} height={21} />
                    </div>
                    <div className="mt-2">
                      <Image src="/Vectorstar.png" width={22} height={21} />
                    </div>
                  </div>
                  <p className="font-medium text-2xl my-auto text-center">
                    (0)
                  </p>
                </div>
                <p className="text-4xl  font-semibold text-gray-800 pb-12">
                  $259
                </p>
              </div>
              <ul>
                <li>
                  <div className="flex">
                    <p className="font-medium text-xl pr-4 mt-1 text-gray-600">
                      Vendor:
                    </p>
                    <p className="text-2xl font-medium text-gray-800 mt-1">
                      Luxe
                    </p>
                  </div>
                </li>
                <li className="py-6">
                  <div className="flex">
                    <p className="font-medium text-xl pr-4 text-gray-600">
                      Type:
                    </p>
                    <p className="text-2xl font-medium text-gray-800">Wooden</p>
                  </div>
                </li>
                <li>
                  <div className="flex pb-6">
                    <p className="font-medium text-xl pr-4 text-gray-600">
                      Model:
                    </p>
                    <p className="text-2xl font-medium text-gray-800">WD1234</p>
                  </div>
                </li>
                <li>
                  <div className="flex pb-6">
                    <p className="font-medium text-xl pr-4 text-gray-600">
                      Status:
                    </p>
                    <p className="text-2xl font-medium text-gray-800">
                      Availabe
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex gap-6">
                <div className=" border border-gray-300 flex justify-center flex-row justify-between py-5 px-6   items-center w-28 bg-yellow-50 rounded-xl">
                  <p
                    id="count"
                    className="text-gray-800 cursor-pointer  leading-none font-medium text-2xl"
                  >
                    {count1}
                  </p>
                  <div className="flex flex-col gap-y-4 }">
                    <Image
                      src="/upvector.png"
                      width={12}
                      height={7}
                      className="rounded-xl"
                      onClick={() => setCount1(count1 + 1)}
                    />
                    <Image
                      src="/down.png"
                      width={12}
                      height={7}
                      className="rounded-xl mt-4"
                      onClick={() => setCount1(count1 - 1 < 0)}
                    />
                  </div>
                </div>
                <button className=" py-5 px-6 text-white bg-gray-800 rounded-xl hover:bg-gray-900 text-2xl font--medium">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="xl:w-5/12 2xl:w-full  mx-auto sm:mt-0 mt-8">
              <Image
                src="/Group 307.png"
                width={448}
                height={446}
                className="rounded-xl"
              />
            </div>
            <button
              className="text-gray-800 absolute right-5 top-50 "
              onClick={() => setHide1(false)}
            >
              <Image
                src="/crossvector.png"
                width={24}
                height={24}
                className="rounded-xl group-hover:opacity-40 mx-auto"
              />
            </button>
          </div>
        )}

        <div className=" bg-pink-100  ">
          <div className="container mx-auto flex flex-col  justify-center items-center  lg:flex-row xl:flex-row 2xl:flex-row gap-32 pt-20 px-4 lg:px-20 xl:px-20 2xl:px-20">
            <div className="w-11/12 ">
              <h1 className=" text-gray-900 px-15 w-6/5 text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800">
                The Glory Cambalk Furniture
              </h1>
              <h3 className="text-lg text-gray-700 py-5  xl:w-full 2xl:w-full">
                Avoid the hassle of physically visiting a store and order your
                favorite product with a few clicks online for the best wood
                furniture design. Free delivery is available.
              </h3>
              <button className="hidden lg:block xl:block 2xl:block text-white rounded-xl bold w-48 h-20 bg-gray-800 text-2xl font-bold hover:bg-gray-900 focus:bg-gray-900">
                Shop Now
              </button>
              <button className="block lg:hidden xl:hidden 2xl:hidden text-white rounded-xl bold w-full h-12 bg-gray-800 text-2xl font-bold hover:bg-gray-900 focus:bg-gray-900">
                Shop Now
              </button>
            </div>
            <div className="w-11/12">
              <Image src="/image 5.png" width={549} height={491} />
            </div>
          </div>
        </div>
        <div className="container justify-content-center mx-auto">
          <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row pt-12 pt-12 ">
            <div className="w-8/12 ">
              <div className="font-bold text-4xl text-center mt-40 text-gray-800">
                Why Choose Us?
              </div>
            </div>
            <div className="w-11/12 mt-24 lg:mt-2 xl:mt-2 2xl:mt-2 ">
              <div className=" ">
                <div className="rounded-full pt-12  bg-teal-100 w-52 h-52 mx-auto  rounded-full outline-offset-4 outline-2 outline-dashed outline-teal-200 text-center justify-content-center ">
                  <Image
                    className="mx-auto "
                    src="/Group 297.png"
                    width={22}
                    height={18}
                  />
                  <h4 className="text-md text-gray-800 font-bold ">
                    SAFE SHIPPING
                  </h4>
                  <h4 className="text-md text-gray-700 font-semibold w-9/12 ml-6 ">
                    In all major cities across the country
                  </h4>
                </div>
              </div>
              <div className="w-9/12 ml-16 md:ml-20 lg:ml-20 xl:ml-20 2xl:ml-24 pl-6">
                <div className="flex flex-col gap-2 md:gap-24 lg:gap-24 xl:gap-24 2xl:gap-0 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mx-auto">
                  <div className="rounded-full mt-12 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-1 pt-12 bg-rose-50 w-52 h-52 mx-auto outline-offset-4 outline-2 outline-dashed outline-rose-400 text-center justify-content-center">
                    <Image
                      className="mx-auto "
                      src="/Group 296.png"
                      width={10}
                      height={18}
                    />
                    <h4 className="text-md text-gray-800 font-bold ">
                      COMPETITIVE PRICES
                    </h4>
                    <h4 className="text-md text-gray-700 font-semibold w-4/5 ml-5 ">
                      Quality with affordability ensured
                    </h4>
                  </div>
                  <div className="rounded-full  mt-12 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-1 pt-12 bg-yellow-50 text-center mx-auto w-52 h-52 outline-offset-4 outline-2 outline-dashed outline-orange-400 text-center justify-content-center">
                    <Image
                      className="mx-auto "
                      src="/Group 298.png"
                      width={18}
                      height={18}
                    />
                    <h4 className="text-md text-gray-800 font-bold ">
                      CUSTOMER SUPPORT
                    </h4>
                    <h4 className="text-md text-gray-700 font-semibold ">
                      Call us anytime:111-111-1111
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-12 mb-12">
            <h2 className="text-4xl font-bold mb-12 text-gray-800">
              New Arrivals
            </h2>
            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row mx-auto gap-8">
              <div className="w-11/12 mx-auto">
                <Image
                  className=" cursor-pointer"
                  src="/Rectangle 7.png"
                  width={549}
                  height={600}
                />
                <div className="flex mt-2">
                  <div className=" text-gray-899 text-lg">Sofa</div>
                  <div className="ml-auto text-gray-800 font-bold text-lg">
                    $220
                  </div>
                </div>
              </div>
              <div className="w-11/12 mx-auto">
                <Image
                  className=" cursor-pointer"
                  src="/Rectangle 8.png"
                  width={549}
                  height={600}
                />
                <div className="flex mt-2">
                  <div className=" text-gray-899 text-lg">Lamp</div>
                  <div className="ml-auto text-gray-800 font-bold text-lg">
                    $90
                  </div>
                </div>
              </div>
              <div className="w-11/12 mx-auto">
                <Image
                  className=" cursor-pointer"
                  src="/Rectangle 9.png"
                  width={549}
                  height={600}
                />
                <div className="flex mt-2">
                  <div className=" text-gray-899 text-lg">Dining Table</div>
                  <div className="ml-auto text-gray-800 font-bold text-lg">
                    $250
                  </div>
                </div>
              </div>
              <div className="w-11/12 mx-auto">
                <Image
                  className=" cursor-pointer"
                  src="/Rectangle 15.png"
                  width={549}
                  height={600}
                />
                <div className="flex mt-2">
                  <div className=" text-gray-899 text-lg">Office Chair</div>
                  <div className="ml-auto text-gray-800 font-bold text-lg">
                    $320
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-12 mx-auto">
          <div className="  flex flex-col lg:flex-row xl:flex-row 2xl:flex-row  gap-5  mx-auto">
            <div className="w-11/12  ">
              <h3 className="text-gray-800 mt-3  lg:mt-32 xl:mt-32 2xl:mt-32 pl-3 lg:pl-24 xl:pl-24 2xl:pl-24 font-bold w-10/12 text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                Dining Chair Rocco in Bottle Green Velvet
              </h3>
              <button className="hidden lg:block xl:block 2xl:block ml-24 mt-8 text-white rounded-xl bold w-36 h-16 bg-gray-800 text-2xl font-bold hover:bg-gray-900 focus:bg-gray-900">
                Explore
              </button>
              <button className="block lg:hidden xl:hidden 2xl:hidden h-12 mt-8 text-white rounded-xl bold  w-full bg-gray-800 text-2xl font-bold hover:bg-gray-900 focus:bg-gray-900">
                Explore
              </button>
            </div>
            <div className="w-11/12 flex justify-center items-center">
              <Image
                className=""
                src="/Group 307.png"
                width={448}
                height={446}
              />
            </div>
          </div>
        </div>

        <div className="px-20 mb-28 relative">
          <p className="font-semibold  pb-16 text-3xl text-gray-800 pr-4">
            40% off Products
          </p>
          {hide && (
            <div
              className="py-12 mx-auto dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 31.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide(false)}
                >
                  <Image
                    src="/crossvector.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide2 && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 32.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide2(false)}
                >
                  <Image
                    src="/crossvector.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide3 && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 33.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide3(false)}
                >
                  <Image
                    src="/crossvector.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide4 && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 23.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide4(false)}
                >
                  <Image
                    src="/crossvector.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide5 && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 18.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide5(false)}
                >
                  <Image
                    src="/crossvector.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide6 && (
            <div
              className=" py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 30.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide6(false)}
                >
                  <Image
                    src="/crossvector.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-8">
            <div>
              <div className=" px-10 mb-8 bg-yellow-50 relative rounded-xl">
                <div className="mb-8 ">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_231)">
                      <path
                        d="M2 1H98V73.5854L50 97L2 73.5854V1Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_231"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_231"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_231"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <p className="text-xl font-medium absolute top-6 left-15 pl-7">
                    Beds
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}   width={325}  mx-auto flex justify-center relative "
                >
                  <div
                    className="  relative mb-12 
                      height={642} flex"
                  >
                    <Image
                      src="/Rectangle 18.png"
                      width={325}
                      height={642}
                      className="rounded-xl mx-auto "
                    />
                    <div className="absolute top-0 flex justify-center items-center mx-auto ease-in-out transition duration-700 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md font-semibold hover:bg-teal-50"
                      onClick={() => setHide5(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md  font-semibold hover:bg-teal-50"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" px-10 bg-red-50 relative  rounded-xl">
                <div className="mb-8">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_231)">
                      <path
                        d="M2 1H98V73.5854L50 97L2 73.5854V1Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_231"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_231"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_231"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <p className="text-xl font-medium absolute top-6 left-15 pl-7">
                    Sofas
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}     width={325}  mx-auto flex justify-center relative  "
                >
                  <div
                    className="  relative 
                      height={642} flex mb-12"
                  >
                    <Image
                      src="/Rectangle 30.png"
                      width={325}
                      height={237}
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 flex justify-center items-center mx-auto ease-in-out transition duration-700 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  font-semibold hover:bg-teal-50"
                      onClick={() => setHide6(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md  font-semibold hover:bg-teal-50"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-8 px-10 bg-blue-50 relative  rounded-xl">
                <div className="mb-8">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_231)">
                      <path
                        d="M2 1H98V73.5854L50 97L2 73.5854V1Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_231"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_231"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_231"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <p className="text-xl absolute top-6 left-15 pl-5 font-semibold ">
                    Dining
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}     width={325}  mx-auto flex justify-center relative  "
                >
                  <div
                    className="  relative mb-12
                      height={642} flex"
                  >
                    <Image
                      src="/Rectangle 23.png"
                      width={326}
                      height={237}
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 flex justify-center items-center mx-auto ease-in-out transition duration-700 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md   font-semibold hover:bg-teal-50"
                      onClick={() => setHide4(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md  font-semibold hover:bg-teal-50"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" px-10 bg-fuchsia-50 relative  rounded-xl">
                <div className="mb-8">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_231)">
                      <path
                        d="M2 1H98V73.5854L50 97L2 73.5854V1Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_231"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_231"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_231"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <p className="text-xl font-medium absolute top-6 left-16">
                    Closet
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}     width={325}  mx-auto flex justify-center relative  "
                >
                  <div
                    className="  relative 
                      height={642} flex mb-12"
                  >
                    <Image
                      src="/Rectangle 32.png"
                      width={326}
                      height={642}
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 flex justify-center items-center mx-auto ease-in-out transition duration-700 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md   font-semibold hover:bg-teal-50"
                      onClick={() => setHide2(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md  font-semibold hover:bg-teal-50"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" px-10  mb-8 bg-red-50 relative  rounded-xl">
                <div className="mb-8">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_231)">
                      <path
                        d="M2 1H98V73.5854L50 97L2 73.5854V1Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_231"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_231"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_231"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <p className="text-xl font-medium absolute top-6 left-16">
                    Chairs
                  </p>
                </div>

                <div
                  className=" group 
                    height={642}     width={325}   mx-auto flex justify-center relative "
                >
                  <div
                    className="  relative mb-12 
                      height={642} flex"
                  >
                    <Image
                      src="/Rectangle 31.png"
                      width={325}
                      height={642}
                      className="rounded-xl "
                    />
                    <div className="absolute top-0 flex justify-center items-center mx-auto ease-in-out transition duration-700 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  font-semibold hover:bg-teal-50 "
                      onClick={() => setHide(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md  font-semibold hover:bg-teal-50"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className=" px-10 bg-red-50 relative  rounded-xl">
                <div className="mb-8">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_231)">
                      <path
                        d="M2 1H98V73.5854L50 97L2 73.5854V1Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_231"
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_231"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_231"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <p className="text-xl font-medium absolute top-6 left-16">
                    Tables
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}     width={325} mx-auto flex justify-center relative "
                >
                  <div
                    className="  relative 
                      height={642} flex mb-12"
                  >
                    <Image
                      src="/Rectangle 33.png"
                      width={325}
                      height={237}
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 flex justify-center items-center mx-auto ease-in-out transition duration-700 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-teal-50 font-semibold"
                      onClick={() => setHide3(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-teal-50 font-semibold"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 mb-8">
          <h2 className="font-bold text-3xl mt-4 mb-12">Top Selling Items</h2>
          <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-24">
            <div className="w-11/12">
              <Image src="/Rectangle 13.png" width={624} height={400} />
            </div>
            <div className="w-11/12">
              <h1 className="text-4xl font-bold mt-1 lg:mt-28 xl:mt-28 2xl:mt-28 text-gray-800  w-7/12">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-xl mt-2 text-gray-700 font-normal w-6/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <button className=" text-white rounded-xl  w-44 h-16 bg-gray-800 text-xl mt-4 hover:bg-gray-900 focus:bg-gray-900">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-24 mt-12">
            <div className="w-11/12">
              <h1 className="text-4xl text-gray-800 font-bold mt-12 lg:mt-28 xl:mt-28 2xl:mt-28 w-7/12">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-xl mt-2 text-gray-700 font-normal w-6/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <button className=" text-white rounded-xl  w-44 h-16 bg-gray-800 text-xl mt-4 hover:bg-gray-900 focus:bg-gray-900">
                Learn More
              </button>
            </div>
            <div className="w-11/12">
              <Image src="/Rectangle 14.png" width={624} height={400} />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5  gap-4 justify-around ml-24 mt-24">
            <div className="w-11/12">
              <Image
                src="/Californiasfurnitureinstallation Logo.png"
                width={120}
                height={70}
              />
            </div>
            <div className="w-11/12">
              <Image src="/U.G logo.png" width={120} height={70} />
            </div>
            <div className="w-11/12">
              <svg
                width="99"
                height="48"
                viewBox="0 0 99 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.0331 17.7127H35.5698V0H63.0992V17.7127H60.6838V2.08212H37.9853V15.6012H54.0331"
                  fill="url(#paint0_linear_1_311)"
                />
                <path
                  d="M4.73162 31.4662C2.01838 31.4662 0 30.0879 0 27.0087V22.1113H2.11765V26.9501C2.11765 28.9149 3.07721 29.8826 4.76471 29.8826C6.45221 29.8826 7.41177 28.9149 7.41177 26.9501V22.1113H9.46324V27.0087C9.43015 30.0879 7.44485 31.4662 4.73162 31.4662ZM13.4669 27.6245V31.2023H11.4816V24.6627H13.3015L13.4007 25.865C13.8309 25.1025 14.9228 24.4867 16.1471 24.4867V26.2169C14.7904 25.8943 13.4669 26.5102 13.4669 27.6245ZM21.9044 31.4075C20.8456 31.4075 19.7537 30.9677 19.1581 30.1759L19.0919 31.2316H17.3051V22.1113H19.2904V25.5424C19.9191 24.8386 20.9449 24.4574 21.9375 24.4574C23.9559 24.4574 25.4118 25.953 25.4118 27.9178C25.4118 29.8826 23.9228 31.4075 21.9044 31.4075ZM21.3088 25.777C20.1507 25.777 19.1912 26.5688 19.1912 27.9471C19.1912 29.2961 20.1507 30.1172 21.3088 30.1172C22.4669 30.1172 23.4265 29.3254 23.4265 27.9471C23.3934 26.5688 22.4669 25.777 21.3088 25.777ZM32.8235 31.2316L32.7574 30.1759C32.1287 30.9677 31.0368 31.4075 30.011 31.4075C27.9927 31.4075 26.5368 29.9119 26.5368 27.9471C26.5368 25.9823 28.0257 24.4867 30.011 24.4867C31.0699 24.4867 32.1618 24.9266 32.7574 25.7184L32.8235 24.6627H34.6103V31.2316H32.8235ZM30.6066 25.777C29.4485 25.777 28.489 26.5688 28.489 27.9471C28.489 29.2961 29.4485 30.1172 30.6066 30.1172C31.7647 30.1172 32.7243 29.3254 32.7243 27.9471C32.6912 26.5688 31.7647 25.777 30.6066 25.777ZM41.9228 31.2316V27.5952C41.9228 26.3049 41.4265 25.8943 40.5 25.8943C39.5404 25.8943 38.5147 26.6568 38.5147 27.5659V31.2316H36.5294V24.6627H38.3493L38.4485 25.865C38.9449 25.0146 40.0699 24.4574 41.1949 24.4574C43.1801 24.4574 43.9081 25.6597 43.9081 27.302V31.2023H41.9228V31.2316ZM49.3015 31.2316V22.1113H51.386V29.7946H55.9853V31.2316H49.3015ZM63 31.2316L62.9338 30.1759C62.3051 30.9677 61.2132 31.4075 60.1875 31.4075C58.1691 31.4075 56.7132 29.9119 56.7132 27.9471C56.7132 25.9823 58.2022 24.4867 60.1875 24.4867C61.2463 24.4867 62.3382 24.9266 62.9338 25.7184L63 24.6627H64.7868V31.2316H63ZM60.7831 25.777C59.625 25.777 58.6654 26.5688 58.6654 27.9471C58.6654 29.2961 59.625 30.1172 60.7831 30.1172C61.9412 30.1172 62.9007 29.3254 62.9007 27.9471C62.9007 26.5688 61.9412 25.777 60.7831 25.777ZM72.6287 31.2316L72.5625 30.1759C71.9338 30.9677 70.8419 31.4075 69.8162 31.4075C67.7978 31.4075 66.3419 29.9119 66.3419 27.9471C66.3419 25.9823 67.8309 24.4867 69.8162 24.4867C70.8088 24.4867 71.8346 24.8386 72.4632 25.5718V22.1113H74.4485V31.2316H72.6287ZM70.4118 25.777C69.2537 25.777 68.2941 26.5688 68.2941 27.9471C68.2941 29.2961 69.2537 30.1172 70.4118 30.1172C71.5699 30.1172 72.5294 29.3254 72.5294 27.9471C72.5294 26.5688 71.6029 25.777 70.4118 25.777ZM82.2904 31.2316L82.2243 30.1759C81.5956 30.9677 80.5037 31.4075 79.4779 31.4075C77.4596 31.4075 76.0037 29.9119 76.0037 27.9471C76.0037 25.9823 77.4927 24.4867 79.4779 24.4867C80.4706 24.4867 81.4963 24.8386 82.125 25.5718V22.1113H84.1103V31.2316H82.2904ZM80.0735 25.777C78.9154 25.777 77.9559 26.5688 77.9559 27.9471C77.9559 29.2961 78.9154 30.1172 80.0735 30.1172C81.2316 30.1172 82.1912 29.3254 82.1912 27.9471C82.1912 26.5688 81.2316 25.777 80.0735 25.777ZM92.5478 27.9765H87.6176C87.5515 28.9735 88.1471 30.1172 90.1324 30.1172C90.9596 30.1172 91.9522 29.7946 92.5478 29.3548V30.6451C91.8529 31.1436 90.761 31.4075 89.5368 31.4075C87.2537 31.4075 85.6654 29.9413 85.6654 27.8885C85.6654 25.777 87.4853 24.4574 89.4044 24.4574C91.2904 24.4574 92.7132 25.5131 92.7132 27.0674C92.6471 27.3606 92.614 27.7418 92.5478 27.9765ZM89.4044 25.6011C88.5772 25.6011 87.8493 26.041 87.6838 27.038H90.8603C91.0257 26.2462 90.4301 25.6011 89.4044 25.6011ZM96.3199 27.6245V31.2023H94.3346V24.6627H96.1544L96.2537 25.865C96.6838 25.1025 97.7757 24.4867 99 24.4867V26.2169C97.6434 25.8943 96.3199 26.5102 96.3199 27.6245ZM18.364 39.7654C19.0588 39.7654 19.125 39.6481 19.125 38.9149V36.5102C19.125 35.7771 19.0588 35.6598 18.364 35.6598V35.5131H20.5147V35.6598C19.8199 35.6598 19.7537 35.7771 19.7537 36.5102V38.7976C19.7537 39.5307 19.8199 39.6481 20.5147 39.6481H21.0772C21.8051 39.6481 21.8713 39.4428 22.0037 39.0909L22.0368 38.9442H22.2022L22.136 39.912H18.364V39.7654ZM24.3529 38.2991C24.3529 37.302 25.1471 36.6275 25.9743 36.6275C26.7684 36.6275 27.2978 37.126 27.2978 37.8005C27.2978 37.9178 27.2647 38.0058 27.2647 38.0938H25.0147V38.3284C25.0147 39.0029 25.2463 39.7067 26.2059 39.7067C26.6029 39.7067 27 39.5014 27.2647 39.2668L27.4301 39.4428C27.1324 39.7653 26.7022 40 26.0404 40C24.9816 40 24.3529 39.2668 24.3529 38.2991ZM26.7022 37.8005C26.7022 37.7419 26.7353 37.6832 26.7353 37.5953C26.7353 37.214 26.5368 36.9208 26.0404 36.9208C25.5772 36.9208 25.2463 37.214 25.114 37.8005H26.7022ZM30.2426 39.0615V36.9794H29.7132V36.7741C30.2757 36.6568 30.4412 36.3343 30.5074 35.7771H30.8382V36.7155H31.5993V36.9794H30.8382V39.0615C30.8382 39.4721 30.9044 39.6481 31.2022 39.6481C31.4007 39.6481 31.5331 39.5601 31.7316 39.3841L31.8971 39.5307C31.6324 39.824 31.3677 40 31.0037 40C30.4743 40 30.2426 39.736 30.2426 39.0615ZM34.3125 36.8328C34.6103 36.5395 34.7096 36.3343 34.7757 36.041H34.7096C34.511 36.041 34.3125 35.865 34.3125 35.6891C34.3125 35.5131 34.511 35.3372 34.7096 35.3372C34.9081 35.3372 35.1397 35.4838 35.1397 35.7771C35.1397 36.0996 34.9081 36.5982 34.4118 36.8914L34.3125 36.8328ZM37.3897 38.8269H37.5551C37.5882 39.2375 38.0184 39.7067 38.7132 39.7067C39.1434 39.7067 39.3419 39.4721 39.3419 39.1788C39.3419 38.9442 39.1434 38.7683 38.7132 38.563L38.1507 38.2991C37.7537 38.1231 37.489 37.8299 37.489 37.4193C37.489 36.9208 37.9853 36.5982 38.5809 36.5982C39.0441 36.5982 39.3088 36.7741 39.4081 36.8621C39.4743 36.8035 39.5074 36.6862 39.5074 36.6275H39.6397V37.5073H39.4743C39.4412 37.126 39.1103 36.8621 38.614 36.8621C38.1838 36.8621 38.0184 37.0967 38.0184 37.3313C38.0184 37.5659 38.25 37.7419 38.6471 37.9178L39.1434 38.1231C39.6066 38.3284 39.8713 38.5923 39.8713 39.0322C39.8713 39.5894 39.375 39.9706 38.6801 39.9706C38.3162 39.9706 37.9191 39.824 37.7206 39.6187C37.6213 39.7067 37.5551 39.824 37.5551 39.9413H37.4228V38.8269H37.3897ZM45.7279 37.6832C45.7279 36.3929 46.6544 35.3372 47.9779 35.3372C48.5735 35.3372 49.0699 35.5131 49.4007 35.865C49.5 35.7771 49.5993 35.6891 49.6324 35.5131H49.7978V37.0381H49.5993C49.3676 36.0703 48.8382 35.6304 48.0441 35.6304C46.8199 35.6304 46.4559 36.7448 46.4559 37.6539C46.4559 38.563 46.8199 39.6774 48.0441 39.6774C48.8382 39.6774 49.3676 39.2082 49.5993 38.2697H49.7647V39.7947H49.5993C49.5662 39.6187 49.4669 39.5014 49.3676 39.4428C49.0368 39.7947 48.5404 39.9706 47.9449 39.9706C46.6544 40.0293 45.7279 38.9736 45.7279 37.6832ZM52.2794 39.7654C52.8419 39.7654 52.9081 39.6481 52.9081 38.9149V37.8299C52.9081 37.0967 52.8419 36.9794 52.2794 36.9794V36.8328L53.3382 36.6568C53.4044 36.7448 53.5037 37.0674 53.5037 37.3607C53.6691 36.9794 54 36.6862 54.3971 36.6862C54.9596 36.6862 55.0919 37.0381 55.0919 37.214C55.0919 37.39 55.0257 37.5953 54.7279 37.5953C54.5625 37.5953 54.4301 37.4486 54.4301 37.302C54.4301 37.126 54.364 36.9794 54.1324 36.9794C53.9007 36.9794 53.4706 37.39 53.4706 38.0938V38.9442C53.4706 39.6774 53.5368 39.7947 54.0993 39.7947V39.9413H52.2132V39.7654H52.2794ZM57.2757 38.2991C57.2757 37.302 58.0699 36.6275 58.8971 36.6275C59.6912 36.6275 60.2206 37.126 60.2206 37.8005C60.2206 37.9178 60.1875 38.0058 60.1875 38.0938H57.9375V38.3284C57.9375 39.0029 58.1691 39.7067 59.1287 39.7067C59.5257 39.7067 59.9228 39.5014 60.1875 39.2668L60.3529 39.4428C60.0551 39.7653 59.625 40 58.9632 40C57.9044 40 57.2757 39.2668 57.2757 38.2991ZM59.5919 37.8005V37.5953C59.5919 37.214 59.3934 36.9208 58.8971 36.9208C58.4338 36.9208 58.1029 37.214 57.9706 37.8005H59.5919ZM62.7353 39.2082C62.7353 38.475 63.5956 38.1231 64.7868 37.9472V37.7419C64.7868 37.126 64.6213 36.9208 64.1581 36.9208C63.8934 36.9208 63.5294 37.0674 63.5294 37.3607C63.5294 37.5073 63.3971 37.6246 63.2316 37.6246C63.0662 37.6246 62.9338 37.5073 62.9338 37.3607C62.9338 37.0087 63.5294 36.6862 64.1581 36.6862C65.0846 36.6862 65.4154 37.0674 65.4154 37.7712V39.4134C65.4154 39.6187 65.4816 39.736 65.6471 39.736C65.7463 39.736 65.8456 39.6774 65.9118 39.6187L66.0441 39.7654C65.8787 39.9413 65.614 40 65.4154 40C65.0515 40 64.9191 39.7947 64.8529 39.5014C64.3897 39.8827 64.125 40 63.7279 40C63.0993 39.9706 62.7353 39.6481 62.7353 39.2082ZM64.8199 39.2375V38.1524C63.7941 38.3284 63.3971 38.6803 63.3971 39.1202C63.3971 39.4428 63.5956 39.6187 63.9265 39.6187C64.125 39.648 64.3566 39.5894 64.8199 39.2375ZM68.6581 39.0615V36.9794H68.1287V36.7741C68.6912 36.6568 68.8566 36.3343 68.9228 35.7771H69.2537V36.7155H70.0147V36.9794H69.2537V39.0615C69.2537 39.4721 69.3199 39.6481 69.6176 39.6481C69.8162 39.6481 69.9485 39.5601 70.1471 39.3841L70.3125 39.5307C70.0478 39.824 69.7831 40 69.4191 40C68.8897 40 68.6581 39.736 68.6581 39.0615ZM72.5294 38.2991C72.5294 37.302 73.3235 36.6275 74.1507 36.6275C74.9449 36.6275 75.4743 37.126 75.4743 37.8005C75.4743 37.9178 75.4412 38.0058 75.4412 38.0938H73.1912V38.3284C73.1912 39.0029 73.4228 39.7067 74.3824 39.7067C74.7794 39.7067 75.1765 39.5014 75.4412 39.2668L75.6066 39.4428C75.3088 39.7653 74.8787 40 74.2169 40C73.1581 40 72.5294 39.2668 72.5294 38.2991ZM74.8456 37.8005V37.5953C74.8456 37.214 74.6471 36.9208 74.1507 36.9208C73.6875 36.9208 73.3566 37.214 73.2243 37.8005H74.8456Z"
                  fill="#0A3A54"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_311"
                    x1="35.5853"
                    y1="8.86184"
                    x2="63.0582"
                    y2="8.86184"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EC8523" />
                    <stop offset="0.35" stop-color="#ED7745" />
                    <stop offset="0.46" stop-color="#EC7046" />
                    <stop offset="0.79" stop-color="#E95D48" />
                    <stop offset="1" stop-color="#E85448" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="w-11/12">
              <Image src="/Furniture Today Logo.png" width={120} height={70} />
            </div>
            <div className="w-11/12">
              <svg
                width="99"
                height="40"
                viewBox="0 0 99 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.57358 20.059H2.12458V2.24189H0V39.351H2.12458V22.5959H5.57358V39.351H7.67057V2.24189H5.57358V20.059ZM12.5957 12.2419C10.416 12.2419 8.89841 16.5192 8.89841 26.0472C8.89841 35.8112 10.5401 39.9705 12.5957 39.9705C14.5686 39.9705 16.2655 36.0177 16.2655 26.0472C16.2655 16.4012 14.7065 12.2419 12.5957 12.2419ZM12.5957 38.2596C11.5748 38.2596 11.1058 35.4867 11.1058 26.1062C11.1058 16.4012 11.6162 13.8938 12.5681 13.8938C13.5753 13.8938 14.0581 16.6667 14.0581 26.0472C14.0581 35.7522 13.5477 38.2596 12.5957 38.2596ZM47.8859 20.059C49.0999 18.8791 50.2036 16.2242 50.2036 11.5634C50.2036 5.13274 48.686 2.24189 46.5339 2.24189H42.9607V39.351H46.4235C48.893 39.351 50.5347 36.3127 50.5347 29.0265C50.5209 23.8938 49.3896 21.1504 47.8859 20.059ZM45.0853 4.45428H45.913C47.1685 4.45428 47.9686 5.66372 47.9686 11.6814C47.9686 17.5516 47.0443 18.7316 45.8303 18.7316H45.0853V4.45428ZM45.9268 37.0796H45.0853V21.2094H45.8027C47.3202 21.2094 48.2722 22.6549 48.2722 29.1445C48.2722 35.6932 47.3616 37.0796 45.9268 37.0796ZM78.7337 15.1622V12.7729H76.6781V3.9528L74.6639 4.80826V12.7729H73.6706V15.1622H74.6639V39.646H76.6781V15.1622H78.7337ZM80.8583 8.0236C81.4101 8.0236 81.8792 6.99115 81.8792 5.84071C81.8792 4.66077 81.4101 3.65782 80.8583 3.65782C80.3064 3.65782 79.8374 4.63127 79.8374 5.84071C79.8236 6.99115 80.3064 8.0236 80.8583 8.0236ZM81.8516 12.7729L79.8512 13.5988V28.4956H79.8374V39.646H81.8378L81.8516 12.7729ZM88.584 3.9528H89.4808C89.4808 1.85841 88.6806 0 87.2458 0C85.2454 0 84.1693 3.45133 84.1693 8.82006V12.7729H82.9967V15.1622H84.1555V39.646H86.1559V15.1622H87.7011V12.7729H86.087C86.0594 11.2094 85.9076 9.11504 85.9076 7.10914C85.9076 4.39528 86.2939 1.74041 87.4252 1.74041C87.4252 1.74041 88.4047 1.74041 88.584 3.9528ZM96.972 2.50737V39.6165H99V1.68142L96.972 2.50737ZM27.4264 38.3481C27.4264 38.3481 26.4193 38.3481 25.7295 35.9587L25.1087 37.1681C25.6467 39.056 26.5711 39.941 27.6196 39.941C29.5924 39.941 30.9306 37.5516 30.9306 34.0708C30.9306 28.7316 28.1576 24.3658 27.0539 20.2655C26.778 19.2035 26.6125 18.1121 26.6125 17.1091C26.6125 15.2802 27.1505 13.9528 28.13 13.9528C28.13 13.9528 29.2337 13.8348 29.9235 16.2242L30.5443 15.0147C30.0063 13.1268 29.0819 12.2419 28.0334 12.2419H27.9369C25.7847 12.2419 24.7776 15.0737 24.7776 18.4071C24.7776 25.2212 28.944 29.3805 28.944 34.9263C28.944 37.4926 28.2542 38.3776 27.454 38.3776L27.4264 38.3481ZM38.2701 24.3658C38.1045 15.8997 36.7111 12.2124 34.8625 12.2124C32.8344 12.2124 31.4135 16.4897 31.4135 26.0177V26.1357C31.4135 35.7817 33.0138 39.941 34.959 39.941C34.959 39.941 35.166 39.9705 35.4005 39.941C36.449 39.882 37.3733 39.056 37.9114 37.1681L37.2906 35.9587C36.9319 37.0206 36.518 37.4041 35.8558 37.5221C35.4557 37.5811 35.3729 37.5221 35.3729 37.5221C34.3934 37.5221 33.6484 35.5752 33.4829 29.0265L33.4691 28.1416L38.2701 24.3658ZM34.8349 13.8643C35.6764 13.8643 36.1317 16.1357 36.2145 23.5398L33.4829 25.6932V24.3658C33.5242 16.0472 34.0071 13.8643 34.8349 13.8643ZM58.0673 24.3658C57.9018 15.8997 56.5084 12.2124 54.6597 12.2124C52.6317 12.2124 51.2107 16.4897 51.2107 26.0177V26.1357C51.2107 35.7817 52.811 39.941 54.7563 39.941C54.7563 39.941 54.9632 39.9705 55.1977 39.941C56.2462 39.882 57.1706 39.056 57.7086 37.1681L57.0878 35.9587C56.7291 37.0206 56.3152 37.4041 55.653 37.5221C55.2529 37.5811 55.1702 37.5221 55.1702 37.5221C54.1906 37.5221 53.4457 35.5752 53.2801 29.0265L53.2663 28.1416L58.0673 24.3658ZM54.6321 13.8643C55.4737 13.8643 55.9289 16.1357 56.0117 23.5398L53.2801 25.6932V24.3658C53.3353 16.0472 53.8043 13.8643 54.6321 13.8643ZM21.8804 37.6991C22.0874 39.292 22.6806 39.7345 23.2186 39.7345C23.7291 39.7345 24.2533 39.233 24.4603 38.7906V37.0206C23.9912 37.5811 23.6325 37.2861 23.6325 36.1357V12.7729L21.6321 13.5693V35.9882C21.3286 37.1091 20.8319 37.7581 20.3215 37.7581C19.7834 37.7581 19.342 37.1091 19.342 35.0442V12.8024L17.3416 13.6578V34.7198C17.3416 37.7581 18.0589 40 19.6317 40C20.3905 40 21.3148 39.292 21.8528 37.7286L21.8804 37.6991ZM70.7872 37.6991C70.9941 39.292 71.5874 39.7345 72.1254 39.7345C72.6359 39.7345 73.1601 39.233 73.3671 38.7906V37.0206C72.898 37.5811 72.5393 37.2861 72.5393 36.1357V12.7729L70.5389 13.5693V35.9882C70.2354 37.1091 69.7387 37.7581 69.2283 37.7581C68.6902 37.7581 68.2487 37.1091 68.2487 35.0442V12.8024L66.2483 13.6578V34.7198C66.2483 37.7581 66.9657 40 68.5385 40C69.2972 40 70.2216 39.292 70.7596 37.7286L70.7872 37.6991ZM93.385 37.6991C93.592 39.292 94.1852 39.7345 94.7232 39.7345C95.2337 39.7345 95.7579 39.233 95.9649 38.7906V37.0206C95.4958 37.5811 95.1371 37.2861 95.1371 36.1357V12.7729L93.1367 13.5693V35.9882C92.8332 37.1091 92.3365 37.7581 91.8261 37.7581C91.288 37.7581 90.8466 37.1091 90.8466 35.0442V12.8024L88.8462 13.6578V34.7198C88.8462 37.7581 89.5635 40 91.1363 40C91.8951 40 92.8194 39.292 93.3574 37.7286L93.385 37.6991ZM64.8687 36.1357L64.8549 35.9587V19.823C64.8549 14.4838 63.903 12.2124 61.8474 12.2124H61.5991C60.5506 12.2124 59.6676 13.0678 59.1296 14.9558L59.7504 16.1652C59.7504 16.1652 60.4264 14.0413 61.3645 14.1003C62.1923 14.1298 62.8545 14.7198 62.8545 18.3776V22.5959C60.2609 23.8643 58.3846 26.4897 58.3846 32.7434C58.3846 38.1416 59.7918 39.9705 60.9783 39.9705C61.6681 39.9705 62.5372 39.292 63.1304 37.9351C63.365 39.3805 63.9306 39.764 64.4548 39.764C64.9791 39.764 65.4895 39.2625 65.6965 38.8201V37.0501C65.2412 37.5811 64.8687 37.2861 64.8687 36.1357ZM62.8545 28.4366L62.8407 34.3953V36.2242C62.6614 36.9911 62.1785 37.8466 61.6543 37.8466C61.0334 37.8466 60.4264 36.6962 60.4264 32.2419C60.4264 27.1976 61.199 25.3687 62.8683 24.2478L62.8545 28.4366Z"
                  fill="#1B2937"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 mt-12 mb-12">
          <div className="py-16 xl:px-20 lg:px-12 sm:px-6 px-4 container mx-auto">
            <div className="text-center md:text-left lg:text-left xl:text-left 2xl:text-left grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
              <div className="sm:ml-0 ml-8 flex flex-col">
                <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-white text-2xl font-bold">
                  Information
                </h2>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  About
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Store Locator
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Virtual Tour
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Blog
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Payments
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Shipping
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Authorized Dealers
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Careers
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Terms of Offers for Sale
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Terms of Use
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="sm:ml-0 ml-8 flex flex-col">
                <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-white  text-2xl font-bold">
                  Contact Info
                </h2>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  111-111-1111
                </a>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 dark:text-white cursor-pointer"
                >
                  complaint@myfurniture.com
                </a>
              </div>
              <div className="flex flex-col ">
                <h2 className="text-base font-semibold leading-4 text-gray-800 dark:text-white  text-2xl font-bold">
                  Follow Us
                </h2>
                <div className="flex gap-5 mt-4">
                  <div className="cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.75 10.053C18.75 5.22095 14.832 1.30298 10 1.30298C5.16797 1.30298 1.25 5.22095 1.25 10.053C1.25 14.4202 4.44922 18.0401 8.63281 18.6971V12.5831H6.41055V10.053H8.63281V8.12524C8.63281 5.93267 9.93945 4.72056 11.9379 4.72056C12.8953 4.72056 13.8969 4.89165 13.8969 4.89165V7.04517H12.793C11.7066 7.04517 11.3668 7.71938 11.3668 8.41235V10.053H13.7934L13.4059 12.5831H11.3672V18.6979C15.5508 18.0413 18.75 14.4213 18.75 10.053Z"
                        fill="#242424"
                      />
                    </svg>
                  </div>
                  <div className="cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6457 2.7082C14.6118 2.71109 15.5375 3.09616 16.2207 3.77931C16.9038 4.46246 17.2889 5.38818 17.2918 6.3543V13.6457C17.2889 14.6118 16.9038 15.5375 16.2207 16.2207C15.5375 16.9038 14.6118 17.2889 13.6457 17.2918H6.3543C5.38818 17.2889 4.46246 16.9038 3.77931 16.2207C3.09616 15.5375 2.71109 14.6118 2.7082 13.6457V6.3543C2.71109 5.38818 3.09616 4.46246 3.77931 3.77931C4.46246 3.09616 5.38818 2.71109 6.3543 2.7082H13.6457ZM13.6457 1.25H6.3543C3.54687 1.25 1.25 3.54687 1.25 6.3543V13.6457C1.25 16.4531 3.54687 18.75 6.3543 18.75H13.6457C16.4531 18.75 18.75 16.4531 18.75 13.6457V6.3543C18.75 3.54687 16.4531 1.25 13.6457 1.25Z"
                        fill="#242424"
                      />
                      <path
                        d="M14.7395 6.35425C14.5232 6.35425 14.3117 6.2901 14.1318 6.16992C13.952 6.04973 13.8118 5.87891 13.729 5.67906C13.6462 5.4792 13.6246 5.25928 13.6668 5.04712C13.709 4.83495 13.8131 4.64006 13.9661 4.4871C14.1191 4.33414 14.314 4.22997 14.5261 4.18776C14.7383 4.14556 14.9582 4.16722 15.1581 4.25001C15.3579 4.33279 15.5287 4.47298 15.6489 4.65284C15.7691 4.83271 15.8333 5.04417 15.8333 5.2605C15.8336 5.40422 15.8055 5.54658 15.7506 5.67942C15.6958 5.81226 15.6152 5.93296 15.5136 6.03458C15.412 6.13621 15.2913 6.21676 15.1584 6.27162C15.0256 6.32647 14.8832 6.35455 14.7395 6.35425Z"
                        fill="#242424"
                      />
                      <path
                        d="M10 7.0832C10.5769 7.0832 11.1408 7.25427 11.6205 7.57477C12.1001 7.89527 12.474 8.35082 12.6948 8.88379C12.9155 9.41677 12.9733 10.0032 12.8607 10.569C12.7482 11.1348 12.4704 11.6546 12.0625 12.0625C11.6546 12.4704 11.1348 12.7482 10.569 12.8608C10.0032 12.9733 9.41676 12.9155 8.88379 12.6948C8.35081 12.474 7.89527 12.1002 7.57477 11.6205C7.25427 11.1408 7.0832 10.5769 7.0832 10C7.08403 9.22667 7.3916 8.48525 7.93843 7.93843C8.48525 7.3916 9.22667 7.08403 10 7.0832ZM10 5.625C9.1347 5.625 8.28884 5.88159 7.56938 6.36232C6.84992 6.84305 6.28916 7.52633 5.95803 8.32576C5.6269 9.12519 5.54026 10.0049 5.70907 10.8535C5.87788 11.7022 6.29455 12.4817 6.90641 13.0936C7.51826 13.7054 8.29781 14.1221 9.14648 14.2909C9.99514 14.4597 10.8748 14.3731 11.6742 14.042C12.4737 13.7108 13.1569 13.1501 13.6377 12.4306C14.1184 11.7112 14.375 10.8653 14.375 10C14.375 8.83968 13.9141 7.72688 13.0936 6.90641C12.2731 6.08594 11.1603 5.625 10 5.625Z"
                        fill="#242424"
                      />
                    </svg>
                  </div>
                  <div className="cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.375 4.27735C18.6717 4.58296 17.9275 4.7843 17.166 4.87501C17.9663 4.4064 18.5681 3.66195 18.8586 2.78126C18.102 3.22368 17.2756 3.5341 16.4148 3.69923C16.0524 3.31935 15.6165 3.01716 15.1336 2.811C14.6507 2.60484 14.1309 2.49904 13.6059 2.50001C11.4801 2.50001 9.75977 4.19532 9.75977 6.28516C9.75826 6.57585 9.79157 6.86568 9.85898 7.14844C8.33464 7.07698 6.842 6.68812 5.47656 6.00675C4.11111 5.32537 2.90292 4.36647 1.9293 3.19141C1.58772 3.76724 1.40708 4.42424 1.40625 5.09376C1.40625 6.40626 2.09102 7.56641 3.125 8.2461C2.51239 8.23156 1.91234 8.06942 1.37578 7.77344V7.82032C1.37578 9.65626 2.70391 11.1836 4.46172 11.5313C4.13117 11.6194 3.79053 11.664 3.44844 11.6641C3.20569 11.6645 2.9635 11.6409 2.72539 11.5938C3.21406 13.0977 4.63633 14.1914 6.32109 14.2227C4.9521 15.2777 3.27134 15.848 1.54297 15.8438C1.23618 15.8433 0.929674 15.825 0.625 15.7891C2.38327 16.9118 4.42713 17.5057 6.51328 17.5C13.5977 17.5 17.468 11.7305 17.468 6.72657C17.468 6.56251 17.4637 6.39844 17.4559 6.23829C18.2071 5.70394 18.857 5.03989 19.375 4.27735Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="font-medium text-2xl text-gray-800 pb-8">
                  Newsletter
                </p>
                <p className="text-gray-600 pb-10">
                  Subscribe to our newsletter to get the latest news and product
                  updates directly to your email. Just a second to subscribe
                  today
                </p>
                <div className="relative ">
                  <input
                    className="bg-white focus:drop-shadow-lg appearance-none block pb-6  w-full text-gray-700  rounded-br-xl  rounded w-full h-16 p-5 mb-3 leading-tight focus:outline-none rounded-xl bg-white"
                    id="grid-Email"
                    type="text"
                    placeholder="Email"
                  />
                  <button className="absolute cursor-pointer hover:bg-gray-700 mb-1 right-0 bg-gray-800 text-white py-5 px-4 top-0 rounded-tr-xl rounded-br-xl">
                    GO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
