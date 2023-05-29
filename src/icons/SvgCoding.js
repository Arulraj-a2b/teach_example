/* eslint max-len: ["error", { "code": 2000 }] */
const defaultProps = {
  width: 68,
  height: 69,
  fill: "#FFB400",
};

const SvgCoding = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill={fill}
        d="M63.219 7.438H4.78a3.723 3.723 0 0 0-3.718 3.718v37.188a3.723 3.723 0 0 0 3.718 3.718h21.274L24.78 55.25h-5.655a1.062 1.062 0 0 0-1.063 1.063v2.124h-6.375a1.062 1.062 0 1 0 0 2.126h44.626a1.062 1.062 0 1 0 0-2.126h-6.376v-2.124a1.062 1.062 0 0 0-1.062-1.063H43.22l-1.275-3.188h21.274a3.723 3.723 0 0 0 3.718-3.718V11.156a3.723 3.723 0 0 0-3.718-3.719ZM47.812 57.374v1.063H20.189v-1.063h27.625ZM27.07 55.25l1.275-3.188h11.31l1.275 3.188H27.07Zm37.742-6.906a1.595 1.595 0 0 1-1.593 1.593H4.78a1.595 1.595 0 0 1-1.593-1.593v-2.657h61.624v2.657Zm0-4.782H3.188V11.157A1.595 1.595 0 0 1 4.78 9.562H63.22a1.595 1.595 0 0 1 1.593 1.594v32.407Z"
      />
      <path
        fill={fill}
        d="M29.167 34.888a1.063 1.063 0 0 0 1.471-.305l8.368-12.75a1.063 1.063 0 0 0-1.777-1.166l-8.367 12.75a1.062 1.062 0 0 0 .305 1.471ZM40.757 34.816a1.062 1.062 0 0 0 1.497-.136l5.312-6.375a1.063 1.063 0 0 0 0-1.36l-5.312-6.375a1.062 1.062 0 1 0-1.633 1.36l4.746 5.695-4.746 5.695a1.063 1.063 0 0 0 .136 1.496ZM25.746 34.68a1.063 1.063 0 1 0 1.633-1.36l-4.746-5.695 4.746-5.695a1.062 1.062 0 1 0-1.633-1.36l-5.312 6.375a1.062 1.062 0 0 0 0 1.36l5.312 6.375Z"
      />
    </svg>
  );
};
SvgCoding.defaultProps = defaultProps;

export default SvgCoding;