export default function ReviewDetails({params}:{params: {courseid: string, reviewid: string}}){

    return(
        <>
            <h1>Review details: {params.reviewid} of course: {params.courseid}</h1>
            <h2>Review title: {params.courseid}</h2>
            <h2>Review Content: ABC</h2>
        </>
    );
}