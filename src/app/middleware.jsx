// middleware server: req, res
// server cannot read localstorage
// just read at headers request
// browser giao tiep server qua headers
import { NextResponse } from "next/server";

const isLogin = true;
export function middleware(request) {
    console.log('middleware is running')
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith('/admin') && !isLogin) {
        const urlLogin = `${request.nextUrl.origin}/login`;
        return NextResponse.redirect(urlLogin);
    }
    return NextResponse.redirect(new URL('/', request.url))

    const response = NextResponse.next();

    // request
    // in4 request header
    const userAgent = request.headers.get('user-agent')
    const method = request.method;
    const url = request.url;
    const accept = request.headers.get("accept");
    const searchParams = request.nextUrl.searchParams;
    const cookie = request.headers.get('cookie');
    const userName = request.cookies.get("username");
    const email = request.cookies.get("email");
    // response.headers.set("set-cookie", "phone=024718;path='/';httpOnly")
    response.cookies.set({
        name: "phone",
        value: "0123",
        path: '/',
        httpOnly: true,
        maxAge: 86400
    });
    response.cookies.delete("phone");

    // response.headers.set('x-api-key', 'ahihi');
    // response.headers.set("set-cookie", 'cookie');
    return response;
}
export const config = {
    matcher: [
        '/admin/:path*',
        '/login/:path*',
        '/register/:path*'
    ],
}