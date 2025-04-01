
import React from 'react'

import Link from 'next/link';
import { Button } from '@/components/ui/button';


const Courses = async () => {
  
  
  return (
    <div>
      NO COURSE
      <Link href="/courses">
        <Button>Buy One</Button>
      </Link>
    </div>
  )
}

export default Courses