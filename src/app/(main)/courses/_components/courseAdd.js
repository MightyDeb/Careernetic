
import { addCourse } from '../../../../../actions/courses';

const courseAdd = async({course}) => {
  const res= await addCourse({course})
}

export default courseAdd