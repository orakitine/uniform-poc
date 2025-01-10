const ErrorPropertyCallout = ({ title }: { title?: string }) => (
  <div className="callout">
    <span className="callout-title">{title}</span>
    <span>One or more parameters on the Algolia component is not configured properly.</span>
  </div>
);

export default ErrorPropertyCallout;
