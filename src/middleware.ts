import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", '/api/cart','/female', "/male", '/kids', '/allproducts', '/productDetail', '/payment/success', '/testingPayment','/payment/fail'],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};