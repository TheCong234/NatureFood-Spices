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
