export const parser = (string: string) => {
    const html = new DOMParser().parseFromString(string, "text/html").body;
    const arrTagsP = [];
    const tagsP = html.querySelectorAll("*");
    for(let i = 0; i < tagsP.length; i++){
        arrTagsP.push(tagsP[i].outerHTML);
    }
    return arrTagsP;
}

export function saveStateToLS<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}