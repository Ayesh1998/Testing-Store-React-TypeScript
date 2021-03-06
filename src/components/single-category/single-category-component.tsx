import React from "react";
import SingleCategoryItem from "../single-category-item/single-category-item-component";
import { item, categories } from "../../types";

export interface SingleCategoryProps {
  category: any;
  products: item[];
}

const SingleCategory: React.SFC<SingleCategoryProps> = ({
  category,
  products,
}) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <p
            style={{
              fontSize: "17px",
              // fontWeight: "500",

              marginTop: "10px",
            }}
          >
            {" "}
            {category}
          </p>
        </div>
      </div>
      <div className="row">
        {products.map((item: any) => (
          <SingleCategoryItem
            key={item.id}
            name={item.name}
            url={item.url}
            pricepre={item.pricepre}
            pricenow={item.pricenow}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
