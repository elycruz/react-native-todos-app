/**
 * middleware.ts
 *
 * Ensures we have valid user sessions for our application routes, additionally creates initial 'user'/'UserData' struct.
 */
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {getIronSession} from "iron-session/edge";
import {v4 as uuidv4} from 'uuid';
import {UserData} from "./types";

export const sessionConfig = {
  cookieName: process.env.SESSION_COOKIE_NAME,
  password: process.env.SESSION_PASSWORD,
  ttl: process?.env?.SESSION_COOKIE_TTL ?? 3600,
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: false, //process.env.NODE_ENV === "production",
  },
};

const newSessionData = (): {user: UserData} => ({
  user: {
    id: -1,
    visitCount: 0
  } as UserData,
});

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next(),
    session = await getIronSession(req, res, sessionConfig),
    newNextUrl = req.nextUrl.clone(),
    {protocol, host} = newNextUrl;

  let {user} = session;
  const isEmptyUser = !user;

  const newData = newSessionData();

  if (isEmptyUser) {
    user =
      session.user =
        newData.user;

    user.id = uuidv4();
    session.csrfToken = uuidv4();
  }

  // user.visitCount += 1;
  await session.save();

  if (req.nextUrl.pathname !== '/' && isEmptyUser) {
    const redirectUrl = `${protocol}//${host}/`;
    console.log(`Redirecting to ${redirectUrl}, from middleware`);
    return NextResponse.redirect(redirectUrl, 307);
  }

  return res;
};

export const config = {
  matcher: ['/api/:path*']
};
