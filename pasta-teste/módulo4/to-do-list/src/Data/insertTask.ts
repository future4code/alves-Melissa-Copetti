import connection from "../connection";

export default async function insertTask(
    id:string,
    title:string,
    description:string,
    status:string,
    limit_date:string,
    crator_user_id:string
) {
    await connection.insert({
        id,
        title,
        description,
        status,
        limit_date,
        crator_user_id
    }).into("todolist_Task")
}