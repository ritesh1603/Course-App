import React from "react";
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

import {useSession, useSupabaseClient} from "@supabase/auth-helpers-react";
// const supabase = createClient(
//   '<INSERT PROJECT URL>',
//   ' <INSERT PROJECT ANON API KEY>'
// )

const Layout = ({children}) => {
    const supabase = useSupabaseClient();
    const session = useSession();
    return (
    <div className="flex flex-col min-h-screen">
        <nav className="bg-gray-600">{}</nav>
      {!session ? (
        <Auth
            supabaseClient={supabase}
            appearance={{theme: ThemeSupa}}
            providers={['google','facebook','twitter']}
            theme = "dark"
        />
      ):(
        <main className="flex-grow">{children}</main>
      )}  
    </div>
    );
};
export default Layout;