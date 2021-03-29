//adicionar busca binária futuramente
export function findElementWithID (array: Findable[], id: string): number {
    let idFounded = -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            idFounded=i;
        }        
    }

    return idFounded;
}