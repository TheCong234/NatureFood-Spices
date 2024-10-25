import { useLocation } from "react-router-dom";

export function formatPrice(price) {
    return price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        .trim();
}

export function convertDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0"); // Lấy ngày và thêm 0 nếu cần
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Lấy tháng (0-11) và thêm 1
    const year = date.getUTCFullYear(); // Lấy năm

    return `${day}-${month}-${year}`; // Trả về định dạng mới
}

export const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export function countCartTotal(itemsCart) {
    let sum = 0;

    for (let item of itemsCart) {
        const quantity = item.quantity;
        const price = item.storeProduct.productId.salePrice * (1 - item.storeProduct.discountPrice);
        sum += quantity * price;
    }
    return sum;
}

export function convertTimeDuration(date) {
    const now = new Date();
    const createdAt = new Date(date);
    const diffInMs = now - createdAt;

    // Chuyển đổi sang các đơn vị khác
    const diffInMinutes = Math.floor(diffInMs / 1000 / 60);
    const diffInHours = Math.floor(diffInMs / 1000 / 60 / 60);
    const diffInDays = Math.floor(diffInMs / 1000 / 60 / 60 / 24);
    const diffInMonths = Math.floor(diffInDays / 30); // Xấp xỉ
    const diffInYears = Math.floor(diffInDays / 365); // Xấp xỉ

    // Kiểm tra điều kiện để hiển thị theo đơn vị thời gian phù hợp
    let timeDifference;

    if (diffInMinutes < 60) {
        timeDifference = `${diffInMinutes} phút trước`;
    } else if (diffInHours < 24) {
        timeDifference = `${diffInHours} giờ trước`;
    } else if (diffInDays < 30) {
        timeDifference = `${diffInDays} ngày trước`;
    } else if (diffInMonths < 12) {
        timeDifference = `${diffInMonths} tháng trước`;
    } else {
        timeDifference = `${diffInYears} năm trước`;
    }
    return timeDifference;
}
