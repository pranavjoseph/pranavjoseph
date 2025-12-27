function ProcessFlow({ steps = [] }) {
  return (
    <div className="process-flow">
      {steps.map((step, idx, arr) => (
        <div key={step.label} className="process-step">
          {idx !== 0 && <div className="process-connector" />}
          <div className={`process-dot process-${step.color}`}>{idx + 1}</div>
          <span className="process-label">{step.label}</span>
          {idx !== arr.length - 1 && <div className="process-connector" />}
        </div>
      ))}
    </div>
  );
}

export default ProcessFlow;
