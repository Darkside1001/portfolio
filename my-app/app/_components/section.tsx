import { PropsWithChildren } from 'react';
import cn from 'classnames';


export const section = (props:PropsWithChildren<{className?:string}> )=>{
    return (
        <section className={cn("max-w-3xl px4 m-auto", props.className)}>

        {props.children}
    </section>
    );
};
