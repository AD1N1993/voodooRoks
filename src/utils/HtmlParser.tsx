const isNode = (node: HTMLElement | ChildNode) => node.nodeName !== "#text";

const addBlankToLinks = (string: string) =>
  string.replace(/<a/g, '<a target="_blank"');

const getDefaultElement = (node: HTMLElement, key:string ) =>{
  return (
    <div key={key}>
      <span dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
    </div>
  )
}

const getParsedElement = (node: HTMLElement, key: string) => {
  const tag = node.tagName.toLowerCase();
  switch (tag) {
    case "h1": {
        return (
            <h1 key={key} style={{color: 'red'}} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
        );
    }
    case "h2": {
      return (
        <h2 key={key} style={{color: 'yellow'}} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
      );
    }
    case "h3": {
      return (
        <h3 key={key} style={{color: 'green'}} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
      );
    }
    case "h4": {
      return (
        <h4 key={key} style={{color: 'black'}} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
      );
    }
    case "h5": {
      return (
        <h5 key={key} style={{color: 'beige'}} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
      );
    }
    case "h6": {
      return (
        <h6 key={key} style={{color: 'bisque'}} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
      );
    }
    case "p":
   {
      return (
          <p key={key} style={{color: 'blue'}} dangerouslySetInnerHTML={{ __html: node.outerHTML }} />
      );
    }

    default:
      return getDefaultElement(node, key);
  }
}


export const parseHtml = (string: string) => {
  const parsedHtml: JSX.Element[] = [];
  const html = new DOMParser().parseFromString(
    addBlankToLinks(string),
    "text/html",
  ).body;

  html!.childNodes.forEach((node, index) => {
    const key = index.toString();
    try {
      isNode(node) &&
      parsedHtml.push(getParsedElement(node as HTMLElement, key));

    } catch (error) {
      console.error(`Ошибка парсинга: ${error}`);
      parsedHtml.push(getDefaultElement(node as HTMLElement, key));
    }
  });
  return <>{parsedHtml}</>;
};

export function saveStateToLS<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}
