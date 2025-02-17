import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import {Session} from "@supabase/auth-js";

export async function createClient() {
    const cookieStore = await cookies()

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_API_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name as any, value as any, options as any)
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    )
}
export function isSessionValid(session : Session | null) {
    if (!session || !session.access_token || !session.expires_at) {
        return false;
    }

    const currentTime = Math.floor(Date.now() / 1000); // 현재 시간 (초 단위)
    return session.expires_at > currentTime; // 만료 시간이 현재 시간보다 크면 유효
}

