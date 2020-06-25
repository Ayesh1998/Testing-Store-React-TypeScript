import React from "react";
import SingleCategory from "../single-category/single-category-component";
import { useSelector } from "react-redux";
import "./all-categories-withproducts-styles.css";
import { StoreStates } from "../../types";

export interface AllCategoriesWithproductProps {}

const AllCategoriesWithproduct: React.SFC<AllCategoriesWithproductProps> = () => {
  const products = useSelector((state: StoreStates) => state.products);
  const stateall = useSelector((state: StoreStates) => state);
  console.log(stateall);

  const grocery = products.filter((item: any) => item.category === "Grocery");
  const Fruits = products.filter((item: any) => item.category === "Fruits");
  const Vegetables = products.filter(
    (item: any) => item.category === "Vegetables"
  );
  const Addtoyourorder = products.filter(
    (item: any) => item.category === "Add to your order"
  );
  const FoodPastries = products.filter(
    (item: any) => item.category === "Food & Pastries"
  );
  const Cakes = products.filter((item: any) => item.category === "Cakes");
  const Electronics = products.filter(
    (item: any) => item.category === "Electronics"
  );

  return (
    <div>
      <SingleCategory category="Grocery" products={grocery} />
      <div className="row">
        <div className="col-lg-8 col-12">
          <img
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              margin: "2% 0px",
              cursor: "pointer",
            }}
            src="https://store.spencehub.com/static/media/pay%20with%20credit%20card.01a7bb56.png"
            alt=""
          />
        </div>
      </div>
      <SingleCategory category="Fruits" products={Fruits} />
      <SingleCategory category="Vegetables" products={Vegetables} />
      <div className="row">
        <div className="col-lg-6">
          <img
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              margin: "2% 0px",
              cursor: "pointer",
            }}
            src="https://store.spencehub.com/static/media/discount.aab1f2ce.png"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <img
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              margin: "2% 0px",
              cursor: "pointer",
            }}
            src="https://store.spencehub.com/static/media/contact.b6b13fb0.png"
            alt=""
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 col-12">Pharmacy</div>
        <div className="col-lg-12 col-12">
          <section className="container">
            <div className="drophere">
              <input type="file" />
              <p
                style={{
                  fontSize: "17px",
                  // fontWeight: "500",

                  marginTop: "10px",
                }}
              >
                Drag 'n' drop order / prescription here, or click to select
                files
              </p>
            </div>
            <aside className="thumbsContainer"></aside>
          </section>
        </div>
      </div>

      <SingleCategory category="Add to your order" products={Addtoyourorder} />
      <div className="row">
        <div className="col-4"></div>
        <div className="col-lg-8 col-12">
          <img
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              margin: "2% 0px",
              cursor: "pointer",
            }}
            src=" https://store.spencehub.com/static/media/contact.b6b13fb0.png"
            alt=""
          />
        </div>
      </div>

      <SingleCategory category="Food & Pastries" products={FoodPastries} />
      <SingleCategory category="Cakes" products={Cakes} />
      <div className="row">
        <div className="col-5"></div>
        <div className="col-lg-6 col-12">
          <img
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              margin: "2% 0px",
              cursor: "pointer",
            }}
            src="https://store.spencehub.com/static/media/pay%20with%20credit%20card.01a7bb56.png"
            alt=""
          />
        </div>
      </div>
      <SingleCategory category="Electronics" products={Electronics} />

      <div className="row">
        <div className="col-lg-6">
          <img
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              margin: "2% 0px",
              cursor: "pointer",
            }}
            src="https://store.spencehub.com/static/media/discount.aab1f2ce.png"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <img
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              margin: "2% 0px",
              cursor: "pointer",
            }}
            src="https://store.spencehub.com/static/media/contact.b6b13fb0.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesWithproduct;
