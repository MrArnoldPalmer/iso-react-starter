export default function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce((prev, current) => {
    return current ? (current.needs || []).concat(prev) : prev;
  }, []);
  
  return Promise.all(needs.map(need => dispatch(need(params))));
}
