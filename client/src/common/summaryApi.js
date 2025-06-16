export const baseURL = import.meta.env.VITE_API_URL

const summaryApi = {
    register : {
        url : '/api/user/register',
        method : 'post'
    },
    login : {
        url : '/api/user/login',
        method : 'post'
    },
    logout : {
        url : '/api/user/logout',
        method : 'get'
    },
    forgotPassword : {
        url : '/api/user/forgot-password',
        method : 'put'
    },
    verifyForgotPasswordOTP : {
        url : '/api/user/verify-forgot-password-otp',
        method : 'put'
    },
    resetPassword : {
        url: "/api/user/reset-password",
        method: "put"
    },
    refreshToken : {
        url: "/api/user/refresh-token",
        method: "post"
    },
    getUserDetails : {
        url: "/api/user/get-user-details",
        method: "get"
    },
    updateAvatar : {
        url: "/api/user/upload-avatar",
        method: "put"
    },
    updateUserDetails : {
        url: "/api/user/update-user",
        method: "put"
    },
    uploadImage : {
        url: "/api/file/upload-image",
        method: "post"
    },
    deleteImage : {
        url: "/api/file/delete-image",
        method: "post"
    },
    addCategory : {
        url: "/api/category/add-category",
        method: "post"
    },
    getCategory : {
        url: "/api/category/get-category",
        method: "get"
    },
    updateCategory : {
        url: "/api/category/update-category",
        method: "put"
    },
    deleteCategory : {
        url: "/api/category/delete-category",
        method: "put"
    },
    addSubCategory : {
        url: "/api/sub-category/add-sub-category",
        method: "post"
    },
    getSubCategory : {
        url: "/api/sub-category/get-sub-category",
        method: "get"
    },
    updateSubCategory : {
        url: "/api/sub-category/update-sub-category",
        method: "put"
    },
    deleteSubCategory : {
        url: "/api/sub-category/delete-sub-category",
        method: "put"
    },
    addProduct: {
        url: "/api/product/add-product",
        method: "post"
    },
    getProduct: {
        url: "/api/product/get-product",
        method: "post"
    },
    updateProduct: {
        url: "/api/product/update-product/:id",
        method: "put"
    },
    deleteProduct: {
        url: "/api/product/delete-product/:id",
        method: "delete"
    },
    getProductByCategory: {
        url: "/api/product/get-products-by-category",
        method: "post"
    },
    getProductByCategoryAndSubCategory: {
        url: "/api/product/get-products-by-category-and-sub-category",
        method: "post"
    },
    getProductById: {
        url: "/api/product/get-product-by-id",
        method: "post"
    },
    searchProduct: {
        url: "/api/product/search-product",
        method: "post"
    },
    addToCart: {
        url: "/api/cart/create-cart",
        method: "post"
    },
    getCartItems: {
        url: "/api/cart/get-cart-items",
        method: "get"
    },
    updateCartItemQuantity: {
        url: "/api/cart/update-cart-item-quantity",
        method: "put"
    },
    deleteItemFromCart: {
        url: "/api/cart/delete-cart-item",
        method: "delete"
    },
    clearTheCart: {
        url: "/api/cart/empty-the-cart",
        method: "delete"
    },
    addNewAddress : {
        url: "/api/address/add-new-address",
        method: "post"
    },
    getAddress : {
        url: "/api/address/get-address",
        method: "get"
    },
    updateAddress: {
        url: "/api/address/update-address",
        method: "put"
    },
    deleteAddress: {
        url: "/api/address/delete-address",
        method: "delete"
    },
    setDefaultAddress: {
        url: "/api/address/set-default-address",
        method: "put"
    },
    createCODOrder: {
        url: "/api/order/add-cash-on-delivery-order",
        method: "post"
    },
    addStripPaymentOrder: {
        url: "/api/order/add-stripe-payment-checkout",
        method: "post"
    },
    addRazorpayPaymentOrder: {
        url: "/api/order/add-razor-payment-checkout",
        method: "post"
    },
    verifyRazorPaymentOrder: {
        url: "/api/order/razorpay-payment-verification",
        method: "post"
    },
    getOrders: {
        url: "/api/order/get-orders",
        method: "get"
    },
    getAllOrdersAdmin: {
        url: "/api/order/get-all-orders",
        method: "get"
    },
    updateOrderStatusAdmin: {
        url: "/api/order/update-order-status-admin",
        method: "put"
    },
    getOrderDetailsByOrderId: {
        url: "/api/order/get-order-details-by-id",
        method: "post"
    },
}

export default summaryApi