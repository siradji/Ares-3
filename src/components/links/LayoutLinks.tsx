import Link from 'next/link'
import classNames from "classnames";




export function HeaderInternalLink(props: {
    text: string;
    sectionName: string;
    testId: string;
}): JSX.Element {
    return (
        <div className={classNames("text-sm text-primary-500 font-semibold hover:text-gray-200")}>
            <Link data-testid={props.testId} href={props.sectionName}>
                {props.text}
            </Link>
        </div>
    );
}



