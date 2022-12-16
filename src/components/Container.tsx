import { PropsWithChildren } from 'react';
import classNames from 'classnames';

/**
 * Default site container that wraps around entire site.
 *
 * @return {JSX.Element}
 * @param {PropsWithChildren<{className: string}>} props with classname and children
 */
export function Container(
    props: PropsWithChildren<{ className?: string }>
): JSX.Element {
    return (
        <div
            className={classNames(
                'container mx-auto px-4 sm:px-5 lg:px-20',
                props.className
            )}
            data-testid="site_container"
        >
            {props.children}
        </div>
    );
}
