import React from "react";

const col1Row1 = `cat-items group relative md:col-span-1 md:row-span-1 z-0`;
const col2Row1 = `cat-items group relative md:col-span-2 md:row-span-1 z-0`;
const col2Row3 = `cat-items group relative md:col-span-2 md:row-span-3 md:h-[755px] z-0`;

function CategoryItem({ id, title, count, resultColArray, resultRowArray }) {


  const buttonClass = () => {
    if (resultColArray.includes(id) && resultRowArray.includes(id))
      return col2Row3;
    if (resultColArray.includes(id)) return col2Row1;
    return col1Row1;
  };

  return (
    <button
      className={buttonClass()}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/img/categories/cat" + id + ".jpg"
        })`,
      }}
    >
      <div className="group absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden rounded-3xl bg-fixed transition delay-150 ease-in-out group-hover:bg-black/50" />
      <div className="group-hover cat-btn z-10 mx-6 bg-white px-4">
        <h2 className="text-center">{title}</h2>
        <span className="cat-btn-items">{count} items</span>
        <img
          src={process.env.PUBLIC_URL + "/img/arrows/arrowRight.svg"}
          width="9"
          height="14"
          alt="right Arrow"
        />
      </div>
    </button>
  );
}

export default CategoryItem;
