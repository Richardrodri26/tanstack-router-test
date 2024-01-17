
/**
 * utility than set status tag style
 * @param {string} value
 * @returns 
 */
const TagStateComponent = ({ value }: { value: string }) => {
    const { status, tag } = tagStatus[value] ?? { status: "blank", tag: "---" }

    return (
        <p
            className="text-center w-fit rounded-3xl py-1 px-2 text-[clamp(14px, 2vw, 16px)]"
            style={{ backgroundColor: `var(--${status}_bg_color)`, color: `var(--${status}_color)` }}
        >
            {tag}
        </p>
    )
}

export default TagStateComponent

/*---------------------------------------- config ----------------------------------------*/

const tagStatus: Record<string, { status: string, tag: string }> = {
    "Pagado": { status: "success", tag: "PAGADO" },
    "Por Pagar": { status: "error", tag: "POR PAGAR" },
    "ACTIVO": { status: "success", tag: "ACTIVOS" },
    "ANULADO": { status: "error", tag: "ANULADOS" },

    "COMPLETADO": { status: "success", tag: "COMPLETADO" },
    "BORRADOR": { status: "error", tag: "BORRADOR" }
}