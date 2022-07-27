import { NextResponse } from "next/server";
export default function middleware(req,ev){
    const {pathname} =req.nextUrl;
    console.log(pathname)
    if(pathname === '/package/#chatbot' || pathname === '/about/#chatbot'){
        return NextResponse.redirect('/#chatbot')
    }
    if(pathname === '/about/#dashboard' || pathname === '/package/#dashboard'){
        return NextResponse.redirect('/#dashboard')
    }
    return NextResponse.next()
}


