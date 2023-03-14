import Link from 'next/link'
import classNames from 'classnames'
export function GenericButton (props: {label: string, onPress: () => void}): JSX.Element {
    return (
        <button onClick={props.onPress}>
            {props.label}
        </button>
    )
}

export function GenericButtonLink (props: {linkTo: string, label: string, style?: string}): JSX.Element {
    return (
        <Link 
            className={classNames('bg-primary-500 text-white rounded-2xl py-3 text-center font-semibold px-6 hover:bg-primary-500/25', props.style)}
            href={props.linkTo}
        >
            {props.label}
        </Link>
    )
}