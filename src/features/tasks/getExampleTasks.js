export const getExampleTasks = async () => {
const response = await fetch("")

if(!response.ok){
    new Error(response.statusText);
}

return await response.json();
};