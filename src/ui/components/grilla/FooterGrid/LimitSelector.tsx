import styled from "styled-components"
import { useGridContext } from "../context"


const LimitWrapper = styled.div<{ $active: boolean }>`
cursor: pointer;
min-width: 40px;
font-family: 'Work Sans',sans-serif;
padding: 5px;
text-align: center;
border-radius: 20px;
transition: background-color, color .2s ease-in-out;

${({ $active }) => $active ? `
    background-color: var(--main_color);
    color: white !important;
    cursor: default;
    pointer-events: none;
    `: `
    :hover {
        transition: box-shadow .2s ease-in;
        box-shadow: 2px 3px 6px var(--border_shadow_sm);
    }
`}
`

const limits = [5, 10, 20, 50, 100, 200]

export const LimitSelector = () => {
    // hooks
    const changeLimit = useGridContext().changeLimit
    const gridLimit = useGridContext().pagination?.limit ?? 20


    return (
        <div>
            {limits.map(limit => (
                <LimitWrapper key={limit} $active={limit == gridLimit} onClick={() => changeLimit(limit)}>
                    {limit}
                </LimitWrapper>
            ))}
        </div>
    )
}
