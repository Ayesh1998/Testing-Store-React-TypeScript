import React from "react";
import DemoProductsAllCategories from "../demo-products-all-categories/demo-products-all-categoriesall-select-component";
import AllCategoriesWithproduct from "../all-categories-withproducts/all-categories-withproducts-component";

export interface HomepageBottomCategoriesAllProps {}

const HomepageBottomCategoriesAll: React.SFC<HomepageBottomCategoriesAllProps> = () => {
  return (
    <div className="container HomepageBottomCategoriesAllTop">
      <div className="HomepageBottomCategoriesAllHeader">
        <h2 style={{ textAlign: "center", margin: "3%", color: "#28a745" }}>
          Demo Products
        </h2>
        <DemoProductsAllCategories />
        <AllCategoriesWithproduct />
      </div>
    </div>
  );
};

export default HomepageBottomCategoriesAll;
