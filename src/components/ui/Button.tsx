import { type ComponentPropsWithoutRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type NavigationProps = {
    textonly?: boolean;
} & LinkProps;

type ButtonProps = {
    textonly?: boolean;
} & ComponentPropsWithoutRef<'button'>;

export default function Button(props: NavigationProps | ButtonProps){
    const className = `${props.textonly ? 'button--text-only' : ''}`;

    if ('to' in props){
        return <Link className={`button ${className}`} {...props}>{props.children}</Link>;
    }
    return <button className={`button ${className}`} {...props}>{props.children}</button>;
}