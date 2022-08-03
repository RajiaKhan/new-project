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
      <div className="justify-center 2xl:container mx-auto">
        <div className="  ">
          <div className="flex flex-wrap justify-between items-center px-20">
            <Image
              src="/Group.png"
              width={56}
              height={72}
              className="my-auto"
            />
            <button
              className="ml-auto block xl:hidden"
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
                    Bed Room
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
                    isList4 ? "  flex-col " : "hidden"
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
                    isList ? "  flex-col " : "hidden"
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
                    isList2 ? "  flex-col " : "hidden"
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
                    isList3 ? "  flex-col " : "hidden"
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
                <Image src="/Group 6.png" width={20} height={20} />
              </div>
              <div className="flex pl-8">
                <div>
                  <Image
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
          <div className="flex px-20  py-40 justify-between">
            <div className=" xl:w-5/12 2xl:w-full ">
              <div>
                <p className="text-4xl  font-semibold text-gray-800">
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
                    <p className="font-medium text-xl pr-4 text-gray-600">
                      Vendor:
                    </p>
                    <p className="text-2xl font-medium text-gray-800">Luxe</p>
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
                      onClick={() => setCount1(count1 - 1)}
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

        <div className=" bg-pink-100 flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-12 pt-20 px-4 lg:px-20 xl:px-20 2xl:px-20  container justify-content-center mx-auto">
          <div className="w-11/12 mt-12">
            <h1 className=" text-gray-900 px-15 w-6/5 text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-6xl font-bold text-gray-800">
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
        <div className="container justify-content-center mx-auto">
          <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row pt-12 pt-12 ">
            <div className="w-8/12 ">
              <div className="font-bold text-4xl text-center mt-40">
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
              <div className="">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mx-auto">
                  <div className="rounded-full mt-12 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-1 pt-12 bg-rose-50 w-52 h-52 mx-auto  outline-offset-4 outline-2 outline-dashed outline-rose-400 text-center justify-content-center">
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
                  <div className="rounded-full  mt-12 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-1 pt-12 bg-yellow-100 text-center w-52 h-52 mx-auto  outline-offset-4 outline-2 outline-dashed outline-orange-400 text-center justify-content-center">
                    <Image
                      className="mx-auto "
                      src="/Group 298.png"
                      width={18}
                      height={18}
                    />
                    <h4 className="text-md text-gray-800 font-bold ">
                      CUSTOMER SUPPORT
                    </h4>
                    <h4 className="text-md text-gray-700 font-semibold  ">
                      Call us anytime:111-111-1111
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-12 mb-12">
            <h2 className="text-4xl font-bold mb-12">New Arrivals</h2>
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
              <h3 className="text-gray-800 mt-3  lg:mt-32 xl:mt-32 2xl:mt-32 pl-3 lg:pl-24 xl:pl-24 2xl:pl-24 font-bold w-11/12 text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
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
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
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
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Beds
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}     width={325}  justify-center relative "
                >
                  <div
                    className="  relative 
                      height={642} flex"
                  >
                    <Image
                      src="/Rectangle 18.png"
                      width={325}
                      height={642}
                      className="rounded-xl mx-auto"
                    />
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide5(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" px-10 bg-red-50 relative  rounded-xl">
                <div className="mb-8">
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Sofas
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}     width={325}  justify-center relative "
                >
                  <div
                    className="  relative 
                      height={642} flex"
                  >
                    <Image
                      src="/Rectangle 30.png"
                      width={325}
                      height={237}
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide6(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300"
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
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Dining
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}     width={325}  justify-center relative "
                >
                  <div
                    className="  relative 
                      height={642} flex"
                  >
                    <Image
                      src="/Rectangle 23.png"
                      width={326}
                      height={237}
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide4(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" px-10 bg-fuchsia-50 relative  rounded-xl">
                <div className="mb-8">
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Closet
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}     width={325}  justify-center relative "
                >
                  <div
                    className="  relative 
                      height={642} flex"
                  >
                    <Image
                      src="/Rectangle 32.png"
                      width={326}
                      height={642}
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide2(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300"
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
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Chairs
                  </p>
                </div>

                <div
                  className=" group 
                    height={642}     width={325}  justify-center relative "
                >
                  <div
                    className="  relative 
                      height={642} flex"
                  >
                    <Image
                      src="/Rectangle 31.png"
                      width={325}
                      height={642}
                      className="rounded-xl "
                    />
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className=" px-10 bg-red-50 relative  rounded-xl">
                <div className="mb-8">
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Tables
                  </p>
                </div>
                <div
                  className=" group 
                    height={642}     width={325}  justify-center relative "
                >
                  <div
                    className="  relative 
                      height={642} flex"
                  >
                    <Image
                      src="/Rectangle 33.png"
                      width={325}
                      height={237}
                      className="rounded-xl"
                    />
                    <div className="absolute top-0 group-hover:bg-black bottom-0 left-0 right-0  w-full h-full  rounded-xl group-hover:opacity-60 "></div>
                  </div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide3(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300"
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
              <h1 className="text-4xl font-bold mt-1 lg:mt-28 xl:mt-28 2xl:mt-28 text-gray-800 w-9/12">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-lg mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <button className=" text-white rounded-xl  w-36 h-12 bg-gray-800 text-xl mt-4 hover:bg-gray-900 focus:bg-gray-900">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-24 mt-12">
            <div className="w-11/12">
              <h1 className="text-4xl text-gray-800 font-bold mt-12 lg:mt-28 xl:mt-28 2xl:mt-28 w-9/12">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <button className=" text-white rounded-xl  w-36 h-12 bg-gray-800 text-xl mt-4 hover:bg-gray-900 focus:bg-gray-900">
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
              <Image src="/CFI logo.png" width={120} height={70} />
            </div>
            <div className="w-11/12">
              <Image src="/U.G logo.png" width={120} height={70} />
            </div>
            <div className="w-11/12">
              <Image src="/Group 344.png" width={120} height={70} />
            </div>
            <div className="w-11/12">
              <Image src="/Furniture Today Logo.png" width={120} height={70} />
            </div>
            <div className="w-11/12">
              <Image src="/vector (1).png" width={120} height={70} />
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 mb-12">
          <div className="py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
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
                  <div className="">
                    <Image src="/vector3.png" width={18} height={18} />
                  </div>
                  <div className="">
                    <Image src="/logo-instagram.png" width={18} height={18} />
                  </div>
                  <div className="">
                    <Image src="/vector (2).png" width={18} height={18} />
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
                <div className="relative">
                  <input
                    className="focus:drop-shadow-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-white rounded py-5 px-4 mb-3 leading-tight focus:outline-none rounded-xl bg-white"
                    id="grid-Email"
                    type="text"
                    placeholder="Email"
                  />
                  <button className="absolute cursor-pointer hover:bg-gray-700  right-0 bg-gray-800 text-white py-5 px-4 top-0 rounded-tr-xl rounded-br-xl">
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
