export default function ReviewList({params}: {params: {courseid: string}}){

    return(
        <>
            <h1>Course Review List of {params.courseid}</h1>
            <h2>Review ID: C1234</h2>
            <h2>Review ID: C1235</h2>
            <h2>Review ID: C1236</h2>
        </>
    );
}