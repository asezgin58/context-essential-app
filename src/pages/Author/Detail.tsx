import {FC} from "react";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {IAuthor} from "./type";

/**
 * Component File Description
 */
const Detail: FC<any> = () => {
    const {push} = useHistory();
    const author: IAuthor = {
        name: 'Aykut',
        surname: 'Sezgin',
        age: 26,
        job: 'Front End Developer'
    };

    return (
        <>
            <h1>Author</h1>
            <div className="row mb-4">
                <div className="col">
                    {author && <>
                        <div><strong>Name : </strong>{author.name}</div>
                        <div><strong>Surname : </strong>{author.surname}</div>
                        <div><strong>Age : </strong>{author.age}</div>
                        <div><strong>Job : </strong>{author.job}</div>
                    </>}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button variant="contained" color="primary" onClick={() => push('/author/edit')}>
                        Edit
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Detail;