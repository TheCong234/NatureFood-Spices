import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavoriteItem = ({ image, altText, description, ratingText, price, oldPrice, discount }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{ width: "36%", position: "relative", overflow: "hidden" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={image}
                alt={altText}
                style={{
                    width: "100%",
                    borderRadius: "4px",
                    height: "420px",
                    transition: "all 0.3s ease",
                    boxShadow: isHovered ? "0px 4px 8px rgba(0.2, 0.2, 0.2, 0.2)" : "none",
                }}
            />

            <FavoriteBorderIcon
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    color: "black",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "5px",
                    fontSize: "32px",
                    cursor: "pointer",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                }}
            />
            <p className="text-xl">{description}</p>

            <span>
                <StarIcon style={{ fontSize: 20 }} />
                {ratingText}
            </span>

            <p>
                <span className="text-xl" style={{ color: "green", fontWeight: "bold" }}>
                    {price}đ
                </span>
                <span style={{ textDecoration: "line-through", color: "#777", marginLeft: "8px" }}>{oldPrice}đ</span>
                <span style={{ color: "red", marginLeft: "8px" }}>{discount} off</span>
            </p>
            <p style={{ color: "green" }}>Miễn phí vận chuyển</p>
            <button
                style={{
                    fontWeight: "600",
                    border: "2px solid #545454",
                    borderRadius: "25px",
                    padding: "10px 20px",
                    backgroundColor: "white",
                    color: "black",
                    transition: "all 0.2s ease",
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                }}
                onMouseEnter={(e) => {
                    e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                    e.target.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)";
                }}
            >
                Thêm vào giỏ hàng
            </button>
        </div>
    );
};

const FavoriteItems = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold pb-10">Danh mục yêu thích</h2>
            <div style={{ display: "flex", gap: "20px" }}>
                <FavoriteItem
                    image="/src/assets/images/footer.jpg"
                    altText="Live Edge Solid Walnut Wood Dining Table"
                    description="Bài viết này là để thử cái bài viết này thôi"
                    ratingText="Duong dep traoi"
                    price="8,287,533"
                    oldPrice="11,352,785"
                    discount="27%"
                />
                <FavoriteItem
                    image="/src/assets/images/logo.jpg"
                    altText="Home The Story of Who We Are A Collection"
                    description="Bài viết này là để thử cái bài viết này thôi"
                    ratingText="Duong dep traoi"
                    price="1,531,830"
                    oldPrice="2,188,329"
                    discount="30%"
                />
            </div>
        </div>
    );
};

export default FavoriteItems;
