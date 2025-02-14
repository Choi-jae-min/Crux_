import React from 'react';
import {createClient} from "@/utils/supabase/server";

const Page = async () => {
    const supabase = await createClient();
    const { data: instruments } = await supabase.from("instruments").select();
    return <pre className={'text-txt-01'}>{JSON.stringify(instruments, null, 2)}</pre>
};

export default Page;