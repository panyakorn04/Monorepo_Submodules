import * as React from 'react';

export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
    // if (false) {
    //   React.useEffect(() => {
    //     console.log('asd');
    //   }, []);
    // }

    return (
        <button className='px-10' {...props}>
            {children}
        </button>
    );
}

Button.displayName = 'Button';
