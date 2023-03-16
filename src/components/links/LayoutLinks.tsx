import Link from 'next/link'
import classNames from "classnames";




export function HeaderInternalLink(props: {
    text: string;
    linkTo: string;
    testId: string;
}): JSX.Element {
    return (
        <div className={classNames("text-sm text-primary-500 font-semibold hover:text-gray-200")}>
            <Link data-testid={props.testId} href={props.linkTo}>
                {props.text}
            </Link>
        </div>
    );
}



