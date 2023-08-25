import React from 'react'
"use client"

const ErrorWrapper = ({ error }: { error: Error }) => {
    return (
        <div>Something wrong.... {error.message}</div>
    )
}
export default ErrorWrapper