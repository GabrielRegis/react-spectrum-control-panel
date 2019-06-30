export const createStyles = (styles: string[] | React.CSSProperties[]) => {
    return styles.join(' ')
}

export const inline = (styles: React.CSSProperties[]) => {
    const finalStyle = {}
    return styles.reduce((previous, next) => {
        return {
            ...previous,
            ...next
        }
    })
}