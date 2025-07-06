import { cn } from '@/lib/utils';
import React from 'react'

export default function DivWrapper({children, className}: {children?: React.ReactNode; className?: string}) {
  return (
    <div className={cn('max-w-screen-xl', className)}>
        {children}
    </div>
  )
}
