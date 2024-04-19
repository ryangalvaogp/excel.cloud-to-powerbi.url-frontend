import { CAlert, CButton, CToast, CToastBody, CToastHeader, CToaster } from "@coreui/react"

import { useRef, useState } from "react"

export type ContentToastProps = {
    title: string,
    type: "success" | "alert" | "error",
    text?: string
}

export function ContentToast({ title, type, text }: ContentToastProps) {
    return (
        <CToast>
            <CToastHeader closeButton>
                <svg
                    className="rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                >
                    {type === "success" && <rect width="100%" height="100%" fill=" #2eb85c" />}
                    {type === "alert" && <rect width="100%" height="100%" fill=" #f9b115" />}
                    {type === "error" && <rect width="100%" height="100%" fill=" #e55353" />}

                </svg>
                <div className="fw-bold me-auto">{title}</div>
                {/* <small>7 min ago</small> */}
            </CToastHeader>
            {text && <CToastBody>{text}</CToastBody>}

        </CToast>
    )
}


export const exampleToast = (
    <CToast>
        <CToastHeader closeButton>
            <svg
                className="rounded me-2"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
            >
                <rect width="100%" height="100%" fill="#007aff"></rect>
            </svg>
            <div className="fw-bold me-auto">CoreUI for React.js</div>
            <small>7 min ago</small>
        </CToastHeader>
        <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
)