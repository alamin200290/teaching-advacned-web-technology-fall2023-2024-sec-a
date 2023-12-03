export default function CourseDetails({params}:{params: {courseid: string}}){

    return(
        <>
            <h1>Course Name: Web Tech</h1>
            <h2>Course ID: {params.courseid}</h2>
            <h2>Course Teacher: ABC</h2>
        </>
    );
}