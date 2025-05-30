import React from 'react';

const Main = ({children}) => {
    return (
         <main class="container mx-auto px-4 md:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {children}
        </div>    
        </main>

    );
};

export default Main;