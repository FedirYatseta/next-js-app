"use client"
import React from 'react'


const ErrorWrapper = ({ error }: { error: Error }) => {
    return (
        <div>Something wrong.... {error.message}</div>
    )
}
export default ErrorWrapper