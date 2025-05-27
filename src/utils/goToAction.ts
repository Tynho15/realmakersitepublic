interface GoToAction {
  document: Document;
  dest: string;
}

export const scrollToId = (props: GoToAction) => {
  const element = props.document.getElementById(props.dest);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};